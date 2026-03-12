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
          {/* form buraya */}
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Zehra Nur Kutan. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  )
}

export default App
