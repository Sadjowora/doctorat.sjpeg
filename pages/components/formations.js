import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/formation.module.css';
import Menue from './barreMenue.js';
import Service from './services.js';
import Footer from './footer.js';
import Link from 'next/link';
import MenueFormation from "./menueFormation.js";

function Formation () {
      const [type, setType]= useState("acueill");


      const setTypeAffichage = ()=>{
        if(type === "acueill"){
            return setType("formation");
        }
        return setType("acueill");
      }

  return (<div>
            <div className={styles.formation}> 
            <Head>
              <title>Formations</title>
              <link rel="icon" href="/images/logo_ecole_doctorale.jpg" />
            </Head>
            <>
              <Menue />
            </>
          <div className="d-flex justify-content-between">             
            <div style={{width: "24%", marginTop: "1em"}} > <MenueFormation setTypeAffichage={setTypeAffichage} /> </div>
            <div className="w-75">
                {(type === 'formation')?
                  <div style={{fontSize: "0.9em"}} >
                  <Service   />
                  </div> :
                 <div>
                  <h1 className="mb-3" style={{borderRadiusTop: "8px", fontWeight:"300", color: "dodgerblue", padding: "0.1em"}} > Les Formations de notres école </h1>
                  <div> 
                    <img src="/images/doctorant.jpg" alt="photoDoctorant" />
                  </div>
                  <div className="mt-3 mb-3">
                    <p>
                    <strong className="mb-3">
                      La formation doctorale est une formation complémentaire au travail de recherche. 
                    Le doctorant construit son projet professionnel, tout au long de la préparation de son doctorat. 
                    De nombreuses formations lui sont proposées pour lui permettre d’enrichir, développer et valoriser ses compétences.
                    </strong><br/><br/>
                      <p>
                      Tous les doctorants doivent justifier, à l'issue du cycle doctoral, d'un suivi de formations correspondant aux heures forfaitaires sur toute la durée de la thèse.
                      Il est vivement recommandé de suivre des formations dès la première année de thèse pour deux raisons :
                      </p>
                    </p>
                  </div> 
                    <ul className="list-group">
                       <li className="list-group-item list-group-item-dark">
                        D’une part, certaines formations vous seront utiles pour débuter votre travail de thèse (ex : recherche documentaire etc…)                       
                       </li>
                       <li className="list-group-item list-group-item-light">
                         D’autre part, la rédaction de la thèse étant l’activité principale du doctorant en fin de thèse, 
                        il est alors peu disponible pour suivre des formations
                       </li>
                    </ul>
               </div>  
                  }                 
            </div>
          </div>
        </div>
       <div>
         <Footer />
       </div>
    </div>);
}

export default Formation;
