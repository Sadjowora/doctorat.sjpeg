import styles from '../../styles/formation.module.css';
import Link from 'next/link';

const MenueFormation = ({...props})=>{
	return(<div className={styles.listFormation}>
               <div>
                   <ul className="flex-column">                     
                      <li> 
                         <Link href="/components/formations" onClick={props.setTypeAffichage}> 
                            <h5 className="mb-2"> FORMATION DOCTORALE </h5>
                         </Link>
                      </li>
                      <li>
                          <Link href="/components/formations?type=formation" onClick={props.setTypeAffichage} > 
                             <h5 className="mb-2"> Nos Formations proposées </h5>
                          </Link> 
                      </li> 
                       <li>
                          <Link href="/components/admission"> 
                             <h5 className="mb-2"> Sincrire chez nous </h5>
                          </Link> 
                      </li>
                   </ul>
               </div>            
          </div>);
}
export default MenueFormation;
