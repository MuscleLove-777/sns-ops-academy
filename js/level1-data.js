/* ============================================
   Level 1: SNS運用の基礎
   ============================================ */
const LEVEL1_DATA = {
    id: 1,
    title: "SNS運用の基礎",
    icon: "🌐",
    description: "SNSマーケティングの全体像、主要プラットフォーム比較、KPI設計、アカウント設計の基本を学ぶ",
    modules: [
        {
            id: 101,
            title: "SNSマーケティングの全体像",
            duration: "15分",
            content: `
<h2>SNSの進化史</h2>
<p>日本におけるSNSは2004年頃の<strong>mixi</strong>に始まり、その後<strong>Facebook</strong>、<strong>Twitter（現X）</strong>、<strong>Instagram</strong>、そして<strong>TikTok</strong>へと主役が移り変わってきました。現在、日本のSNS利用率は<strong>人口の80%超</strong>に達し、もはや企業のマーケティング活動において避けて通れないチャネルとなっています。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>2004〜2008年 - mixi時代</strong>
招待制SNSのmixiが日本市場を席巻。日記・コミュニティ機能を中心に、若年層を中心に普及。ユーザー同士の「つながり」を重視した設計。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>2008〜2012年 - Facebook・Twitter上陸</strong>
海外発のSNSが日本市場に参入。Facebookは実名制でビジネス利用が広がり、Twitterは匿名性と拡散力で急成長。企業の公式アカウント運用が本格化。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>2014〜2018年 - Instagram台頭</strong>
ビジュアル重視のInstagramが若年女性層を中心に爆発的に普及。「インスタ映え」が流行語大賞に。ストーリーズ機能の登場でリアルタイム発信が加速。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>2019年〜現在 - TikTok・ショート動画時代</strong>
TikTokの台頭によりショート動画が主流に。Instagram Reels、YouTube Shortsも登場し、短尺動画コンテンツの競争が激化。アルゴリズム重視の時代へ。
</div>
</div>
</div>

<h2>SNSマーケティングの4つの目的</h2>
<p>企業がSNSを活用する目的は、大きく<strong>4つ</strong>に分類されます。自社の課題に合わせて優先順位を明確にすることが重要です。</p>

<table>
<tr><th>目的</th><th>概要</th><th>主なKPI</th><th>向いているSNS</th></tr>
<tr><td><strong>認知拡大</strong></td><td>ブランドや商品の存在を広く知ってもらう</td><td>リーチ、インプレッション、フォロワー増加数</td><td>X、TikTok、YouTube</td></tr>
<tr><td><strong>ファン獲得</strong></td><td>ブランドのファン・コミュニティを育てる</td><td>エンゲージメント率、UGC数、リピート率</td><td>Instagram、X、LINE</td></tr>
<tr><td><strong>販促・集客</strong></td><td>ECサイトや店舗への送客・直接購入促進</td><td>クリック数、CVR、売上貢献額</td><td>Instagram、LINE、YouTube</td></tr>
<tr><td><strong>ブランディング</strong></td><td>ブランドイメージの構築・強化</td><td>ブランド好感度、SOV、メンション数</td><td>Instagram、YouTube、X</td></tr>
</table>

<h2>トリプルメディア戦略</h2>
<p>SNS運用を効果的に行うには、<strong>トリプルメディア</strong>の概念を理解し、各メディアの特性を活かした統合戦略が必要です。</p>

<div class="info-box tip">
<div class="info-box-title">トリプルメディアとは</div>
<ul>
<li><strong>オウンドメディア（Owned Media）:</strong> 自社が所有するメディア。SNS公式アカウント、自社サイト、ブログなど。コンテンツを自由にコントロールできるが、リーチ拡大には時間がかかる。</li>
<li><strong>アーンドメディア（Earned Media）:</strong> ユーザーの口コミやシェアによって獲得するメディア。UGC（ユーザー生成コンテンツ）、レビュー、メンションなど。信頼性が高いが、コントロールが難しい。</li>
<li><strong>ペイドメディア（Paid Media）:</strong> 広告費を払って露出を得るメディア。SNS広告、インフルエンサー施策など。即効性があるが、コストが継続的にかかる。</li>
</ul>
</div>

<p>成功するSNS戦略は、この3つのメディアを<strong>有機的に連携</strong>させます。例えば、ペイドメディア（広告）で認知を獲得し、オウンドメディア（公式アカウント）でファンを育成し、アーンドメディア（UGC）で信頼性を高めるという流れです。</p>

<div class="info-box warning">
<div class="info-box-title">よくある失敗</div>
SNS運用を「とりあえず投稿する」だけにしてしまうケースが非常に多いです。目的を明確にせずに始めると、何をKPIにすべきか分からず、成果が見えないまま運用が形骸化してしまいます。<strong>まず「何のためにSNSを使うのか」を定義すること</strong>が最優先です。
</div>
            `,
            quiz: [
                {
                    id: "q101_1",
                    type: "choice",
                    question: "日本のSNS利用率は人口の約何%に達していますか？",
                    options: ["約50%", "約65%", "約80%超", "約95%"],
                    answer: 2,
                    explanation: "日本のSNS利用率は人口の80%超に達しており、企業のマーケティング活動において不可欠なチャネルとなっています。"
                },
                {
                    id: "q101_2",
                    type: "choice",
                    question: "トリプルメディアのうち、ユーザーの口コミやUGCにあたるのはどれですか？",
                    options: ["オウンドメディア", "アーンドメディア", "ペイドメディア", "シェアードメディア"],
                    answer: 1,
                    explanation: "アーンドメディア（Earned Media）は、ユーザーの口コミやシェア、UGCなど、第三者が自発的に発信するメディアを指します。"
                },
                {
                    id: "q101_3",
                    type: "choice",
                    question: "SNSマーケティングの4つの目的に含まれないのはどれですか？",
                    options: ["認知拡大", "ファン獲得", "在庫管理", "ブランディング"],
                    answer: 2,
                    explanation: "SNSマーケティングの4つの目的は「認知拡大」「ファン獲得」「販促・集客」「ブランディング」です。在庫管理はSNSマーケティングの目的ではありません。"
                },
                {
                    id: "q101_4",
                    type: "fill",
                    question: "2017年に流行語大賞となった、Instagram関連のキーワードは何ですか？（漢字・カタカナで）",
                    answer: "インスタ映え",
                    explanation: "「インスタ映え」は2017年のユーキャン新語・流行語大賞に選ばれ、Instagramの社会的な影響力の大きさを象徴しました。"
                }
            ]
        },
        {
            id: 102,
            title: "主要SNSプラットフォーム比較",
            duration: "18分",
            content: `
<h2>日本の主要SNS利用状況</h2>
<p>日本国内で企業がSNSマーケティングに活用できる主要プラットフォームは<strong>6つ</strong>あります。それぞれの特性を正しく理解し、自社のターゲットや目的に合ったプラットフォームを選定することが重要です。</p>

<div class="info-box tip">
<div class="info-box-title">主要SNSの月間アクティブユーザー数（MAU）</div>
<ul>
<li><strong>LINE:</strong> 約9,500万MAU（日本最大のメッセージングプラットフォーム）</li>
<li><strong>YouTube:</strong> 約7,000万MAU（動画プラットフォームとして圧倒的）</li>
<li><strong>X（旧Twitter）:</strong> 約4,500万MAU（リアルタイム性と拡散力）</li>
<li><strong>Instagram:</strong> 約3,300万MAU（ビジュアル訴求に強い）</li>
<li><strong>Facebook:</strong> 約2,600万MAU（ビジネス利用が中心）</li>
<li><strong>TikTok:</strong> 約1,700万MAU（急成長中のショート動画）</li>
</ul>
</div>

<h2>プラットフォーム比較テーブル</h2>
<table>
<tr><th>プラットフォーム</th><th>MAU</th><th>主要年齢層</th><th>コンテンツ形式</th><th>強み</th><th>アルゴリズム特徴</th></tr>
<tr><td><strong>X（旧Twitter）</strong></td><td>4,500万</td><td>20〜40代</td><td>テキスト、画像、動画</td><td>拡散力、リアルタイム性、トレンド</td><td>エンゲージメント＋時系列、リポストで拡散</td></tr>
<tr><td><strong>Instagram</strong></td><td>3,300万</td><td>20〜30代女性中心</td><td>画像、リール、ストーリーズ</td><td>ビジュアル訴求、EC連携、発見タブ</td><td>関心度＋関係性＋新しさ、保存が重要</td></tr>
<tr><td><strong>TikTok</strong></td><td>1,700万</td><td>10〜20代中心</td><td>ショート動画（15〜60秒）</td><td>バイラル力、レコメンド精度</td><td>視聴完了率＋エンゲージメント、フォロワー数不問</td></tr>
<tr><td><strong>YouTube</strong></td><td>7,000万</td><td>全年齢層</td><td>長尺動画、Shorts</td><td>SEO効果、長期資産性</td><td>視聴時間＋CTR、関連動画推薦</td></tr>
<tr><td><strong>LINE</strong></td><td>9,500万</td><td>全年齢層</td><td>メッセージ、タイムライン</td><td>到達率、CRM、1対1コミュニケーション</td><td>友だち登録ベース、セグメント配信</td></tr>
<tr><td><strong>Facebook</strong></td><td>2,600万</td><td>30〜50代</td><td>テキスト、画像、動画</td><td>ビジネス利用、グループ機能</td><td>友人・家族優先、グループ重視</td></tr>
</table>

<h2>プラットフォーム選定の考え方</h2>
<p>すべてのSNSを同時に運用するのは現実的ではありません。以下の3つの軸で<strong>優先順位</strong>をつけましょう。</p>
<ol>
<li><strong>ターゲット層がどこにいるか:</strong> ペルソナの年齢・性別・興味関心に合致するプラットフォームを選ぶ</li>
<li><strong>自社のコンテンツ制作力:</strong> テキスト中心ならX、ビジュアル中心ならInstagram、動画制作ができるならTikTok/YouTube</li>
<li><strong>運用リソース:</strong> まずは1〜2プラットフォームに集中し、成果が出てから横展開する</li>
</ol>

<div class="info-box warning">
<div class="info-box-title">プラットフォーム選定の落とし穴</div>
「競合がやっているから」「流行っているから」という理由だけでプラットフォームを選ぶのは危険です。自社のターゲット層が実際に利用しているかどうかを必ずデータで確認しましょう。例えば、BtoB企業がTikTokに注力しても、意思決定者にリーチしにくい可能性があります。
</div>

<h2>各プラットフォームのアルゴリズムの基本原理</h2>
<p>SNSのアルゴリズムは「<strong>ユーザーにとって価値のあるコンテンツを優先表示する</strong>」という共通原理に基づいています。しかし、何を「価値」と判断するかはプラットフォームごとに異なります。</p>
<ul>
<li><strong>X:</strong> リポスト・いいねなどのエンゲージメントが多い投稿を優先。トレンドに乗った投稿も表示されやすい</li>
<li><strong>Instagram:</strong> 保存・シェアが特に重要。フォロワーとの関係性（DM、コメントのやり取り頻度）も影響</li>
<li><strong>TikTok:</strong> 視聴完了率が最重要。フォロワー0人でもバズる可能性がある唯一のプラットフォーム</li>
<li><strong>YouTube:</strong> 総視聴時間とクリック率（CTR）が重要。サムネイルとタイトルの最適化が鍵</li>
</ul>
            `,
            quiz: [
                {
                    id: "q102_1",
                    type: "choice",
                    question: "日本国内でMAU（月間アクティブユーザー数）が最も多いSNSはどれですか？",
                    options: ["YouTube", "X（旧Twitter）", "LINE", "Instagram"],
                    answer: 2,
                    explanation: "LINEは約9,500万MAUで日本最大のメッセージングプラットフォームです。2位はYouTube（約7,000万）、3位はX（約4,500万）です。"
                },
                {
                    id: "q102_2",
                    type: "choice",
                    question: "TikTokのアルゴリズムで最も重視される指標はどれですか？",
                    options: ["フォロワー数", "いいね数", "視聴完了率", "コメント数"],
                    answer: 2,
                    explanation: "TikTokのアルゴリズムでは視聴完了率が最重要指標です。そのため、フォロワー0人でもコンテンツの質次第でバズる可能性があります。"
                },
                {
                    id: "q102_3",
                    type: "choice",
                    question: "Instagramのアルゴリズムで特に重要とされるアクションはどれですか？",
                    options: ["フォロー", "いいね", "保存", "プロフィール訪問"],
                    answer: 2,
                    explanation: "Instagramのアルゴリズムでは「保存」と「シェア」が特に重要視されます。保存はユーザーが「後で見返したい」と思うほど有益なコンテンツの指標です。"
                },
                {
                    id: "q102_4",
                    type: "fill",
                    question: "X（旧Twitter）の日本国内MAUは約何万人ですか？（数字のみ）",
                    answer: "4500",
                    explanation: "X（旧Twitter）の日本国内MAUは約4,500万人です。世界的に見ても日本はXの利用率が非常に高い国の一つです。"
                }
            ]
        },
        {
            id: 103,
            title: "SNS運用の基本指標（KPI）",
            duration: "18分",
            content: `
<h2>SNS運用で押さえるべき基本指標</h2>
<p>SNS運用の成果を正しく測定するためには、<strong>適切なKPI（重要業績評価指標）</strong>を設定し、定期的にモニタリングすることが不可欠です。ここでは主要な指標とその計算方法を解説します。</p>

<h3>1. フォロワー数</h3>
<p>アカウントをフォローしているユーザーの総数です。ブランドの「潜在的なリーチ力」を示す基本指標ですが、<strong>フォロワー数だけを追いかけるのは危険</strong>です。重要なのはフォロワーの「質」（ターゲット層かどうか）と「エンゲージメント」です。</p>

<h3>2. リーチ</h3>
<p>投稿を<strong>見たユニークユーザー数</strong>です。同じ人が複数回見てもリーチは1とカウントされます。自社の投稿がどれだけ多くの人に届いているかを測る指標です。</p>

<h3>3. インプレッション</h3>
<p>投稿が<strong>表示された回数</strong>です。同じ人が3回見た場合、インプレッションは3とカウントされます。リーチとの違いを正しく理解しましょう。</p>

<div class="info-box formula">
<div class="info-box-title">リーチとインプレッションの違い</div>
<ul>
<li><strong>リーチ = 投稿を見た「人数」</strong>（ユニーク数）</li>
<li><strong>インプレッション = 投稿が「表示された回数」</strong>（延べ数）</li>
<li>例: 100人が平均2回ずつ投稿を見た場合 → リーチ=100、インプレッション=200</li>
</ul>
</div>

<h3>4. エンゲージメント率</h3>
<p>SNS運用で<strong>最も重要な指標の一つ</strong>です。フォロワーや閲覧者がどれだけ積極的に投稿に反応しているかを示します。</p>

<div class="info-box formula">
<div class="info-box-title">エンゲージメント率の計算式</div>
<strong>エンゲージメント率 = (いいね + コメント + シェア) / リーチ × 100%</strong>
<br><br>
※プラットフォームや計測ツールによって分母をリーチ、インプレッション、フォロワー数のいずれにするか異なる場合があります。ここではリーチを分母とする方法を基本とします。
</div>

<h3>5. 保存率</h3>
<p>投稿が保存された割合です。特にInstagramでは、保存はアルゴリズム上非常に重要なシグナルとなります。</p>

<div class="info-box formula">
<div class="info-box-title">保存率の計算式</div>
<strong>保存率 = 保存数 / リーチ × 100%</strong>
<br><br>
保存率が2%以上なら非常に優秀なコンテンツと言えます。
</div>

<h3>6. プロフィール遷移率</h3>
<p>投稿を見たユーザーのうち、プロフィールページに遷移した割合です。投稿からアカウント全体への興味喚起度合いを示します。</p>

<h3>7. UGC数（ユーザー生成コンテンツ数）</h3>
<p>ユーザーが自発的にブランドに関するコンテンツを作成・投稿した数です。UGCはブランドの信頼性を高める強力な資産です。</p>

<h3>8. SOV（Share of Voice）</h3>
<p>業界全体の会話量のうち、自社ブランドが占める割合です。競合と比較した<strong>存在感の大きさ</strong>を示します。</p>

<div class="info-box formula">
<div class="info-box-title">SOVの計算式</div>
<strong>SOV = 自社のメンション数 / (自社 + 競合のメンション数合計) × 100%</strong>
</div>

<h2>各指標の業界平均値</h2>
<table>
<tr><th>指標</th><th>X（旧Twitter）</th><th>Instagram</th><th>TikTok</th><th>Facebook</th></tr>
<tr><td><strong>エンゲージメント率</strong></td><td>0.5〜1.0%</td><td>1.0〜3.0%</td><td>3.0〜8.0%</td><td>0.5〜1.5%</td></tr>
<tr><td><strong>フォロワー増加率（月）</strong></td><td>1〜3%</td><td>1〜5%</td><td>5〜15%</td><td>0.5〜2%</td></tr>
<tr><td><strong>保存率</strong></td><td>-</td><td>1〜3%</td><td>-</td><td>-</td></tr>
<tr><td><strong>リンククリック率</strong></td><td>0.5〜2.0%</td><td>0.5〜1.0%</td><td>1.0〜3.0%</td><td>1.0〜3.0%</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">KPI設定のポイント</div>
<ul>
<li>目的に直結するKPIを<strong>3〜5個</strong>に絞る（欲張らない）</li>
<li><strong>先行指標</strong>（エンゲージメント率、保存率）と<strong>遅行指標</strong>（売上、CVR）を組み合わせる</li>
<li>毎月の目標値を設定し、<strong>PDCAサイクル</strong>を回す</li>
<li>業界平均値を参考に、自社の現状と比較して目標を設定する</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q103_1",
                    type: "choice",
                    question: "エンゲージメント率の計算式として正しいものはどれですか？",
                    options: [
                        "フォロワー数 / インプレッション × 100%",
                        "(いいね + コメント + シェア) / リーチ × 100%",
                        "リーチ / フォロワー数 × 100%",
                        "クリック数 / インプレッション × 100%"
                    ],
                    answer: 1,
                    explanation: "エンゲージメント率 = (いいね + コメント + シェア) / リーチ × 100% で計算します。ユーザーの積極的な反応度合いを示す重要指標です。"
                },
                {
                    id: "q103_2",
                    type: "choice",
                    question: "「リーチ」と「インプレッション」の違いとして正しいものはどれですか？",
                    options: [
                        "リーチは表示回数、インプレッションはユニークユーザー数",
                        "リーチはユニークユーザー数、インプレッションは表示回数",
                        "リーチはフォロワー限定、インプレッションは非フォロワーも含む",
                        "両者に違いはない"
                    ],
                    answer: 1,
                    explanation: "リーチは投稿を見たユニークユーザー数、インプレッションは投稿が表示された延べ回数です。同じ人が複数回見るとインプレッションは増えますが、リーチは増えません。"
                },
                {
                    id: "q103_3",
                    type: "choice",
                    question: "Instagramのエンゲージメント率の業界平均はおよそどの範囲ですか？",
                    options: ["0.1〜0.5%", "1.0〜3.0%", "5.0〜10.0%", "10.0〜20.0%"],
                    answer: 1,
                    explanation: "Instagramのエンゲージメント率の業界平均は1.0〜3.0%です。TikTok（3.0〜8.0%）より低く、X（0.5〜1.0%）より高い傾向にあります。"
                },
                {
                    id: "q103_4",
                    type: "fill",
                    question: "業界全体の会話量のうち、自社ブランドが占める割合を示す指標の略称は？（アルファベット3文字）",
                    answer: "SOV",
                    explanation: "SOV（Share of Voice）は、自社のメンション数を自社＋競合のメンション数合計で割って算出します。競合と比較した存在感の大きさを示します。"
                }
            ]
        },
        {
            id: 104,
            title: "アカウント設計とブランディング",
            duration: "15分",
            content: `
<h2>SNSアカウント設計の5ステップ</h2>
<p>成功するSNS運用の土台は、<strong>戦略的なアカウント設計</strong>にあります。投稿を始める前に、以下の5ステップで設計を固めましょう。</p>

<h3>ステップ1: ペルソナ設定</h3>
<p>SNSで届けたい<strong>理想的なターゲット像</strong>を具体的に描きます。ペルソナが曖昧だと、誰にも刺さらないコンテンツになってしまいます。</p>

<div class="info-box tip">
<div class="info-box-title">ペルソナ設定の項目例</div>
<ul>
<li><strong>基本属性:</strong> 年齢、性別、職業、年収、居住地</li>
<li><strong>行動特性:</strong> よく使うSNS、情報収集の方法、購買行動パターン</li>
<li><strong>心理特性:</strong> 価値観、悩み、趣味、ライフスタイル</li>
<li><strong>SNS利用目的:</strong> 情報収集、暇つぶし、人とのつながり、自己表現</li>
</ul>
</div>

<h3>ステップ2: トンマナ（トーン＆マナー）設計</h3>
<p>アカウントの<strong>人格・世界観</strong>を定義します。投稿の文体、使う言葉、画像のテイストを統一することで、ブランドとしての一貫性が生まれます。</p>

<table>
<tr><th>要素</th><th>定義すべきこと</th><th>例（カフェブランドの場合）</th></tr>
<tr><td><strong>口調</strong></td><td>丁寧語？カジュアル？</td><td>やさしい丁寧語、絵文字控えめ</td></tr>
<tr><td><strong>キャラクター</strong></td><td>専門家？友人？</td><td>コーヒーに詳しいお姉さん</td></tr>
<tr><td><strong>視覚トーン</strong></td><td>色味、フィルター、フォント</td><td>ナチュラルカラー、暖色系</td></tr>
<tr><td><strong>NG表現</strong></td><td>使わない言葉、避けるトピック</td><td>競合批判、政治的発言</td></tr>
</table>

<h3>ステップ3: プロフィール最適化</h3>
<p>プロフィールはアカウントの<strong>「顔」</strong>です。ユーザーがフォローするかどうかは、プロフィールを見て<strong>3秒以内</strong>に判断されると言われています。</p>

<div class="info-box tip">
<div class="info-box-title">プロフィール最適化チェックリスト</div>
<ul>
<li><strong>アイコン:</strong> ブランドロゴ or 人物写真（認識しやすいもの）</li>
<li><strong>名前:</strong> 検索されやすいキーワードを含める（例：「○○カフェ｜渋谷のスペシャルティコーヒー」）</li>
<li><strong>自己紹介文:</strong> 何のアカウントか、フォローするメリットは何かを明確に（150文字以内で簡潔に）</li>
<li><strong>リンク:</strong> ECサイト、予約ページ、最新キャンペーンなど、最も誘導したいURLを設定</li>
<li><strong>ハイライト（Instagram）:</strong> カテゴリ別に整理し、初訪問者がアカウントの全体像を把握できるように</li>
</ul>
</div>

<h3>ステップ4: コンテンツの柱（ピラー）設計</h3>
<p>投稿内容を<strong>3〜5本のテーマ</strong>に絞り、「何を発信するアカウントか」を明確にします。これを「コンテンツピラー」と呼びます。</p>

<div class="info-box tip">
<div class="info-box-title">コンテンツピラーの例（コスメブランドの場合）</div>
<ol>
<li><strong>商品紹介:</strong> 新商品の特徴、使い方、テクスチャー紹介（30%）</li>
<li><strong>HowTo・Tips:</strong> メイクテクニック、スキンケアの順番（25%）</li>
<li><strong>UGC紹介:</strong> お客様の使用レポート、ビフォーアフター（20%）</li>
<li><strong>ブランドストーリー:</strong> 開発秘話、成分へのこだわり（15%）</li>
<li><strong>トレンド・季節ネタ:</strong> 季節のおすすめ、トレンドカラー（10%）</li>
</ol>
</div>

<h3>ステップ5: 投稿カレンダー作成</h3>
<p>月間の投稿計画を<strong>カレンダー形式</strong>で作成します。行き当たりばったりの投稿ではなく、計画的にコンテンツを配信することで、一貫性と効率性を保てます。</p>

<table>
<tr><th>曜日</th><th>投稿テーマ</th><th>形式</th><th>目的</th></tr>
<tr><td>月曜</td><td>商品紹介</td><td>フィード投稿</td><td>認知拡大</td></tr>
<tr><td>水曜</td><td>HowTo・Tips</td><td>リール / 動画</td><td>エンゲージメント向上</td></tr>
<tr><td>金曜</td><td>UGC紹介</td><td>ストーリーズ</td><td>ファン育成</td></tr>
<tr><td>日曜</td><td>ブランドストーリー</td><td>カルーセル</td><td>ブランディング</td></tr>
</table>

<div class="info-box warning">
<div class="info-box-title">投稿頻度の目安</div>
<ul>
<li><strong>X:</strong> 1日1〜3投稿（多めでもOK、リアルタイム性が重要）</li>
<li><strong>Instagram:</strong> 週3〜5投稿（フィード）+ 毎日のストーリーズ</li>
<li><strong>TikTok:</strong> 週3〜5投稿（初期は毎日投稿が望ましい）</li>
<li><strong>YouTube:</strong> 週1〜2投稿（クオリティ重視）</li>
<li>投稿頻度を無理に上げて<strong>クオリティが下がる</strong>くらいなら、頻度を落としてでも質を維持しましょう。</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q104_1",
                    type: "choice",
                    question: "コンテンツピラーとして推奨されるテーマの数はいくつですか？",
                    options: ["1〜2本", "3〜5本", "6〜8本", "10本以上"],
                    answer: 1,
                    explanation: "コンテンツピラーは3〜5本のテーマに絞ることが推奨されます。多すぎるとアカウントの方向性がぼやけ、少なすぎると単調になります。"
                },
                {
                    id: "q104_2",
                    type: "choice",
                    question: "ユーザーがプロフィールを見てフォローを判断する時間は約何秒と言われていますか？",
                    options: ["1秒以内", "3秒以内", "10秒以内", "30秒以内"],
                    answer: 1,
                    explanation: "ユーザーがフォローするかどうかはプロフィールを見て3秒以内に判断されると言われています。簡潔で魅力的なプロフィール設計が重要です。"
                },
                {
                    id: "q104_3",
                    type: "choice",
                    question: "トンマナ（トーン＆マナー）設計で定義すべき要素に含まれないのはどれですか？",
                    options: ["口調（丁寧語 or カジュアル）", "視覚トーン（色味やフィルター）", "月間予算", "NG表現"],
                    answer: 2,
                    explanation: "トンマナ設計では口調、キャラクター、視覚トーン、NG表現などを定義します。月間予算は運用計画の領域であり、トンマナ設計には含まれません。"
                },
                {
                    id: "q104_4",
                    type: "fill",
                    question: "投稿内容を3〜5本のテーマに絞って設計する手法を何と呼びますか？（カタカナ8文字）",
                    answer: "コンテンツピラー",
                    explanation: "コンテンツピラー（Content Pillar）とは、アカウントの投稿内容を3〜5本の柱となるテーマに絞って設計する手法です。"
                }
            ]
        }
    ]
};
