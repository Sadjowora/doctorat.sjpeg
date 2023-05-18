import styles from '../../styles/Services.module.css';
import Link from 'next/link';
import { AiOutlineSafety, AiOutlineLike } from 'react-icons/ai';

function JointUs () {

  return (
    <div className={styles.services}>
      <div className="flex-column pt-0 justify-content-between">
       <div className="d-flex justify-content-center"> <h1 style={{color: 'gray'}}> Nous rejoindre </h1> </div>
        <div className={"d-flex justify-content-between "+styles.axeVocation}>

        <Link href="/" className={styles.jointCard}>
          <img src="/images/carriere2.avif" alt="abordable" />
          <div className={styles.bodyCard+" flex-column"}>
              <h2 className="mt-2 mb-3"> Carrières </h2>
              <p> Chaque chauffeur Noullal est formé et certifié. Chaque trajet est suivi en temps réel par GPS. Et chaque voyage est assuré. </p>
              <div className="d-flex justify-content-center p-3">   <button className="btn btn-danger"> Postuler Chez nous </button> </div>
           </div>
        </Link>

        <Link href="/" className={styles.jointCard}>
          <img src="/images/partenariat.png" alt="abordable" />
          <div className={styles.bodyCard+" flex-column"}>
              <h2 className="mt-2 mb-3"> Devenez partenaires </h2>
              <p> Chaque chauffeur Noullal est formé et certifié. Chaque trajet est suivi en temps réel par GPS. Et chaque voyage est assuré. </p>
            <div className="d-flex justify-content-center p-3">   <Link href="/components/contactUs" className="btn btn-info"> Nous contacter </Link> </div>
          </div>
        </Link>

        </div>
      </div>
    </div>
  );
}

export default JointUs;
