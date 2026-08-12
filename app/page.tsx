const menu = [
  { name: "Ember Stack", detail: "Çift smash köfte · yıllandırılmış cheddar · köz soğan · özel sos", price: "$18" },
  { name: "Karabiber Melt", detail: "Dry-aged dana · pepper jack · köz arpacık · karabiber jus", price: "$19" },
  { name: "Acı Ballı Tavuk", detail: "Çıtır tavuk · tütsülenmiş bal · turşu biber · ranch salata", price: "$17" },
];

const moments = ["AÇIK ATEŞTE PİŞİRİLİR", "YEREL DANA ETİ", "GECE BOYU AÇIK", "HER GÜN TAZE"];

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <a className="brand" href="#top" aria-label="Ember House ana sayfa"><span className="brand-mark">E</span><span>EMBER HOUSE</span></a>
        <nav aria-label="Ana menü"><a href="#menu">Menü</a><a href="#story">Ateşimiz</a><a href="#visit">Ziyaret</a></nav>
        <a className="nav-cta" href="#visit">Masa Ayır <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" /><div className="hero-shade" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Ateşle pişti. Akılda kaldı.</p>
          <h1>BURGERLER<br /><em>ATEŞTE</em><br />DOĞAR.</h1>
          <p className="hero-sub">Açık ateşin lezzeti, gecenin enerjisi ve etrafında buluşmaya değer bir masa.</p>
          <div className="hero-actions"><a className="button button-fire" href="#menu">Menüyü Keşfet <span>↗</span></a><a className="text-link" href="#story">Hikâyemiz <span>↓</span></a></div>
        </div>
        <div className="hero-note"><span>01</span><p>SİPARİŞLE<br />PİŞER</p></div>
        <div className="scroll-cue">ATEŞİ HİSSETMEK İÇİN KAYDIR <span>↓</span></div>
      </section>

      <div className="marquee" aria-label="Restoran özellikleri"><div>{[...moments, ...moments].map((item, index) => <span key={`${item}-${index}`}>{item}<b>✦</b></span>)}</div></div>

      <section className="manifesto" id="story">
        <p className="section-index">02 / BİZİM EV</p><h2>Fast food değil.<br /><em>Ateşin lezzeti.</em></h2>
        <div className="manifesto-grid"><p className="lead">Ember House’u tek bir gerçek üzerine kurduk: En iyi lezzet, gerçek ateşle başlar.</p><p>Etimiz döküm tavayla, soğanlarımız alevle buluşur. Her masada bir içeceği diğerine dönüştüren sıcak bir misafirperverlik vardır. Kestirme yol yok. Sessiz gece yok.</p></div>
        <div className="stats"><article><strong>100%</strong><span>yerel dana eti</span></article><article><strong>72S</strong><span>brioche fermantasyonu</span></article><article><strong>450°</strong><span>döküm tava ısısı</span></article></div>
      </section>

      <section className="menu-section" id="menu">
        <div className="menu-head"><div><p className="section-index light">03 / ATEŞTEN GELENLER</p><h2>Evin<br /><em>favorileri.</em></h2></div><p>Üç imza lezzet. Tek bir açık ateş. Her burger siparişle ezilir, katmanlanır ve hazır olduğu anda servis edilir.</p></div>
        <div className="menu-list">{menu.map((item, index) => <article key={item.name}><span className="menu-number">0{index + 1}</span><div><h3>{item.name}</h3><p>{item.detail}</p></div><strong>{item.price}</strong><span className="menu-arrow">↗</span></article>)}</div>
      </section>

      <section className="atmosphere">
        <div className="atmosphere-image" aria-hidden="true" /><div className="atmosphere-copy"><p className="section-index light">04 / GECE OLUNCA</p><h2>Bir tur daha<br /><em>kalın.</em></h2><p>Sıcak ışık. Yüksek müzik. Soğuk içecekler. Akşam yemeğinin bütün geceye dönüştüğü bir atmosfer.</p><a className="button button-cream" href="#visit">Masanı Bul <span>↗</span></a></div>
      </section>

      <section className="visit" id="visit">
        <div><p className="section-index">05 / ZİYARET</p><h2>Ateşin<br /><em>başında</em> buluşalım.</h2></div>
        <div className="visit-card"><p>EMBER HOUSE — AUSTIN</p><address>1108 East 6th Street<br />Austin, TX 78702</address><div><span>PZT—PER</span><span>17.00—00.00</span></div><div><span>CUM—PAZ</span><span>12.00—01.00</span></div><a className="button button-dark" href="mailto:tables@emberhouse.example">Masa Ayır <span>↗</span></a></div>
      </section>

      <footer><div className="brand footer-brand"><span className="brand-mark">E</span><span>EMBER HOUSE</span></div><p>BURGER / ATEŞ / İYİ GECELER</p><span>LOOP AGENCY KONSEPT PROJESİ</span></footer>
    </main>
  );
}
