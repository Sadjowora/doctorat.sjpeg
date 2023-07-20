import Head from 'next/head';
import styles from "../../styles/Admission.module.css";
import Menue from './barreMenue.js';
import Footer from './footer.js';
import { FiMail } from 'react-icons/fi'; 
import { AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai'; 
import { BsLinkedin } from 'react-icons/bs'; 
import Link from 'next/link';

function Admission (){

	return (<div>
			    <Head>
	              <title>Formations</title>
	              <link rel="icon" href="/images/logo_ecole_doctorale.jpg" />
	            </Head>
	            <>
	              <Menue />
	            </>
	          <div className={"d-flex justify-content-center "+styles.admissionContainer} > 
			    <div className={styles.bodyAdmission} >
			       <div className="d-flex justify-content-between flex-wrap"> 
			    	 <h1 className="mb-3"> ADMISSION </h1>
			            <div> <a href="mailto: uglcedsjpeg@gmail.com" className="btn btn-outline-success m-2"><FiMail /> Nous ecrire par mail </a> </div>
			          </div>
			    	 <p>
			    	  Les Admissions à l'Ecole Doctorale des Sciences Juridiques, Politiques, Economiques et de Gestion commencent par un appel
			    	  à candidature de la Direction. Ensuite les candidats boursiers et non boursiers sont invités à déposer leurs dossiers, qui seront étudiés
			    	  par l'instance charger au admission. 
			    	  Les résultats seront communiqués aux futurs étudiants. Le dernière appel à candidature est:
			    	 </p>			       
			        <h3 className="mb-3"> APPEL A CANDIDATURE 2023 </h3>
				   <div>
				   	  <p> La Direction de l'Ecole Doctorale des Sciences Juridiques, Politiques, Economiques et de Gestion
				   	  lance un appel à candidature pour le recutement de la 3eme cohorte de doctorants. </p>
				   </div>	
				   <h3> DOSSIERS A FOURNIR </h3>
				   <ul>
				   		<li> * Une demande manuscrite adressée au Recteur de l'université.</li>
				   		<li> * Une copie légalisée de l'extrait de naissance. </li>
				   		<li> * Une copie legalisée du certificat de nationalité </li>
				   		<li> * Une attestation de bourse pour les boursiers de l'Etat.</li>
				   		<li> * Un engagement des frais de scolarité assorti d'un échéantier irrevocable pour les candidats indépendants.</li>
				   		<li> * Un curriculum vitae. </li>
				   		<li> * Le projet de recherche (15 pages au moins). </li>
				   		<li> * Les copies légalisées des relevés de notes et des diplômes de Bac, Licence/Maitrise et Master.</li>				   		
				   </ul>
				   <div>
				   	 <p className="mt-4">
				   	 	<strong> NB: </strong> Les dossiers doivent être déposés au Secrétariat de la Direction contre récépissé de depôts du 09 au 29 janvier 2023.
				   	    Les candidats retenues seront informés pour la suite des formalités administratives et pédagigiques.  
				   	 </p>
				   </div>
			    </div>
			 </div>	
			 <div>
			 	<Footer />
			 </div>
		   </div>);
}

export default Admission;