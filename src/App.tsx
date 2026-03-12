import './App.css'
import profilImg from './assets/profil.png'
import proje1Img from './assets/proje1.png'
import proje2Img from './assets/proje2.png'

function App() {
  return (
    <div className="app-container">
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content" className="bento-grid">
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          {/* Header Card */}
          <div className="glass-card header-card">
            <figure className="profile-figure">
              <img src={profilImg} alt="Zehra Nur Kutan'in profesyonel portre fotoğrafı" />
              <figcaption>Zehra Nur Kutan</figcaption>
            </figure>
            <div className="header-text">
              <h1>Zehra Nur Kutan</h1>
              <h2>Yazılım Mühendisliği</h2>
            </div>
          </div>

          {/* Intro Card */}
          <div className="glass-card intro-card">
            <p className="label">Hakkımda</p>
            <div className="intro-text">
              <p>Merhabalar! Ben Zehra, teknolojiye ve tasarıma meraklı bir yazılım öğrencisiyim. Modern web teknolojileriyle kullanıcı dostu ve şık arayüzler geliştirmekten büyük keyif alıyorum.</p>
            </div>
          </div>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="glass-card status-card">
            <div className="status-pill">
              <span className="status-dot"></span>
              LIVE PORTFOLIO
            </div>
          </div>

          <div className="glass-card info-card-mini">
            <p className="label">Bölüm</p>
            <p className="value">Yazılım Mühendisliği</p>
          </div>

          <div className="glass-card info-card-mini">
            <p className="label">Ogrenci No</p>
            <p className="value">235541117</p>
          </div>

          <div className="glass-card project-card">
            <img src={proje1Img} alt="Modern bir web panosu arayüzü ekran görüntüsü" className="project-img" />
            <p className="label">Proje 1</p>
            <p className="value">Dashboard UI</p>
          </div>

          <div className="glass-card project-card">
            <img src={proje2Img} alt="Minimalist bir e-ticaret sitesi arayüzü ekran görüntüsü" className="project-img" />
            <p className="label">Proje 2</p>
            <p className="value">E-Commerce Web</p>
          </div>

          <div className="glass-card intro-card">
            <p className="label">Hobiler & İlgi Alanları</p>
            <p className="value">Kodlama • Kitap Okuma • Yüzme • Tasarım</p>
          </div>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          <div className="glass-card form-card">
            <form action="#" method="POST" novalidate>
              <fieldset>
                <legend>Iletisim Formu</legend>

                <div className="form-group">
                  <label htmlFor="name">Ad Soyad:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    minLength={2}
                    aria-describedby="name-error"
                  />
                  <small id="name-error" className="error-msg" role="alert"></small>
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-posta:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-describedby="email-error"
                  />
                  <small id="email-error" className="error-msg" role="alert"></small>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Konu:</label>
                  <select id="subject" name="subject" required aria-describedby="subject-error">
                    <option value="">-- Seciniz --</option>
                    <option value="is">Is Teklifi</option>
                    <option value="soru">Soru</option>
                    <option value="oneri">Oneri</option>
                  </select>
                  <small id="subject-error" className="error-msg" role="alert"></small>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mesajiniz:</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    minLength={10}
                    aria-describedby="message-error"
                  ></textarea>
                  <small id="message-error" className="error-msg" role="alert"></small>
                </div>

                <button type="submit" className="submit-btn">Gonder</button>
              </fieldset>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Zehra Nur Kutan. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  )
}

export default App
