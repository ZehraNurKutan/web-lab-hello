function App() {
  const containerStyle = {
    padding: '20px',
    borderRadius: '15px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
    maxWidth: '500px',
    margin: '40px auto',
    textAlign: 'center' as const,
    fontFamily: 'Outfit, sans-serif'
  };

  return (
    <div style={containerStyle}>
      <h1>Web Tasarimi ve Programlama </h1>
      <h2>LAB -1</h2>
      <p>Ad Soyad: Zehra Nur KUTAN</p>
      <p>Ogrenci No: 235541117</p>
      <p>Bolum: Bilgisayar Programciligi</p>
      <p>Hobiler: Kodlama, Kitap Okumak, Doga Yuruyusleri</p>
      <p>Bu benim ilk React projem! Dunyaya merhaba!</p>
    </div>
  )
}

export default App
