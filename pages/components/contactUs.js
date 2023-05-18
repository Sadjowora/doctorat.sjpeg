import Head from 'next/head';
import styles from '../../styles/Contact.module.css';
import Menue from './barreMenue.js';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ContactForm (){
return (
    <div>
        <Head>
           <title> Nous contacter! </title>
        </Head>
        <div>
           <Menue />
           <div className={styles.container}>
                <div className={ styles.title }>
                  <h1> Vous Pouvez nous contacter ici. </h1>
                  <small> Retrouvez nos informations personels ci contre. </small>
                </div>
                <form className={"form-group "+styles.form}>
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" className="form-label"> Nom complet </label>
                      <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Diallo Mamadou Sadjo"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" className="form-label"> Email address </label>
                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" className="form-label"> Numero </label>
                      <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="622010201" />
                    </div>
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" className="form-label"> Type </label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Ouvrez selectionner le type </option>
                        <option value="1"> Utilisateur Noullal </option>
                        <option value="2"> Employer Noullal </option>
                        <option value="3"> Autres </option>
                        </select>
                    </div>
                    <div className="mb-3">
                      <label for="exampleFormControlTextarea1" className="form-label"> Message </label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="w-50 mt-4"> <button className="btn btn-warning form-control"> Envoyer </button></div>
                </form>
           </div>
        </div>
     </div>
  )
}
