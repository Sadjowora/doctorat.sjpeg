import styles from '../../styles/formation.module.css';
import Link from 'next/link';

const MenueFormation = ({...props})=>{
	return(<div className={styles.listFormation}>
               <div>
                   <ul className={styles.menueFormation} >                     
                      <li> 
                         <Link href="/components/formations" onClick={props.setTypeShow} > 
                            <h5 className="mb-2"> FORMATION DOCTORALE </h5>
                         </Link>
                      </li>
                      <li>
                          <Link href="/components/formations?details" onClick={props.setTypeShow} > 
                             <h5 className="mb-2"> Sciences Juridique </h5>
                          </Link> 
                      </li> 
                      <li>
                          <Link href="/components/formations:Politiques" > 
                             <h5 className="mb-2"> Sciences Politiques </h5>
                          </Link> 
                      </li> 
                      <li>
                          <Link href="/components/formations/:Economique" > 
                             <h5 className="mb-2"> Sciences Economique </h5>
                          </Link> 
                      </li> 
                      <li>
                          <Link href="/components/formations/:Gestion" > 
                             <h5 className="mb-2"> Sciences de Gestion </h5>
                          </Link> 
                      </li> 
                      <li>
                          <Link href="/components/cohorte?type=cohorte" > 
                             <h5 className="mb-2"> Cohortes </h5>
                          </Link> 
                      </li> 
                        <li>
                          <Link href="/components/professeurs?type=proffesseur" > 
                             <h5 className="mb-2"> Professeurs </h5>
                          </Link> 
                      </li> 
                       <li>
                          <Link href="/components/admission"> 
                             <h5 className="mb-2"> S'incrire chez nous </h5>
                          </Link> 
                      </li>
                   </ul>
               </div>            
          </div>);
}
export default MenueFormation;
