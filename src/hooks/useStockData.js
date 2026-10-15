// hooks/useStockData.js
import { useState, useEffect } from "react";
import axios from "axios";
import { mockStocks } from "../data/mockStocks";

function useStockData() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        setLoading(true);
        // Swap this for a real endpoint, e.g.:
        // const res = await axios.get("https://api.example.com/stocks");
        // setStocks(res.data);
        await new Promise((resolve) => setTimeout(resolve, 500));
        setStocks(mockStocks);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  return { stocks, loading, error };
}

export default useStockData;