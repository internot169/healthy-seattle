import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [showPosts, setShowPosts] = useState()

  let finalHTML
  function pullJson(){
    finalHTML = pull(88101, 20230901, 20230930, "PM 2.5")
    finalHTML += pull(42101, 20230901, 20230930, "Carbon Monoxide")
    finalHTML += pull(42401, 20230901, 20230930, "Sulfur Dioxide")
    finalHTML += pull(42602, 20230901, 20230930, "Nitrogen Dioxide")
    finalHTML += pull(44201, 20230901, 20230930, "Ozone")
    finalHTML += pull(14129, 20230901, 20230930, "Lead (TSP) LC")
    setShowPosts(finalHTML);
  }

  let displayData 
  function pull(param, bdate, edate, paramText) {
    const apiUrl ="https://aqs.epa.gov/data/api/sampleData/byCounty?email=rli@eastsideprep.org&key=amberram68&param=" + param + "&bdate=" + bdate + "&edate=" + edate + "&state=53&county=033";
    fetch(apiUrl)
      .then(response => response.json())
      .then(
        responseData => {
            const data = responseData['Data'][responseData['Data'].length - 1];
            if (data == null){
              return;
            }
            var cleanData = {
              'date_of_last_change': data['date_local'],
              'time_local': data['time_local'],
              'parameter': paramText,
              'sample_measurement': data['sample_measurement'],
              'date_of_last_change': data['date_of_last_change']
            }
            displayData = <p key={cleanData['date_of_last_change'] + cleanData['time_local']}>{ cleanData['parameter'] + ": " +  cleanData['sample_measurement'] + " (" + cleanData['date_of_last_change'] + ")" }</p>
            return displayData;
          }
      )
  }

  pullJson();
  
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
        <link rel="stylesheet" href="https://use.typekit.net/dss6iov.css" />
      </Head>

      <main>
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

        <br />
        
        <h3> Last Measured Stats: </h3>
        
        {showPosts}

        <br />
        <br />
        <br />

        <div class="container">
          <div class="row">
            <div class="col-md">
              <h2 class="text-center"> About </h2>
              <p>
                This website aims to show Seattlites the benefits of sustainability. We use the EPA's <a href="https://aqs.epa.gov/aqsweb/documents/data_api.html">AQS API</a> to get access to accurate air quality data. Currently, we support King County data through the end of 2023 (as the AQS has not yet been updated for 2024). We also use the <a href="https://www.climatiq.io/">ClimateIQ API</a> for carbon emission calculations.
              </p>
              <h2 class="text-center"> Take Action</h2>
              <p>

              </p>
              <h2 class="text-center"> Preserving the Planet</h2>
              <p>
                Sustainability is our commitment to preserving the delicate balance of our planet. By adopting eco-friendly practices, we contribute to the conservation of natural resources, protect biodiversity, and mitigate the impact of climate change. By making sustainable choices, we ensure a healthier and more vibrant Earth for generations to come.
              </p>
              <h2 class="text-center"> Social Responsibility </h2>
              <p>
                Being sustainable goes hand in hand with social responsibility. By choosing sustainable products and practices, we support ethical labor practices and fair trade. This helps uplift communities, promote inclusivity, and create a more equitable global society. Our commitment to social responsibility extends to fostering positive relationships with local communities and promoting economic development.
              </p>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />

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

          font-size: 20px;

          background-color: #40e0d0;
        }
        h1, h2, h3 {
          /* FONT AND COLOR */
          font-family: "atocha", sans-serif;
          font-weight: 400;
          font-style: normal;
      
          text-align: center;
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
