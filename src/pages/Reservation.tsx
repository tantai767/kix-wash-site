import './Forms.css';

const Reservation = () => {
  return (
    <div className="form-page">
      <section className="page-header">
        <div className="container">
          <h1>ネット予約</h1>
          <p>24時間いつでも予約可能です</p>
        </div>
      </section>

      <section className="form-section section-padding">
        <div className="container">
          <form className="custom-form">
            <div className="form-group">
              <label>お名前</label>
              <input type="text" placeholder="山田 太郎" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>電話番号</label>
                <input type="tel" placeholder="090-0000-0000" required />
              </div>
              <div className="form-group">
                <label>メールアドレス</label>
                <input type="email" placeholder="example@mail.com" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>洗車日</label>
                <input type="date" required />
              </div>
              <div className="form-group">
                <label>駐車場場所</label>
                <select required>
                  <option value="">選択してください</option>
                  <option value="P1">P1 駐車場</option>
                  <option value="P2">P2 駐車場</option>
                  <option value="P3">P3 駐車場</option>
                  <option value="P4">P4 駐車場</option>
                  <option value="P5">P5 駐車場</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>車種サイズ</label>
              <select required>
                <option value="">選択してください</option>
                <option value="S">Sサイズ (軽自動車等)</option>
                <option value="M">Mサイズ (プリウス等)</option>
                <option value="L">Lサイズ (クラウン等)</option>
                <option value="LL">LLサイズ (アルファード等)</option>
              </select>
            </div>
            <div className="form-group">
              <label>車種・ナンバー</label>
              <input type="text" placeholder="トヨタ プリウス 12-34" required />
            </div>
            <button type="submit" className="btn-primary submit-btn">予約内容を確認する</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Reservation;
