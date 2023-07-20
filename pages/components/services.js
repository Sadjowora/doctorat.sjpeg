import styles from '../../styles/Services.module.css';
import Link from 'next/link';
import { AiOutlineSafety, AiOutlineLike } from 'react-icons/ai';

function Services () {

  return (
    <div className={styles.services}>
      <div className="flex-column justify-content-between">
       <div className="d-flex justify-content-center"> <h1 style={{color: "#2e86c1"}}> Les formations que nous offrons  </h1> </div>
        <div className={"d-flex justify-content-between flex-wrap "+styles.axeVocation}>

        <Link href="/science-juridique" className={styles.card}>
          <img src="/images/science-juridique.jpg" alt="abordable" />
          <div className="flex-column">
              <h3 className="mb-2"> Sciences Juridique </h3>
              <p className="m-1 mt-2"> Ce programme  vise l’approfondissement de la reflexion sur les sciences juridiques. Il comporte des cours, la preparation et la soutenance publique d’une thèse de doctorat. La these peut être préparée en co-direction ou en co-tutelle en trois ans..</p>
          </div>
        </Link>

        <Link href="/science-juridique" className={styles.card}>
          <img src="/images/science-po.jpg" alt="abordable" />
          <div className="flex-column">
              <h3 className="mb-2"> Sciences Politiques </h3>
              <p className="m-1 mt-2">Ce programme ouvert en 2023  vise l’approfondissement de la reflexion en Science politique. Il comporte des cours, la preparation et la soutenance publique d’une these de doctorat. Les examens de synthèse comportment trois épreuves: majeure, mineure et la redaction d’un Essai.. </p>
          </div>
        </Link>

        <Link href="/science-juridique" className={styles.card}>
          <img src="/images/science-economique.jpg" alt="abordable" />
          <div className="flex-column">
              <h3 className="mb-2"> Sciences Economique </h3>
              <p className="m-1 mt-2"> Ce programme  vise l’approfondissement de la reflexion sur les sciences  économiques Il comporte des cours, la preparation et la soutenance publique d’une these de doctorat. La these peut être préparée en co-direction ou en co-tutelle en trois ans.. </p>
          </div>
        </Link>

        <Link href="/science-juridique" className={styles.card}>
          <img src="/images/science-gestion.webp" alt="abordable" />
          <div className="flex-column">
              <h3 className="mb-2"> Sciences de Gestion </h3>
              <p className="m-1 mt-2"> Ce programme  vise l’approfondissement de la reflexion en  sciences de Gestion  Il comporte des cours, la preparation et la soutenance publique d’une these de doctorat. La these peut être préparée en co-direction ou en co-tutelle en trois ans..  </p>
          </div>
        </Link>

        </div>
      </div>
    </div>
  );
}

export default Services;
