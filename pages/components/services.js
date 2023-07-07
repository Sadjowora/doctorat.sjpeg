import styles from '../../styles/Services.module.css';
import Link from 'next/link';
import { AiOutlineSafety, AiOutlineLike } from 'react-icons/ai';

function Services () {

  return (
    <div className={styles.services}>
      <div className="flex-column justify-content-between">
       <div className="d-flex justify-content-center"> <h1 style={{color: "#2e86c1"}}> Les formations que nous offront  </h1> </div>
        <div className={"d-flex justify-content-between flex-wrap "+styles.axeVocation}>

        <Link href="/science-juridique" className={styles.card}>
          <img src="/images/science-juridique.jpg" alt="abordable" />
          <div className="flex-column">
              <h3 className="mb-2"> Sciences Juridique </h3>
              <p className="m-1 mt-2"> Chaque chauffeur Noullal est formé et certifié. Chaque trajet est suivi en temps réel par GPS. Et chaque voyage est assuré. </p>
          </div>
        </Link>

        <Link href="/science-juridique" className={styles.card}>
          <img src="/images/science-po.jpg" alt="abordable" />
          <div className="flex-column">
              <h3 className="mb-2"> Sciences Politiques </h3>
              <p className="m-1 mt-2"> Chaque chauffeur Noullal est formé et certifié. Chaque trajet est suivi en temps réel par GPS. Et chaque voyage est assuré. </p>
          </div>
        </Link>

        <Link href="/science-juridique" className={styles.card}>
          <img src="/images/science-economique.jpg" alt="abordable" />
          <div className="flex-column">
              <h3 className="mb-2"> Sciences Economique </h3>
              <p className="m-1 mt-2"> Chaque chauffeur Noullal est formé et certifié. Chaque trajet est suivi en temps réel par GPS. Et chaque voyage est assuré. </p>
          </div>
        </Link>

        <Link href="/science-juridique" className={styles.card}>
          <img src="/images/science-gestion.webp" alt="abordable" />
          <div className="flex-column">
              <h3 className="mb-2"> Sciences Gestion </h3>
              <p className="m-1 mt-2"> Chaque chauffeur Noullal est formé et certifié. Chaque trajet est suivi en temps réel par GPS. Et chaque voyage est assuré. </p>
          </div>
        </Link>

        </div>
      </div>
    </div>
  );
}

export default Services;
