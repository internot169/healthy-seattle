import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useEffect, useState} from 'react';


export async function GET(){
  var url = 'https://aqs.epa.gov/data/api/sampleData/byCounty?email=rli@eastsideprep.org&key=amberram68&param=88101&bdate=20230901&edate=20231101&state=53&county=033'
  
  const res = await fetch(url);
  const data = await res.json();

  return Response.json({ data })
}

export function Data() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    GET();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);
  return (<h1>{data[Data][0][sample_measurement]}</h1>)
}

export default function Home() {
  
  return (
    <div className={styles.container}>
      
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home - Healthy Seattle</title>
        <link rel="shortcut icon" type="image/jpg" href="public/logo.png" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="https://use.typekit.net/phg7nca.css" />
      </Head>

      <main>
        <Data></Data>
        <div class="container-fluid text-white p-3">
          <nav class="navbar navbar-expand-sm navbar-light rounded p-0 w-75 m-auto">
            <div class="container-fluid justify-content-center">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    <h3>Home</h3>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="air">
                    <h3>Air</h3>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="land">
                    <h3>Land</h3>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="water">
                    <h3>Water</h3>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div>
          <h1 class="text-center display-1 title m-4">Healthy Seattle</h1>
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
                Our items are always either functional or pleasing to the eye -
                often both. We strive to solve problems that you have, and
                making it look good while doing it.
              </p>
            </div>
            <div class="col-md">
              <h2 class="text-center"> Constantly Innovating </h2>
              <p>
                {" "}
                We are constantly working on new ideas and new products,
                innovating ways to change the way you store items and decorate
                workspaces{" "}
              </p>
            </div>
            <div class="col-md">
              <h2 class="text-center"> Impacting the World </h2>
              <p>
                We donate all of our "profits" - either to the school where we
                come from, giving back to our roots, or to local charities that
                benefit the lives of others. Our sustainable products also help
                with bettering the planet.
              </p>
            </div>
          </div>
        </div>

        <div class="container-fluid p-3 importantbox rounded-5 m-auto">
          <h1 class="p-3">Why Be Sustainable?</h1>
          <p>
            Sustainability has many benefits, both for you and for people around
            you.
          </p>
          <h2>How does it benefit me?</h2>
          <p>eee</p>
          <h2>How does it benefit others?</h2>
          <p>by deezing their nuts</p>
        </div>
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
          background-color: #40e0d0;
        }
        * {
          box-sizing: border-box;
        }
        .importantbox {
          background-color: #66493a;
          color: #ffc18c;
          width: 90%;
        }

        .importantbox > h1 {
          color: #d73502;
          font-size: 50px;
        }

        .importantbox > h3 {
          color: #ffc18c;
          font-size: 35px;
        }

        .importantbox > p {
          color: #ffc18c;
          font-size: 30px;
          padding: 10px;
        }
      `}</style>
    </div>
  );
}

GET();