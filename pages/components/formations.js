import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../../styles/formation.module.css';
import Menue from './barreMenue.js';
import Service from './services.js';
import Footer from './footer.js';
import Link from 'next/link'; 
import { useParams } from 'react-router-dom';

function Formation () {
      const [type, setType]= useState("");
      const [typeDeux, setTypeDeux]= useState("");
      //const params = useParams();      

      const setTypeShow = ()=>{
        if(type === "") return null; 
        return setType("");
      }

      const setTypeShowFormation = ()=>{
        if(type === "formation") return null;
        return setType("formation");
      }

  if (type === "") return( 
          <div className={styles.formation}> 
          <Head>
             <title>Formations</title>
             <link rel="icon" href="/images/logo_ecole_doctorale.jpg" />
          </Head>
          <>
            <Menue />
          </>
        <div className={styles.containtFormation}>             
          <div className={styles.containtMenueFormation} > 
              <div className={styles.listFormation}> 
                   <ul className={styles.menueFormation} >                     
                      <li> 
                         <Link href="/components/formations" onClick={setTypeShow} > 
                            <h5 className="mb-2"> FORMATION DOCTORALE </h5>
                         </Link>
                      </li>
                      <li>
                          <Link href="/components/formations?details" onClick={setTypeShowFormation} > 
                             <h5 className="mb-2"> Nos formations en details </h5>
                          </Link> 
                      </li>  
                       <li>
                          <Link href="/components/admission"> 
                             <h5 className="mb-2"> S'incrire chez nous </h5>
                          </Link> 
                      </li>
                </ul>        
          </div> 
          </div>²
        <div className={styles.containtBodyFormation}>
       <div>
        <h1 className="mb-3" style={{borderRadiusTop: "8px", fontWeight:"300", color: "dodgerblue", padding: "0.2em"}} > Espace Formations </h1>
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
     </div>
     </div>
    </div>)

  return (<div>
            <div className={styles.formation}> 
            <Head>
               <title>Formations</title>
               <link rel="icon" href="/images/logo_ecole_doctorale.jpg" />
            </Head>
            <>
              <Menue />
            </>
          <div className={styles.containtFormation}>             
            <div className={styles.containtMenueFormation} > 
               <div className={styles.listFormation}> 
                 <ul className={styles.menueFormation} >                     
                    <li> 
                       <Link href="/components/formations" onClick={setTypeShow} > 
                          <h5 className="mb-2"> FORMATION DOCTORALE </h5>
                       </Link>
                    </li>
                    <li>
                        <Link href="/components/formations?details" onClick={setTypeShowFormation} > 
                            <h5 className="mb-2"> Details de nos formations </h5> 
                        </Link> 
                    </li> 
                     <li>
                        <Link href="/components/admission"> 
                           <h5 className="mb-2"> S'incrire chez nous </h5>
                        </Link> 
                    </li>
                 </ul>         
          </div> 
            </div>
            <div className={styles.containtBodyFormation}>
               <div>
                    <h1 className="mb-3" style={{borderRadiusTop: "8px", fontWeight:"300", color: "dodgerblue", padding: "0.2em"}} > Les Formations de notres école </h1>
                      <p>
                        <h2> 1. Le programme de doctorat en Sciences Juridiques. </h2><br/>
                       Ce programme  vise l’approfondissement de la reflexion sur les sciences juridiques. Il comporte des cours, la preparation et la soutenance publique d’une these de doctorat. 
                       Le programme renové des seminaires comporte:
                     </p>
                     <ul>
                         <li> - Séminaires comuns </li>
                         <li>  - Séminaire en Métodologie de la these </li>
                         <li> - Séminaire  en épistémologie juridique </li>
                         <li> - Séminaire en Institutions judiciaires </li>
                        <strong> Séminaires complementaires pour l’option droit public: </strong>
                        <li> - Théorie générale de l’Etat </li>
                         <li> - Crise et constitutionnalisme en Afrique </li>
                        <strong> Séminaires complementaires pour l’option droit privé: </strong>
                         <li> - Théorie générale des obligations </li>
                         <li> - Droit des affaires en Afrique. </li>
                     </ul>
                     <p>
                       La these peut être préparée en co-direction ou en co-tutelle en trois ans. Lorsque la these est achevée, le directeur de these autorise le dépôt à l’Ecole doctorale. Des Rapporteurs externs et internes sont désignés et si les rapports de soutenanbilité sont concluants. Le jury est constitué. La soutenance est programmée et de preference en présentiel.
                      </p>
                      <p>
                       <h2>2. Le Programme de doctorat Science politique: </h2><br/>                       
                       Ce programme ouvert en 2023  vise l’approfondissement de la reflexion en Science politique. Il comporte des cours, la preparation et la soutenance publique d’une these de doctorat.
                       Il comporte les séminaires et des évaluations de synthèse:
                     </p>
                        Les Seminaires ont lieu en:
                        <ul>
                           <li> - Méthodologie de la these </li>
                           <li> - Epistémologie en science politique </li>
                           <li> - Systèmes politiques comparés </li>
                           <li> - Politiques publiques comparées </li>
                           <li> - Politique  étrangère et sécurité internationale. </li>
                        </ul>                      
                     <p>
                      <strong> Les examens de synthèse comportment trois épreuves: </strong>  majeure, mineure et la redaction d’un Essai.
                      La these préparée est présentée à l’Ecole doctorale avec l’autorisation du Directeur de these. 
                      Le directeur de l’Ecole désigne des Rapporteurs externs et internes. Si les rapports sont concluants, 
                      le jury est constitué et la soutenance peut avoir lieu.
                     </p>

                      <h2>3. Le programme de doctorat en Sciences Economiques </h2><br/>
                      <p>
                        Ce programme  vise l’approfondissement de la reflexion sur les sciences  économiques Il comporte des cours, la preparation et la soutenance publique d’une these de doctorat. 
                      Le programme renové des seminaires comporte:
                      </p>
                      <ul>
                        <li> - Séminaire en Métodologie de la these </li>
                        <li> - Séminaire  en épistémologie en Sciences économiques </li>
                        <li> - Séminaire en Macroéconomie du développement </li>
                        <li> - Séminaire en économétrie avancée. </li>
                        <li> - Seminaire en logiciels économétriques et statistiques </li>
                      </ul>
                     <p>
                        La these peut être préparée en co-direction ou en co-tutelle en trois ans. Lorsque la these est achevée, le directeur de these autorise le dépôt à l’Ecole doctorale. Des Rapporteurs externs et internes sont désignés et si les rapports de soutenanbilité sont concluants. Le jury est constitué. La soutenance est programmée et de preference en présentiel.
                     </p>
                     <h2>4. Le programme de doctorat en Sciences de Gestion </h2><br/>
                      <p>
                        Ce programme  vise l’approfondissement de la reflexion en  sciences de Gestion  Il comporte des cours, la preparation et la soutenance publique d’une these de doctorat.
                      </p> 
                     <ul>
                        Le programme renové des seminaires comporte:
                      <li> - Séminaire en méthodologie de la these </li>
                      <li> - Séminaire en épistémologie en Sciences de Gestion </li>
                      <li> - Séminaire en Théories des Organisations et systems d’information </li>
                      <li> - Séminaire en Finances d’entreprise </li>
                      <li> - Logiciels économétriques et statistiques. </li>                      
                     </ul>
                      <p>
                        La these peut être préparée en co-direction ou en co-tutelle en trois ans. Lorsque la these est achevée, le directeur de these autorise le dépôt à l’Ecole doctorale. Des Rapporteurs externs et internes sont désignés et si les rapports de soutenanbilité sont concluants. Le jury est constitué. La soutenance est programmée et de preference en présentiel.
                      </p>
                </div>                           
               </div>
          </div>
        </div>
       <div>
         <Footer />
       </div>
    </div>);
}

export default Formation;
