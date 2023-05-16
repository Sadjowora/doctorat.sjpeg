import styles from '../../../styles/Vocation.module.css';
import Link from 'next/link';
import { AiOutlineSafety, AiOutlineLike } from 'react-icons/ai';

function Vocation () {

  return (
    <div>
      <div className={styles.vocation}>
            <div className={styles.vocationCard}>
              <div className="flex-column">
                  <h1> <strong style={{color:"tomato"}}> Envoyez </strong> ou faites vous <strong style={{color:"tomato"}}> livrer </strong> ce que vous voulez <strong style={{color:"tomato"}}> ou vous voulez </strong> à Conakry !  </h1>
                   <p> En quelques clics créez votre demande de livraison avec l’application Noullal. Renseignez les adresses et contacts d’enlèvement et de livraison. Choisissez votre prix. Publiez, c’est en ligne ! Les livreurs peuvent désormais vous contacter et vous recevez les notifications en direct sur votre smartphone.</p>
               </div>
               <div> <img src="/images/noullal-smart-livreur.png" alt="abordable" /> </div>
            </div>

            <div className={styles.vocationCardDeux}>
              <div className={styles.imgDeux}> <img src="/images/livreurReceveur.avif" alt="abordable"  /> </div>
              <div className={"flex-column "+styles.vocationFooter}>
                  <h1> Soyez  <strong style={{color:"dodgerblue"}}> livreur </strong>, <strong style={{color:"dodgerblue"}}> expéditeur </strong> ou <strong style={{color:"dodgerblue"}}> destinataire ! </strong>  </h1>
                   <p>Sur l’application de livraison de colis Noullal les utilisateurs peuvent avoir plusieurs casquettes.
                       Vous avez acheté un meuble sur Leboncoin et souhaitez vous le faire livrer ? Votre ami a oublié son sac et vous souhaitez lui envoyer ?
                       Vos déplacements vous coûtent cher et vous cherchez une façon de réduire vos frais ? Avez WayToMe, envoyez, recevez ou livrez des colis ! </p>
                    <div> <button className="btn btn-outline-primary mt-3"> S'inscrire sur noullal </button> </div>  
               </div>
            </div>
      </div>
    </div>
  );
}

export default Vocation;
