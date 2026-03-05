/* ============================================
   Level 5: コンテンツ戦略と分析
   ============================================ */
const LEVEL5_DATA = {
    id: 5,
    title: "コンテンツ戦略と分析",
    icon: "📝",
    description: "効果的なコンテンツ企画・制作から分析・改善まで、戦略的SNS運用のスキルを身につける",
    modules: [
        {
            id: 501,
            title: "コンテンツ企画と制作",
            duration: "20分",
            content: `
<h2>SNSコンテンツの4大分類</h2>
<p>SNSに投稿するコンテンツは、大きく<strong>4つのカテゴリ</strong>に分類できます。バランスよく配信することで、フォロワーの満足度とエンゲージメントを高められます。</p>

<table>
<tr><th>カテゴリ</th><th>目的</th><th>具体例</th><th>推奨比率</th></tr>
<tr><td><strong>教育系</strong></td><td>知識・ノウハウの提供</td><td>ハウツー、豆知識、業界トレンド解説</td><td>40%</td></tr>
<tr><td><strong>エンタメ系</strong></td><td>楽しさ・親近感の提供</td><td>ミーム、舞台裏、日常風景、クイズ</td><td>20%</td></tr>
<tr><td><strong>インスピレーション系</strong></td><td>共感・動機付け</td><td>成功事例、お客様の声、名言、ビフォーアフター</td><td>20%</td></tr>
<tr><td><strong>プロモーション系</strong></td><td>商品・サービスの訴求</td><td>セール告知、新商品紹介、キャンペーン</td><td>20%</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">80:20ルール</div>
SNSコンテンツの<strong>80%はフォロワーに価値を提供する投稿</strong>（教育・エンタメ・インスピレーション）に、<strong>20%を宣伝・販促</strong>に充てるのが基本です。宣伝ばかりのアカウントはフォロワー離脱の原因になります。
</div>

<h2>4-1-1ルール</h2>
<p>Twitterマーケティングの先駆者ジョー・プリッツィが提唱した投稿比率のフレームワークです。</p>

<div class="info-box formula">
<div class="info-box-title">4-1-1ルール</div>
<ul>
<li><strong>4投稿:</strong> 他者のコンテンツのシェア・リツイート（業界情報、有益記事など）</li>
<li><strong>1投稿:</strong> オリジナルの教育・エンタメコンテンツ</li>
<li><strong>1投稿:</strong> 自社のプロモーション・CTA付き投稿</li>
</ul>
<p>合計6投稿のうち、プロモーションは1投稿だけ。フォロワーに「売り込まれている」と感じさせない配分です。</p>
</div>

<h2>ネタ出しフレームワーク</h2>
<p>コンテンツのアイデアに困ったときに使える3つの手法を紹介します。</p>

<h3>1. SCAMPER法</h3>
<p>既存のアイデアを7つの視点で変形させるフレームワークです。</p>
<table>
<tr><th>頭文字</th><th>意味</th><th>SNSコンテンツへの応用例</th></tr>
<tr><td><strong>S</strong></td><td>Substitute（代用）</td><td>定番レシピの材料を別のもので代用してみた</td></tr>
<tr><td><strong>C</strong></td><td>Combine（結合）</td><td>2つのトレンドを掛け合わせた投稿</td></tr>
<tr><td><strong>A</strong></td><td>Adapt（適応）</td><td>海外で人気のフォーマットを日本版にアレンジ</td></tr>
<tr><td><strong>M</strong></td><td>Modify（修正）</td><td>過去のバズ投稿を現在のトレンドに合わせて再編集</td></tr>
<tr><td><strong>P</strong></td><td>Put to other uses（転用）</td><td>ブログ記事をカルーセル投稿に転用</td></tr>
<tr><td><strong>E</strong></td><td>Eliminate（排除）</td><td>余計な説明を省いてビジュアルだけで伝える</td></tr>
<tr><td><strong>R</strong></td><td>Reverse（逆転）</td><td>「やってはいけないこと」をあえて紹介</td></tr>
</table>

<h3>2. マインドマップ法</h3>
<p>中心テーマから連想を広げてアイデアを発散させます。</p>
<div class="info-box tip">
<div class="info-box-title">マインドマップの手順</div>
<ol>
<li>中心に<strong>メインテーマ</strong>（例：「カフェ経営」）を書く</li>
<li>そこから<strong>サブテーマ</strong>を放射状に展開（メニュー・内装・接客・仕入れ）</li>
<li>各サブテーマからさらに<strong>具体的なネタ</strong>を展開（メニュー→季節限定→開発裏話→材料のこだわり）</li>
<li>1つのメインテーマから<strong>50〜100個</strong>のネタを生み出すことが可能</li>
</ol>
</div>

<h3>3. 競合分析法</h3>
<p>同業他社や業界のトップアカウントの投稿を分析し、自社に応用します。</p>
<ul>
<li>エンゲージメントが高い投稿の<strong>共通パターン</strong>を抽出</li>
<li>競合がカバーしていない<strong>隙間テーマ</strong>を発見</li>
<li>競合の失敗事例から<strong>避けるべき投稿パターン</strong>を学ぶ</li>
</ul>

<h2>UGC（ユーザー生成コンテンツ）の促進</h2>
<p>UGCとは、フォロワーやユーザーが自発的に作成・投稿するコンテンツのことです。<strong>広告費ゼロで信頼性の高いコンテンツ</strong>が手に入る、最も費用対効果の高い施策の一つです。</p>

<table>
<tr><th>UGC促進手法</th><th>具体例</th><th>効果</th></tr>
<tr><td>ハッシュタグキャンペーン</td><td>#私のお気に入り○○ で投稿を募集</td><td>ブランド認知拡大</td></tr>
<tr><td>フォトコンテスト</td><td>商品を使った写真を募集し、優秀作品を公式で紹介</td><td>エンゲージメント向上</td></tr>
<tr><td>レビュー・口コミ投稿</td><td>購入者にレビュー投稿を依頼（特典付き）</td><td>購買意欲の向上</td></tr>
<tr><td>リポスト・シェア</td><td>ユーザーの投稿を公式アカウントで紹介</td><td>コミュニティ形成</td></tr>
</table>

<h2>コンテンツカレンダーの作成</h2>
<p>計画的な投稿を実現するために、<strong>月間・週間のコンテンツカレンダー</strong>を作成しましょう。</p>

<div class="info-box success">
<div class="info-box-title">カレンダーに含めるべき要素</div>
<ul>
<li><strong>投稿日時:</strong> 曜日・時間帯まで指定</li>
<li><strong>プラットフォーム:</strong> どのSNSに投稿するか</li>
<li><strong>コンテンツカテゴリ:</strong> 教育/エンタメ/インスピレーション/プロモーション</li>
<li><strong>投稿テーマ・概要:</strong> 具体的な内容の要約</li>
<li><strong>ビジュアル素材:</strong> 使用する画像・動画の指定</li>
<li><strong>ハッシュタグ:</strong> 使用するタグ一覧</li>
<li><strong>CTA:</strong> フォロワーに求めるアクション</li>
<li><strong>担当者:</strong> 制作・承認の担当者</li>
<li><strong>ステータス:</strong> 企画中/制作中/承認待ち/公開済み</li>
</ul>
</div>

<h2>年間イベントカレンダー（主要イベント例）</h2>
<p>季節やイベントに合わせた投稿で、タイムリーなコンテンツを届けましょう。</p>

<table>
<tr><th>月</th><th>主要イベント・シーズン</th><th>コンテンツ例</th></tr>
<tr><td>1月</td><td>正月・成人の日</td><td>新年の抱負、福袋、初売り</td></tr>
<tr><td>2月</td><td>バレンタイン・節分</td><td>ギフト特集、チョコレート企画</td></tr>
<tr><td>3月</td><td>卒業・ホワイトデー・年度末</td><td>卒業おめでとう企画、春の新生活</td></tr>
<tr><td>4月</td><td>入学・入社・お花見</td><td>新生活応援、桜フォトキャンペーン</td></tr>
<tr><td>5月</td><td>GW・母の日</td><td>GWのおすすめ、母の日ギフト</td></tr>
<tr><td>6月</td><td>父の日・梅雨</td><td>梅雨の過ごし方、父の日企画</td></tr>
<tr><td>7月</td><td>夏休み・七夕・海の日</td><td>夏のおすすめ、七夕願い事企画</td></tr>
<tr><td>8月</td><td>お盆・花火・夏祭り</td><td>夏のフォトコン、帰省ネタ</td></tr>
<tr><td>9月</td><td>敬老の日・秋分</td><td>秋の味覚、シルバーウィーク</td></tr>
<tr><td>10月</td><td>ハロウィン・スポーツの日</td><td>仮装コンテスト、秋のイベント</td></tr>
<tr><td>11月</td><td>ブラックフライデー・七五三</td><td>セール告知、年末に向けた準備</td></tr>
<tr><td>12月</td><td>クリスマス・年末・大掃除</td><td>年末の振り返り、クリスマス企画</td></tr>
</table>
            `,
            quiz: [
                {
                    id: "q501_1",
                    type: "choice",
                    question: "SNSコンテンツの80:20ルールで、プロモーション投稿の推奨比率は何%ですか？",
                    options: ["10%", "20%", "30%", "50%"],
                    answer: 1,
                    explanation: "80:20ルールでは、80%をフォロワーに価値を提供する投稿に、20%を宣伝・販促に充てるのが基本です。"
                },
                {
                    id: "q501_2",
                    type: "choice",
                    question: "4-1-1ルールで最も多い投稿カテゴリは何ですか？",
                    options: ["自社プロモーション", "他者コンテンツのシェア", "オリジナル教育コンテンツ", "UGCのリポスト"],
                    answer: 1,
                    explanation: "4-1-1ルールでは、6投稿中4投稿が他者コンテンツのシェア・リツイートに充てられます。"
                },
                {
                    id: "q501_3",
                    type: "choice",
                    question: "SCAMPER法の「C」が意味するのは次のうちどれですか？",
                    options: ["Create（創造）", "Combine（結合）", "Copy（複製）", "Change（変更）"],
                    answer: 1,
                    explanation: "SCAMPER法のCはCombine（結合）で、2つ以上のアイデアやトレンドを掛け合わせて新しいコンテンツを生み出す手法です。"
                },
                {
                    id: "q501_4",
                    type: "fill",
                    question: "ユーザーが自発的に作成・投稿するコンテンツの略称は？（アルファベット3文字）",
                    answer: "UGC",
                    explanation: "UGC（User Generated Content）はユーザー生成コンテンツの略で、広告費ゼロで信頼性の高いコンテンツが手に入る費用対効果の高い施策です。"
                }
            ]
        },
        {
            id: 502,
            title: "ビジュアル・動画制作の基本",
            duration: "20分",
            content: `
<h2>Canvaを活用したSNSデザイン</h2>
<p><strong>Canva</strong>は、デザイン初心者でもプロ品質のSNS画像を作成できる無料ツールです。SNS運用者にとって必須のツールと言えます。</p>

<div class="info-box tip">
<div class="info-box-title">Canvaの主な機能</div>
<ul>
<li><strong>テンプレート:</strong> SNS各プラットフォーム向けの数千種類のテンプレート</li>
<li><strong>ブランドキット:</strong> ロゴ・カラー・フォントを登録して統一感を維持</li>
<li><strong>マジックリサイズ:</strong> 1つのデザインを複数のSNSサイズに一括変換（Pro機能）</li>
<li><strong>コンテンツプランナー:</strong> カレンダー上で投稿スケジュールを管理</li>
<li><strong>チームコラボ:</strong> 複数メンバーでリアルタイム共同編集</li>
<li><strong>AI機能:</strong> テキストから画像生成、背景削除、マジック消しゴム</li>
</ul>
</div>

<h2>写真撮影の基本</h2>
<p>SNS投稿のビジュアル品質を上げるための基本テクニックです。</p>

<h3>構図の基本ルール</h3>
<table>
<tr><th>構図名</th><th>説明</th><th>適した被写体</th></tr>
<tr><td><strong>三分割法</strong></td><td>画面を縦横3分割し、交点に被写体を配置</td><td>人物、商品、風景</td></tr>
<tr><td><strong>日の丸構図</strong></td><td>被写体を画面中央に配置</td><td>商品の単体撮影、ポートレート</td></tr>
<tr><td><strong>対角線構図</strong></td><td>被写体を対角線上に配置して動きを表現</td><td>料理、フラットレイ</td></tr>
<tr><td><strong>シンメトリー構図</strong></td><td>左右対称に配置して安定感を表現</td><td>建物、インテリア</td></tr>
<tr><td><strong>フレーム構図</strong></td><td>窓や枠で被写体を囲む</td><td>風景、店舗外観</td></tr>
</table>

<h3>ライティング（光の使い方）</h3>
<table>
<tr><th>光の種類</th><th>特徴</th><th>効果</th></tr>
<tr><td><strong>自然光（順光）</strong></td><td>被写体の正面から光が当たる</td><td>色が正確、影が少ない</td></tr>
<tr><td><strong>自然光（逆光）</strong></td><td>被写体の背後から光が当たる</td><td>ドラマチック、シルエット</td></tr>
<tr><td><strong>サイドライト</strong></td><td>被写体の横から光が当たる</td><td>立体感、テクスチャ表現</td></tr>
<tr><td><strong>窓際の拡散光</strong></td><td>窓から入る柔らかい光</td><td>商品撮影に最適、均一な明るさ</td></tr>
</table>

<div class="info-box warning">
<div class="info-box-title">スマホ撮影のNG例</div>
<ul>
<li><strong>デジタルズームの多用:</strong> 画質が劣化するので、できるだけ被写体に近づく</li>
<li><strong>蛍光灯下での撮影:</strong> 緑がかった不自然な色味になりやすい</li>
<li><strong>逆光で顔が暗い:</strong> HDR機能を使うか、露出を手動調整</li>
<li><strong>手ブレ:</strong> 脇を締めて撮影するか、三脚を使用</li>
</ul>
</div>

<h2>ショート動画編集ツール</h2>
<p>ショート動画（TikTok、Reels、Shorts）を制作するための主要編集ツールを比較します。</p>

<table>
<tr><th>ツール名</th><th>価格</th><th>特徴</th><th>向いている人</th></tr>
<tr><td><strong>CapCut</strong></td><td>無料</td><td>TikTok公式、豊富なエフェクト・テンプレート、自動キャプション</td><td>初心者〜中級者</td></tr>
<tr><td><strong>InShot</strong></td><td>無料（Pro有）</td><td>直感的操作、比率変更が簡単、ステッカー・フィルター充実</td><td>初心者</td></tr>
<tr><td><strong>Premiere Rush</strong></td><td>月額1,078円〜</td><td>Adobe連携、マルチトラック編集、PCでも使える</td><td>中級者〜上級者</td></tr>
<tr><td><strong>VN</strong></td><td>無料</td><td>高機能で無料、キーフレーム対応、ウォーターマークなし</td><td>中級者</td></tr>
<tr><td><strong>DaVinci Resolve</strong></td><td>無料（Studio有）</td><td>プロ向け編集・カラーグレーディング、PC専用</td><td>上級者・プロ</td></tr>
</table>

<h2>ブランドガイドラインの策定</h2>
<p>SNSの投稿に一貫性を持たせるために、<strong>ビジュアルブランドガイドライン</strong>を策定しましょう。</p>

<div class="info-box success">
<div class="info-box-title">ガイドラインに含めるべき要素</div>
<ul>
<li><strong>ブランドカラー:</strong> メインカラー、サブカラー、アクセントカラーのHEXコード</li>
<li><strong>フォント:</strong> 見出し用・本文用のフォント指定</li>
<li><strong>ロゴ使用規定:</strong> 最小サイズ、余白、NG例</li>
<li><strong>写真のトーン&マナー:</strong> 明るさ、彩度、フィルターの方向性</li>
<li><strong>テキストスタイル:</strong> 文体（です・ます調 / だ・である調）、絵文字の使用方針</li>
<li><strong>テンプレート:</strong> 投稿種別ごとのデザインテンプレート</li>
</ul>
</div>

<h2>各SNS推奨サイズ一覧</h2>
<p>プラットフォームごとに最適なビジュアルサイズが異なります。サイズを間違えると切り取られたり、画質が低下する原因になります。</p>

<table>
<tr><th>プラットフォーム</th><th>フォーマット</th><th>推奨サイズ（px）</th><th>アスペクト比</th></tr>
<tr><td rowspan="4"><strong>Instagram</strong></td><td>フィード（正方形）</td><td>1080 x 1080</td><td>1:1</td></tr>
<tr><td>フィード（縦長）</td><td>1080 x 1350</td><td>4:5</td></tr>
<tr><td>ストーリーズ / リール</td><td>1080 x 1920</td><td>9:16</td></tr>
<tr><td>カルーセル</td><td>1080 x 1080</td><td>1:1</td></tr>
<tr><td rowspan="3"><strong>X（Twitter）</strong></td><td>画像投稿（1枚）</td><td>1200 x 675</td><td>16:9</td></tr>
<tr><td>ヘッダー画像</td><td>1500 x 500</td><td>3:1</td></tr>
<tr><td>プロフィール画像</td><td>400 x 400</td><td>1:1</td></tr>
<tr><td rowspan="3"><strong>TikTok</strong></td><td>動画</td><td>1080 x 1920</td><td>9:16</td></tr>
<tr><td>サムネイル</td><td>1080 x 1920</td><td>9:16</td></tr>
<tr><td>プロフィール画像</td><td>200 x 200</td><td>1:1</td></tr>
<tr><td rowspan="3"><strong>YouTube</strong></td><td>サムネイル</td><td>1280 x 720</td><td>16:9</td></tr>
<tr><td>Shorts</td><td>1080 x 1920</td><td>9:16</td></tr>
<tr><td>チャンネルバナー</td><td>2560 x 1440</td><td>16:9</td></tr>
<tr><td rowspan="2"><strong>LINE</strong></td><td>リッチメッセージ</td><td>1040 x 1040</td><td>1:1</td></tr>
<tr><td>リッチメニュー</td><td>2500 x 1686</td><td>—</td></tr>
<tr><td rowspan="2"><strong>Facebook</strong></td><td>フィード画像</td><td>1200 x 630</td><td>1.91:1</td></tr>
<tr><td>カバー画像</td><td>820 x 312</td><td>—</td></tr>
</table>
            `,
            quiz: [
                {
                    id: "q502_1",
                    type: "choice",
                    question: "写真の構図で、画面を縦横3分割しその交点に被写体を配置する手法を何と言いますか？",
                    options: ["日の丸構図", "三分割法", "対角線構図", "シンメトリー構図"],
                    answer: 1,
                    explanation: "三分割法は最も基本的かつ効果的な構図で、画面を縦横3分割し、その交点に被写体を配置することでバランスの良い写真になります。"
                },
                {
                    id: "q502_2",
                    type: "choice",
                    question: "Instagramのストーリーズ/リールの推奨アスペクト比は？",
                    options: ["1:1", "4:5", "16:9", "9:16"],
                    answer: 3,
                    explanation: "Instagramストーリーズおよびリールの推奨アスペクト比は9:16（1080 x 1920px）で、スマートフォンのフルスクリーン表示に最適化されています。"
                },
                {
                    id: "q502_3",
                    type: "choice",
                    question: "TikTok公式の動画編集ツールはどれですか？",
                    options: ["InShot", "VN", "CapCut", "DaVinci Resolve"],
                    answer: 2,
                    explanation: "CapCutはByteDance（TikTok運営会社）が提供する公式編集ツールで、TikTokとの連携機能が充実しています。"
                },
                {
                    id: "q502_4",
                    type: "fill",
                    question: "Canvaの有料機能で、1つのデザインを複数SNSサイズに一括変換できる機能名は？（カタカナで）",
                    answer: "マジックリサイズ",
                    explanation: "マジックリサイズはCanva Pro（有料版）の機能で、例えばInstagramフィード用のデザインをX用やFacebook用に一括変換できます。"
                }
            ]
        },
        {
            id: 503,
            title: "SNS分析とレポーティング",
            duration: "20分",
            content: `
<h2>プラットフォーム別分析ツール比較</h2>
<p>各SNSには無料で使える<strong>公式アナリティクス</strong>が用意されています。まずはこれらを使いこなしましょう。</p>

<table>
<tr><th>プラットフォーム</th><th>分析ツール名</th><th>利用条件</th><th>主な指標</th></tr>
<tr><td><strong>Instagram</strong></td><td>Instagramインサイト</td><td>プロアカウント必須</td><td>リーチ、インプレッション、エンゲージメント、フォロワー属性</td></tr>
<tr><td><strong>X（Twitter）</strong></td><td>Xアナリティクス</td><td>無料で利用可能</td><td>インプレッション、エンゲージメント率、リンククリック、プロフィール表示</td></tr>
<tr><td><strong>TikTok</strong></td><td>TikTokアナリティクス</td><td>ビジネスアカウント推奨</td><td>動画視聴数、平均視聴時間、トラフィックソース、フォロワー分析</td></tr>
<tr><td><strong>YouTube</strong></td><td>YouTube Studio</td><td>チャンネル所有者</td><td>視聴回数、視聴時間、CTR、チャンネル登録者推移</td></tr>
<tr><td><strong>LINE</strong></td><td>LINE Official Account Manager</td><td>公式アカウント必須</td><td>友だち数推移、メッセージ開封率、リッチメニュークリック率</td></tr>
<tr><td><strong>Facebook</strong></td><td>Meta Business Suite</td><td>Facebookページ必須</td><td>リーチ、エンゲージメント、ページビュー、オーディエンスインサイト</td></tr>
</table>

<h2>KPIダッシュボード設計</h2>
<p>SNS運用の成果を可視化するために、<strong>KPIダッシュボード</strong>を設計しましょう。目的に応じたKPIを設定し、定期的にモニタリングします。</p>

<table>
<tr><th>目的</th><th>KPI（重要指標）</th><th>計算方法</th></tr>
<tr><td><strong>認知拡大</strong></td><td>リーチ数、インプレッション数</td><td>投稿を見たユニークユーザー数</td></tr>
<tr><td><strong>エンゲージメント</strong></td><td>エンゲージメント率</td><td>（いいね+コメント+保存+シェア）÷ リーチ × 100</td></tr>
<tr><td><strong>フォロワー獲得</strong></td><td>フォロワー増加数、フォロー率</td><td>新規フォロワー数 ÷ プロフィール表示数 × 100</td></tr>
<tr><td><strong>Webサイト誘導</strong></td><td>リンククリック数、CTR</td><td>リンククリック数 ÷ インプレッション × 100</td></tr>
<tr><td><strong>コンバージョン</strong></td><td>CV数、CPA</td><td>広告費 ÷ コンバージョン数</td></tr>
<tr><td><strong>ブランド好意度</strong></td><td>ポジティブ言及率</td><td>ポジティブ言及数 ÷ 全言及数 × 100</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">ダッシュボード設計のコツ</div>
<ul>
<li><strong>情報の階層化:</strong> 全体サマリー → プラットフォーム別 → 投稿別の3階層で整理</li>
<li><strong>ベンチマーク設定:</strong> 前月比、前年同月比、業界平均との比較を必ず入れる</li>
<li><strong>アクション直結:</strong> 数値を見て「次に何をすべきか」が分かる設計にする</li>
<li><strong>更新頻度:</strong> 日次（簡易）、週次（詳細）、月次（包括レポート）の3段階</li>
</ul>
</div>

<h2>競合分析とソーシャルリスニング</h2>

<h3>競合分析の進め方</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>競合アカウントの選定</strong>
直接競合3〜5社、間接競合2〜3社、ベンチマーク（業界トップ）1〜2社を選定します。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>定量データの収集</strong>
フォロワー数、投稿頻度、平均エンゲージメント率、フォロワー増加率を月次で記録します。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>定性分析</strong>
投稿のテーマ、トーン&マナー、コンテンツフォーマット、ハッシュタグ戦略を分析します。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>差別化ポイントの特定</strong>
競合がカバーしていないテーマ、自社だけが語れるストーリーを見つけ出します。
</div>
</div>
</div>

<h3>ソーシャルリスニングとは</h3>
<p>SNS上での自社ブランドや業界に関する<strong>言及・会話を継続的にモニタリング</strong>する手法です。</p>
<ul>
<li>ブランド名・商品名のメンション追跡</li>
<li>業界キーワードのトレンド分析</li>
<li>顧客の不満・要望の早期発見</li>
<li>競合に対する市場の反応把握</li>
<li>炎上リスクの早期検知</li>
</ul>

<h2>外部分析・管理ツール比較</h2>
<p>公式ツールだけでは不十分な場合、外部ツールを活用して分析を強化しましょう。</p>

<table>
<tr><th>ツール名</th><th>主な用途</th><th>対応SNS</th><th>料金目安（月額）</th></tr>
<tr><td><strong>SocialDog</strong></td><td>X特化の運用・分析</td><td>X（Twitter）</td><td>無料〜9,800円</td></tr>
<tr><td><strong>Later</strong></td><td>ビジュアル型投稿管理</td><td>Instagram, TikTok, X, Pinterest</td><td>無料〜$40</td></tr>
<tr><td><strong>Hootsuite</strong></td><td>マルチSNS一括管理</td><td>全主要SNS</td><td>$99〜</td></tr>
<tr><td><strong>Sprout Social</strong></td><td>企業向け総合管理・分析</td><td>全主要SNS</td><td>$249〜</td></tr>
<tr><td><strong>Social Insight</strong></td><td>国内SNS分析特化</td><td>X, Instagram, Facebook, YouTube</td><td>要問い合わせ</td></tr>
<tr><td><strong>Keywordmap for SNS</strong></td><td>競合分析・キーワード分析</td><td>X, Instagram</td><td>要問い合わせ</td></tr>
</table>

<h2>月次レポートテンプレート</h2>
<p>上司やクライアントへの報告に使える月次レポートの構成例です。</p>

<div class="info-box success">
<div class="info-box-title">月次レポート構成（推奨）</div>
<ol>
<li><strong>エグゼクティブサマリー</strong> — 今月の結果を3行で要約</li>
<li><strong>KPIサマリー</strong> — 主要指標の前月比・目標達成率を一覧表示</li>
<li><strong>プラットフォーム別実績</strong> — 各SNSの詳細データ</li>
<li><strong>トップパフォーマンス投稿</strong> — エンゲージメント上位3〜5投稿とその要因分析</li>
<li><strong>ワーストパフォーマンス投稿</strong> — 低パフォーマンス投稿の原因分析</li>
<li><strong>競合動向</strong> — 競合の注目すべき動き</li>
<li><strong>トレンド・トピック</strong> — 業界・SNS全体のトレンド</li>
<li><strong>改善アクション</strong> — 来月の具体的な改善施策</li>
<li><strong>来月の計画</strong> — 投稿計画とキャンペーン予定</li>
</ol>
</div>

<div class="info-box warning">
<div class="info-box-title">レポートのNG例</div>
<ul>
<li><strong>数字の羅列だけ:</strong> 「フォロワー+500」だけでは意味不明。「施策Aにより+500、前月比120%」のように文脈を添える</li>
<li><strong>考察なし:</strong> なぜ増えた/減ったのかの分析がないレポートは改善に繋がらない</li>
<li><strong>アクションなし:</strong> データから「次に何をするか」まで提案して初めてレポートの価値がある</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q503_1",
                    type: "choice",
                    question: "Instagramの公式分析ツールの名称はどれですか？",
                    options: ["Meta Business Suite", "Instagramインサイト", "Instagram Studio", "Instagramアナリティクス"],
                    answer: 1,
                    explanation: "InstagramインサイトがInstagramの公式分析ツールです。利用にはプロアカウント（ビジネスまたはクリエイター）への切り替えが必要です。"
                },
                {
                    id: "q503_2",
                    type: "choice",
                    question: "エンゲージメント率の計算式として正しいものはどれですか？",
                    options: [
                        "（いいね数）÷ フォロワー数 × 100",
                        "（いいね+コメント+保存+シェア）÷ リーチ × 100",
                        "インプレッション数 ÷ フォロワー数 × 100",
                        "コメント数 ÷ いいね数 × 100"
                    ],
                    answer: 1,
                    explanation: "エンゲージメント率は（いいね+コメント+保存+シェア）÷ リーチ × 100 で計算します。リーチベースで計算するのが一般的です。"
                },
                {
                    id: "q503_3",
                    type: "choice",
                    question: "X（Twitter）運用に特化した国産分析ツールはどれですか？",
                    options: ["Hootsuite", "Later", "SocialDog", "Sprout Social"],
                    answer: 2,
                    explanation: "SocialDogはX（Twitter）運用に特化した国産ツールで、フォロワー分析・投稿予約・キーワードモニターなどの機能があります。"
                },
                {
                    id: "q503_4",
                    type: "fill",
                    question: "SNS上での自社ブランドに関する言及や会話を継続的にモニタリングする手法を何と言いますか？（カタカナで）",
                    answer: "ソーシャルリスニング",
                    explanation: "ソーシャルリスニングは、SNS上の自社ブランドや業界に関する言及・会話を継続的にモニタリングし、顧客の声やトレンドを把握する手法です。"
                }
            ]
        },
        {
            id: 504,
            title: "A/Bテストとグロースハック",
            duration: "18分",
            content: `
<h2>SNS投稿のA/Bテスト</h2>
<p>A/Bテストとは、<strong>2つのバリエーション（AパターンとBパターン）を同時にテストし、どちらがより効果的かをデータで判断</strong>する手法です。感覚ではなくデータに基づいた改善が可能になります。</p>

<h3>テストできる要素</h3>
<table>
<tr><th>テスト要素</th><th>バリエーション例</th><th>測定指標</th></tr>
<tr><td><strong>投稿時間</strong></td><td>朝7時 vs 夜20時</td><td>リーチ数、エンゲージメント率</td></tr>
<tr><td><strong>クリエイティブ</strong></td><td>写真 vs イラスト / 縦長 vs 正方形</td><td>保存数、シェア数</td></tr>
<tr><td><strong>コピー（テキスト）</strong></td><td>短文 vs 長文 / 質問形 vs 断定形</td><td>コメント数、リンククリック</td></tr>
<tr><td><strong>CTA（行動喚起）</strong></td><td>「詳しくはプロフへ」vs「今すぐチェック」</td><td>プロフィール遷移数、CV数</td></tr>
<tr><td><strong>ハッシュタグ</strong></td><td>5個 vs 15個 / ニッチタグ vs 人気タグ</td><td>リーチ数、発見タブ流入</td></tr>
<tr><td><strong>投稿形式</strong></td><td>シングル画像 vs カルーセル vs リール</td><td>リーチ数、エンゲージメント率</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">A/Bテストの鉄則</div>
<ul>
<li><strong>変数は1つだけ:</strong> 一度に複数の要素を変えると、何が効果を生んだか分からなくなる</li>
<li><strong>十分なサンプルサイズ:</strong> 最低でもリーチ1,000以上を目安にテスト</li>
<li><strong>同条件で比較:</strong> 同じ曜日・同じターゲット層に配信</li>
<li><strong>記録と蓄積:</strong> テスト結果をスプレッドシートに記録し、ナレッジを蓄積</li>
</ul>
</div>

<h3>A/Bテストの実施手順</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>仮説を立てる</strong>
例：「質問形のコピーの方が、断定形よりコメント数が多いのではないか」
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>テストパターンを作成</strong>
Aパターン（質問形コピー）とBパターン（断定形コピー）を作成。それ以外の要素（画像・時間・ハッシュタグ）は同一にする。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>同条件で配信</strong>
同じ曜日の同じ時間帯に投稿、または広告の場合はオーディエンスを均等に分配。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>結果を測定・記録</strong>
48時間〜1週間後にデータを集計。統計的に有意な差があるかを確認。
</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content">
<strong>勝者パターンを採用</strong>
優れた結果を出したパターンを今後の投稿の標準とし、次のテストに進む。
</div>
</div>
</div>

<h2>グロースハック手法</h2>
<p>グロースハックとは、<strong>低コストかつ高速にフォロワーやエンゲージメントを拡大する手法</strong>の総称です。</p>

<h3>バイラルループの設計</h3>
<p>ユーザーが自然にコンテンツを拡散し、新しいユーザーを呼び込む仕組みです。</p>
<div class="info-box formula">
<div class="info-box-title">バイラルループの基本構造</div>
<p><strong>ユーザーが投稿を見る → 共感・驚きで保存/シェア → 新しいユーザーにリーチ → フォロー → さらにシェア</strong></p>
<p>バイラル係数（K値）= 1ユーザーが招待する新規ユーザー数 × 招待されたユーザーのコンバージョン率</p>
<p>K値 > 1 であれば、コンテンツは指数関数的に拡散します。</p>
</div>

<table>
<tr><th>バイラルトリガー</th><th>具体例</th><th>効果的なプラットフォーム</th></tr>
<tr><td><strong>タグ付けを促す</strong></td><td>「友達をタグ付けしてね」系投稿</td><td>Instagram, Facebook</td></tr>
<tr><td><strong>デュエット/コラボ</strong></td><td>コラボ投稿、デュエット動画</td><td>TikTok, Instagram</td></tr>
<tr><td><strong>チャレンジ企画</strong></td><td>ハッシュタグチャレンジ</td><td>TikTok, X</td></tr>
<tr><td><strong>診断・クイズ</strong></td><td>「あなたは○○タイプ」系コンテンツ</td><td>X, Instagram Stories</td></tr>
<tr><td><strong>リツイートキャンペーン</strong></td><td>RT+フォローでプレゼント</td><td>X</td></tr>
</table>

<h3>コラボレーション投稿</h3>
<p>他のアカウントとコラボすることで、<strong>お互いのフォロワーにリーチ</strong>し、効率的にフォロワーを増やす手法です。</p>
<ul>
<li><strong>Instagramコラボ投稿:</strong> 2アカウント共同投稿（双方のフィードに表示）</li>
<li><strong>TikTokデュエット:</strong> 人気クリエイターの動画に反応する形で投稿</li>
<li><strong>X スペース共催:</strong> 業界の専門家とライブ音声配信</li>
<li><strong>YouTube コラボ動画:</strong> チャンネル間でゲスト出演</li>
</ul>

<h2>アルゴリズムハック</h2>
<p>各プラットフォームのアルゴリズムが<strong>優遇する投稿の条件</strong>を理解し、リーチを最大化しましょう。</p>

<table>
<tr><th>プラットフォーム</th><th>アルゴリズム優遇条件</th><th>具体的な施策</th></tr>
<tr><td><strong>Instagram</strong></td><td>保存数・シェア数が重要、滞在時間</td><td>保存したくなるまとめ投稿、カルーセルで滞在時間を伸ばす</td></tr>
<tr><td><strong>X（Twitter）</strong></td><td>リプライ・引用RT、話題性</td><td>議論を呼ぶ投稿、アンケート機能活用、スレッド投稿</td></tr>
<tr><td><strong>TikTok</strong></td><td>完全視聴率、リプレイ率、コメント数</td><td>冒頭1秒のフック、ループ動画、コメント欄での質問誘導</td></tr>
<tr><td><strong>YouTube</strong></td><td>クリック率（CTR）、視聴維持率</td><td>目を引くサムネイル、冒頭15秒で惹きつける、チャプター設定</td></tr>
<tr><td><strong>LINE</strong></td><td>開封率、タップ率</td><td>パーソナライズされた配信、リッチメニューの最適化</td></tr>
<tr><td><strong>Facebook</strong></td><td>有意義なインタラクション（コメント・シェア）</td><td>グループ活用、ライブ配信、コメント返信の迅速化</td></tr>
</table>

<div class="info-box warning">
<div class="info-box-title">アルゴリズムハックの注意点</div>
<ul>
<li><strong>エンゲージメントベイト（釣り投稿）は逆効果:</strong> 「いいねしてね」「コメントで○○と書いて」などの過度な誘導はプラットフォームにペナルティを受ける可能性がある</li>
<li><strong>アルゴリズムは頻繁に変更される:</strong> 最新情報を常にキャッチアップする必要がある</li>
<li><strong>本質はコンテンツの質:</strong> テクニックだけに頼らず、ユーザーにとって本当に価値あるコンテンツを作ることが最重要</li>
</ul>
</div>

<h2>PDCAサイクルでSNS運用を改善</h2>
<p>SNS運用の改善には、<strong>PDCA（Plan-Do-Check-Act）サイクル</strong>を回し続けることが不可欠です。</p>

<div class="steps">
<div class="step">
<div class="step-num">P</div>
<div class="step-content">
<strong>Plan（計画）</strong>
月間のKPI目標を設定し、コンテンツカレンダーを作成。仮説に基づいた投稿計画を立てる。<br>
例：「リール投稿を週3回に増やすことで、リーチを前月比130%にする」
</div>
</div>
<div class="step">
<div class="step-num">D</div>
<div class="step-content">
<strong>Do（実行）</strong>
計画に基づいて投稿を実施。A/Bテストも並行して行い、データを収集する。
</div>
</div>
<div class="step">
<div class="step-num">C</div>
<div class="step-content">
<strong>Check（評価）</strong>
週次・月次でKPIの達成度を確認。うまくいった投稿・いかなかった投稿の要因を分析する。
</div>
</div>
<div class="step">
<div class="step-num">A</div>
<div class="step-content">
<strong>Act（改善）</strong>
分析結果をもとに次月の計画を修正。成功パターンは強化し、失敗パターンは改善策を講じる。
</div>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">PDCAの回し方の例</div>
<table>
<tr><th>フェーズ</th><th>頻度</th><th>具体的な作業</th></tr>
<tr><td>Plan</td><td>月1回</td><td>月間計画策定、KPI目標設定、テスト仮説立案</td></tr>
<tr><td>Do</td><td>毎日</td><td>投稿実施、コメント返信、コミュニティ管理</td></tr>
<tr><td>Check</td><td>週1回+月1回</td><td>週次速報レポート、月次包括レポート作成</td></tr>
<tr><td>Act</td><td>月1回</td><td>月次振り返り会議、来月計画の修正</td></tr>
</table>
</div>
            `,
            quiz: [
                {
                    id: "q504_1",
                    type: "choice",
                    question: "A/Bテストで最も重要なルールはどれですか？",
                    options: [
                        "できるだけ多くの変数を同時にテストする",
                        "変数は1つだけに絞る",
                        "必ず3パターン以上でテストする",
                        "テスト期間は1日で十分"
                    ],
                    answer: 1,
                    explanation: "A/Bテストの鉄則は「変数は1つだけ」にすることです。複数要素を同時に変更すると、何が効果を生んだか特定できなくなります。"
                },
                {
                    id: "q504_2",
                    type: "choice",
                    question: "バイラル係数（K値）が指数関数的な拡散を起こす条件はどれですか？",
                    options: ["K値 > 0", "K値 > 0.5", "K値 > 1", "K値 > 10"],
                    answer: 2,
                    explanation: "バイラル係数（K値）が1を超えると、1人のユーザーから平均1人以上の新規ユーザーが生まれ、コンテンツは指数関数的に拡散します。"
                },
                {
                    id: "q504_3",
                    type: "choice",
                    question: "TikTokのアルゴリズムが特に重視する指標はどれですか？",
                    options: ["フォロワー数", "いいね数", "完全視聴率", "ハッシュタグ数"],
                    answer: 2,
                    explanation: "TikTokのアルゴリズムは完全視聴率（動画を最後まで見た割合）を特に重視します。そのため冒頭1秒のフックやループ動画の活用が効果的です。"
                },
                {
                    id: "q504_4",
                    type: "fill",
                    question: "SNS運用の継続的改善に用いられる、Plan-Do-Check-Actの4ステップのフレームワーク名は？（アルファベット4文字）",
                    answer: "PDCA",
                    explanation: "PDCAサイクル（Plan-Do-Check-Act）はSNS運用の改善に不可欠なフレームワークです。月次でサイクルを回し続けることで、データに基づいた運用改善が実現できます。"
                }
            ]
        }
    ]
};
