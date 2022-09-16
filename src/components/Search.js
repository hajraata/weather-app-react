import React from "react";
import "./Search.css";

class Search extends React.Component {
  state = { term: "" };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search">
        <form className="search-form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <input
              placeholder="Enter City Name"
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
