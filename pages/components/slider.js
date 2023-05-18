import styles from '../../styles/Slide.module.css';
import Link from 'next/link';
import { AiOutlineSafety, AiOutlineLike } from 'react-icons/ai';
import { MdAccessible } from 'react-icons/md';

function Slide () {

  return (
    <div className={"d-flex justify-content-between "+styles.slideGlobal}>
      <div className="flex-column">
          <div className={styles.slideInfos}>
               <h1> Nous delivrons <br/>Faites nous confiance <br/> Donner nous tout </h1>
          </div>
          <div className={"mt-4 "+styles.texte}>
            <p> Le prémier outils de livraison rapide et securisé en Guinée. <br/>
            Nous faisons attention à vos besoin et vos biens, ils sont livrer en toutes securité.</p>
          </div>
          <div className="mt-5"><button className="btn btn-dark" > Rejoigner Nous </button> </div>
      </div>
      <div className={ styles.imagesAcueill }>
         <img src="/images/livreurStoper.png" alt="images du livreur" />
      </div>
      <div className={"flex-column "+styles.axeVocation}>
        <div>
          <div className="d-flex"> <i><AiOutlineLike /> </i>
            <div className={styles.bodyAxeVocation}>
             <h3 className="pt-3"> SUR & CERTIFIE </h3>
            Chaque chauffeur Noullal est formé et certifié. Chaque trajet est suivi en temps réel par GPS. Et chaque voyage est assuré. </div>
            </div>
        </div>
        <div>
           <div className="d-flex">
               <div> <i><AiOutlineSafety /> </i></div>
               <div className={styles.bodyAxeVocation}>
              <h3 className="pt-3"> FIABLE </h3>
               Faites livrer toutes sortes d'articles dans la ville quand vous le souhaitez avec les chauffeurs de votre choix. Noullal s'engage à fournir un service de haute qualité. </div>
           </div>
        </div>
        <div>
             <div className="d-flex">
             <i><MdAccessible />  </i>
            <div className={styles.bodyAxeVocation}>
              <h3 className="pt-3"> ACCESSIBLE </h3>
            Noullal s'occupe de vos besoins de livraison. Vers chez vous, à votre entreprise ou encore de nimporte où vers nimport où. </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
