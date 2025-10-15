import './App.css';

const testimonials = [
  {
    name: 'Camille & Milo',
    quote:
      'Lauren a pris soin de Milo comme si c’était le sien. Messages, photos et câlins assurés : nous sommes partis sereins.',
  },
  {
    name: 'Thomas & Nougat',
    quote:
      'Nougat est parfois timide, mais il s’est très vite senti à l’aise avec Lauren. Service ultra professionnel et attentionné.',
  },
  {
    name: 'Sophie & Oslo',
    quote:
      'Nous avons retrouvé notre appartement impeccable et un chat apaisé. Les petits comptes rendus quotidiens sont un vrai plus.',
  },
];

const galleryItems = [
  { title: 'Moka', subtitle: 'Visites du soir & jeux interactifs' },
  { title: 'Pixel', subtitle: 'Soins pendant un long week-end' },
  { title: 'Luna', subtitle: 'Traitement quotidien & surveillance' },
  { title: 'Oslo', subtitle: 'Moments câlins pendant les vacances' },
];

function App() {
  return (
    <div className="App">
      <header className="hero">
        <div className="hero__content">
          <span className="hero__badge">Cat sitter à domicile</span>
          <h1>Lauren, votre gardienne de chats de confiance sur Bruxelles</h1>
          <p>
            Passionnée par les animaux depuis toujours, Lauren a 25 ans et garde
            des chats depuis plusieurs années. Basée à Bruxelles, elle accompagne
            déjà cinq familles qui ne jurent plus que par ses visites
            personnalisées, ses nouvelles quotidiennes et ses attentions
            câlines.
          </p>
          <div className="hero__cta">
            <a className="cta-button" href="#contact">
              Réserver un échange
            </a>
            <a className="secondary-link" href="#testimonials">
              Lire les avis
            </a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="profile-photo" aria-label="Portrait de Lauren" />
          <div className="hero__note">
            <strong>Depuis 2019</strong>
            <span>5 foyers de chats accompagnés</span>
          </div>
        </div>
      </header>
      <main>
        <section id="about" className="section about">
          <div className="section__intro">
            <h2>Qui est Lauren&nbsp;?</h2>
            <p>
              Passionnée par les animaux, Lauren sait gagner la confiance des
              chats les plus indépendants. Elle sait adapter son approche, que
              ce soit pour jouer, rassurer, donner un traitement ou simplement
              veiller sur le foyer pendant vos absences.
            </p>
          </div>
          <div className="about__highlights">
            <div>
              <span className="highlight-number">+4</span>
              <p>années de gardes de chats à domicile</p>
            </div>
            <div>
              <span className="highlight-number">100%</span>
              <p>de retours positifs des familles accompagnées</p>
            </div>
            <div>
              <span className="highlight-number">Nancy</span>
              <p>Interventions sur Nancy et les environs proches</p>
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="section__intro">
            <h2>Services &amp; tarifs indicatifs</h2>
            <p>
              Chaque visite comprend la nourriture, l’eau fraîche, le nettoyage
              de la litière, les jeux et une présence attentive. Les tarifs
              s’ajustent selon la fréquence, le nombre de chats et les besoins
              spécifiques.
            </p>
          </div>
          <div className="cards">
            <article className="card">
              <h3>Visite quotidienne</h3>
              <p>
                Une visite de 30 minutes par jour pour nourrir, nettoyer et
                passer du temps avec votre chat.
              </p>
              <span className="price">À partir de 18&nbsp;€/jour</span>
            </article>
            <article className="card">
              <h3>Deux visites / jour</h3>
              <p>
                Matin et soir, idéal pour les chats exigeant une présence plus
                régulière ou un traitement.
              </p>
              <span className="price">À partir de 32&nbsp;€/jour</span>
            </article>
            <article className="card">
              <h3>Week-end ou longue durée</h3>
              <p>
                Pack sur mesure incluant surveillance du foyer, plantes,
                courrier et comptes rendus détaillés.
              </p>
              <span className="price">Devis personnalisé</span>
            </article>
          </div>
          <p className="section__note">
            Les tarifs définitifs sont confirmés après un premier échange gratuit
            pour découvrir vos besoins et ceux de votre chat.
          </p>
        </section>

        <section id="testimonials" className="section testimonials">
          <div className="section__intro">
            <h2>Ils recommandent Lauren</h2>
            <p>
              Ces familles ont confié leur chat à Lauren et partagent leur
              expérience. Chaque garde inclut des nouvelles avec photos pour
              partir l’esprit tranquille.
            </p>
          </div>
          <div className="testimonials__list">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <p className="testimonial-card__quote">“{testimonial.quote}”</p>
                <p className="testimonial-card__author">— {testimonial.name}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="section gallery">
          <div className="section__intro">
            <h2>Souvenirs de gardes</h2>
            <p>
              Un aperçu des chats dont Lauren a pris soin. Remplacez ces blocs
              par vos propres photos pour illustrer vos visites.
            </p>
          </div>
          <div className="gallery__grid">
            {galleryItems.map((item) => (
              <figure className="gallery__item" key={item.title}>
                <div className="gallery__photo" role="img" aria-label={`Photo de ${item.title}`}>
                  <span>{item.title}</span>
                </div>
                <figcaption>{item.subtitle}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact__card">
            <h2>Prendre contact avec Lauren</h2>
            <p>
              Vous souhaitez vérifier les disponibilités ou obtenir un devis&nbsp;?
              Envoyez un message et Lauren vous répond sous 24&nbsp;h.
            </p>
            <a className="cta-button" href="mailto:contact@laurencatsitting.fr">
              Écrire à Lauren
            </a>
            <p className="contact__note">
              Vous pouvez également proposer vos dates, le nombre de chats et vos
              attentes. Lauren s’occupe du reste.
            </p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <small>
          © {new Date().getFullYear()} Lauren Cat Sitting — Gardes de chats à
          domicile en Lorraine
        </small>
      </footer>
    </div>
  );
}

export default App;
