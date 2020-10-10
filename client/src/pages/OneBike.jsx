import React from "react";
import apiHandler from "../apiHandler.js";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

class OneBike extends React.Component {
  state = {
    bike: null,
  };

  componentDidMount() {
    apiHandler
      .getOne("/bikes/", this.props.match.params.id)
      .then((apiRes) =>
        this.setState({
          bike: apiRes.data,
        })
      )
      .catch((err) => console.log(err));
  }

  handleDelete = () => {
    apiHandler
      .deleteOne("/bikes/", this.state.bike._id)
      .then(() => {
        this.props.history.push("/bikes");
      })
      .catch((err) => console.log(err));
  };

  render() {
    if (!this.state.bike) {
      return <div>Loading...</div>;
    }
    return (
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <div>
          <h1>{this.state.bike.owner}'s bike</h1>
          <img src={this.state.bike.image} alt="owner-bike-img" />
          <h3>Price: ${this.state.bike.price}</h3>
          <button className="action-btn">
            <Link to={`/bikes/${this.state.bike._id}/edit`}>edit</Link>
          </button>
          <button className="action-btn" onClick={this.handleDelete}>
            delete
          </button>
        </div>
      </IconContext.Provider>
    );
  }
}

export default OneBike;
