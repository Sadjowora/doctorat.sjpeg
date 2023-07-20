import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '../../styles/Menue.module.css';
import Link from 'next/link'; 
import { AiOutlineHome, AiFillPhone, AiOutlineMail } from 'react-icons/ai';

export default function Menue (){


  const makeActive = ()=>{
     return console.log(document.URL);
  }

  useEffect(()=>{
    makeActive();
  }, []);

return (
    <div>
        <Head>
           <title> Ecole Doctorale </title>
        </Head>
        <main>
          <nav className={"navbar navbar-expand-lg bg-body-tertiary fixed-top "+styles.bgradient}>
            <div className="container-fluid d-flex justify-content-between flex-wrap pl-3 pr-3">
              <Link className="navbar-brand d-flex" href="/" style={{width: "36%"}} >
                <img src="/images/logo_ecole_doctorale.jpg" alt="#" width="80" height="50" className="d-inline-block rounded align-text-center"/>&nbsp;
                <div className="flex-column">
                       <label className={styles.title}> ED-DESJPEG / UGLC-SC</label><br/>
                       <small className={styles.titleExplication} > L’Ecole Doctorale des Sciences Juridiques, Politiques, Economiques et de Gestion </small>                     
                </div>
              </Link>
              <button className="navbar-toggler w-25" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={styles.menueCollapse}>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav me-auto my-2 my-lg-0">
                    <li className="nav-item">
                      <Link className={"nav-link "+styles.active} aria-current="page" href="/"> Université </Link>
                    </li>
                    <li className="nav-item"> 
                       <Link className="nav-link" href="/components/formations"> Formation doctorale </Link>
                    </li>                   
                    <li className="nav-item">
                      <Link className="nav-link" href="/components/showActualites"> Actualités </Link>
                    </li>                    
                    <li className="nav-item">
                      <Link className="nav-link" href="/components/galerie"> Galérie </Link>
                    </li> 
                    <li className="nav-item">
                      <Link className="nav-link" href="/components/admission"> Admission </Link>
                    </li>
                      <li className="nav-item">
                      <Link className="nav-link" href="/components/aboutUs">  </Link>
                    </li>
                     <li className="nav-item">
                       <Link href="/components/aboutUs" className="nav-link"> Apropos de nous </Link> &nbsp;
                     </li>
                  </ul>
                  <div className="dropstart">
                    <a className="btn btn-outline-warning dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Contact
                    </a>
                    <ul className="dropdown-menu">
                      <li><span className="dropdown-item"><AiOutlineHome /> Sonfonia - Conakry, République de Guinée </span></li>
                      <li><hr className="dropdown-divider"/></li> 
                      <li><span className="dropdown-item" href="+224 628637599"><AiFillPhone /> (+224)666715653 / 628637599</span></li>
                      <li><a className="dropdown-item" href="mailto: uglcedsjpeg@gmail.com"><AiOutlineMail /> uglcedsjpeg@gmail.com </a></li>                   
                      <li> <a className="dropdown-item" href="mailto: alydiaby2002@yahoo.fr "> <AiOutlineMail /> alydiaby2002@yahoo.fr </a></li>
                      <li><a className="dropdown-item" href="mailto: ocisse698@gmail.com"><AiOutlineMail /> ocisse698@gmail.com</a></li>                   
                    </ul>
                  </div> 
                 </div>  
                </div>
            </div>
         </nav>
       </main>
      <style jsx>{`
        main {
          padding: 2.1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
           }           
                 
 `} </style>
     </div>
  )
}
