import Head from 'next/head';
import Link from 'next/link';
//import Test from 'textNextJs.js';
import styles from '../styles/Home.module.css';
import Menue from './components/barreMenue.js';
import Slide from './components/slider.js';
import Services from './components/services.js';
import JointUs from './components/nousRejoindre.js';
import Vocation from './components/vocations/vocation.js';
import Footer from './components/footer.js'
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillTwitterSquare, AiFillInstagram, AiOutlineMail, AiFillPhone, AiOutlineHome } from 'react-icons/ai';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Noullal: Livraison colis</title>
        <link rel="icon" href="/images/logo_ecole_doctorale.jpg" />
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
              <div>
                  <Vocation />
              </div>
          </div>
          <Footer />
      </div>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
            }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
