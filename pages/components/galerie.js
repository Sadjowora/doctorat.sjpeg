import React, { useState } from "react"
import Head from 'next/head';
import styles from '../../styles/galerie.module.css';
import Menue from './barreMenue.js';
import Link from 'next/link'; 
import Footer from './footer.js'

function Galerie () {
  var [rows, setRows] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]);
  const [images, setImages]=useState("galerie-0.jpg");
  const selectPhoto = (id)=>{
    if(id>49) return setImages("galerie-"+id+".jpeg"); 
     return setImages("galerie-"+id+".jpg");
  }


  return (<div>
          <div className={styles.galerie}> 
            <Head>
              <title>Formations</title>
              <link rel="icon" href="/images/logo_ecole_doctorale.jpg" />
            </Head>
            <>
              <Menue />
            </>
           <div className="d-flex justify-content-start flex-wrap">
                <h1 className="m-1"> Notre Galérie </h1>
                <small className="p-4" style={{color: "darkblue"}} > Faites defiller les images à droit, puis selectionner votre choix pour visionner à gauche. </small>
           </div>
            <div className="m-2 mt-0 d-flex justify-content-center" style={{borderRadius: "8px",height:"45%", backgroundColor: "#f8f8ff", padding: "0.2em", border: "1px solid dimgray"}}>              
             <div className={styles.containtBody}>                         
                 <div className={styles.galerieSlider}>               
                     <img src={"/images/neuPhotos/"+images} className="w-100" alt="..."/>
                 </div>
                 <div className={styles.listPhoto} >
                   {rows.length !==0? rows.map((i, id)=>{
                        return(<a href="#" className={"m-1 "+styles.lienImg} onClick={selectPhoto.bind(this, i)} key={id} >
                                  <img src={"/images/neuPhotos/galerie-"+i+".jpg"} alt="..."/>
                                  {i>49? <img src={"/images/neuPhotos/galerie-"+i+".jpeg"} alt="..."/> : ""}
                               </a>);
                        }) : <small style={{color: "red", margin: "5em"}} > Chargement des images.. </small> 
                    }
                </div>           
              </div>
        </div>
        </div>
        <div>
            <Footer />
        </div>7
    </div>);
}

export default Galerie;
