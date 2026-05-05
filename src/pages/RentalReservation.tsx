import './Forms.css';

const RentalReservation = () => {
  return (
    <div className="form-page">
      <section className="page-header" style={{backgroundColor: '#003366'}}>
        <div className="container">
          <h1>レンタカー予約・空車確認</h1>
          <p>ご希望の日時と車種を選択してください。スタッフより折り返しご連絡いたします。</p>
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
              <label>電話番号</label>
              <input type="tel" placeholder="090-0000-0000" required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>貸出希望日</label>
                <input type="date" required />
              </div>
              <div className="form-group">
                <label>返却希望日</label>
                <input type="date" required />
              </div>
            </div>

            <div className="form-group">
              <label>希望車種クラス</label>
              <select required>
                <option value="">選択してください</option>
                <option value="A-1">A-1クラス (軽自動車 2ドア等)</option>
                <option value="A-2">A-2クラス (軽自動車 4ドア等)</option>
                <option value="B-1">B-1クラス (コンパクトカー等)</option>
                <option value="other">その他 (相談したい)</option>
              </select>
            </div>

            <div className="form-group">
              <label>ご質問・ご要望</label>
              <textarea rows={4} placeholder="チャイルドシートの有無など、ご希望があれば入力してください"></textarea>
            </div>

            <button type="submit" className="btn-primary submit-btn" style={{backgroundColor: '#003366'}}>
              送信する（予約を確定しません）
            </button>
            <p style={{marginTop: '15px', fontSize: '0.85rem', color: '#666', textAlign: 'center'}}>
              ※送信後、担当者より空車状況を確認し、ご連絡させていただきます。
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RentalReservation;
