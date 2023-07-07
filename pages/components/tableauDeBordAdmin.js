import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Menue from './barreMenue';
import Footer from './footer.js';
import styles from '../../styles/Admin.module.css';
import {FaPlusCircle, FaListAlt} from "react-icons/fa";

const Dashboard = ()=>{
     let count = 0;
	 	
 return (<div>
 	 <Head>
        <title> Espace Administrateur </title>
        <link rel="icon" href="/images/logo_ecole_doctorale.jpg" />
        </Head>
		 <>
		  <Menue />
		 </>
		  <div className={"m-5 "+styles.dashboard} >
		 	<h1> Dashboard </h1> 
		 	<div className="flex-column" style={{border: "1px solid dimgray", borderRadius:"8px", backgroundColor: "#f8f8ff"}} >
		 		<ul className="d-flex w-25 justify-content-between m-1"> 
		 	         <li className="btn btn-outline-primary" ><FaListAlt /> Liste actualites </li>
		 	         <li className="btn btn-outline-secondary"> <Link href="/components/addActualitesForm"> <FaPlusCircle /> ajouter </Link> </li>
		 		</ul>
		 	</div>
		 	<div>
		 	<table className="table table-striped w-100">
                        <thead>
                            <tr>
                                <th scope="col">Numero</th> 
                                <th scope="col">Nom complet</th>
                                <th scope="col">libellé</th>
                            </tr>
                        </thead> 
                            <tbody> 
                               <tr> 
                                 <td>1 </td>
                                 <td>DEBUT DES INSCRIPTIONS DES DOCTORANTS GUINEEENS</td>
                                 <td>
                                   Cette annee 2023 les inscription sont du 09 au 29 janvier 2023. Deposer vos dossiers au pres de la direction, 
                                   pour plus d'information regarder le menue admission. 
                                 </td> 
                                </tr>
                                 <tr> 
                                 <td>2 </td>
                                 <td>Les reinscriptions en doctorants pour 2023-2024 sont ouverts depuis le 30 juin 2023. date limite le 30 septembre 2023.</td>
                                 <td>
                                   Cette annee 2023 les inscription sont du 09 au 29 janvier 2023. Deposer vos dossiers au pres de la direction, 
                                   pour plus d'information regarder le menue admission. 
                                 </td> 
                                </tr>
                             </tbody>
                          </table> 
		 	</div>   
		  </div>
 		  <div style={{paddingTop: "5em"}} > <Footer /> </div>  
 </div>)  
}

export default Dashboard;