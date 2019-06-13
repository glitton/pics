import React from "react";

class SearchBar extends React.Component {
  state = {
    term: " "
  };
  //  Default way, Do this instead of binding
  onFormSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        {/* Another way would be to add the arrow to onFormSubmit and invoke it */}
        {/* <form onSubmit={(evt) => this.onFormSubmit(evt)} className="ui form" /> */}
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={evt => this.setState({ term: evt.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
