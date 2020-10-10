import React, { Component } from "react";
import apiHandler from "../apiHandler";
import { withRouter } from "react-router-dom";

class FormBike extends Component {
  state = {
    brand: "",
    owner: "",
    color: "",
    size: "",
    price: "",
    image: "",
  };

  componentDidMount() {
    if (this.props.action === "edit") {
      apiHandler
        .getOne("/bikes/", this.props.id)
        .then((resApi) => {
          const bike = resApi.data;
          this.setState({
            brand: bike.brand,
            owner: bike.owner,
            color: bike.color,
            size: bike.size,
            price: bike.price,
            image: bike.image,
          });
        })
        .catch((apiErr) => console.log(apiErr));
    }
  }

  handleChange = (event) => {
    const key = event.target.name;
    const value =
      event.target.type === "file" ? event.target.files[0] : event.target.value;

    this.setState({
      [key]: value,
    });
  };

  createBike = () => {
    // create a form data
    const fd = new FormData();
    for (let key in this.state) {
      fd.append(key, this.state[key]);
    }

    apiHandler
      .createOne("/bikes", fd)
      .then((apiRes) => {
        this.props.history.push("/bikes");
      })
      .catch((err) => console.log(err));
  };

  updateBike = () => {
    apiHandler
      .updateOne(`/bikes/${this.props.id}`, this.state)
      .then(() => {
        this.props.history.push("/bikes");
      })
      .catch((err) => console.log(err));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.action === "edit") {
      this.updateBike();
    } else {
      this.createBike();
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <div className="form-input">
          <label className="form-label">Brand: </label>
          <input
            onChange={this.handleChange}
            name="brand"
            type="text"
            value={this.state.brand || ""}
          />
        </div>
        <div className="form-input">
          <label className="form-label">Owner's name: </label>
          <input
            onChange={this.handleChange}
            name="owner"
            type="text"
            value={this.state.owner || ""}
          />
        </div>
        <div className="form-input">
          <label className="form-label">Color: </label>
          <input
            onChange={this.handleChange}
            name="color"
            type="text"
            value={this.state.color || ""}
          />
        </div>
        <div className="form-input">
          <label className="form-label">Size: </label>
          <input
            onChange={this.handleChange}
            name="size"
            type="text"
            value={this.state.size || ""}
          />
        </div>
        <div className="form-input">
          <label className="form-label">Price: </label>
          <input
            onChange={this.handleChange}
            name="price"
            type="number"
            value={this.state.price || ""}
          />
        </div>
        <div className="form-input">
          <label className="form-label">Picture </label>
          <input
            onChange={this.handleChange}
            name="image"
            type="file"
            id="image"
          />
        </div>

        <button className="action-btn">submit</button>
      </form>
    );
  }
}

export default withRouter(FormBike);
