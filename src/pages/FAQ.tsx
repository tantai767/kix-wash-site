import { Search } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      cat: '予約について',
      questions: [
        { q: '当日の予約は可能ですか？', a: '作業枠に空きがある場合は可能です。お急ぎの方はお電話にてお問い合わせください。' },
        { q: '予約のキャンセル料はかかりますか？', a: '前日までのキャンセルは無料です。当日の場合は50%のキャンセル料を申し受ける場合がございます。' }
      ]
    },
    {
      cat: '作業について',
      questions: [
        { q: '雨の日でも洗車できますか？', a: '関空の駐車場は屋根があるエリアが多いため、基本的には雨天でも作業可能です。' },
        { q: '車の中（内装）も掃除してくれますか？', a: '現在は外装のみのサービスとなっております。' }
      ]
    },
    {
      cat: '場所・支払いについて',
      questions: [
        { q: 'どこの駐車場でも大丈夫ですか？', a: '関西国際空港内のP1、P2、P3、P4、P5駐車場であればどこでも対応可能です。' },
        { q: '支払方法は何がありますか？', a: 'ネット予約時のクレジットカード決済、または作業完了後のオンライン決済に対応しています。' }
      ]
    }
  ];

  return (
    <div className="faq-page">
      <section className="page-header">
        <div className="container">
          <h1>よくある質問</h1>
          <p>お客様から寄せられる代表的なご質問をまとめました</p>
        </div>
      </section>

      <section className="faq-content section-padding">
        <div className="container">
          <div className="faq-grid">
            {faqs.map((group, idx) => (
              <div key={idx} className="faq-category">
                <h2>{group.cat}</h2>
                <div className="qa-list">
                  {group.questions.map((item, qIdx) => (
                    <div key={qIdx} className="qa-card">
                      <div className="q-row">
                        <span className="q-badge">Q</span>
                        <h3>{item.q}</h3>
                      </div>
                      <div className="a-row">
                        <span className="a-badge">A</span>
                        <p>{item.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
