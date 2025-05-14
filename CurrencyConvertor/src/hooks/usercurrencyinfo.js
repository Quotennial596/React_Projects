import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setdata] = useState({})
    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setdata(res.rates))
    }, [currency]) 
    return data
}

export default useCurrencyInfo;