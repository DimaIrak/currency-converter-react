import { useEffect, useState } from "react";

export const useRatesData = () => {
    const API_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_dicjdNB7adLyo9HvvTsJla2S6wny6LS6NBRbBpKM&base_currency=PLN";
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const { data, meta } = await response.json();

                setRatesData({
                    status: "success",
                    rates: data,
                    date: meta.last_updated_at,
                });

            } catch {
                setRatesData({
                    status: "error",
                });
            }
        };

        setTimeout(fetchRates, 6000);
    }, []);

    return ratesData;
};