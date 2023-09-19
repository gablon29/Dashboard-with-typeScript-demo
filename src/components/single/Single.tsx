import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            <img src="" alt="" />
            <h1>Jonh Cuanso</h1>
            <button>Update</button>
          </div>
          <div className="detail">
            <div className="item">
              <span className="itemTitle">Username:</span>
              <span className="itemValue">Jonh Cuanzo</span>
            </div>
          </div>
        </div>
        <div className="chart"></div>
      </div>
      <div className="activities"></div>
    </div>
  );
};

export default Single;
