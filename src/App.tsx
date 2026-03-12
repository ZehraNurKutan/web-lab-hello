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
          <h2>Hakkımda</h2>
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
            <div className="intro-content">
              <div>
                <p className="label">Hakkımda</p>
                <p>Merhabalar! Ben Zehra, teknolojiye ve tasarıma meraklı bir yazılım öğrencisiyim. Modern web teknolojileriyle kullanıcı dostu ve şık arayüzler geliştirmekten büyük keyif alıyorum.</p>
              </div>
              <div className="tech-stack">
                <p className="label">Kullandığım Teknolojiler</p>
                <ul>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>CSS3 / HTML5</li>
                  <li>Vite</li>
                  <li>Git / GitHub</li>
                </ul>
              </div>
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

          <article className="glass-card project-card">
            <img src={proje1Img} alt="Modern bir web panosu arayüzü ekran görüntüsü" className="project-img" />
            <h3>Dashboard UI</h3>
            <p className="label">Proje 1</p>
            <p className="description">Modern, karanlık mod destekli veri görselleştirme panosu.</p>
          </article>

          <article className="glass-card project-card">
            <img src={proje2Img} alt="Minimalist bir e-ticaret sitesi arayüzü ekran görüntüsü" className="project-img" />
            <h3>E-Commerce Web</h3>
            <p className="label">Proje 2</p>
            <p className="description">Temiz arayüzlü ve kullanıcı odaklı alışveriş platformu.</p>
          </article>

          <div className="glass-card intro-card">
            <p className="label">Hobiler & İlgi Alanları</p>
            <p className="value">Kodlama • Kitap Okuma • Yüzme • Tasarım</p>
          </div>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <div className="glass-card form-card">
            <form action="#" method="POST" noValidate>
              <fieldset>
                <legend>İletişim Formu</legend>

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
                    <option value="">-- Seçiniz --</option>
                    <option value="is">İş Teklifi</option>
                    <option value="soru">Soru</option>
                    <option value="oneri">Öneri</option>
                  </select>
                  <small id="subject-error" className="error-msg" role="alert"></small>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mesajınız:</label>
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

                <button type="submit" className="submit-btn">Gönder</button>
              </fieldset>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <p>&copy; 2025 Zehra Nur Kutan. Tüm hakları saklıdır.</p>
          <nav className="social-nav" aria-label="Sosyal Medya">
            <ul>
              <li><a href="https://github.com/ZehraNurKutan" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">X / Twitter</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
