export type DiagnosisTypeId =
  | "matching_app"
  | "marriage_app"
  | "agency"
  | "introduction"
  | "community"
  | "event"
  | "self_reflection"
  | "rest";

export type DiagnosisOption = { label: string; type: DiagnosisTypeId };
export type DiagnosisQuestion = {
  id: number;
  question: string;
  options: [DiagnosisOption, DiagnosisOption, DiagnosisOption, DiagnosisOption];
};
export type DiagnosisResult = {
  id: DiagnosisTypeId;
  name: string;
  shortDescription: string;
  tendency: string;
  focus: string;
  nextStep: string;
};

export const diagnosisQuestions: DiagnosisQuestion[] = [
  { id: 1, question: "新しい出会いを考えるとき、いちばん近い気持ちは？", options: [
    { label: "まずは気軽に幅広く見てみたい", type: "matching_app" },
    { label: "将来を意識しながら進めたい", type: "marriage_app" },
    { label: "今は少し気持ちを整えたい", type: "self_reflection" },
    { label: "焦らずマイペースで進めたい", type: "rest" },
  ]},
  { id: 2, question: "初対面の人と話す場として、安心しやすいのは？", options: [
    { label: "アプリのメッセージから", type: "matching_app" },
    { label: "信頼できる人の紹介", type: "introduction" },
    { label: "少人数のイベント", type: "event" },
    { label: "サポートがある場", type: "agency" },
  ]},
  { id: 3, question: "出会いに使える時間はどれくらい？", options: [
    { label: "すきま時間を活用したい", type: "matching_app" },
    { label: "週に1〜2回は確保できる", type: "community" },
    { label: "計画的にしっかり取りたい", type: "marriage_app" },
    { label: "今は無理せず少しずつ", type: "rest" },
  ]},
  { id: 4, question: "相手選びで重視したいことは？", options: [
    { label: "価値観の相性", type: "marriage_app" },
    { label: "話しやすさ・自然体", type: "community" },
    { label: "第三者の視点や助言", type: "agency" },
    { label: "まずは自分の軸の確認", type: "self_reflection" },
  ]},
  { id: 5, question: "新しい場に参加するときの自分は？", options: [
    { label: "気になるものは試してみる", type: "event" },
    { label: "共通の趣味があると入りやすい", type: "community" },
    { label: "知っている人がいると安心", type: "introduction" },
    { label: "準備してから動きたい", type: "agency" },
  ]},
  { id: 6, question: "出会いに関して不安を感じるとき、近いのは？", options: [
    { label: "メッセージのやり取りが続くか", type: "matching_app" },
    { label: "将来のすり合わせができるか", type: "marriage_app" },
    { label: "自分の気持ちがまだ曖昧", type: "self_reflection" },
    { label: "疲れてしまわないか", type: "rest" },
  ]},
  { id: 7, question: "誰かに相談するとしたら？", options: [
    { label: "友人・知人に気軽に相談", type: "introduction" },
    { label: "専門的なアドバイスを受けたい", type: "agency" },
    { label: "同じ興味を持つ人と話したい", type: "community" },
    { label: "まず自分で整理してみたい", type: "self_reflection" },
  ]},
  { id: 8, question: "理想の進め方に近いのは？", options: [
    { label: "日常の延長で自然に", type: "community" },
    { label: "短期間で候補を比較しながら", type: "matching_app" },
    { label: "段階を踏んで丁寧に", type: "agency" },
    { label: "まずはペースを整えてから", type: "rest" },
  ]},
  { id: 9, question: "休日の過ごし方として近いのは？", options: [
    { label: "新しい体験や企画に参加", type: "event" },
    { label: "親しい人と落ち着いて過ごす", type: "introduction" },
    { label: "目的を決めて行動する", type: "marriage_app" },
    { label: "まずはしっかり休む", type: "rest" },
  ]},
  { id: 10, question: "今の自分に一番しっくりくる言葉は？", options: [
    { label: "行動しながら調整したい", type: "event" },
    { label: "安心できる方法を選びたい", type: "agency" },
    { label: "自分に合う形を少しずつ見つけたい", type: "self_reflection" },
    { label: "まずは無理しないことを大切にしたい", type: "rest" },
  ]},
];

export const diagnosisResults: Record<DiagnosisTypeId, DiagnosisResult> = {
  matching_app: { id: "matching_app", name: "マッチングアプリ型", shortDescription: "気軽に選択肢を広げながら、自分に合う相手像を見つけやすいタイプです。", tendency: "行動の初速があり、まず試してみる姿勢が強めです。", focus: "条件だけでなく、やり取りの心地よさにも目を向けると続けやすいです。", nextStep: "プロフィールで大切にしたい価値観を3つに絞って言語化してみましょう。" },
  marriage_app: { id: "marriage_app", name: "婚活アプリ型", shortDescription: "将来のイメージを大切にしながら、計画的に進めやすいタイプです。", tendency: "目的意識がはっきりしていて、判断軸を持って選べる傾向があります。", focus: "条件確認に加えて、会話のテンポや価値観の柔らかい部分も確かめると安心です。", nextStep: "譲れない条件と、話し合いで調整できる条件を分けて整理してみましょう。" },
  agency: { id: "agency", name: "結婚相談所型", shortDescription: "伴走や客観的なサポートがある環境を選ぶと進めやすいタイプです。", tendency: "丁寧さと安定感を重視し、納得しながら進みたい気持ちが強めです。", focus: "支援を受ける際は、希望や不安を具体的に共有するとミスマッチを減らせます。", nextStep: "サポートに期待することを3点メモして、優先順位をつけてみましょう。" },
  introduction: { id: "introduction", name: "友人・知人紹介型", shortDescription: "信頼関係のあるつながりから、自然に出会いを広げやすいタイプです。", tendency: "安心感のある環境で本来の魅力を出しやすい傾向があります。", focus: "紹介をお願いするときは、希望の雰囲気を具体的に伝えると精度が上がります。", nextStep: "紹介してほしい人物像を、言いやすい一言でまとめてみましょう。" },
  community: { id: "community", name: "趣味・コミュニティ型", shortDescription: "共通点のある場で、会話のきっかけを作りやすいタイプです。", tendency: "関係をゆっくり育てることに向いている可能性があります。", focus: "出会い目的だけに寄せすぎず、まずは活動そのものを楽しむ視点が大切です。", nextStep: "続けられそうなコミュニティ候補を2つ書き出して比較してみましょう。" },
  event: { id: "event", name: "イベント参加型", shortDescription: "新しい体験の中で、テンポよく出会いの接点を作りやすいタイプです。", tendency: "フットワークが軽く、短時間で相手の雰囲気をつかむ力があります。", focus: "参加頻度を詰め込みすぎず、振り返りの時間を取ると判断が安定します。", nextStep: "参加後に『よかった点・違和感』を2行だけメモする習慣を試してみましょう。" },
  self_reflection: { id: "self_reflection", name: "まずは気持ち整理型", shortDescription: "行動の前に、自分の気持ちや希望を整えることで進みやすくなるタイプです。", tendency: "誠実に向き合う力があり、納得感を大切にする傾向があります。", focus: "『何を避けたいか』だけでなく『何を大切にしたいか』も言葉にすると前進しやすいです。", nextStep: "理想の関係性を、日常の場面で3つ具体化して書き出してみましょう。" },
  rest: { id: "rest", name: "少し休む・ペース調整型", shortDescription: "今は無理に動かず、心身の余白を作ることで選択肢が見えやすくなるタイプです。", tendency: "自分の状態を丁寧に感じ取る力があり、長期的には安定した判断につながります。", focus: "休む期間にも、小さな前向き行動を1つだけ入れると安心感が育ちます。", nextStep: "負担の少ない行動を1つ決めて、できる日だけ試す形にしてみましょう。" },
};

const tieBreakerOrder: DiagnosisTypeId[] = ["self_reflection", "rest", "introduction", "community", "matching_app", "marriage_app", "event", "agency"];

export function calculateDiagnosisResult(answers: DiagnosisTypeId[]): DiagnosisResult {
  const scores = new Map<DiagnosisTypeId, number>();
  for (const answer of answers) scores.set(answer, (scores.get(answer) ?? 0) + 1);
  const topType = tieBreakerOrder.reduce((best, current) => ((scores.get(current) ?? 0) > (scores.get(best) ?? 0) ? current : best), tieBreakerOrder[0]);
  return diagnosisResults[topType];
}
