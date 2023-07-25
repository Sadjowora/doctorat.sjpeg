import styles from '../../styles/Slide.module.css';
import Link from 'next/link';
import Actualites from './actualites.js';
import { AiOutlineSafety, AiOutlineLike } from 'react-icons/ai';
import { MdAccessible } from 'react-icons/md';
function Slide () {

return (<div className="flex-column"> 
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className={"carousel-inner "+styles.containerSlide}>             
            <div className="carousel-item active">
              <img src="images/neuPhotos/slide-01.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="images/neuPhotos/slide-02.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="images/neuPhotos/slide-03.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="images/neuPhotos/slide-11.jpeg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="images/neuPhotos/slide-04.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="images/neuPhotos/slide-05.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="images/neuPhotos/slide-06.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="images/neuPhotos/slide-07.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="images/neuPhotos/slide-08.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="images/neuPhotos/slide-09.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="images/neuPhotos/slide-10.jpg" className="d-block w-100" alt="..."/>
            </div>
            
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className={"flex-column "+styles.slideGlobal}> 
           <div className="d-flex justify-content-between flex-wrap">              
              <div className={"flex-column mb-2 "+styles.axeVocation}> 
                <div className={styles.slideInfos}>
                   <h1> Bienvenue sur le site de l'ED-DESJPEG </h1>
                </div>
                <p>
                  Créée en 2017 l’Ecole doctorale « ED-DESJPEG » prépare au Doctorat dans quatre grands champs disciplinaires :
                  le Droit, la Science Politique, les Sciences Économiques et les Sciences de Gestion. 
                  Sa vocation pluridisciplinaire lui permet de développer des synergies entre Juristes, Politologues, Economistes et Gestionnaires qui
                  peuvent avoir des champs de recherches voisins et complémentaires tout en mobilisant des méthodologies différentes. 
                  l’Ecole a fonctionné à temps plein durant l’année universitaire 2022-2023.<strong>  78 doctorants ont été inscrits à l’ED-DESJPEG  par le passé ( cohorte 1 et  2). La 3ème cohorte recrutée  en 2023, tous programmes compris, compte 43 doctorants. 
                    </strong>
                </p> 
                <div>
                  <p>
                    À chaque doctorant admis au sein de l’ED-DESPEG, une formation pluridisciplinaire est offerte qui est conçue et organisée pour améliorer l’apprentissage de la recherche ainsi que pour favoriser le développement de recherche répondant aux grands défis sociétaux dont la révolution numérique, la transition écologique, et les nouveaux défis de la mondialisation.
                  </p>
                </div> 
                <div>
                   <p>
                      L’Ecole Doctorale en Sciences Juridiques, Politiques, Economiques et de Gestion (EDJPEG), est l’une des deux Ecoles Doctorales dont dispose Université Générale lansana conté de sonfonia (UGLC-SC).
                   </p> 
                </div>
                <div>
                   <p>
                      Elle a un organe délibérant qui s’appelle le conseil scientifique qui est l’organe stratégique. ET un organe opérationnel qui est la Direction de l’Ecole. <br/>
                       L’objectif général poursuivi par nos programmes de troisième cycle est la diversification de l’offre de formation et une spécialisation avancée dans le but de qualifier les formateurs et les chercheurs. <br/> 
                       Ceci va favoriser l’acquisition d’un haut niveau d’autonomie intellectuelle et d’expertise de personnes hautement qualifiées dans ces disciplines ou ces champs d’études. 
                       Par l’enseignement, les Ecoles doctorales sont au service de la guinée et de l’Afrique dont nous formons les fils et par la recherche, 
                       nous nous intéressons au problématique du développement de notre continent et au débat scientifique international.
                   </p>
                </div>
              </div>
              <div className={styles.contentActu} >
                 <Actualites />
              </div>
           </div>
      </div>
    </div>
  );
}

export default Slide;
