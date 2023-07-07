import styles from '../../styles/Home.module.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillTwitterSquare, AiFillInstagram, AiOutlineMail, AiFillPhone, AiOutlineHome } from 'react-icons/ai';
import Link from 'next/link'
const Footer = ()=>{
	return (<div>
			<footer>
	          <div>
	             <a
	               href="https://noullal.com"
	               target="_blank"
	               rel="noopener noreferrer"
	               style={{width:"14%"}}
	             >
	               <img src="/images/logo_ecole_doctorale.jpg" alt="Noullal" className={styles.logo} />
	               <h1>ED-SJPEG </h1>
	             </a>

	              <ul className="d-flex justify-content-between m-2">
	                <li className="nav-item w-50">
	                  <p className="nav-link"> 
	                    <h3> L’Ecole Doctorale en Sciences Juridiques, Politiques, Economiques et de Gestion (EDJPEG) </h3>                     
	                    <strong style={{color: "#000"}}> Adresse: </strong> <AiOutlineHome /> Sonfonia - Conakry, République de Guinée
	                  </p>
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
	                    <small> <AiOutlineMail /> alydiaby2002@yahoo.fr <br/> <AiOutlineMail /> ocisse698@gmail.com  </small> 
	                </li>
	                <li className="flex-column">
	                   <h4 className={styles.linkTitle}> NOUS SUIVRE </h4><br/>
	                   <span className="flex-column">
	                      <a href="https://www.fabebook/noullal" target="_blank"> <FaFacebookSquare /> </a>
	                      <a href="https://www.twitter.com/noullal" target="_blank" > <AiFillTwitterSquare /> </a>
	                      <a href="https://www.intagram.com/noullal" target="_blank" > <AiFillInstagram /> </a>
	                   </span>
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
	        footer li a:hover { color: Black;}
	        footer h1 { color: Black;}
	        footer span { font-size: 1.5em;}
	        footer ul { width: 80%;}
	        footer img {
	          margin-left: 0.5rem;
	        }
	        footer div { 
	          display: flex;
	          justify-content: space-between;
	          align-items: center;
	          text-decoration: none;
	          color: lavender;
	          margin-bottom: 1.5em;
	        }
	     
	      `}</style>
   </div>
   )
}
export default Footer;