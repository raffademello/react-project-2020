import React, { Component } from "react";
import { Header, Segment, Container } from "semantic-ui-react";
import axios from "axios";
import footballBall from "../../assets/img/s-l400.jpg";

class Home extends Component {
  constructor() {
    super();
  }

  state = {
    isLoading: true,
    scores: [],
    balls:0
  };
  componentDidMount() {
    const API_URL = "https://sportwatch-soccer.p.rapidapi.com/getResults/cl";
    const headers = {
      "x-rapidapi-host": "sportwatch-soccer.p.rapidapi.com",
      "x-rapidapi-key": "548e1cd59amsh44e1e9822978385p1c5132jsn3f298bda43ad",
      useQueryString: true,
    };
    axios
      .get(API_URL, {
        headers: headers,
      })
      .then((response) => {
        this.setState({
          scores: response.data["Results"],
          isLoading: false,
        });
      });
  }
  render() {
    const results = this.state.scores;
    //const URL_IMG = "/../../assets/img/s-l400.jpg"
    console.log(results);
    const fbStyle ={
      backgroundImage:'url('+footballBall+') no-repeat center'
    }
    return (
      <>
      <h2>Champions League Scores</h2>
        <Segment textAlign="center" style={{ padding: "1em 0em" }} vertical>
          <div className="results">
            {results.map((result) => (
              <div className="item">
                  <div className="team home-team">
                    {result.homeTeam}
                  </div>
                  <div className="score-wrap">
                      <div class="score">
                          {result.scoreHome}
                      </div>
                      <span>x</span>
                    <div class="score">
                          {result.scoreAway}
                      </div>
                  </div>
                  <div className="team away-team">
                    {result.awayTeam}
                  </div>
              </div>
            ))}
          </div>
        </Segment>
      </>
    );
  }
}

export default Home;
