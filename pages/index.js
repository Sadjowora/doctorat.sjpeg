import Head from 'next/head';
import Link from 'next/link';
//import Test from 'textNextJs.js';
import styles from '../styles/Home.module.css';
import Menue from './components/barreMenue.js';
import Slide from './components/slider.js';
import Services from './components/services.js';
import JointUs from './components/nousRejoindre.js';
import Vocation from './components/vocations/vocation.js';

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
                  <Slide />
              <div className="mb-5">
                 <Services />
              </div>
              <div className="mb-3">
                  <Vocation />
              </div>
              <div className="mb-5">
                <JointUs />
              </div>
          </div>
      </div>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/images/logoNoullal.png" alt="Noullal" className={styles.logo} />
        </a>
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
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: darkgray;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: lavender;
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
