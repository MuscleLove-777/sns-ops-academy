/* ============================================
   Level 4: LINE・Facebook・その他
   ============================================ */
const LEVEL4_DATA = {
    id: 4,
    title: "LINE・Facebook・その他",
    icon: "💬",
    description: "LINE公式アカウント、Facebook、その他プラットフォームの運用とクロスプラットフォーム戦略を習得する",
    modules: [
        {
            id: 401,
            title: "LINE公式アカウント運用",
            duration: "15分",
            content: `
<h2>LINE公式アカウントとは</h2>
<p>LINE公式アカウントは、企業や店舗が顧客と<strong>1対1のコミュニケーション</strong>を行うためのビジネスツールです。日本国内のLINE月間アクティブユーザーは<strong>約9,700万人</strong>（人口の約77%）であり、他のSNSと比べて圧倒的なリーチ力を持ちます。</p>

<div class="info-box formula">
<div class="info-box-title">料金プラン（2024年6月改定後）</div>
<table>
<tr><th>プラン</th><th>月額</th><th>無料メッセージ数</th><th>追加メッセージ</th></tr>
<tr><td><strong>コミュニケーション</strong></td><td>0円</td><td>200通/月</td><td>不可</td></tr>
<tr><td><strong>ライト</strong></td><td>5,000円</td><td>5,000通/月</td><td>不可</td></tr>
<tr><td><strong>スタンダード</strong></td><td>15,000円</td><td>30,000通/月</td><td>〜3円/通</td></tr>
</table>
<p><small>※メッセージ数は「配信人数 × メッセージ通数」で計算。1人に3通のメッセージを送ると3通としてカウント。</small></p>
</div>

<h2>メッセージ配信の種類</h2>
<p>LINE公式アカウントでは、目的に応じて複数の配信形式を使い分けることが重要です。</p>

<table>
<tr><th>配信形式</th><th>特徴</th><th>適した用途</th></tr>
<tr><td><strong>テキスト</strong></td><td>シンプルなテキストメッセージ</td><td>お知らせ、挨拶、簡単な案内</td></tr>
<tr><td><strong>リッチメッセージ</strong></td><td>画像全体がリンクになるビジュアル訴求</td><td>キャンペーン告知、商品紹介</td></tr>
<tr><td><strong>リッチビデオメッセージ</strong></td><td>自動再生される動画メッセージ</td><td>新商品PR、使い方動画</td></tr>
<tr><td><strong>カードタイプメッセージ</strong></td><td>カルーセル形式で複数情報を表示</td><td>商品一覧、メニュー紹介</td></tr>
<tr><td><strong>クーポン</strong></td><td>デジタルクーポンの配信</td><td>来店促進、購買促進</td></tr>
</table>

<h2>リッチメニューの設計</h2>
<p>リッチメニューはトーク画面下部に常時表示される<strong>固定メニュー</strong>です。ユーザーの行動導線を設計する最も重要な要素の一つです。</p>

<div class="info-box tip">
<div class="info-box-title">リッチメニュー設計のポイント</div>
<ul>
<li><strong>レイアウト:</strong> 大（6分割）または小（3分割）から選択。ユーザーの利用頻度が高い機能を上段に配置</li>
<li><strong>デザイン:</strong> ブランドカラーを使用し、アイコンとテキストの組み合わせで直感的に</li>
<li><strong>リンク先:</strong> Webサイト、クーポン、ショップカード、テキスト送信など多様なアクションを設定</li>
<li><strong>切り替え:</strong> 時期やキャンペーンに応じてメニューを切り替え。季節感を演出</li>
<li><strong>デフォルト表示:</strong> 初回は表示（ON）推奨。認知されないと活用されない</li>
</ul>
</div>

<h2>セグメント配信</h2>
<p>全友だちに一斉配信するのではなく、<strong>属性や行動に基づいてターゲットを絞った配信</strong>を行うことで、開封率・クリック率の向上とブロック率の低減を実現します。</p>

<h3>絞り込み条件</h3>
<ul>
<li><strong>属性フィルター:</strong> 性別、年齢、地域、OS、友だち追加経路</li>
<li><strong>オーディエンス:</strong> 過去のメッセージ開封者、リンククリック者、特定期間の友だち追加者</li>
<li><strong>タグ:</strong> 手動または自動で付与したタグに基づく配信</li>
</ul>

<h2>LINE VOOMとその他の機能</h2>
<h3>LINE VOOM</h3>
<p>LINE VOOMはタイムライン機能の後継で、<strong>ショート動画を中心としたフィード型コンテンツ</strong>です。友だち以外にもリーチでき、フォロワー獲得に有効です。</p>

<h3>友だち追加施策</h3>
<p>LINE公式アカウントの効果は友だち数に直結します。以下の施策で友だち数を増やしましょう。</p>
<ul>
<li><strong>QRコード設置:</strong> 店頭POP、名刺、チラシ、レシートに掲載</li>
<li><strong>友だち追加広告:</strong> LINE広告で友だち追加を促進（CPF課金）</li>
<li><strong>Webサイト誘導:</strong> サイトに友だち追加ボタンを設置</li>
<li><strong>クーポンインセンティブ:</strong> 友だち追加で割引クーポンをプレゼント</li>
<li><strong>SNS連携:</strong> Instagram・X等の他SNSで告知</li>
</ul>

<div class="info-box warning">
<div class="info-box-title">ブロック対策</div>
友だち追加後のブロック率は平均20〜30%とされています。ブロックを最小化するために、配信頻度は週1〜2回を目安にし、セグメント配信で関連性の高い情報のみを届けましょう。また、友だち追加直後のあいさつメッセージで「配信頻度」と「届く内容」を明記することも効果的です。
</div>
            `,
            quiz: [
                {
                    id: "q401_1",
                    type: "choice",
                    question: "LINE公式アカウントの「コミュニケーションプラン」の月額料金と無料メッセージ数は？",
                    options: ["0円・100通", "0円・200通", "3,000円・500通", "5,000円・1,000通"],
                    answer: 1,
                    explanation: "コミュニケーションプランは月額0円で、200通/月の無料メッセージが含まれます。"
                },
                {
                    id: "q401_2",
                    type: "choice",
                    question: "LINE公式アカウントのリッチメニューの説明として正しいものはどれですか？",
                    options: [
                        "タイムラインに表示される広告枠",
                        "トーク画面下部に常時表示される固定メニュー",
                        "友だち追加時に自動送信されるメッセージ",
                        "ライブ配信中に表示される商品リスト"
                    ],
                    answer: 1,
                    explanation: "リッチメニューはトーク画面下部に常時表示される固定メニューで、ユーザーの行動導線を設計する重要な要素です。"
                },
                {
                    id: "q401_3",
                    type: "choice",
                    question: "LINE公式アカウントの友だち追加後の平均的なブロック率はどのくらいですか？",
                    options: ["5〜10%", "10〜15%", "20〜30%", "40〜50%"],
                    answer: 2,
                    explanation: "友だち追加後のブロック率は平均20〜30%とされています。配信頻度の最適化やセグメント配信でブロック率を低減できます。"
                },
                {
                    id: "q401_4",
                    type: "fill",
                    question: "日本国内のLINE月間アクティブユーザー数は約何万人ですか？（数字のみ）",
                    answer: "9700",
                    explanation: "日本国内のLINE月間アクティブユーザーは約9,700万人で、日本人口の約77%に相当します。"
                }
            ]
        },
        {
            id: 402,
            title: "LINE運用の実践",
            duration: "15分",
            content: `
<h2>チャットボットの種類と活用</h2>
<p>LINE公式アカウントでは、自動応答の仕組みを活用して<strong>24時間対応</strong>や<strong>業務効率化</strong>を実現できます。</p>

<div class="info-box tip">
<div class="info-box-title">3つの自動応答タイプ</div>
<table>
<tr><th>タイプ</th><th>仕組み</th><th>適した用途</th></tr>
<tr><td><strong>応答メッセージ</strong></td><td>キーワードに完全一致した場合に自動返信</td><td>よくある質問への回答、営業時間案内</td></tr>
<tr><td><strong>AI応答メッセージ</strong></td><td>AIがメッセージ内容を判別して自動返信</td><td>一般的な問い合わせ、カテゴリ別の案内</td></tr>
<tr><td><strong>Messaging API</strong></td><td>外部システムと連携した高度なBot開発</td><td>予約システム、ECサイト連携、CRM統合</td></tr>
</table>
</div>

<h3>応答メッセージの設計例</h3>
<ul>
<li>「営業時間」→ 店舗の営業時間を自動返信</li>
<li>「予約」→ 予約ページのURLを自動返信</li>
<li>「メニュー」→ カードタイプメッセージでメニュー一覧を表示</li>
<li>「クーポン」→ 最新のクーポンを自動配信</li>
</ul>

<h2>クーポン・ショップカードの活用</h2>
<h3>クーポン機能</h3>
<p>LINE公式アカウントのクーポン機能は、<strong>デジタルクーポン</strong>を簡単に作成・配信できます。</p>
<table>
<tr><th>設定項目</th><th>内容</th></tr>
<tr><td>クーポン名</td><td>「ドリンク1杯無料」「10%OFFクーポン」など</td></tr>
<tr><td>有効期限</td><td>開始日〜終了日を設定</td></tr>
<tr><td>利用回数</td><td>1回限り / 繰り返し利用可能</td></tr>
<tr><td>抽選機能</td><td>当選確率を設定してゲーム性を追加</td></tr>
<tr><td>利用条件</td><td>「3,000円以上のお買い上げで」など</td></tr>
</table>

<h3>ショップカード</h3>
<p>紙のスタンプカードをデジタル化した機能です。来店促進とリピート率向上に効果的です。</p>
<ul>
<li>QRコード読み取りでポイント付与</li>
<li>ポイント達成で自動的にクーポンを配信</li>
<li>有効期限設定で再来店を促進</li>
<li>ポイント付与履歴の確認が可能</li>
</ul>

<h2>LIFF（LINE Front-end Framework）</h2>
<p>LIFFは<strong>LINEアプリ内でWebアプリを動作</strong>させるフレームワークです。ブラウザを開くことなく、LINE内でリッチな体験を提供できます。</p>

<div class="info-box success">
<div class="info-box-title">LIFFの活用例</div>
<ul>
<li><strong>会員カード:</strong> LINE内で会員証を表示。バーコードやQRコードでPOS連携</li>
<li><strong>予約フォーム:</strong> カレンダーから日時選択。LINE通知で予約リマインド</li>
<li><strong>アンケート:</strong> リッチなUIでアンケートを実施。回答データをCRMに連携</li>
<li><strong>ECサイト:</strong> LINE内でそのまま商品閲覧・購入が可能</li>
</ul>
</div>

<h2>LINE公式アカウントの分析指標</h2>
<p>効果的な運用には、以下の主要指標を定期的にモニタリングすることが不可欠です。</p>

<div class="info-box formula">
<div class="info-box-title">主要KPI</div>
<table>
<tr><th>指標</th><th>目安</th><th>改善方法</th></tr>
<tr><td><strong>開封率</strong></td><td>60〜80%</td><td>配信時間の最適化、件名の工夫</td></tr>
<tr><td><strong>クリック率</strong></td><td>10〜25%</td><td>CTA文言の最適化、リッチメッセージ活用</td></tr>
<tr><td><strong>ブロック率</strong></td><td>20〜30%（累計）</td><td>セグメント配信、頻度最適化</td></tr>
<tr><td><strong>友だち純増数</strong></td><td>施策次第</td><td>友だち追加施策の強化</td></tr>
<tr><td><strong>コンバージョン</strong></td><td>業種次第</td><td>配信内容と導線の改善</td></tr>
</table>
</div>

<h2>CRM連携</h2>
<p>LINE公式アカウントを外部のCRM（顧客管理）システムと連携することで、<strong>より精度の高いOne to Oneコミュニケーション</strong>が可能になります。</p>
<ul>
<li><strong>Messaging API活用:</strong> ユーザーのLINE IDと自社顧客DBを紐づけ</li>
<li><strong>購買履歴に基づく配信:</strong> 過去の購入商品に関連した商品をレコメンド</li>
<li><strong>ステップ配信:</strong> 友だち追加日を起点に、段階的にメッセージを自動配信</li>
<li><strong>外部ツール連携:</strong> Lステップ、エルメ等のLINE拡張ツールの活用</li>
</ul>

<div class="info-box warning">
<div class="info-box-title">個人情報の取り扱い</div>
CRM連携で顧客データを扱う際は、プライバシーポリシーの整備と、LINE公式アカウントの利用規約への準拠が必須です。特にMessaging APIで取得できるユーザー情報の取り扱いには注意が必要です。
</div>
            `,
            quiz: [
                {
                    id: "q402_1",
                    type: "choice",
                    question: "LINE公式アカウントの自動応答タイプのうち、外部システムと連携した高度なBot開発が可能なものはどれですか？",
                    options: ["応答メッセージ", "AI応答メッセージ", "Messaging API", "リッチメニュー"],
                    answer: 2,
                    explanation: "Messaging APIは外部システムと連携した高度なBot開発が可能で、予約システムやECサイト連携、CRM統合などに活用できます。"
                },
                {
                    id: "q402_2",
                    type: "choice",
                    question: "LIFFの説明として正しいものはどれですか？",
                    options: [
                        "LINEの広告配信プラットフォーム",
                        "LINEアプリ内でWebアプリを動作させるフレームワーク",
                        "LINE公式アカウントの分析ツール",
                        "LINEのポイントプログラム"
                    ],
                    answer: 1,
                    explanation: "LIFF（LINE Front-end Framework）はLINEアプリ内でWebアプリを動作させるフレームワークで、会員カードや予約フォームなどをLINE内で提供できます。"
                },
                {
                    id: "q402_3",
                    type: "choice",
                    question: "LINE公式アカウントのメッセージ開封率の一般的な目安はどのくらいですか？",
                    options: ["20〜40%", "40〜60%", "60〜80%", "80〜95%"],
                    answer: 2,
                    explanation: "LINE公式アカウントのメッセージ開封率の目安は60〜80%です。メールマーケティング（20〜30%）と比較して非常に高い数値です。"
                },
                {
                    id: "q402_4",
                    type: "fill",
                    question: "紙のスタンプカードをデジタル化したLINE公式アカウントの機能名は？",
                    answer: "ショップカード",
                    explanation: "ショップカードは紙のスタンプカードをデジタル化した機能で、QRコード読み取りでポイントを付与し、来店促進とリピート率向上に効果的です。"
                }
            ]
        },
        {
            id: 403,
            title: "Facebook運用",
            duration: "15分",
            content: `
<h2>Facebookページの最適化</h2>
<p>Facebookは世界で<strong>約30億人</strong>のユーザーを持つ最大規模のSNSです。日本国内の月間アクティブユーザーは約2,600万人で、<strong>30〜50代のビジネスパーソン</strong>が主要ユーザー層です。</p>

<div class="info-box tip">
<div class="info-box-title">ページ最適化チェックリスト</div>
<ul>
<li><strong>プロフィール画像:</strong> ロゴを使用。180×180px以上</li>
<li><strong>カバー画像:</strong> ブランドを表現する画像。820×312px推奨</li>
<li><strong>基本情報:</strong> 住所、電話番号、営業時間、Webサイト、カテゴリを完全に入力</li>
<li><strong>CTAボタン:</strong> 「予約する」「お問い合わせ」「購入する」等を設定</li>
<li><strong>ページの説明:</strong> 事業内容とユーザーへの価値を簡潔に記載</li>
<li><strong>ユーザーネーム:</strong> ブランド名でカスタムURL（facebook.com/ブランド名）を取得</li>
</ul>
</div>

<h2>Facebookアルゴリズムの特徴</h2>
<p>Facebookのアルゴリズムは2018年の大改修以降、<strong>有意義なインタラクション（Meaningful Interactions）</strong>を重視しています。</p>

<div class="info-box formula">
<div class="info-box-title">アルゴリズムの評価要素</div>
<table>
<tr><th>要素</th><th>重み</th><th>説明</th></tr>
<tr><td><strong>コメント（特に長文）</strong></td><td>最高</td><td>ユーザー間の会話を促す投稿が最も評価される</td></tr>
<tr><td><strong>シェア→個人メッセージ</strong></td><td>非常に高い</td><td>メッセンジャーで友人にシェアされた投稿</td></tr>
<tr><td><strong>シェア→タイムライン</strong></td><td>高い</td><td>自分のタイムラインにシェアされた投稿</td></tr>
<tr><td><strong>リアクション</strong></td><td>中程度</td><td>いいね等のリアクション。「超いいね」等の感情リアクションはより高評価</td></tr>
<tr><td><strong>クリック</strong></td><td>低〜中</td><td>リンククリックや画像の拡大表示</td></tr>
</table>
</div>

<div class="info-box warning">
<div class="info-box-title">エンゲージメントベイト対策</div>
「いいねしてね！」「シェアしてね！」などの直接的なエンゲージメント誘導（エンゲージメントベイト）は、アルゴリズムによってペナルティを受けます。自然な会話を促す質問形式や、価値のあるコンテンツで有機的なエンゲージメントを獲得しましょう。
</div>

<h2>Facebookグループの活用</h2>
<p>Facebookグループは<strong>コミュニティ構築</strong>に最適な機能です。ページの投稿よりもフィードに表示されやすく、メンバー間の深いつながりを形成できます。</p>

<h3>グループ運営のポイント</h3>
<ul>
<li><strong>ルール設定:</strong> 明確なコミュニティガイドラインを策定</li>
<li><strong>定期コンテンツ:</strong> 曜日テーマ（月曜は質問、金曜は成果報告等）</li>
<li><strong>モデレーション:</strong> スパムや不適切投稿の迅速な対応</li>
<li><strong>メンバー承認:</strong> 質問を設定して参加意識を高める</li>
<li><strong>インサイト:</strong> アクティブメンバー、投稿頻度、成長率を分析</li>
</ul>

<h2>Facebook Reels</h2>
<p>Facebook Reelsは<strong>90秒以内のショート動画</strong>機能です。フォロワー外へのリーチ拡大に効果的で、Instagramと同様にリール専用のフィードが用意されています。</p>
<ul>
<li>Instagram Reelsとのクロス投稿が可能</li>
<li>テキストオーバーレイ、音楽、エフェクトの追加</li>
<li>リーチ拡大はフォロワー数に依存しない</li>
</ul>

<h2>Facebookイベント機能</h2>
<p>オフライン・オンラインイベントの告知・集客に強力な機能です。</p>
<ul>
<li><strong>イベントページ作成:</strong> 日時、場所、説明、チケットリンクを設定</li>
<li><strong>参加表明:</strong> 「参加予定」「興味あり」でソーシャルプルーフを形成</li>
<li><strong>リマインダー:</strong> イベント前に自動的に通知</li>
<li><strong>イベント広告:</strong> ターゲット層へのイベント広告配信</li>
</ul>

<h2>Meta Business Suiteの活用</h2>
<p>Meta Business Suiteは、Facebook・InstagramのビジネスアカウントをCまとめて管理</strong>できる無料ツールです。</p>

<div class="info-box success">
<div class="info-box-title">Meta Business Suiteの主な機能</div>
<ul>
<li><strong>投稿管理:</strong> Facebook/Instagramへの投稿をまとめて作成・スケジュール</li>
<li><strong>受信トレイ:</strong> 両プラットフォームのDM・コメントを一元管理</li>
<li><strong>インサイト:</strong> 統合的なアナリティクスで成果を分析</li>
<li><strong>広告管理:</strong> 簡易的な広告作成と管理</li>
<li><strong>コマース:</strong> ショップ機能の管理</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q403_1",
                    type: "choice",
                    question: "Facebookアルゴリズムが2018年以降最も重視している要素は何ですか？",
                    options: [
                        "投稿の画質と動画の長さ",
                        "有意義なインタラクション（Meaningful Interactions）",
                        "ハッシュタグの数と適切さ",
                        "投稿頻度とスケジュールの一貫性"
                    ],
                    answer: 1,
                    explanation: "2018年の大改修以降、Facebookは有意義なインタラクション（Meaningful Interactions）を重視しています。特にコメントやシェアが評価されます。"
                },
                {
                    id: "q403_2",
                    type: "choice",
                    question: "Facebookのアルゴリズムでペナルティを受ける行為はどれですか？",
                    options: [
                        "質問形式の投稿",
                        "エンゲージメントベイト",
                        "長文の投稿",
                        "画像付き投稿"
                    ],
                    answer: 1,
                    explanation: "「いいねしてね！」「シェアしてね！」などの直接的なエンゲージメント誘導（エンゲージメントベイト）は、アルゴリズムによってペナルティを受けます。"
                },
                {
                    id: "q403_3",
                    type: "choice",
                    question: "Meta Business Suiteで管理できるプラットフォームの組み合わせはどれですか？",
                    options: [
                        "Facebook・X（Twitter）",
                        "Facebook・Instagram",
                        "Facebook・TikTok",
                        "Facebook・LINE"
                    ],
                    answer: 1,
                    explanation: "Meta Business SuiteはFacebookとInstagramのビジネスアカウントをまとめて管理できるツールです。"
                },
                {
                    id: "q403_4",
                    type: "fill",
                    question: "Facebook Reelsの最大動画尺は何秒ですか？（数字のみ）",
                    answer: "90",
                    explanation: "Facebook Reelsは90秒以内のショート動画機能です。Instagramとのクロス投稿も可能です。"
                }
            ]
        },
        {
            id: 404,
            title: "その他とクロスプラットフォーム",
            duration: "15分",
            content: `
<h2>その他の主要プラットフォーム</h2>
<p>X・Instagram・TikTok・YouTube・LINE・Facebook以外にも、目的やターゲットに応じて活用すべきプラットフォームがあります。</p>

<h3>Pinterest</h3>
<p>「<strong>ビジュアル検索エンジン</strong>」として機能するプラットフォームです。ユーザーは購買意欲が高く、EC連携との相性が抜群です。</p>
<table>
<tr><th>特徴</th><th>詳細</th></tr>
<tr><td>ユーザー層</td><td>20〜40代女性が中心。インテリア、ファッション、レシピに強い</td></tr>
<tr><td>コンテンツ寿命</td><td>非常に長い（数ヶ月〜数年）。ピンは時間が経っても検索で発見される</td></tr>
<tr><td>購買意欲</td><td>「何かを見つけたい」意図で利用。他SNSより購買に近い</td></tr>
<tr><td>SEO効果</td><td>Google画像検索にも表示。外部サイトへのトラフィック誘導に有効</td></tr>
</table>

<h3>LinkedIn</h3>
<p><strong>BtoBマーケティングとプロフェッショナルネットワーキング</strong>のプラットフォームです。</p>
<table>
<tr><th>特徴</th><th>詳細</th></tr>
<tr><td>ユーザー層</td><td>ビジネスプロフェッショナル。意思決定者・経営層が多い</td></tr>
<tr><td>コンテンツ</td><td>業界知見、キャリア、企業文化、リーダーシップに関する投稿</td></tr>
<tr><td>リード獲得</td><td>BtoBリード獲得の最有力チャネル。広告のターゲティング精度が高い</td></tr>
<tr><td>採用活動</td><td>企業ページで求人掲載。社員の投稿がリクルーティングに貢献</td></tr>
</table>

<h3>note</h3>
<p>日本発の<strong>コンテンツプラットフォーム</strong>で、長文記事や有料コンテンツの配信に適しています。</p>
<ul>
<li><strong>SEO効果:</strong> ドメインパワーが強く、検索上位に表示されやすい</li>
<li><strong>有料記事:</strong> 記事単体の販売が可能。専門知識のマネタイズに最適</li>
<li><strong>マガジン機能:</strong> 記事をシリーズとしてまとめ、定期購読を提供</li>
<li><strong>企業アカウント:</strong> note proで企業ブランディングページを構築</li>
</ul>

<h3>Threads</h3>
<p>MetaがリリースしたX（Twitter）対抗の<strong>テキストベースSNS</strong>です。</p>
<ul>
<li>Instagramアカウントと連携。フォロワーの移行が容易</li>
<li>500文字までのテキスト、画像、動画を投稿</li>
<li>広告なしのクリーンなフィード（2025年時点）</li>
<li>Instagramと同じModeration基準で、比較的安全な環境</li>
</ul>

<h2>コンテンツリパーパス（1→多展開）</h2>
<p>一つのコンテンツを複数のプラットフォーム向けに<strong>再構成・再利用</strong>する手法です。制作コストを最小化しながら、各プラットフォームでの露出を最大化します。</p>

<div class="info-box success">
<div class="info-box-title">リパーパスの具体例: ブログ記事1本からの展開</div>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>ブログ記事（原本）</strong>
2,000〜3,000文字の詳細な記事を作成。これがすべての元コンテンツとなる。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>X（Twitter）: 要点スレッド</strong>
記事の要点を5〜10ツイートのスレッドに凝縮。最初のツイートにフックを入れ、最後に記事リンクを添付。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>Instagram: カルーセル投稿</strong>
記事のポイントを5〜10枚のスライドに視覚化。最終スライドにCTA（保存・フォロー促進）。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>TikTok / Reels: ショート動画</strong>
記事の核心を30〜60秒の動画で解説。テキストオーバーレイとナレーションで構成。
</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content">
<strong>YouTube: 解説動画</strong>
記事の内容を5〜10分の動画で深堀り解説。スライドやホワイトボードを活用。
</div>
</div>
<div class="step">
<div class="step-num">6</div>
<div class="step-content">
<strong>LINE: ダイジェスト配信</strong>
記事のダイジェストと「続きはこちら」のリンクをリッチメッセージで配信。
</div>
</div>
</div>
</div>

<h2>プラットフォーム選定フローチャート</h2>
<p>すべてのプラットフォームに手を出す必要はありません。以下の基準で<strong>自社に最適なプラットフォーム</strong>を選定しましょう。</p>

<div class="info-box formula">
<div class="info-box-title">選定基準フロー</div>
<table>
<tr><th>判断基準</th><th>選択肢</th></tr>
<tr><td><strong>ターゲット年齢が10〜20代</strong></td><td>TikTok → Instagram → YouTube</td></tr>
<tr><td><strong>ターゲット年齢が20〜30代</strong></td><td>Instagram → X → YouTube</td></tr>
<tr><td><strong>ターゲット年齢が30〜50代</strong></td><td>Facebook → LINE → YouTube</td></tr>
<tr><td><strong>BtoB / ビジネス向け</strong></td><td>LinkedIn → X → note</td></tr>
<tr><td><strong>ECサイト / 物販</strong></td><td>Instagram → Pinterest → TikTok</td></tr>
<tr><td><strong>実店舗の集客</strong></td><td>LINE → Instagram → Google ビジネスプロフィール</td></tr>
<tr><td><strong>専門知識の発信</strong></td><td>note → YouTube → X</td></tr>
<tr><td><strong>コミュニティ構築</strong></td><td>Facebook → LINE → Discord</td></tr>
</table>
</div>

<div class="info-box tip">
<div class="info-box-title">プラットフォーム運用の原則</div>
<ul>
<li><strong>まず1〜2つに集中:</strong> リソースが限られている場合、主力プラットフォームを決めて深く運用。中途半端な多展開は逆効果</li>
<li><strong>各プラットフォームの文化に合わせる:</strong> 同じ内容でもプラットフォームごとにトーンやフォーマットを調整</li>
<li><strong>データに基づく判断:</strong> 各プラットフォームのアナリティクスを比較し、ROIの高いチャネルにリソースを集中</li>
<li><strong>定期的な見直し:</strong> プラットフォームの流行は変化する。3〜6ヶ月ごとに戦略を見直す</li>
</ul>
</div>

<div class="info-box warning">
<div class="info-box-title">よくある失敗</div>
全プラットフォームに同じコンテンツをそのまま転載する「コピペ投稿」は避けましょう。各プラットフォームのアルゴリズムは、そのプラットフォームのネイティブコンテンツを優遇します。例えば、TikTokのウォーターマーク付き動画をInstagram Reelsに投稿すると、リーチが大幅に減少します。
</div>
            `,
            quiz: [
                {
                    id: "q404_1",
                    type: "choice",
                    question: "Pinterestの特徴として最も適切な説明はどれですか？",
                    options: [
                        "リアルタイムの情報共有に特化したSNS",
                        "ビジュアル検索エンジンとして機能するプラットフォーム",
                        "ビジネスプロフェッショナル向けのネットワーキングツール",
                        "短文テキストベースのコミュニケーションSNS"
                    ],
                    answer: 1,
                    explanation: "Pinterestは「ビジュアル検索エンジン」として機能し、ユーザーの購買意欲が高く、EC連携との相性が抜群です。"
                },
                {
                    id: "q404_2",
                    type: "choice",
                    question: "コンテンツリパーパスの説明として正しいものはどれですか？",
                    options: [
                        "コンテンツを完全に削除して新たに作り直すこと",
                        "他社のコンテンツを自社向けにコピーすること",
                        "一つのコンテンツを複数プラットフォーム向けに再構成すること",
                        "コンテンツの公開範囲を限定すること"
                    ],
                    answer: 2,
                    explanation: "コンテンツリパーパスは、一つのコンテンツを複数のプラットフォーム向けに再構成・再利用する手法です。制作コストを最小化しながら露出を最大化します。"
                },
                {
                    id: "q404_3",
                    type: "choice",
                    question: "BtoB向けのプラットフォーム選定として最も適切な組み合わせはどれですか？",
                    options: [
                        "TikTok → Instagram → Pinterest",
                        "LINE → Facebook → YouTube",
                        "LinkedIn → X → note",
                        "Instagram → TikTok → Threads"
                    ],
                    answer: 2,
                    explanation: "BtoB向けには LinkedIn → X → note の組み合わせが推奨されます。ビジネスプロフェッショナルへのリーチと専門知識の発信に適しています。"
                },
                {
                    id: "q404_4",
                    type: "fill",
                    question: "全プラットフォームに同じコンテンツをそのまま転載する避けるべき行為を何と呼びますか？（カタカナ4文字＋漢字2文字）",
                    answer: "コピペ投稿",
                    explanation: "「コピペ投稿」は各プラットフォームの文化やアルゴリズムに合わないため避けるべきです。各プラットフォームはネイティブコンテンツを優遇します。"
                }
            ]
        }
    ]
};
