import styles from '../../styles/AboutUs.module.css';
import Menue from './barreMenue.js';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AboutUs (){
return (
    <div>
           <Menue />
           <div className={styles.container}>
              <div className={"d-flex justify-content-center "+styles.aboutBody}>
                  <div className="w-75">
                      <div className={ styles.title }>
                        <h1> Nouallal  </h1>
                        <small> Nous delivrons, donner nous tout. </small>
                      </div>
                      <p>
                      Nous ne sommes pas une option, nous sommes un choix
                      Nous sommes le premier dans le pays parce que nous sommes la solution aux problèmes de livraison de colis de toutes sorte en Guinée.
                      Avec une sécurité assurée, nous proposons également des trajets à prix économique.
                      <strong> Qu'est-ce qui nous differencie? </strong>
                      Nos transporteur peuvent esquiver le trafic aux heures de pointe et vous amener à destination en un tour de main avec notre technologie integrer et la competences des liveurs.
                       <strong> Alors quand vous pensez livraison, pensez Noullal. </strong>
                      </p>
                  </div>
                  <div className={ styles.imagesApropos }>
                     <img src="/images/livreurStoper.png" alt="images du livreur" />
                  </div>
              </div>
                  <div className={ styles.footer }>
                      <h4> Nous avont une équipe dynamique </h4>
                      <small> Réjoigner nous et faite progresser votre carrière. </small>

                      <div className="w-50"> <button className="btn btn-dark mt-5"> Rejoindre Notre equipe </button> </div>
                  </div>
        </div>
     </div>
  )
}
