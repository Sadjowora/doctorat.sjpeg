import styles from '../../styles/Services.module.css';
import Link from 'next/link';
import { AiOutlineSafety, AiOutlineLike } from 'react-icons/ai';

function Services () {

  return (
    <div className={styles.services}>
      <div className="flex-column p-5 pt-0 justify-content-between">
       <div className="d-flex justify-content-center mt-5"> <h1> Ce que vous gagner avec nous </h1> </div>
        <div className={"d-flex justify-content-between "+styles.axeVocation}>

        <div className={styles.card}>
          <img src="/images/abordable.webp" alt="abordable" />
          <div className="flex-column">
              <h2 className="mb-2"> Abordabilité </h2>
              <p> Chaque chauffeur Noullal est formé et certifié. Chaque trajet est suivi en temps réel par GPS. Et chaque voyage est assuré. </p>
          </div>
        </div>

        <div className={styles.card}>
          <img src="/images/bonPort.webp" alt="abordable" />
          <div className="flex-column">
              <h2 className="mb-2"> Rapidité </h2>
              <p> Chaque chauffeur Noullal est formé et certifié. Chaque trajet est suivi en temps réel par GPS. Et chaque voyage est assuré. </p>
          </div>
        </div>

        <div className={styles.card}>
          <img src="/images/securite.webp" alt="abordable" />
          <div className="flex-column">
              <h2 className="mb-2"> Sécurité </h2>
              <p> Chaque chauffeur Noullal est formé et certifié. Chaque trajet est suivi en temps réel par GPS. Et chaque voyage est assuré. </p>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default Services;
