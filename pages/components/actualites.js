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
                     	    <h3>DEBUT DES INSCRIPTIONS DES DOCTORANTS GUINEEENS</h3>
                     	    <label> <AiOutlineCalendar /> <small>  1 juillet 2023 </small> </label>
                     	</Link>
                     </div>
                     <div className={styles.cardActualites} >
                     	<Link href="#" >
                     	    <h3>Les reinscriptions en doctorants pour 2023-2024 sont ouverts depuis le 30 juin 2023. date limite le 30 septembre 2023.</h3>
                     	     <label> <AiOutlineCalendar /> <small> 2 juillet 2023  </small> </label>
                     	</Link>
                     </div>
                     <div className={styles.cardActualites} >
                     	<Link href="#" >
                     	    <h3>CONCOURS CONTRACT DOCTORAUX 2023 </h3>
                     	     <label> <AiOutlineCalendar /> <small> 15 juillet 2023  </small> </label>
                     	</Link>
                     </div>
                     <div className={styles.cardActualites} >
                     	<Link href="#" >
                     	    <h3>DEBUT DES COURS 2023-2024 le 10 octobre 2023 </h3>
                     	     <label> <AiOutlineCalendar /> <small> 29 juin 2023  </small> </label>
                     	</Link>
                     </div>
                     <div className={styles.cardActualites} >
                     	<Link href="#" >
                     	    <h3>FIN DES COURS 2023-2024 le 30 juin 2024</h3>
                     	     <label> <AiOutlineCalendar /> <small> 29 juin 2023  </small> </label>
                     	</Link>
                     </div>
                  </div>
              </div>)
}
export default Actualites;