import Head from 'next/head';
import styles from '../../styles/Menue.module.css';
import Link from 'next/link';
export default function Menue (){

return (
    <div>
        <Head>
           <title> Noullal </title>
        </Head>
        <main>
          <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{backgroundColor: '#ffd200'}}>
            <div className="container-fluid d-flex justify-content-between">
              <Link className="navbar-brand w-25" href="#">
                <img src="#" alt="#" width="30" height="24" className="d-inline-block align-text-top"/> Noullal
              </Link>
              <button className="navbar-toggler w-25" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={styles.menueCollapse}>
                <div className="collapse navbar-collapse " id="navbarNav">
                  <ul className="navbar-nav me-auto my-2 my-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Accueill</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Nous Contacter</a>
                    </li>
                  </ul>
                 </div>
                 <button className="btn btn-primary bg-dark"> Nous Contacter</button>
                </div>
            </div>
         </nav>
       </main>
      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
           }
      `} </style>
     </div>

  )
}
