import styles from '../../styles/Slide.module.css';
import Link from 'next/link';
import { AiOutlineSafety, AiOutlineLike } from 'react-icons/ai';

function Slide () {

  return (
    <div className={"d-flex p-5 pt-0 justify-content-between "+styles.slideGlobal}>
      <div className="flex-column pt-5">
          <div className={styles.slideInfos}>
               <h1> Nous delivrons <br/>Faites nous confiance <br/> Donner nous tous </h1>
          </div>
          <div className={styles.texte}>
            <p> La prémiere application de livraison rapoide en Guinée. <br/>
            Nous faisons attention à vos besoin, ils sont livré en toutes securité.</p>
          </div>
          <div className="mt-4"><button className="btn btn-dark" > Rejoigner Nous </button> </div>
      </div>
      <div className={ styles.imagesAcueill }>
         <img src="/images/livreurStoper.png" alt="images du livreur" />
      </div>
      <div className={"flex-column pt-4 "+styles.axeVocation}>
        <div className="mb-1">
          <i><AiOutlineLike /> SUR & CERTIFIE </i>
          <p> Chaque chauffeur Noullal est formé et certifié. Chaque trajet est suivi en temps réel par GPS. Et chaque voyage est assuré. </p>
        </div>
        <div className="mb-1">
          <i><AiOutlineSafety /> FIABLE </i>
          <p> Faites livrer des articles dans la ville quand vous le souhaitez avec les chauffeurs de votre choix. Noullal s'engage à fournir un service de haute qualité. </p>
        </div>
        <div className="mb-1">
          <i><AiOutlineSafety /> ACCESSIBLE </i>
          <p> Noullal s'occupe de vos besoins de transport et de livraison. Fini le temps et l'énergie dépensés en vain à chercher un chauffeur de confiance à un prix équitable. </p>
        </div>
      </div>
    </div>
  );
}

export default Slide;
