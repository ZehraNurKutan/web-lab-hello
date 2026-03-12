import './App.css'

function App() {
  return (
    <div className="app-container">
      <div className="bento-grid">
        {/* Header Card */}
        <div className="glass-card header-card">
          <h1>Zehra Nur Kutan</h1>
          <h2>Web Tasarimi ve Programlama</h2>
        </div>

        {/* Status Card */}
        <div className="glass-card status-card">
          <div className="status-pill">
            <span className="status-dot"></span>
            LIVE PORTFOLIO
          </div>
        </div>

        {/* Info Card: ID */}
        <div className="glass-card info-card-mini">
          <p className="label">Ogrenci No</p>
          <p className="value">235541117</p>
        </div>

        {/* Info Card: Department */}
        <div className="glass-card info-card-mini">
          <p className="label">Bölüm</p>
          <p className="value">Bilgisayar Programcılığı</p>
        </div>

        {/* Info Card: Hobbies */}
        <div className="glass-card intro-card">
          <p className="label">Hobiler & İlgi Alanları</p>
          <p className="value">Kodlama • Kitap Okuma • Yüzme • Tasarım</p>
        </div>

        {/* Intro Card */}
        <div className="glass-card intro-card">
          <p className="label">Hakkımda</p>
          <div className="intro-text">
            <p>Merhabalar! Ben Zehra, teknolojiye ve tasarıma meraklı bir yazılım öğrencisiyim. Modern web teknolojileriyle kullanıcı dostu ve şık arayüzler geliştirmekten büyük keyif alıyorum.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
