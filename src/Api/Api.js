import React, { Component } from "react";
import axios from "axios";
import { Cards } from "../component/card";
import { Update } from "../component/newUpdate";
import { ChartBar } from "../component/BarCharts";

import "../App.css";
import "../index.css";

class Api extends Component {
  state = {
    countries: [],
    currentDate: null,
    global: [],
    loading: true,
  };
  async componentDidMount() {
    const res = await axios.get("https://api.covid19api.com/summary");
    this.setState({ Countries: res.data.countries });
    this.setState({ currentDate: res.data.Date });
    this.setState({ global: res.data.Global });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <h1>Loadding....</h1>;
    }
    return (
      <div>
        <h2 className="Updates">Global Data COVID 19</h2>
        <div className="firstCard">
          <Cards summary={this.state.global} date={this.state.currentDate} />
        </div>
        <div className="secondCard">
          <Update updation={this.state.global} />
        </div>

        <div className="Bar">
          <ChartBar allData={this.state.global} />
        </div>
      </div>
    );
  }
}

export default Api;
