//Using Async and await to fetch data from the url
//Making the API Call every XX seconds with setInterval

const getPrices = async (
  //Setting parameters for the API Call
  //Defining the values of the url params for the API Call
  ids = ["ethereum", "bitcoin", "dogecoin", "ripple", "cardano"],
  currencies = "eur"
) => {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=eur`;
  console.log(url);

  try {
    const res = await fetch(url);
    const data = await res.json();
    const cryptoData = [
      {
        name: "bitcoin",
        price: data.bitcoin.eur,
      },
      {
        name: "ethereum",
        price: data.ethereum.eur,
      },
      {
        name: "dogecoin",
        price: data.dogecoin.eur,
      },
      {
        name: "ripple",
        price: data.ripple.eur,
      },
      {
        name: "cardano",
        price: data.cardano.eur,
      },
    ];
    return cryptoData;
  } catch (err) {
    console.error(err);
  }
};

export default getPrices;
