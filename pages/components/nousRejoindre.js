import styles from '../../styles/Services.module.css';
import Link from 'next/link';
import { AiOutlineSafety, AiOutlineLike } from 'react-icons/ai';

function JointUs () {

  return (
    <div className={styles.services}>
      <div className="flex-column p-5 pt-0 justify-content-between">
       <div className="d-flex justify-content-center mt-5"> <h1> Nous rejoindre </h1> </div>
        <div className={"d-flex justify-content-between "+styles.axeVocation}>

        <Link href="/" className={styles.jointCard}>
          <img src="/images/carriere.svg" alt="abordable" />
          <div className="flex-column">
              <h2 className="m-2"> Carrières </h2>
              <p> Chaque chauffeur Noullal est formé et certifié. Chaque trajet est suivi en temps réel par GPS. Et chaque voyage est assuré. </p>
           </div>
        </Link>

        <Link href="/" className={styles.jointCard}>
          <img src="/images/bonPort.webp" alt="abordable" />
          <div className="flex-column">
              <h2 className="m-2"> Devenez chauffeur </h2>
              <p> Chaque chauffeur Noullal est formé et certifié. Chaque trajet est suivi en temps réel par GPS. Et chaque voyage est assuré. </p>
          </div>
        </Link>

        <Link href="/" className={styles.jointCard}>
          <img src="/images/securite.webp" alt="abordable" />
          <div className="flex-column">
              <h2 className="m-2"> Devenez partenaires </h2>
              <p> Chaque chauffeur Noullal est formé et certifié. Chaque trajet est suivi en temps réel par GPS. Et chaque voyage est assuré. </p>
          </div>
        </Link>

        </div>
      </div>
    </div>
  );
}

export default JointUs;
