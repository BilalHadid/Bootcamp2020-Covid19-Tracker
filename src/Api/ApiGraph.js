import React, { Component } from "react";
import axios from "axios";
import Chart from "../component/Chart";

class Graph extends Component {
  state = {
    dailyUpdate: [],
    category: [],
    loading: true,
  };
  async componentDidMount() {
    const res = await axios.get(
      "https://covid19-update-api.herokuapp.com/api/v1/cases/graphs"
    );
    this.setState({ dailyUpdate: res.data.graphs.dailyCases });
    this.setState({ category: res.data.graphs.dailyCases.categories });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <h1>Loadding....</h1>;
    }
    return (
      <div>
        <Chart
          dailyData={this.state.dailyUpdate}
          categories={this.state.category}
        />
      </div>
    );
  }
}
export default Graph;
