import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Menue from './barreMenue';
import Footer from './footer.js';
import styles from '../../styles/Admin.module.css';
import {FaPlusCircle, FaListAlt} from "react-icons/fa";

const AddActuForm = ()=>{
     let count = 0;
	 
	 const addActualite = ()=>{
	 	return console.log(true);
	 }

 return (<div>
 	 <Head>
        <title> Espace Administrateur </title>
        <link rel="icon" href="/images/logo_ecole_doctorale.jpg" />
        </Head>
		 <>
		  <Menue />
		 </>
		  <div className={"m-5 "+styles.dashboard} >
		 	<h1> Ajouter une nouvelle actualités </h1> 
		 	 <form className='p-1 border bg-light d-flex m-2' id="documents" onSubmit={ addActualite }>
                <div>
                    <div className="d-flex"> 
                        <label htmlFor='titre' className='form-label'> Titre de l'actualité </label>
                        <input type="text" className="form-control" id="titre" />&nbsp;
                    </div>
                     <div className="d-flex"> 
                        <label htmlFor='titre' className='form-label'> Libellé </label>
                        <textarea type="text" className="form-control" id="titre" >

                        </textarea>
                    </div>
                    <div className="d-flex">                          
                       <label id="message" className="p-1 m-3"> <strong> { progress } </strong> </label><br/>  
                    </div>                             
                    <button type="submit" className='btn btn-success' > Enregistrer </button>
                </div>                                                                                                     
             </form>
		 	</div>
 		  <div style={{paddingTop: "5em"}} > <Footer /> </div>  
 </div>)  
}

export default AddActuForm;
