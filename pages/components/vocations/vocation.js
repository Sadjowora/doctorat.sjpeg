import styles from '../../../styles/Vocation.module.css';
import Link from 'next/link';
import { AiOutlineSafety, AiOutlineLike, AiFillPhone, AiOutlineMail } from 'react-icons/ai';

function Vocation () {

  return (<div>
          <div className={styles.vocation}>
            <div className={styles.vocationCard}>
              <div className="flex-column w-75">
                  <h1> Souhaiterez vous être <strong style={{color:"#2e86c1"}}>  doctorant </strong> Chez nous <strong style={{color:"#2e86c1"}}> Deposer votre candidature </strong> Maintenant. </h1>
                   <p> Pour effectuer un doctorat au sein de notre école, il vous faut, avant toute chose, consulter nos critères d’admission. Nous attirons en particulier votre attention sur le fait que nous demandons que les candidats aient effectué des parcours académiques de haute qualité comme une mention en MASTER, un note de mémoire/rapport de stage convainquant. </p>
                   <div className="d-flex justify-content-between w-50"> 
                     <Link href="/components/admission" className="btn btn-outline-primary mt-4"> Candidater </Link>
                     <div className="nav-item dropdown mt-4">
                      <a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Nous contacter
                      </a>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" href="/components/formations"> Adresse: Sonfonia - Conakry, République de Guinée </Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li> <AiFillPhone /> (+224)666715653 / 628637599  </li>
                        <li> <AiOutlineMail /> alydiaby2002@yahoo.fr </li>
                        <li> <AiOutlineMail /> ocisse698@gmail.com  </li>  
                      </ul>
                    </div>
                 </div>
             </div>
              <div> <img src="/images/etudiant-doctorant.avif" alt="abordable" /></div>
            </div>
            <div className={"d-flex justify-content-center "+styles.partenaires}>
               <div>
                   <h1 className="mb-3"> Partenaires </h1>
                   <ul className="d-flex justify-content-between">
                      <li> 
                         <Link href="https://www.ucad.sn/"> 
                            <img src="/images/univ-cad.jpg" alt="universite-cAd-Dakar" />
                            <small> Université Cheikh Anta Diop (UCAD) Dakar  </small>
                         </Link>
                      </li>
                      <li>
                          <Link href="https://www.univ-kindia.org/"> 
                             <img src="/images/univ-kindia.jpeg" alt="universite-kindia" /> 
                             <small> Université de Kindia (UK) </small>
                          </Link> 
                      </li>
                      <li> 
                         <Link href="https://www.ujnk.org/">
                            <img src="https://www.ujnk.org/resources/_wsb_keyvisual.jpg" alt="universite-julus-n-kankan" />
                            <small> Université Julius Nyerere de Kankan (UJNK) </small> 
                         </Link>
                      </li>
                      <li> 
                        <Link href="https://univ-ao.edu.ci/">
                           <img src="/images/univ-bouake.webp" alt="universite-bouake" />
                           <small> Université Alassane Ouattara (UAO) Bouaké  </small>
                        </Link>
                      </li>
                   </ul>
               </div>
            </div>
          </div>
    </div>);
}

export default Vocation;
