import React, { Component } from "react";

class ClassForm extends Component {
  constructor(props) {
    super();
    this.state = {
      students: [{ name: "Lolo", email: "lolo@gmail.com", gen: "4" }],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.gen);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      students: [
        ...this.state.students,
        { name: this.state.name, email: this.state.email, gen: this.state.gen },
      ],
      name: "",
      email: "",
      gen: "",
    });
    e.target.value();
  }

  render() {
    return (
      <div className="create">
        <h3>Student Fellows Registration</h3>
        <form>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.students.name}
            onChange={this.handleChange}
          />
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={this.state.students.email}
            onChange={this.handleChange}
          />
          <label>Gen:</label>
          <input
            type="text"
            name="gen"
            value={this.state.students.gen}
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
        {this.state.students.map((item, index) => {
          return (
            <div key={index} className="display">
              <p>name: {item.name}</p>
              <p>email: {item.email}</p>
              <p>gen: {item.gen}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ClassForm;
