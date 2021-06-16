import React, { useEffect, useState } from "react";
import getPrices from "../helpers/APICallHelper";

export default function Card() {
  const [priceData, setPriceData] = useState(null);

  useEffect(() => {
    getPrices()
      .then((results) => setPriceData(results))
      .catch((err) => console.error(err));
  }, []);

  return <h1>hello</h1>;
}
