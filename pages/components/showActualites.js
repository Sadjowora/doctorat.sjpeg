import Link from 'next/link';
import Actualites from './actualites.js';
import Footer from './footer.js';
import Menue from './barreMenue.js';
import styles from '../../styles/Admission.module.css';
import Head from 'next/head';

function ShowActalites (){

	return (<div>
				<div className={styles.actualitesContainer} >	
				<Head>
	              <title>Formations</title>
	              <link rel="icon" href="/images/logo_ecole_doctorale.jpg" />
	            </Head>
	            <>
	              <Menue />
	            </>
			   <div className="d-flex justify-content-center" styles={{width:"100%" }}>  
			      <Actualites /> 
			  </div>
		  </div>
				<div>
			 	  <Footer />
			    </div>
	     </div>);
}

export default ShowActalites;