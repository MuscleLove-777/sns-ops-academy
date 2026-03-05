/* ============================================
   SNS運用アカデミー - Main Application
   ============================================ */
const App = {
    levels: [], allModules: [], currentModuleId: null, progress: {}, quizResults: {},

    init() {
        this.levels = [LEVEL1_DATA, LEVEL2_DATA, LEVEL3_DATA, LEVEL4_DATA, LEVEL5_DATA, LEVEL6_DATA];
        this.allModules = [];
        this.levels.forEach(level => { level.modules.forEach(mod => { this.allModules.push({ ...mod, levelId: level.id, levelTitle: level.title }); }); });
        this.loadProgress(); this.buildSidebar(); this.showDashboard();
        if (localStorage.getItem('sns-ops-darkmode') === 'true') document.documentElement.setAttribute('data-theme', 'dark');
        this.updateGlobalProgress();
        document.addEventListener('click', (e) => { const h = e.target.closest('.collapsible-header'); if (h) h.parentElement.classList.toggle('open'); });
    },

    loadProgress() {
        try { const s = localStorage.getItem('sns-ops-progress'); if (s) this.progress = JSON.parse(s);
            const sq = localStorage.getItem('sns-ops-quiz-results'); if (sq) this.quizResults = JSON.parse(sq);
        } catch (e) { this.progress = {}; this.quizResults = {}; }
    },

    saveProgress() { localStorage.setItem('sns-ops-progress', JSON.stringify(this.progress)); localStorage.setItem('sns-ops-quiz-results', JSON.stringify(this.quizResults)); },
    completeModule(id) { this.progress[id] = { completed: true, completedAt: new Date().toISOString() }; this.saveProgress(); this.buildSidebar(); this.updateGlobalProgress(); },
    saveQuizResult(id, result) { this.quizResults[id] = { ...result, attemptedAt: new Date().toISOString() }; this.saveProgress(); },
    isModuleCompleted(id) { return this.progress[id] && this.progress[id].completed; },

    updateGlobalProgress() {
        const total = this.allModules.length, completed = this.allModules.filter(m => this.isModuleCompleted(m.id)).length;
        const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
        const fill = document.getElementById('globalProgressFill'), text = document.getElementById('globalProgressText');
        if (fill) fill.style.width = pct + '%'; if (text) text.textContent = `${pct}% 完了 (${completed}/${total})`;
    },

    buildSidebar() {
        const nav = document.getElementById('sidebarNav'); let html = '';
        this.levels.forEach(level => {
            const mods = level.modules, done = mods.filter(m => this.isModuleCompleted(m.id)).length;
            const isCurrent = this.currentModuleId && mods.some(m => m.id === this.currentModuleId);
            html += `<div class="sidebar-level"><div class="sidebar-level-header ${isCurrent ? 'expanded' : ''}" onclick="App.toggleLevel(this)">
                <span>${level.icon} Lv${level.id}: ${level.title}</span>
                <span style="display:flex;align-items:center;gap:8px;"><span style="font-size:0.7rem;opacity:0.7;">${done}/${mods.length}</span><span class="chevron">▶</span></span>
                </div><div class="sidebar-modules ${isCurrent ? 'expanded' : ''}">`;
            mods.forEach(mod => {
                html += `<div class="sidebar-item ${this.isModuleCompleted(mod.id)?'completed':''} ${this.currentModuleId===mod.id?'active':''}" onclick="App.showModule(${mod.id})">
                    <span class="status-dot"></span><span>${mod.title}</span></div>`;
            });
            html += '</div></div>';
        });
        nav.innerHTML = html;
    },

    toggleLevel(h) { h.classList.toggle('expanded'); h.nextElementSibling.classList.toggle('expanded'); },
    toggleSidebar() { document.getElementById('sidebar').classList.toggle('open'); },

    showDashboard() {
        this.currentModuleId = null; this.showView('dashboardView'); this.buildSidebar();
        const c = document.getElementById('dashboardView');
        const total = this.allModules.length, done = this.allModules.filter(m => this.isModuleCompleted(m.id)).length;
        const quizzes = Object.keys(this.quizResults).length;
        const avg = quizzes > 0 ? Math.round(Object.values(this.quizResults).reduce((s, r) => s + r.percentage, 0) / quizzes) : 0;
        let html = `<div class="fade-in"><div class="dashboard-hero"><h2>SNS運用アカデミーへようこそ</h2>
            <p>主要SNSの運用戦略を基礎から実践まで体系的に学べる総合学習プラットフォームです。エンゲージメント向上、コンテンツ戦略、分析手法を完全マスターしましょう。</p></div>
            <div class="dashboard-grid">
                <div class="stat-card"><div class="stat-value">${done}/${total}</div><div class="stat-label">モジュール完了</div></div>
                <div class="stat-card"><div class="stat-value">${quizzes}</div><div class="stat-label">クイズ受験数</div></div>
                <div class="stat-card"><div class="stat-value">${avg}%</div><div class="stat-label">平均スコア</div></div>
                <div class="stat-card"><div class="stat-value">${this.getEstimatedTime()}</div><div class="stat-label">残り学習時間</div></div>
            </div><h2 style="margin-bottom:20px;font-size:1.3rem;">学習コース</h2><div class="dashboard-grid">`;
        this.levels.forEach(level => {
            const mods = level.modules, d = mods.filter(m => this.isModuleCompleted(m.id)).length, pct = Math.round((d / mods.length) * 100);
            html += `<div class="level-card level-${level.id}" onclick="App.showModule(${mods[0].id})">
                <div class="level-card-header"><div class="level-icon">${level.icon}</div><div><h3>Level ${level.id}: ${level.title}</h3>
                <div class="level-desc">${level.description} (${mods.length}モジュール)</div></div></div>
                <div class="level-progress"><div class="level-progress-bar"><div class="level-progress-fill" style="width:${pct}%"></div></div>
                <div class="level-progress-text">${d}/${mods.length} 完了 (${pct}%)</div></div></div>`;
        });
        html += '</div></div>'; c.innerHTML = html;
    },

    getEstimatedTime() {
        let t = 0; this.allModules.forEach(m => { if (!this.isModuleCompleted(m.id)) { const match = m.duration.match(/(\d+)/); if (match) t += parseInt(match[1]); } });
        if (t === 0) return '完了！'; const h = Math.floor(t / 60), mins = t % 60; return h > 0 ? `約${h}時間${mins}分` : `約${mins}分`;
    },

    showModule(moduleId) {
        const mod = this.allModules.find(m => m.id === moduleId); if (!mod) return;
        this.currentModuleId = moduleId; this.showView('moduleView'); this.buildSidebar();
        document.getElementById('sidebar').classList.remove('open');
        const c = document.getElementById('moduleView'), level = this.levels.find(l => l.id === mod.levelId);
        const idx = this.allModules.findIndex(m => m.id === moduleId);
        const prev = idx > 0 ? this.allModules[idx - 1] : null, next = idx < this.allModules.length - 1 ? this.allModules[idx + 1] : null;
        let html = `<div class="fade-in"><div class="module-header">
            <div class="module-breadcrumb"><a onclick="App.showDashboard()">ダッシュボード</a> / <a onclick="App.showModule(${level.modules[0].id})">Level ${level.id}: ${level.title}</a> / ${mod.title}</div>
            <h1 class="module-title">${mod.title}</h1>
            <div class="module-meta"><span>⏱ ${mod.duration}</span><span>${this.isModuleCompleted(moduleId) ? '✅ 完了済み' : '📖 未完了'}</span></div></div>
            <div class="module-body">${mod.content}</div>
            <div class="module-nav"><div>${prev ? `<button class="btn btn-outline" onclick="App.showModule(${prev.id})">← ${prev.title}</button>` : ''}</div>
            <div style="display:flex;gap:12px;">${mod.quiz && mod.quiz.length > 0
                ? `<button class="btn btn-primary btn-lg" onclick="App.startQuiz(${moduleId})">理解度チェック (${mod.quiz.length}問)</button>`
                : `<button class="btn btn-success btn-lg" onclick="App.completeModule(${moduleId}); App.goToNextModule(${moduleId});">完了して次へ</button>`}</div>
            <div>${next ? `<button class="btn btn-outline" onclick="App.showModule(${next.id})">${next.title} →</button>` : ''}</div></div></div>`;
        c.innerHTML = html; document.querySelector('.content').scrollTop = 0;
    },

    startQuiz(moduleId) { const mod = this.allModules.find(m => m.id === moduleId); if (!mod || !mod.quiz) return; this.showView('quizView'); Quiz.start(moduleId, mod.quiz); },
    goToNextModule(id) { const idx = this.allModules.findIndex(m => m.id === id); if (idx < this.allModules.length - 1) this.showModule(this.allModules[idx + 1].id); else { this.showDashboard(); this.showCompletionMessage(); } },

    showCompletionMessage() {
        document.getElementById('modalContent').innerHTML = `<h2>🎓 おめでとうございます！</h2>
            <div class="score-circle pass" style="font-size:2.5rem;">🏆</div>
            <p>全モジュール完了！<br>SNS運用の基礎から実践までの知識を習得しました。<br>実務に活かしていきましょう！</p>
            <div class="modal-actions"><button class="btn btn-primary" onclick="App.closeModal()">ダッシュボードへ</button></div>`;
        document.getElementById('modalOverlay').style.display = 'flex';
    },

    closeModal() { document.getElementById('modalOverlay').style.display = 'none'; },
    showView(viewId) { ['dashboardView','moduleView','quizView','referenceView'].forEach(id => { document.getElementById(id).style.display = id === viewId ? 'block' : 'none'; }); },
    toggleDarkMode() { const d = document.documentElement.getAttribute('data-theme') === 'dark'; if (d) { document.documentElement.removeAttribute('data-theme'); localStorage.setItem('sns-ops-darkmode','false'); } else { document.documentElement.setAttribute('data-theme','dark'); localStorage.setItem('sns-ops-darkmode','true'); } },
    resetProgress() { if (confirm('全ての学習進捗をリセットしますか？')) { this.progress = {}; this.quizResults = {}; localStorage.removeItem('sns-ops-progress'); localStorage.removeItem('sns-ops-quiz-results'); this.buildSidebar(); this.updateGlobalProgress(); this.showDashboard(); } },

    showReference() {
        this.showView('referenceView'); this.buildSidebar();
        const c = document.getElementById('referenceView');
        const sections = [
            { category: '基本指標', terms: [
                { name: 'エンゲージメント率', desc: '投稿に対するユーザーの反応（いいね・コメント・シェア等）の割合。SNS運用の最重要KPIの一つ' },
                { name: 'リーチ', desc: '投稿が表示されたユニークユーザー数。コンテンツの到達範囲を示す指標' },
                { name: 'インプレッション', desc: '投稿が表示された総回数。同一ユーザーの複数回表示も含む' },
                { name: 'フォロワー', desc: 'アカウントをフォローしているユーザー数。潜在的なリーチの基盤となる' },
                { name: 'UGC', desc: 'User Generated Content（ユーザー生成コンテンツ）。ユーザーが自発的に作成したブランド関連コンテンツ' },
                { name: 'SOV', desc: 'Share of Voice（シェア・オブ・ボイス）。市場全体の会話量における自社ブランドの占有率' },
            ]},
            { category: 'プラットフォーム', terms: [
                { name: 'X', desc: '旧Twitter。リアルタイム性の高いテキスト中心のSNS。トレンドやニュース拡散に強い' },
                { name: 'Instagram', desc: 'Meta社の画像・動画中心SNS。フィード、ストーリーズ、リールの3形式でビジュアル訴求に優れる' },
                { name: 'TikTok', desc: 'ByteDance社のショート動画SNS。アルゴリズムによる拡散力が強く、若年層へのリーチに最適' },
                { name: 'YouTube', desc: 'Google社の動画プラットフォーム。長尺動画とショートの両方に対応し、検索流入も期待できる' },
                { name: 'LINE', desc: '日本最大のメッセージングアプリ。公式アカウントを通じた1対1コミュニケーションが特徴' },
                { name: 'Facebook', desc: 'Meta社のSNS。ビジネス層やシニア層の利用が多く、グループ機能やイベント機能が充実' },
            ]},
            { category: 'コンテンツ', terms: [
                { name: 'フィード投稿', desc: 'タイムラインに恒久的に残る通常の投稿形式。ブランドの世界観を構築する基盤' },
                { name: 'ストーリーズ', desc: '24時間で消える短時間表示コンテンツ。日常的な情報発信やリアルタイムな交流に活用' },
                { name: 'リール', desc: 'Instagramの短尺動画機能。最大90秒で音楽やエフェクトを活用した動画を作成・共有' },
                { name: 'ショート', desc: 'YouTubeの短尺動画機能（YouTube Shorts）。最大60秒の縦型動画で新規層へのリーチに有効' },
                { name: 'ライブ配信', desc: 'リアルタイムで視聴者と双方向コミュニケーションができる動画配信機能' },
                { name: 'カルーセル', desc: '複数枚の画像や動画をスワイプで閲覧できる投稿形式。情報量の多いコンテンツに最適' },
            ]},
            { category: '分析', terms: [
                { name: 'インサイト', desc: '各SNSプラットフォームが提供する公式分析機能。フォロワー属性や投稿パフォーマンスを確認' },
                { name: 'アナリティクス', desc: 'データを収集・分析して運用改善に活かすプロセス全般。各種ツールを活用して実施' },
                { name: 'センチメント分析', desc: 'SNS上の投稿内容からユーザーの感情（ポジティブ/ネガティブ/ニュートラル）を分析する手法' },
                { name: 'ソーシャルリスニング', desc: 'SNS上のブランド言及や業界トレンドを収集・分析し、マーケティング施策に反映する手法' },
            ]},
            { category: 'マーケティング', terms: [
                { name: 'インフルエンサー', desc: 'SNS上で多くのフォロワーを持ち、購買行動に影響力を持つ個人。マイクロ〜メガまで規模は様々' },
                { name: 'UGC', desc: 'User Generated Content。ユーザーが自発的に作成・投稿するブランド関連コンテンツ。信頼性が高い' },
                { name: 'バイラル', desc: 'コンテンツがSNS上で急速かつ広範囲に拡散される現象。口コミ的な拡散メカニズム' },
                { name: 'ハッシュタグ', desc: '「#」記号を付けたキーワード。投稿の発見可能性を高め、キャンペーン等のテーマ集約に活用' },
                { name: 'トレンド', desc: 'SNS上で話題になっているテーマやキーワード。トレンドに乗った投稿で露出拡大を狙う' },
            ]},
            { category: '運用管理', terms: [
                { name: 'コンテンツカレンダー', desc: '投稿の日程・内容・担当者を一覧管理する計画表。計画的な運用の基盤ツール' },
                { name: '承認フロー', desc: '投稿前に上長やクライアントの承認を得るプロセス。ブランド毀損リスクの防止に重要' },
                { name: '危機管理', desc: 'SNS上での炎上やネガティブな反応に対する予防・対応の仕組み。初動対応が極めて重要' },
                { name: 'ブランドガイドライン', desc: 'SNS投稿におけるトーン・ビジュアル・表現ルールを定めた指針。一貫したブランド体験を担保' },
            ]}
        ];
        const colors = { '基本指標': '#8b5cf6', 'プラットフォーム': '#ec4899', 'コンテンツ': '#06b6d4', '分析': '#10b981', 'マーケティング': '#f59e0b', '運用管理': '#ef4444' };
        let html = `<div class="fade-in"><h1 style="font-size:1.6rem;margin-bottom:8px;">用語リファレンス</h1>
            <p style="color:var(--text-secondary);margin-bottom:24px;">SNS運用に関する重要用語の一覧です。</p>
            <div class="reference-search"><input type="text" id="refSearchInput" placeholder="用語名で検索..." oninput="App.filterReference()"></div>`;
        sections.forEach(s => {
            html += `<div class="ref-domain-section"><h2 style="font-size:1.2rem;margin:24px 0 12px;color:${colors[s.category] || '#333'}">${s.category}</h2><div style="display:grid;gap:8px;">`;
            s.terms.forEach(t => {
                html += `<div class="ref-var-row" data-var="${t.name}" style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:12px 16px;display:flex;align-items:center;gap:16px;border-left:4px solid ${colors[s.category] || '#333'}">
                    <div style="min-width:160px;font-weight:700;font-size:0.95rem;">${t.name}</div><div style="font-size:0.85rem;color:var(--text-secondary)">${t.desc}</div></div>`;
            });
            html += '</div></div>';
        });
        html += '</div>'; c.innerHTML = html;
    },

    filterReference() {
        const q = document.getElementById('refSearchInput').value.toLowerCase().trim();
        document.querySelectorAll('.ref-var-row').forEach(r => { r.style.display = (!q || r.getAttribute('data-var').toLowerCase().includes(q)) ? '' : 'none'; });
    }
};

document.addEventListener('DOMContentLoaded', () => { App.init(); });
