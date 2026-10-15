// components/StockList.jsx
import StockCard from "./StockCard";
import useStockData from "../hooks/useStockData";

function StockList() {
  const { stocks, loading, error } = useStockData();

  if (loading) return <p className="text-center">Loading stocks...</p>;
  if (error) return <p className="text-center text-error">Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stocks.map((stock) => (
        <StockCard key={stock.symbol} stock={stock} />
      ))}
    </div>
  );
}

export default StockList;