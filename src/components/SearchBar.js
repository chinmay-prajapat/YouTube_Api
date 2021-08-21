import React from "react";
class SearchBar extends React.Component {
  state = { title: "" };
  // onFormSubmit(e) {
  //     e.preventDefault();

  //     console.log(this.state.title)
  // }
  // onSubmit={this.onFormSubmit.bind(this)}
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.title);
    console.log(this.state.title);
  };
  onChangeHandle(e) {
    e.preventDefault();
    this.setState({ title: e.target.value });
  }
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            {/* <input type="text" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} /> */}
            <input
              type="text"
              value={this.state.title}
              onChange={this.onChangeHandle.bind(this)}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
