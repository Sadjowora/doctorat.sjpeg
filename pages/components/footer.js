import styles from '../../styles/Home.module.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillTwitterSquare, AiFillInstagram, AiOutlineMail, AiFillPhone, AiOutlineHome } from 'react-icons/ai';
import Link from 'next/link'
const Footer = ()=>{
	return (<div>
			<footer className={styles.footer} >
	          <div>
	             <a
	               href="https://noullal.com"
	               target="_blank"
	               rel="noopener noreferrer"
	               className={styles.linkFooter}
	             >
	               <img src="/images/logo_ecole_doctorale.jpg" alt="ED-SJPEG" className={styles.logo} />
	               <h1> ED-SJPEG </h1>
	             </a>

	              <ul className={"m-2 ml -0 "+styles.lienFooter}>
	                <li className={"nav-item "+styles.titleEcoleFooter} >
	                  <div className="nav-link flex-column"> 
	                    <h3> L’Ecole Doctorale en Sciences Juridiques, Politiques, Economiques et de Gestion (ED-SJPEG) </h3>                     
	                    <p> <strong style={{color: "#000"}}> Adresse: </strong> <AiOutlineHome /> Sonfonia - Conakry, République de Guinée </p>
	                  </div>
	                </li>
	                <li className={"nav-item flex-column "+styles.listeFilliere}>
	                  <h4 className={styles.linkTitle} > FORMATIONS </h4>
	                  <Link className="nav-link" href="/components/aboutUs"> Sciences Juridiques </Link>
	                  <Link className="nav-link" href="#"> Sciences Politiques </Link>
	                  <Link className="nav-link" href="#"> Sciences Economiques </Link>
	                  <Link className="nav-link" href="#"> Sciences des Gestions </Link>
	                </li>
	                <li className="nav-item"> 
	                    <h4 className={styles.linkTitle}> NOUS CONTACTER </h4>
	                     <small> <AiFillPhone /> (+224)666715653 / 628637599  </small><br/>	                    
	                     <small> 
	                      <a href="mailto: uglcedsjpeg@gmail.com"> <AiOutlineMail />  uglcedsjpeg@gmail.com  </a> <br/>
	                      <a href="mailto: alydiaby2002@yahoo.fr"> <AiOutlineMail /> alydiaby2002@yahoo.fr </a> <br/>
	                      <a href="mailto: ocisse698@gmail.com"> <AiOutlineMail /> ocisse698@gmail.com </a>
	                     </small> 
	                </li> 
	              </ul>
	              &nbsp; &nbsp;              
	         </div>
	        <p> ED-SJPEG 2023. All rights reserved. </p>
	      </footer>

	      <style jsx>{`	      
	        footer {
	          width: 100%; 
	          padding: 0.8em;
	          border-top: 1px solid #eaeaea;
	          display: flex;
	          justify-content: start;
	          flex-direction: column;
	          align-items: center;
	          background-color: darkgray;
	        }	              	   
	      `}</style>
   </div>
   )
}
export default Footer;