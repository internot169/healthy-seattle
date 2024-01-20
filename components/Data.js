import React from "react";

export async function GET() {
  var url =
    "https://aqs.epa.gov/data/api/sampleData/byCounty?email=rli@eastsideprep.org&key=amberram68&param=88101&bdate=20230901&edate=20231101&state=53&county=033";

  const res = await fetch(url);
}

const Data = () => {
  var url =
    "https://aqs.epa.gov/data/api/sampleData/byCounty?email=rli@eastsideprep.org&key=amberram68&param=88101&bdate=20230901&edate=20231101&state=53&county=033";

  const result = $.getJSON(url);

  console.log(result);
  return <h1>{result[Data][0][sample_measurement]}</h1>;
};

export default Data;
