import './Forms.css';

const Contact = () => {
  return (
    <div className="form-page">
      <section className="page-header">
        <div className="container">
          <h1>お問い合わせ</h1>
          <p>ご不明な点はお気軽にご相談ください</p>
        </div>
      </section>

      <section className="form-section section-padding">
        <div className="container">
          <form className="custom-form narrow-form">
            <div className="form-group">
              <label>お名前</label>
              <input type="text" placeholder="山田 太郎" required />
            </div>
            <div className="form-group">
              <label>メールアドレス</label>
              <input type="email" placeholder="example@mail.com" required />
            </div>
            <div className="form-group">
              <label>お問い合わせ内容</label>
              <textarea rows={6} placeholder="ご質問やご相談内容を入力してください"></textarea>
            </div>
            <button type="submit" className="btn-primary submit-btn">送信する</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
