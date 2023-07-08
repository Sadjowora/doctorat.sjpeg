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
              <p className="m-1 mt-2"> Avec cette formations vous obtiendrez des grandes aptitudes de juriste. Vous récevrez un dîplome suite à la soutenance d'une thèse.</p>
          </div>
        </Link>

        <Link href="/science-juridique" className={styles.card}>
          <img src="/images/science-po.jpg" alt="abordable" />
          <div className="flex-column">
              <h3 className="mb-2"> Sciences Politiques </h3>
              <p className="m-1 mt-2"> Vous voullez avoir des hautes etudes en politique cette formation est pour vous. Elle est aussi sanctionner par un dîplome suite à la soutenance d'une thèse. </p>
          </div>
        </Link>

        <Link href="/science-juridique" className={styles.card}>
          <img src="/images/science-economique.jpg" alt="abordable" />
          <div className="flex-column">
              <h3 className="mb-2"> Sciences Economique </h3>
              <p className="m-1 mt-2"> Si être doctorant en economie est votre rève, votre vocation, venez chez nous ce programme est fait pour vous. Après la soutenance de votre thèse de doctorat vous sera decernez un dîplome. </p>
          </div>
        </Link>

        <Link href="/science-juridique" className={styles.card}>
          <img src="/images/science-gestion.webp" alt="abordable" />
          <div className="flex-column">
              <h3 className="mb-2"> Sciences de Gestion </h3>
              <p className="m-1 mt-2"> Vous souhaitez avoir des grandes capacité dans le domain de la gestion, devenir docteur en gestion envoyez nous votre candidature. Cette formation vous permetra d'obtenir le dîplome de doctorat après la soutenance d'une thèse.  </p>
          </div>
        </Link>

        </div>
      </div>
    </div>
  );
}

export default Services;
