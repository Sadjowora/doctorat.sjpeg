import Link from 'next/link';
import styles from '../../styles/Slide.module.css';
import { AiOutlineCalendar } from 'react-icons/ai';

const Actualites = ()=>{
	return (<div className={styles.actualites}>
                  <div style={{ borderTopRightRadius: "8px",
                              borderTopLeftRadius: "8px",
                              backgroundColor: "#2e86c1" }} > 
                      <h1 className="w-100"> Actualités </h1> 
                  </div>
                  <div className={"p-2 "+styles.actualitesContainer}>
                     <div className={styles.cardActualites} >
                     	<Link href="#" > 
                     	    <h3>DEPÔT DE DOSSIER POUR LA CANDIDATURE DE LA NOUVELLE COHORTE</h3>
                     	    <label> <AiOutlineCalendar /> <small> Du 09 au 29 janvier 2023.  </small> </label>
                     	</Link>
                     </div>
                     <div className={styles.cardActualites} >
                     	<Link href="#" >  
                     	    <h3>LE SEMINAIRE DE LOGICIELS STATISTIQUES ET ECONOMETRIQUES
                            ( Stat,Éviers, Excel avancée, kobo- Toolbox SPSS) est programmé entre le 1er et le 4 août :
                             Dr Mamoudou BAGAGA ( MESRSI)</h3>
                     	     <label> <AiOutlineCalendar /> <small> Du 1er au 4 août  </small> </label>
                     	</Link>
                     </div> 
                     <div className={styles.cardActualites} >
                     	<Link href="#" >
                     	    <h3>DEBUT DES COURS OCTOBRE </h3>
                     	     <label> <AiOutlineCalendar /> <small> Octobre  </small> </label>
                     	</Link>
                     </div>
                     <div className={styles.cardActualites} >
                     	<Link href="#" >
                     	    <h3>FIN DES COURS JUILLET</h3>
                     	     <label> <AiOutlineCalendar /> <small> Juillet </small> </label>
                     	</Link>
                     </div>
                  </div>
              </div>)
}
export default Actualites;