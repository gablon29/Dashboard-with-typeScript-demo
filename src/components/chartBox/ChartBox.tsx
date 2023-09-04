import "./chartBox.scss";
import { Link } from "react-router-dom";

const ChartBox = () => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src="/user.svg" alt="" />
          <span>Total Users</span>
        </div>
        <h1>11.238</h1>
        <Link to="/">View all</Link>
      </div>
      <div className="chartInfo">
        <div className="chart"></div>
        <div className="text">
          <span className="pocertanje">45%</span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
