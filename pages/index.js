import Head from 'next/head';
import Link from 'next/link';
//import Test from 'textNextJs.js';
import styles from '../styles/Home.module.css';
import Menue from './components/barreMenue.js';
import Slide from './components/slider.js';
import Services from './components/services.js';
import JointUs from './components/nousRejoindre.js';
import Vocation from './components/vocations/vocation.js';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Noullal: Livraison colis</title>
        <link rel="icon" href="/images/logoNoullal.png" />
      </Head>
      <>
        <Menue />
      </>
      <div className={styles.container}>
          <div>
              <div>
                  <Slide />
              </div>
              <div className="mb-5">
                 <Services />
              </div>
              <div className="mb-5">
                  <Vocation />
              </div>
              <div className="mb-5">
                <JointUs />
              </div>
          </div>
      </div>
      <footer>
         <div>
             <a
               href="https://noullal.com"
               target="_blank"
               rel="noopener noreferrer"
               className="d-flex"
             >
               <img src="/images/logoNoullal.png" alt="Noullal" className={styles.logo} />
               <h1> Noullal </h1>
             </a>

              <ul className="d-flex justify-content-around p-2">
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
              &nbsp; &nbsp;
              <span>
                  <strong> Nous suivre </strong>
                  <a href="https://www.fabebook/noullal" target="_blank"> <FaFacebookSquare /> </a>
                  <a href="https://www.twitter.com/noullal" target="_blank" > <AiFillTwitterSquare /> </a>
                  <a href="https://www.intagram.com/noullal" target="_blank" > <AiFillInstagram /> </a>
              </span>
         </div>
        <p> Noullal 2023. All rights reserved. </p>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          padding: 0.5em;
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
        footer ul { width: 65%;}
        footer img {
          margin-left: 0.5rem;
        }
        footer div {
          width: 80%;
          display: flex;
          justify-content: between;
          align-items: center;
          text-decoration: none;
          color: lavender;
          margin-bottom: 0.8em;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
