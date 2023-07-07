import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Menue from './barreMenue';
import Footer from './footer.js';
import styles from '../../styles/Admin.module.css'; 

const LoginAdmin = ()=>{
	 const [error, setErr]= useState("");  
       // let from = document.location.pathname = "/components/tableauDeBordAdmin";

	const signIn = (event)=>{
		event.preventDefault();
		const login = event.target.login.value;
		const mdp = event.target.mdp.value; 
              return (login === "ecole-doc-admin" && mdp === "secretjpeg2023")?  document.documentURI= "http://localhost:3000/components/tableauDeBordAdmin" : setErr('Login ou mot de passe incorrect!! , ressayer svp!');
	}	

 return (<div>
 	 <Head>
        <title>Espace Administrateur </title>
        <link rel="icon" href="/images/logo_ecole_doctorale.jpg" />
        </Head>
		 <>
		  <Menue />
		 </>
		 <div className={styles.container} >
		     <form className={styles.login} onSubmit={signIn} >
		        <h4 className="mb-2"> Connexion Admin </h4><br/>
		 	  	<div className="input-group flex-nowrap mb-2">
				  <span className="input-group-text" id="addon-wrapping">Login</span>
				  <input 
				  	  type="text" 
					  className="form-control" 
					  placeholder="Username" 
					  aria-label="Username" 
			          aria-describedby="addon-wrapping"
			          id="login"
				  />
				</div> <br/>
		 	  	<div className="input-group flex-nowrap mb-3">
				  <span className="input-group-text" id="addon-wrapping">Mot de passe </span>
				  <input 
				  		type="password" 
				  		className="form-control"  
				  		placeholder="Username" 
				  		aria-label="Username" 
				  		aria-describedby="addon-wrapping"
			            id="mdp"
				  	/>
		        </div>
		          <p style={{color: "red", fontSize: "1em", marginBottom:"0.5em"}} > { error } </p>
		          <div> 
		            <button className='btn btn-success mb-2' role="button" > Connexion </button> 
		            <Link href="/components/tableauDeBordAdmin"> Dashboard </Link>
		          </div> <br/>	
		           <small> Sile mot de passe est oublier veuiller contacter l'admin de la base donnée.</small>
		       </form>
		 </div>
 		  <div> <Footer /> </div>  
 </div>)  
}

export default LoginAdmin;