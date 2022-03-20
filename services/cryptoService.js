import axios from "axios";


export const getMarketData = async () => {

    try {
        // API Calls go here
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=7d")
        const data = response.data;
        const formattedResponse = (data)
        return formattedResponse;
    }
    
    catch (error) {
        console.log(error.message)
    }

} 