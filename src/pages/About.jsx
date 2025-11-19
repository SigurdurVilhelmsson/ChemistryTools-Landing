import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-hero">
          <h1>Um verkfærin</h1>
          <p className="about-subtitle">
            AI-knúin kennslutól þróuð sérstaklega fyrir efnafræðinám við Kvennaskólann
          </p>
        </div>

        <section className="about-section">
          <h2>Hvað er þetta?</h2>
          <p>
            Þessi verkfæri eru þróuð til að styðja við nám og kennslu í efnafræði með því að nýta
            kraft gervigreindar. Verkfærin eru hönnuð sérstaklega fyrir nemendur og kennara við
            Kvennaskólann í Reykjavík og nota Claude gervigreind frá Anthropic til að veita
            gagnlega og nákvæma endurgjöf.
          </p>
          <p>
            Markmiðið er að bjóða upp á persónulega aðstoð og endurgjöf sem styður við námsferlið
            og hjálpar nemendum að skilja efnafræðihugtök betur.
          </p>
        </section>

        <section className="about-section">
          <h2>Hvernig virka verkfærin?</h2>
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon">🔐</div>
              <div className="feature-content">
                <h3>Öruggt auðkenning</h3>
                <p>
                  Þú skráir þig inn með þínu @kvenno.is netfangi í gegnum Microsoft Azure AD.
                  Aðeins nemendur og starfsfólk skólans hafa aðgang.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🤖</div>
              <div className="feature-content">
                <h3>Claude gervigreind frá Anthropic</h3>
                <p>
                  Verkfærin nota Claude gervigreindarlíkön frá Anthropic til að greina texta og veita endurgjöf.
                  Claude er eitt af fremstu tungumálalíkönum heims.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🛡️</div>
              <div className="feature-content">
                <h3>Persónuvernd í fyrirrúmi</h3>
                <p>
                  Gögn þín eru ekki geymd. Öll samskipti við gervigreindina eru unnin í rauntíma
                  og eytt strax að vinnslu lokinni.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">📚</div>
              <div className="feature-content">
                <h3>Sérhæfð fyrir efnafræði</h3>
                <p>
                  Verkfærin eru sérstaklega þjálfuð til að skilja efnafræðihugtök og veita endurgjöf
                  sem er í samræmi við íslenskt námsefni.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Tiltæk verkfæri</h2>

          <div className="tool-detail">
            <h3>🧪 Aðstoð við skýrslugerð</h3>
            <p>
              Þetta verkfæri hjálpar þér að skrifa betri efnafræðiskýrslur með því að veita
              uppbyggilega endurgjöf á texta þinn. Það greinir uppbyggingu, málfar, vísindalega
              nákvæmni og gefur tillögur að úrbótum.
            </p>
            <p className="tool-status-text">
              <strong>Staða:</strong> Tiltækt núna
            </p>
          </div>

          <div className="tool-detail">
            <h3>🤖 Aðstoðarkennari í efnafræði</h3>
            <p>
              Gagnvirkur aðstoðarkennari sem svarar spurningum þínum um efnafræði, útskýrir
              hugtök og hjálpar þér að skilja flókin efni. Eins og að hafa persónulegan kennara
              tiltækan allan sólarhringinn.
            </p>
            <p className="tool-status-text">
              <strong>Staða:</strong> Væntanlegt í janúar 2026
            </p>
          </div>
        </section>

        <section className="about-section">
          <h2>Persónuvernd og öryggi</h2>
          <p>
            Við tökum persónuvernd mjög alvarlega. Hér eru helstu atriði sem þú þarft að vita:
          </p>
          <ul className="privacy-list">
            <li>
              <strong>Engin gagnageymsla:</strong> Textinn sem þú sendir inn er ekki geymdur í
              gagnagrunn. Hann er aðeins notaður til að vinna úr beiðni þinni.
            </li>
            <li>
              <strong>Claude API:</strong> Við notum Claude API frá Anthropic sem uppfyllir
              strangasta öryggisstaðla Evrópusambandsins (GDPR).
            </li>
            <li>
              <strong>Aðgangsstýring:</strong> Aðeins notendur með @kvenno.is netföng hafa aðgang
              að verkfærunum.
            </li>
            <li>
              <strong>Gagnsæi:</strong> Þú sérð alltaf nákvæmlega hvaða gögn eru send til
              gervigreindarinnar.
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Hafa samband</h2>
          <p>
            Ef þú hefur spurningar um verkfærin eða rekst á vandamál, ekki hika við að hafa samband.
          </p>
          <div className="contact-info">
            <p>
              <strong>Netfang:</strong>{' '}
              <a href="mailto:efnafraeði@kvenno.is">efnafraeði@kvenno.is</a>
            </p>
            <p>
              <strong>Kennari:</strong> Efnafræðikennari við Kvennaskólann í Reykjavík
            </p>
          </div>
        </section>

        <div className="about-cta">
          <Link to="/" className="btn-primary btn-large">
            Til baka á forsíðu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
