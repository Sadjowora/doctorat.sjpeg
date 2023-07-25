import styles from '../../styles/AboutUs.module.css';
import Menue from './barreMenue.js';
import Footer from './footer.js';
import Vocation from './vocations/vocation.js';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AboutUs (){

return ( <div>
           <Menue />
           <div className={styles.container}>
              <div className={"d-flex justify-content-center "+styles.aboutBody}>
                  <div className={styles.containtBodyAboutUs} >
                    <div className={ styles.title }>
                      <h1> ED-SJPEG / UGLC-SC  </h1>
                      <small>Ecole Doctorale en Sciences Juridiques, Politiques, Economiques et de Gestion. </small><br/>
                      Email: <i> uglcedsjpeg@gmail.com </i>
                    </div>
                    <p className="mb-3">
                    Créée en 2017 l’Ecole doctorale « ED-SJPEG » prépare au Doctorat dans quatre grands champs disciplinaires :
                     Sciences Juridiques, les Sciences Politiques, les Sciences Économiques, Sciences de Gestion. 
                    Sa vocation pluridisciplinaire lui permet de développer des synergies entres juristes, politologues, économistes et gestionnaires qui
                    peuvent avoir des champs de recherches voisins et complémentaires tout en mobilisant des méthodologies différentes. 78 anciens doctorants pour la cohorte 1 et 2 et 43 doctorants por la 3ème cohorte. 
                    </p>
                     <p className="mb-3">
                      À chaque doctorant admis au sein de l’ED-SJPEG , une formation pluridisciplinaire est offerte qui est conçue et organisée pour améliorer l’apprentissage de la recherche ainsi que pour favoriser le développement de recherche répondant aux grands défis sociétaux dont la révolution numérique, la transition écologique, et les nouveaux défis de la mondialisation.
                    </p> 
                     <p>
                        L’Ecole Doctorale en Sciences Juridiques, Sciences Politiques, Sciences economiques, Sciences de Gestion (ED-SJPEG), est l’une des deux Ecoles Doctorales dont dispose Université Générale lansana conté de sonfonia (UGLC-SC).
                     </p>
                    <div className={styles.footer} >
                        <Vocation />
                    </div>
                </div> 
              </div>
        </div>
        <div>
          <Footer />
        </div>
     </div>
  )
}
