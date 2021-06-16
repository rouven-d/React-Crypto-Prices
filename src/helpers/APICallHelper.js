//Using Async and await to fetch data from the url
//Making the API Call every XX seconds with setInterval

const getPrices = async (
  //Setting parameters for the API Call
  //Defining the values of the url params for the API Call
  ids = [
    "ethereum",
    "bitcoin",
    "internet-computer",
    "dogecoin",
    "ripple",
    "cardano",
  ],
  currencies = "eur"
) => {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${currencies}`;

  try {
    const res = await fetch(url);
    const results = await res.json();
    return results;
  } catch (err) {
    console.error(err);
  }
};

export default getPrices;
