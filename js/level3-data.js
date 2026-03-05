/* ============================================
   Level 3: TikTok・YouTube運用
   ============================================ */
const LEVEL3_DATA = {
    id: 3,
    title: "TikTok・YouTube運用",
    icon: "🎥",
    description: "TikTokとYouTubeのアルゴリズムを理解し、動画コンテンツで成果を出す運用スキルを習得する",
    modules: [
        {
            id: 301,
            title: "TikTok運用の基本",
            duration: "15分",
            content: `
<h2>TikTokアルゴリズムの仕組み</h2>
<p>TikTokは他のSNSと異なり、<strong>フォロワー数に関係なく誰でもバズる可能性</strong>がある独自のアルゴリズムを持っています。投稿は「For Youページ（おすすめ）」を通じて段階的にテストされ、パフォーマンスに基づいて拡散されます。</p>

<div class="info-box formula">
<div class="info-box-title">TikTokアルゴリズムの主要指標</div>
<table>
<tr><th>指標</th><th>重要度</th><th>説明</th></tr>
<tr><td><strong>視聴完了率</strong></td><td>最重要</td><td>動画を最後まで視聴した割合。短い動画ほど高くなりやすい</td></tr>
<tr><td><strong>再視聴率</strong></td><td>非常に高い</td><td>同じ動画を繰り返し視聴した割合。ループ再生を誘発する構成が有利</td></tr>
<tr><td><strong>シェア率</strong></td><td>高い</td><td>動画がシェア（送信）された割合。「誰かに見せたい」と思わせる内容</td></tr>
<tr><td><strong>コメント率</strong></td><td>高い</td><td>コメント数/視聴数。議論や感想を促す動画が優位</td></tr>
<tr><td><strong>いいね率</strong></td><td>中程度</td><td>いいね数/視聴数。他の指標と比べると影響は中程度</td></tr>
</table>
</div>

<h2>For Youページの段階的拡散テスト</h2>
<p>TikTokのアルゴリズムは、新しい動画を<strong>段階的にテスト</strong>して拡散の可否を判断します。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>第1段階: 少数テスト（100〜300人）</strong>
投稿直後、フォロワー外を含む少数のユーザーに表示。ここでの視聴完了率・エンゲージメントが次のステップを決定。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>第2段階: 中規模テスト（1,000〜5,000人）</strong>
第1段階をクリアすると、より多くのユーザーに配信。引き続きパフォーマンスを計測。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>第3段階: 大規模配信（10,000人〜）</strong>
高いエンゲージメントを維持している場合、さらに広範囲に拡散。バズ動画はこの段階で数十万〜数百万再生に達する。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>再浮上の可能性</strong>
TikTokでは投稿から数日〜数週間後に再びFor Youに表示されることがある。良質なコンテンツは長期間にわたりリーチを獲得。
</div>
</div>
</div>

<h2>コンテンツ企画の4大フォーマット</h2>
<p>TikTokで成果を出すために活用すべき主要な動画フォーマットを理解しましょう。</p>

<div class="info-box tip">
<div class="info-box-title">4大コンテンツフォーマット</div>
<ul>
<li><strong>トレンド参加型:</strong> 流行中の音源・フィルター・フォーマットを活用。発見タブやFor Youに載りやすい</li>
<li><strong>チャレンジ型:</strong> ブランド独自のハッシュタグチャレンジを企画。ユーザー参加型でUGCを促進</li>
<li><strong>デュエット型:</strong> 他のユーザーの動画と並べて表示。反応動画やコラボレーションに最適</li>
<li><strong>ステッチ型:</strong> 他のユーザーの動画の一部を引用して新しい動画を作成。解説・補足・反論に活用</li>
</ul>
</div>

<h2>最適な動画尺とハッシュタグ戦略</h2>

<h3>動画尺の目安</h3>
<table>
<tr><th>動画タイプ</th><th>推奨尺</th><th>ポイント</th></tr>
<tr><td>トレンド参加</td><td>15〜30秒</td><td>短くテンポよく。視聴完了率を最大化</td></tr>
<tr><td>情報提供・教育</td><td>30〜60秒</td><td>価値ある情報を凝縮。保存されやすい</td></tr>
<tr><td>ストーリー・Vlog</td><td>60〜90秒</td><td>感情移入を促す構成が必要</td></tr>
<tr><td>深堀り解説</td><td>1〜3分</td><td>専門性の高い内容向け。維持率に注意</td></tr>
</table>

<h3>ハッシュタグ戦略</h3>
<p>TikTokでは<strong>3〜5個のハッシュタグ</strong>が最適とされています。</p>
<ul>
<li><strong>大規模タグ（1個）:</strong> #fyp #おすすめ など数十億再生のタグ</li>
<li><strong>中規模タグ（1〜2個）:</strong> ジャンル系タグ（例: #マーケティング #料理レシピ）</li>
<li><strong>小規模タグ（1〜2個）:</strong> ニッチなコミュニティ向けタグ</li>
</ul>

<div class="info-box warning">
<div class="info-box-title">注意</div>
ハッシュタグを10個以上つけるとスパム判定されるリスクがあります。また、コンテンツと無関係なタグを使うと、アルゴリズムがターゲットユーザーを正しく特定できなくなります。
</div>
            `,
            quiz: [
                {
                    id: "q301_1",
                    type: "choice",
                    question: "TikTokアルゴリズムで最も重要とされる指標はどれですか？",
                    options: ["いいね率", "コメント率", "視聴完了率", "フォロー率"],
                    answer: 2,
                    explanation: "TikTokでは視聴完了率が最重要指標とされています。動画を最後まで視聴した割合が高いほど、For Youページでの拡散が促進されます。"
                },
                {
                    id: "q301_2",
                    type: "choice",
                    question: "TikTokの段階的拡散テストの第1段階で表示されるユーザー数はおよそ何人ですか？",
                    options: ["10〜50人", "100〜300人", "1,000〜3,000人", "10,000人以上"],
                    answer: 1,
                    explanation: "第1段階では100〜300人程度の少数ユーザーに表示され、視聴完了率やエンゲージメントが計測されます。"
                },
                {
                    id: "q301_3",
                    type: "choice",
                    question: "他のユーザーの動画の一部を引用して新しい動画を作成する機能は何ですか？",
                    options: ["デュエット", "ステッチ", "リミックス", "コラボ"],
                    answer: 1,
                    explanation: "ステッチは他のユーザーの動画の一部を引用して新しい動画を作成する機能です。解説・補足・反論などに活用されます。"
                },
                {
                    id: "q301_4",
                    type: "choice",
                    question: "TikTokでの最適なハッシュタグ数はいくつとされていますか？",
                    options: ["1〜2個", "3〜5個", "8〜10個", "15個以上"],
                    answer: 1,
                    explanation: "TikTokでは3〜5個のハッシュタグが最適とされています。多すぎるとスパム判定のリスクがあります。"
                }
            ]
        },
        {
            id: 302,
            title: "TikTok運用の実践",
            duration: "15分",
            content: `
<h2>ビジネスアカウントの機能</h2>
<p>TikTokのビジネスアカウントは、企業やブランドが運用するために最適化された<strong>無料のアカウントタイプ</strong>です。</p>

<div class="info-box tip">
<div class="info-box-title">ビジネスアカウントの主な機能</div>
<ul>
<li><strong>アナリティクス:</strong> フォロワー属性、動画パフォーマンス、トレンド分析</li>
<li><strong>プロフィールリンク:</strong> Webサイトへの外部リンクを設置可能</li>
<li><strong>商用音楽ライブラリ:</strong> 著作権クリアな楽曲を使用可能</li>
<li><strong>自動返信メッセージ:</strong> DMの自動応答設定</li>
<li><strong>広告出稿:</strong> TikTok Ads Managerとの連携</li>
</ul>
</div>

<h2>TikTok LIVEの活用</h2>
<p>TikTok LIVEは<strong>フォロワー1,000人以上</strong>で利用可能なライブ配信機能です。リアルタイムのコミュニケーションにより、フォロワーとの関係構築に非常に効果的です。</p>

<h3>LIVE配信のベストプラクティス</h3>
<ul>
<li><strong>告知:</strong> 配信の24時間前に告知動画を投稿</li>
<li><strong>配信時間:</strong> 最低30分以上。理想は1〜2時間</li>
<li><strong>ゴールデンタイム:</strong> 平日20:00〜22:00、休日14:00〜16:00</li>
<li><strong>インタラクション:</strong> コメントに積極的に反応し、視聴者を名前で呼ぶ</li>
<li><strong>ギフティング:</strong> 視聴者からのギフト（投げ銭）は収益源となる</li>
</ul>

<h2>TikTok Shopの活用</h2>
<p>TikTok Shopはアプリ内で<strong>商品の閲覧・購入が完結</strong>するEC機能です。動画やLIVEから直接商品ページに遷移でき、購買までのフリクションを最小化します。</p>

<table>
<tr><th>機能</th><th>説明</th></tr>
<tr><td>ショーケース</td><td>プロフィールに商品一覧を表示</td></tr>
<tr><td>動画内商品タグ</td><td>投稿動画に商品リンクを埋め込み</td></tr>
<tr><td>LIVE Shopping</td><td>ライブ配信中にリアルタイムで商品を紹介・販売</td></tr>
<tr><td>アフィリエイト</td><td>クリエイターが商品を紹介して手数料を獲得</td></tr>
</table>

<h2>TikTokアナリティクスの活用</h2>
<p>ビジネスアカウントで利用できるアナリティクスから、以下の主要指標を確認しましょう。</p>

<div class="info-box formula">
<div class="info-box-title">主要分析指標</div>
<table>
<tr><th>カテゴリ</th><th>指標</th><th>活用方法</th></tr>
<tr><td>概要</td><td>動画視聴数・フォロワー増減・プロフィール表示数</td><td>全体的なアカウント成長を把握</td></tr>
<tr><td>コンテンツ</td><td>各動画の再生数・いいね・コメント・シェア</td><td>ヒットコンテンツのパターンを分析</td></tr>
<tr><td>フォロワー</td><td>性別・年齢・地域・アクティブ時間帯</td><td>ターゲット層の確認と投稿時間の最適化</td></tr>
<tr><td>LIVE</td><td>視聴者数・視聴時間・ギフト・新規フォロワー</td><td>LIVE戦略の効果測定</td></tr>
</table>
</div>

<h2>企業のTikTok成功パターン</h2>
<p>BtoB・BtoCを問わず、TikTokで成果を出している企業には共通するパターンがあります。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>舞台裏コンテンツ</strong>
工場見学、オフィス紹介、商品の製造過程など「裏側」を見せる動画。親近感と信頼性を構築。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>社員出演型</strong>
「中の人」が顔出しで登場する動画。人間味がありフォロワーとの距離が近い。採用ブランディングにも効果的。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>トレンド即応型</strong>
流行の音源やフォーマットに自社要素を乗せて即座に投稿。スピード感が重要で、24〜48時間以内に対応するのが理想。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>教育・How to型</strong>
業界の専門知識やノウハウを短くわかりやすく解説。保存率が高く、長期的にリーチを獲得。
</div>
</div>
</div>

<h3>トレンド活用サイクル</h3>
<p>TikTokのトレンドには寿命があります。以下のサイクルを意識して素早く行動しましょう。</p>
<table>
<tr><th>フェーズ</th><th>期間</th><th>対応</th></tr>
<tr><td>萌芽期</td><td>0〜2日</td><td>早期発見して即座に制作・投稿（最大効果）</td></tr>
<tr><td>成長期</td><td>2〜5日</td><td>まだ参加価値あり。独自アレンジで差別化</td></tr>
<tr><td>成熟期</td><td>5〜10日</td><td>参加者過多。よほど独自性がない限り見送り</td></tr>
<tr><td>衰退期</td><td>10日〜</td><td>参加しても「遅い」印象。次のトレンドに注力</td></tr>
</table>
            `,
            quiz: [
                {
                    id: "q302_1",
                    type: "choice",
                    question: "TikTok LIVEを利用するために必要な最低フォロワー数は何人ですか？",
                    options: ["100人", "500人", "1,000人", "10,000人"],
                    answer: 2,
                    explanation: "TikTok LIVEはフォロワー1,000人以上で利用可能です。"
                },
                {
                    id: "q302_2",
                    type: "choice",
                    question: "TikTok Shopの機能として正しくないものはどれですか？",
                    options: ["動画内商品タグ", "LIVE Shopping", "定期購入サブスク", "アフィリエイト"],
                    answer: 2,
                    explanation: "TikTok Shopの主な機能は、ショーケース、動画内商品タグ、LIVE Shopping、アフィリエイトです。定期購入サブスクは標準機能ではありません。"
                },
                {
                    id: "q302_3",
                    type: "choice",
                    question: "TikTokのトレンド活用で最大効果が期待できるフェーズはどれですか？",
                    options: ["萌芽期（0〜2日）", "成長期（2〜5日）", "成熟期（5〜10日）", "衰退期（10日〜）"],
                    answer: 0,
                    explanation: "萌芽期（0〜2日）に早期発見して即座に制作・投稿することで最大の効果が期待できます。"
                },
                {
                    id: "q302_4",
                    type: "fill",
                    question: "TikTokのビジネスアカウントの利用料金はいくらですか？",
                    answer: "無料",
                    explanation: "TikTokのビジネスアカウントは無料で利用できます。アナリティクスやプロフィールリンクなどの機能が追加されます。"
                }
            ]
        },
        {
            id: 303,
            title: "YouTube運用の基本",
            duration: "15分",
            content: `
<h2>YouTubeアルゴリズムの仕組み</h2>
<p>YouTubeのアルゴリズムは、<strong>視聴者の満足度を最大化する</strong>ことを目的として設計されています。推薦システムが動画のパフォーマンスを多面的に評価し、視聴者に表示する動画を決定します。</p>

<div class="info-box formula">
<div class="info-box-title">YouTubeアルゴリズムの評価式</div>
<p style="text-align:center;font-size:1.1rem;"><strong>推薦スコア = CTR × 視聴維持率 × エンゲージメント</strong></p>
<table>
<tr><th>要素</th><th>説明</th><th>目標値</th></tr>
<tr><td><strong>CTR（クリック率）</strong></td><td>インプレッションに対するクリック割合</td><td>4〜10%</td></tr>
<tr><td><strong>視聴維持率</strong></td><td>動画をどこまで視聴したかの平均割合</td><td>50%以上</td></tr>
<tr><td><strong>エンゲージメント</strong></td><td>いいね・コメント・共有・保存の総合</td><td>高いほど良い</td></tr>
</table>
</div>

<h2>動画SEO（検索最適化）</h2>
<p>YouTube は Google に次ぐ<strong>世界第2位の検索エンジン</strong>です。動画SEOを適切に行うことで、検索経由の安定した視聴数を獲得できます。</p>

<h3>SEO最適化の5要素</h3>
<table>
<tr><th>要素</th><th>最適化ポイント</th></tr>
<tr><td><strong>タイトル</strong></td><td>メインキーワードを先頭に配置。60文字以内。数字や疑問形で興味を引く</td></tr>
<tr><td><strong>説明文</strong></td><td>最初の2行にキーワードと要約。関連リンク、チャプター、SNSリンクを含む</td></tr>
<tr><td><strong>タグ</strong></td><td>メインキーワード＋関連キーワード。5〜15個が目安</td></tr>
<tr><td><strong>サムネイル</strong></td><td>CTRに最も影響。テキスト・表情・コントラストが重要</td></tr>
<tr><td><strong>チャプター</strong></td><td>説明文にタイムスタンプを記載。検索結果でセグメント表示される</td></tr>
</table>

<h2>Hero / Hub / Help フレームワーク</h2>
<p>YouTube公式が推奨するコンテンツ戦略フレームワークです。3種類のコンテンツをバランスよく投稿することで、<strong>チャンネルの持続的な成長</strong>を実現します。</p>

<div class="info-box success">
<div class="info-box-title">3Hフレームワーク</div>
<table>
<tr><th>タイプ</th><th>目的</th><th>頻度</th><th>例</th></tr>
<tr><td><strong>Hero</strong></td><td>大規模リーチ獲得</td><td>年数回</td><td>大型コラボ、イベント動画、話題の企画</td></tr>
<tr><td><strong>Hub</strong></td><td>定期視聴者の維持</td><td>週1〜2回</td><td>シリーズ企画、定期レビュー、業界ニュース</td></tr>
<tr><td><strong>Help</strong></td><td>検索流入の獲得</td><td>常時</td><td>How to動画、FAQ、チュートリアル</td></tr>
</table>
</div>

<h2>サムネイルデザインの原則</h2>
<p>サムネイルはCTRに最も大きな影響を与える要素です。以下の原則を守りましょう。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>テキストは大きく短く</strong>
スマホでも読める大きさで、5〜7文字以内。動画タイトルと重複しない補足的な文言を使用。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>表情・感情を強調</strong>
人物の顔（特に驚き・喜びなどの強い表情）はクリック率を高める。目線はカメラに向ける。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>コントラストと彩度</strong>
背景とテキスト・人物のコントラストを明確に。彩度を高めに設定し、フィード内で目立たせる。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>ブランド一貫性</strong>
色使い、フォント、レイアウトに一貫性を持たせ、チャンネルの認知度を高める。
</div>
</div>
</div>

<h2>動画構成テンプレート</h2>
<p>視聴維持率を高めるための基本的な動画構成パターンです。</p>

<div class="info-box tip">
<div class="info-box-title">動画構成の黄金テンプレート</div>
<table>
<tr><th>パート</th><th>時間</th><th>内容</th></tr>
<tr><td><strong>フック</strong></td><td>0〜5秒</td><td>視聴者の注意を引く衝撃的な一言・映像。「この動画を見れば〇〇がわかる」</td></tr>
<tr><td><strong>イントロ</strong></td><td>5〜15秒</td><td>動画の内容と視聴するメリットを簡潔に伝える</td></tr>
<tr><td><strong>本編</strong></td><td>メイン</td><td>章立てで構成。各章の冒頭でこれから話す内容を予告</td></tr>
<tr><td><strong>CTA</strong></td><td>最後15秒</td><td>チャンネル登録・高評価・コメント・次の動画への誘導</td></tr>
</table>
</div>

<div class="info-box warning">
<div class="info-box-title">注意: 最初の30秒が勝負</div>
YouTubeの視聴維持率データによると、多くの動画で最初の30秒以内に大きな離脱が発生します。冒頭で「この動画を最後まで見るべき理由」を明確に伝えることが極めて重要です。
</div>
            `,
            quiz: [
                {
                    id: "q303_1",
                    type: "choice",
                    question: "YouTubeアルゴリズムの推薦スコアを構成する3要素の正しい組み合わせはどれですか？",
                    options: ["フォロワー数 × 投稿頻度 × いいね数", "CTR × 視聴維持率 × エンゲージメント", "再生数 × コメント数 × 共有数", "登録者数 × 再生時間 × CTR"],
                    answer: 1,
                    explanation: "YouTubeの推薦スコアは CTR（クリック率）× 視聴維持率 × エンゲージメント で評価されます。"
                },
                {
                    id: "q303_2",
                    type: "choice",
                    question: "Hero / Hub / Helpフレームワークで、検索流入の獲得を目的とするコンテンツタイプはどれですか？",
                    options: ["Hero", "Hub", "Help", "Highlight"],
                    answer: 2,
                    explanation: "Helpコンテンツは検索流入の獲得を目的とし、How to動画やFAQ、チュートリアルなどが該当します。"
                },
                {
                    id: "q303_3",
                    type: "choice",
                    question: "YouTubeのCTR（クリック率）の目標値として適切な範囲はどれですか？",
                    options: ["0.5〜2%", "4〜10%", "15〜25%", "30%以上"],
                    answer: 1,
                    explanation: "YouTubeのCTRは4〜10%が一般的な目標値です。サムネイルとタイトルの最適化が重要です。"
                },
                {
                    id: "q303_4",
                    type: "fill",
                    question: "YouTubeは世界第何位の検索エンジンですか？（数字のみ）",
                    answer: "2",
                    explanation: "YouTubeはGoogleに次ぐ世界第2位の検索エンジンです。適切な動画SEOにより、検索経由の安定した視聴数を獲得できます。"
                }
            ]
        },
        {
            id: 304,
            title: "YouTube運用の実践",
            duration: "15分",
            content: `
<h2>YouTube Shorts戦略</h2>
<p>YouTube Shortsは<strong>60秒以内の縦型ショート動画</strong>で、TikTokやInstagram Reelsに対抗するフォーマットです。チャンネル成長の加速に非常に効果的です。</p>

<div class="info-box tip">
<div class="info-box-title">Shorts活用の3つのメリット</div>
<ul>
<li><strong>新規リーチの拡大:</strong> Shortsフィードから新しい視聴者を獲得。登録者がいなくても数万再生が可能</li>
<li><strong>チャンネル登録への導線:</strong> Shortsから興味を持った視聴者が通常動画やチャンネルページへ流入</li>
<li><strong>投稿頻度の向上:</strong> 制作コストが低く、高頻度での投稿が可能。アルゴリズムの評価が向上</li>
</ul>
</div>

<h3>Shorts制作のポイント</h3>
<ul>
<li>冒頭1〜2秒で注意を引く（テキストフック・驚きの映像）</li>
<li>縦型（9:16）で撮影。既存の横型動画をクロップしても可</li>
<li>ループ再生を意識した構成（最後と最初が自然につながる）</li>
<li>通常動画のハイライト切り出しも効果的</li>
<li>#Shorts タグは現在は不要（自動判定される）</li>
</ul>

<h2>YouTube Studio分析の活用</h2>
<p>YouTube Studioの「アナリティクス」セクションで、チャンネルと動画のパフォーマンスを詳細に分析できます。</p>

<table>
<tr><th>分析タブ</th><th>確認すべき指標</th><th>改善アクション</th></tr>
<tr><td><strong>概要</strong></td><td>視聴回数、総再生時間、登録者数の推移</td><td>成長トレンドの把握とKPI設定</td></tr>
<tr><td><strong>リーチ</strong></td><td>インプレッション数、CTR、トラフィックソース</td><td>CTRが低い→サムネイル/タイトル改善</td></tr>
<tr><td><strong>エンゲージメント</strong></td><td>視聴維持率グラフ、平均視聴時間</td><td>離脱ポイントの特定と構成改善</td></tr>
<tr><td><strong>視聴者</strong></td><td>年齢、性別、地域、アクティブ時間帯</td><td>ターゲット層に合った投稿時間設定</td></tr>
</table>

<div class="info-box formula">
<div class="info-box-title">視聴維持率グラフの読み方</div>
<ul>
<li><strong>冒頭の急降下:</strong> フックが弱い。最初の5秒で興味を引けていない</li>
<li><strong>中盤の緩やかな下降:</strong> 正常。テンポの改善やカット編集で軽減可能</li>
<li><strong>特定ポイントの急降下:</strong> そのタイミングの内容が視聴者の期待と乖離している</li>
<li><strong>上昇ポイント:</strong> 視聴者が巻き戻して見直している箇所。価値の高いセクション</li>
</ul>
</div>

<h2>収益化条件と仕組み</h2>
<p>YouTubeパートナープログラム（YPP）に参加することで、動画から収益を得ることができます。</p>

<div class="info-box success">
<div class="info-box-title">YPP参加条件</div>
<table>
<tr><th>条件</th><th>詳細</th></tr>
<tr><td><strong>チャンネル登録者数</strong></td><td>1,000人以上</td></tr>
<tr><td><strong>総再生時間</strong></td><td>直近12ヶ月で4,000時間以上</td></tr>
<tr><td><strong>または Shorts視聴回数</strong></td><td>直近90日間で1,000万回以上</td></tr>
<tr><td><strong>コミュニティガイドライン</strong></td><td>違反がないこと</td></tr>
<tr><td><strong>2段階認証</strong></td><td>有効化されていること</td></tr>
</table>
</div>

<h3>収益化の種類</h3>
<table>
<tr><th>収益源</th><th>条件</th><th>概要</th></tr>
<tr><td>広告収益</td><td>YPP参加</td><td>動画前後・途中の広告表示で収益。RPM（1,000回あたり収益）で評価</td></tr>
<tr><td>Super Chat / Super Stickers</td><td>YPP参加</td><td>ライブ配信中の視聴者からの投げ銭</td></tr>
<tr><td>チャンネルメンバーシップ</td><td>登録者1,000人以上</td><td>月額課金で限定コンテンツ・バッジを提供</td></tr>
<tr><td>Super Thanks</td><td>YPP参加</td><td>通常動画への投げ銭機能</td></tr>
<tr><td>ショッピング機能</td><td>YPP参加</td><td>動画下部に商品リンクを表示</td></tr>
</table>

<h2>メンバーシップの活用</h2>
<p>チャンネルメンバーシップは<strong>月額課金型のファンコミュニティ</strong>機能です。安定した収益基盤の構築と、コアファンとの深い関係構築に有効です。</p>
<ul>
<li><strong>限定バッジ・絵文字:</strong> メンバー限定のチャット用バッジと絵文字</li>
<li><strong>限定動画:</strong> メンバーのみ視聴可能なコンテンツ</li>
<li><strong>限定コミュニティ投稿:</strong> メンバー向けの特別な投稿</li>
<li><strong>ティア制:</strong> 複数の料金帯を設定し、特典を差別化</li>
</ul>

<h2>コミュニティタブとライブ配信</h2>
<h3>コミュニティタブ</h3>
<p>動画以外のコンテンツ（テキスト、画像、アンケート、GIF）を投稿できる機能です。</p>
<ul>
<li><strong>アンケート:</strong> 次の動画テーマの投票。視聴者参加意識を醸成</li>
<li><strong>予告・告知:</strong> 新動画の予告やイベント告知</li>
<li><strong>舞台裏:</strong> 撮影風景や制作過程の共有</li>
</ul>

<h3>ライブ配信</h3>
<p>YouTubeのライブ配信はSuper Chatとの相性が良く、<strong>リアルタイムでの収益化</strong>が可能です。アーカイブが自動で通常動画として残るため、ライブに参加できなかった視聴者にもリーチできます。</p>

<div class="info-box warning">
<div class="info-box-title">ライブ配信の注意点</div>
ライブ配信のアーカイブは視聴維持率が低くなりがちです。長時間のライブは後から「ハイライト動画」を別途編集・投稿するのが効果的です。
</div>
            `,
            quiz: [
                {
                    id: "q304_1",
                    type: "choice",
                    question: "YouTubeパートナープログラム（YPP）の参加条件として正しい組み合わせはどれですか？",
                    options: [
                        "登録者500人 + 再生時間2,000時間",
                        "登録者1,000人 + 再生時間4,000時間",
                        "登録者5,000人 + 再生時間10,000時間",
                        "登録者10,000人 + 再生時間20,000時間"
                    ],
                    answer: 1,
                    explanation: "YPPの参加条件は、チャンネル登録者数1,000人以上かつ直近12ヶ月で総再生時間4,000時間以上（またはShorts視聴回数1,000万回以上）です。"
                },
                {
                    id: "q304_2",
                    type: "choice",
                    question: "YouTube Shortsの最大動画尺は何秒ですか？",
                    options: ["15秒", "30秒", "60秒", "90秒"],
                    answer: 2,
                    explanation: "YouTube Shortsは60秒以内の縦型ショート動画フォーマットです。"
                },
                {
                    id: "q304_3",
                    type: "choice",
                    question: "視聴維持率グラフで「上昇ポイント」が示す意味は何ですか？",
                    options: [
                        "広告が表示されたタイミング",
                        "新しい視聴者が流入したタイミング",
                        "視聴者が巻き戻して見直している箇所",
                        "外部サイトからの流入が増えたタイミング"
                    ],
                    answer: 2,
                    explanation: "視聴維持率グラフの上昇ポイントは、視聴者が巻き戻して見直している箇所であり、価値の高いセクションであることを示します。"
                },
                {
                    id: "q304_4",
                    type: "fill",
                    question: "YouTubeのライブ配信中に視聴者が送る投げ銭機能の名称は？（英語で）",
                    answer: "Super Chat",
                    explanation: "Super Chatはライブ配信中に視聴者がメッセージとともに送金できる投げ銭機能です。"
                }
            ]
        }
    ]
};
