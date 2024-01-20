import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Home - Silvestria</title>
        <link rel="shortcut icon" type="image/jpg" href="images/silvestria-logo.png"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <link rel="stylesheet" href="css/style.css"/>
        <link rel="stylesheet" href="https://use.typekit.net/phg7nca.css"/>
      </Head>

      <main>
        <div class="container-fluid text-white p-3">
          <nav class="navbar navbar-expand-sm navbar-light rounded p-0 w-75 m-auto">
              <div class="container-fluid justify-content-center">
                  <ul class="navbar-nav">
                      <li class="nav-item">
                          <a class="nav-link" href="materials.html">
                              <h3>Use, Materials, Maintenance</h3>
                          </a>
                      </li>
                      <li class="nav-item">
                          <a class="navbar-brand" href="#">
                              <img src="images/silvestria-logo.png" class="d-inline-block align-top navlogo" alt="Silvestria Logo" />
                          </a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="about.html">
                              <h3>About, Contact, FAQs</h3>
                          </a>
                      </li>
                  </ul>
              </div>
          </nav>
      </div>
          
      <div> 
          <h1 class="text-center display-1 title m-4">
              Silvestria
          </h1>
      </div>

      <div class="d-grid col-5 mx-auto">
          <a href="preorder.html" class="btn btn-lg btn-block orderbutton" role="button">Preorder</a>
      </div>

      <div class="container-fluid p-3 importantbox rounded-5 m-auto">
          <h1 class="p-3">
              Why Us?
          </h1>
          <p>
              We, Silvestria, aim to create small, laser-cut, 3D-printed, or vinyl-cut decorations that also serve purposes. 
              It brings both bright color and cozy, natural wood into new places. 
              Simple designs also allows our items to be easily disassembled and/or stored when moving them from place to place. 
              The wooden items also smells like a warm fireplace, bringing peace not just visually but also aromatically. 
              With just a single item, you can bring the aesthetics of nature into your workplace.
          </p>
          <p>
              We also seek to make everyday items sustainable, using biodegradable materials to make our products, whether it is plywood or biodegradeable PLA. 
              This ensures that you can be decorating your life without guilt to the environment. 
              Bettering the environment and lives of others is enough for us - that's why we are nonprofit, donating all the costs to EPS, which provides the materials and machines, as well as local charities, 
              so you can be sure that you are bettering the lives of others as well as yourself by purchasing our products.
          </p>
          <p>
              Enjoy!
          </p>
          <h3 class="p-3">
              Co-Founders Changrui (Ryan) Li and Nathaniel Gong
          </h3>
      </div>

      <div>
          <h2 class="list-subtitle">
              Brightening the world, one cut at a time
          </h2>
      </div>

      <div class="container">
          <div class="row">
              <div class="col-md">
                  <h2 class="text-center"> Functional and Pleasing </h2>
                  <p> 
                      Our items are always either functional or pleasing to the eye - often both.
                      We strive to solve problems that you have, and making it look good while doing it. 
                  </p>
              </div>
              <div class="col-md">
                  <h2 class="text-center"> Constantly Innovating </h2>
                  <p> We are constantly working on new ideas and new products, innovating ways to change the way you store items and decorate workspaces </p>
              </div>
              <div class="col-md">
                  <h2 class="text-center"> Impacting the World </h2>
                  <p> 
                      We donate all of our "profits" - either to the school where we come from, giving back to our roots, or to local charities that benefit the lives of others.
                      Our sustainable products also help with bettering the planet.
                  </p>
              </div>
          </div>
      </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
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
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
