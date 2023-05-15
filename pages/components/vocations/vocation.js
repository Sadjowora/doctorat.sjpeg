import styles from '../../../styles/Vocation.module.css';
import Link from 'next/link';
import { AiOutlineSafety, AiOutlineLike } from 'react-icons/ai';

function Vocation () {

  return (
    <div className={styles.vocation}>
      <div className="flex-column p-5 pt-0">
            <div className={styles.vocationCard}>
              <div className="flex-column">
                  <h1> Envoyez ou faites vous  livrer ce que vous voulez !  </h1>
                   <p> En quelques clics créez votre demande de livraison avec l’application Noullal. Renseignez les adresses et contacts d’enlèvement et de livraison. Choisissez votre prix. Publiez, c’est en ligne ! Les livreurs peuvent désormais vous contacter et vous recevez les notifications en direct sur votre smartphone.</p>
               </div>
               <div> <img src="/images/noullal-smart-livreur.png" alt="abordable" /> </div>
            </div>

            <div className={styles.vocationCard}>
              <div className={styles.imgDeux}> <img src="/images/bonPort.webp" alt="abordable"  /> </div>
              <div className={"flex-column "+styles.vocationFooter}>
                  <h1> Soyez livreur, expéditeur ou destinataire !  </h1>
                   <p> En quelques clics créez votre demande de livraison avec l’application Noullal. Renseignez les adresses et contacts d’enlèvement et de livraison. Choisissez votre prix. Publiez, c’est en ligne ! Les livreurs peuvent désormais vous contacter et vous recevez les notifications en direct sur votre smartphone.</p>
               </div>
            </div>
      </div>
    </div>
  );
}

export default Vocation;
