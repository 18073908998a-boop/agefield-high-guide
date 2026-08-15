const guides = [
  { title: "Complete Walkthrough", text: "Main story from Sam's first school day to the final plan.", id: "walkthrough" },
  { title: "Missions & Side Jobs", text: "Main missions, side activities, requirements, and rewards.", id: "missions" },
  { title: "Classes & Schedule", text: "English, Math, Geography, German, and Music lessons.", id: "classes" },
  { title: "Map & Locations", text: "Campus, town center, neighborhoods, countryside, and shops.", id: "map" },
  { title: "Money Guide", text: "Earn cash through grades, missions, and activities.", id: "money" },
  { title: "Endings Guide", text: "Two endings with clear spoiler warnings.", id: "endings" },
  { title: "Achievements", text: "Checklist for all 11 Steam achievements.", id: "achievements" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top"><span className="brand-mark">AH</span>Agefield High Guide</a>
        <nav><a href="#walkthrough">Walkthrough</a><a href="#missions">Missions</a><a href="#classes">Classes</a><a href="#map">Map</a></nav>
      </header>
      <section className="hero" id="top">
        <div>
          <p className="eyebrow">Fan-made guide · Updated August 2026</p>
          <h1>Survive class.<br/><em>Rock the school.</em></h1>
          <p className="intro">A focused guide hub for Agefield High: Rock the School—missions, classes, map locations, money tips, endings, and achievements.</p>
          <a className="button" href="#walkthrough">Start the walkthrough</a>
          <div className="facts"><span>30+ main missions</span><span>5 lesson types</span><span>2 endings</span><span>11 achievements</span></div>
        </div>
        <aside><b>Sam's first-week checklist</b><ol><li>Learn the timetable</li><li>Meet Kale and Axel</li><li>Unlock town locations</li><li>Save cash before extras</li></ol></aside>
      </section>
      <section className="guides"><p className="eyebrow dark">Choose your problem</p><h2>First-wave guides</h2>
        <div className="grid">{guides.map((g,i)=><article id={g.id} key={g.id}><small>0{i+1}</small><h3>{g.title}</h3><p>{g.text}</p><a href="#top">Read guide →</a></article>)}</div>
      </section>
      <footer>Independent fan guide · Facts first · Spoilers labeled</footer>
    </main>
  );
}