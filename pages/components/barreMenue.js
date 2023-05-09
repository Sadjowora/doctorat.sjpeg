import Head from 'next/head';
import styles from '../../styles/Menue.module.css';
import Link from 'next/link';

export default function Menue (){

return (
    <div className={styles.container}>
        <Head>
           <title> Noullal </title>
        </Head>
        <main>
          <h1 className={styles.title}> Le Menue de Noullal </h1>
        </main>
        <Link href="/" className={styles.liens}> Home </Link>
        <div className="dropdown m-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              id="dropdownMenuButton1"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Option 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Option 2
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Option 3
                </a>
              </li>
            </ul>
          </div>
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
