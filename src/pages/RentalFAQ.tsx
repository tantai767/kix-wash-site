import './FAQ.css';

const RentalFAQ = () => {
  const faqs = [
    {
      cat: 'ご利用・予約について',
      questions: [
        { q: '予約はどのようにすればいいですか？', a: '公式予約サイトより空車状況をご確認の上、ご予約ください。' },
        { q: '免許証以外に必要なものはありますか？', a: '健康保険証などの現住所が確認できる書類が必要になる場合がございます。' }
      ]
    },
    {
      cat: '料金・支払いについて',
      questions: [
        { q: '支払方法は何がありますか？', a: '現金、各種クレジットカード、電子マネー等に対応しております。' },
        { q: '中途解約による返金はありますか？', a: '規定の計算方法に基づき、未使用期間分の料金を精算させていただきます。' }
      ]
    },
    {
      cat: '事故・トラブルについて',
      questions: [
        { q: '事故を起こしてしまった場合は？', a: 'まずは負傷者の救護を行い、警察への届出と店舗への連絡をお願いします。' },
        { q: 'パンクしてしまった場合は？', a: 'パンク修理費用はお客様負担となります。スペアタイヤへの交換、またはロードサービスをご利用ください。' }
      ]
    }
  ];

  return (
    <div className="faq-page">
      <section className="page-header" style={{backgroundColor: '#003366'}}>
        <div className="container">
          <h1>レンタカーよくある質問</h1>
          <p>レンタカーご利用に関するご質問をまとめました</p>
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
                        <span className="q-badge" style={{backgroundColor: '#003366'}}>Q</span>
                        <h3>{item.q}</h3>
                      </div>
                      <div className="a-row">
                        <span className="a-badge" style={{backgroundColor: '#ffd700', color: '#003366'}}>A</span>
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

export default RentalFAQ;
