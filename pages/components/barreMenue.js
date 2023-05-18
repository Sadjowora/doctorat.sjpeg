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
          <nav className={"navbar navbar-expand-lg bg-body-tertiary fixed-top "+styles.bgradient}>
            <div className="container-fluid d-flex justify-content-between">
              <Link className="navbar-brand w-25" href="/">
                <img src="/images/logoNoullal.png" alt="#" width="50" height="40" className="d-inline-block rounded align-text-center"/>&nbsp;
                <label className={styles.title}> Noullal </label>
              </Link>
              <button className="navbar-toggler w-25" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={styles.menueCollapse}>
                <div className="collapse navbar-collapse " id="navbarNav">
                  <ul className="navbar-nav me-auto my-2 my-lg-0">
                    <li className="nav-item">
                      <Link className={"nav-link "+styles.active} aria-current="page" href="/"> Accueill </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/"> Carrières </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/components/aboutUs"> Apropos </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/components/contactUs"> Nous Contacter </Link>
                    </li>
                  </ul>
                 </div> <button className="btn btn-primary"> Nous Joindre </button>
                </div>
            </div>
         </nav>
       </main>
      <style jsx>{`
        main {
          padding: 2.1rem 0;
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
