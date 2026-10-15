// StockCard.jsx
import PropTypes from "prop-types";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import StockChart from "./StockChart";

function StockCard({ stock }) {
  const isUp = stock.change >= 0;

  return (
    <div className="card bg-base-200 shadow-xl transition-transform duration-300 hover:scale-105">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{stock.symbol}</h2>
          <span className={isUp ? "text-success flex items-center gap-1" : "text-error flex items-center gap-1"}>
            {isUp ? <FiTrendingUp /> : <FiTrendingDown />}
            {stock.change}%
          </span>
        </div>
        <p className="text-2xl font-bold">${stock.price.toFixed(2)}</p>
        <StockChart data={stock.history} isUp={isUp} />
      </div>
    </div>
  );
}

StockCard.propTypes = {
  stock: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    change: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default StockCard;