import './App.css';
import chat1 from './assets/chat1.jpeg'
import chat2 from './assets/chat2.jpeg'
import capu from './assets/capu.jpeg'
import Lauren from './assets/Lauren.jpeg'
import Ellis from './assets/Ellis.jpeg'

const testimonials = [
  {
    name: 'Parents de Dymka et Solor',
    quote:
      "Lauren s'est occupée à merveille de nos deux chats. Très attentive, attentionnée, et une super communication (plein de photos de nos petits amours). Nous recommandons les yeux fermés ! ",
  },
  {
    name: 'Maman de Michel et Eustache',
    quote:
      'Je viens tout juste de rentrer tout est parfait ! Les chats étaient super zen. Ils vont super bien ! Merci beaucoup tu es super !',
  },
  // {
  //   name: 'Géraldine et Nadia, les mamans de Ellis',
  //   quote:
  //     'Nous avons retrouvé notre appartement impeccable et un chat apaisé. Les petits comptes rendus quotidiens sont un vrai plus.',
  // },
  {
    name: 'Papa de Yama',
    quote:
      "Lauren s'est parfaitement occupée de mon chat Yama pendant le séjour, en prenant le temps de jouer avec lui et de m'envoyer des photos de lui lors de ses visites. Je recommande 👍🏻",
  },
  {
    name: 'Parents de Dymka et Solor',
    quote:
      "On tenait à vraiment te remercier de t’être occupée aussi bien de nos petits amours ! On les a retrouvés en pleine forme :) Merci aussi d’avoir pris soin de l’appartement. ",
  },
  
  
];

const galleryItems = [
  { title: 'Yama', subtitle: 'Moments câlins pendant les vacances', image: capu  },
  { title: 'Michel et Eustache', subtitle: 'Visites du soir & jeux interactifs', image: chat2},
  { title: 'Dymka et Solor', subtitle: 'Soins pendant un long week-end', image: chat1},
  { title: 'Ellis', subtitle: 'Traitement quotidien & surveillance', image: Ellis  },
  { title: 'Nala', subtitle: 'Traitement quotidien & surveillance', image: Ellis  },
  { title: 'Aglae et Mochi', subtitle: 'Traitement quotidien & surveillance', image: Ellis  },
];

function App() {
  return (
    <div className="App">
      <header className="hero">
        <div className="hero__content">
          <span className="hero__badge">Cat sitter à domicile</span>
          <h1>Lauren, votre gardienne de chats de confiance sur Bruxelles</h1>
          <p>
            Passionnée par les animaux depuis toujours, j'ai 25 ans et garde
            des chats depuis plusieurs années. Basée à Bruxelles, j'accompagne
            déjà six familles qui ne jurent plus que par mes visites
            personnalisées, les nouvelles quotidiennes photo des chats inclues et mon dévouement.
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
          <div className="profile-photo">
            <img src={Lauren} alt="Portrait de Lauren" />
          </div>
          {/* <div className="hero__note">
            <strong>Depuis 2019</strong>
            <span>6 foyers de chats accompagnés</span>
          </div> */}
        </div>
      </header>
      <main>
        <section id="about" className="section about">
          <div className="section__intro">
            <h2>Qui est Lauren&nbsp;?</h2>
            <p>
              Passionnée par les animaux, je sais gagner la confiance des
              chats les plus indépendants. Je m'adapte à vos besoins et aux besoins du chat, que
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
              <span className="highlight-number">Bruxelles</span>
              <p>Je me déplace dans tout Bruxelles</p>
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="section__intro">
            <h2>Services &amp; tarifs indicatifs</h2>
            <p>
              Durant chaque visite, je nourris les chats, je leur donne de l'eau, je change la litière et surtout 
              je prend le temps de donner de l'attention aux chats en jouant avec eux et en leur donnant une présence attentive.
            </p>
          </div>
          <div className="cards">
            <article className="card">
              <h3>Visite quotidienne</h3>
              <p>
                Une visite d'une heure par jour pour nourrir, nettoyer et
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
              que vous ayez l'esprit tranquille et soyez tenu informé de votre chat.
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
              Un aperçu des chats dont j'ai pris soin et continue à prendre soin.
            </p>
          </div>
          <div className="gallery__grid">
            {galleryItems.map((item) => (
              <figure className="gallery__item" key={item.title}>
                <div
                  className={`gallery__photo${item.image ? ' gallery__photo--with-image' : ''}`}
                  role="img"
                  aria-label={`Photo de ${item.title}`}
                  style={item.image ? { backgroundImage: `url(${item.image})` } : undefined}
                >
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
              Vous souhaitez que je garde votre chat durant votre absence ou dicuter d'un devis&nbsp;?
              Envoyez un message et je vous répond sous 24&nbsp;h.
            </p>
            <a className="cta-button" href="mailto:contact@laurencatsitting.fr">
              Écrire à Lauren
            </a>
            <p className="contact__note">
              Vous pouvez proposer vos dates, le nombre de chats, une première idée de votre location et vos
              attentes.
            </p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <small>
          © {new Date().getFullYear()} Lauren Cat Sitting — Gardes de chats à
          domicile sur Bruxelles
        </small>
      </footer>
    </div>
  );
}

export default App;
