import React, { Component } from "react";
import SearchFilterOption from "../SearchFilterOption/SearchFilterOption";

import "./SearchFilter.scss";

export class SearchFilter extends Component {
  constructor() {
    super();
    this.state = {
      filterOptions: [],
      searchFilterTitle: "",
      displayMode: false,
    };
  }

  componentDidMount() {
    this.setState({ searchFilterTitle: this.props.data.options[0].optionValue })
  }

  handleSearchFilter = () => {
    const { displayMode } = this.state;
    const { data } = this.props;
    this.setState({ displayMode: !displayMode });
    //console.log(e.currentTarget.id)
    //const filterId = e.currentTarget.id;
    let filterOptions = data.options;
    //let filterOptions = this.state.filterList[filterId].options;
    this.setState({ filterOptions });
  };

  getFilterValue = (searchValue) => {
    this.setState({ searchFilterTitle: searchValue });
    // this.props.event(searchValue);
  };

  handleBlur = () => {
    console.log("haha");
    const { displayMode } = this.state;
    this.setState({ displayMode: !displayMode });
  };

  render() {
    const { data, id } = this.props;
    const {
      filterList,
      filterOptions,
      searchFilterTitle,
      displayMode,
    } = this.state;

    return (
      <div
        className="SearchFilter"
        id={id}
        tabIndex="0"
        onClick={this.handleSearchFilter}
        //onBlur={this.handleBlur}
      >
        <span className="filterTitle">{searchFilterTitle}</span>
        <div className="selector"></div>

        <ul
          onClick={this.isVisible}
          className={displayMode ? "optionBox" : "optionBox displayMode"}
        >
          {filterOptions &&
            filterOptions.map((option) => (
            <SearchFilterOption
              key={option.id}
              option={option.optionValue}
              getFilterValue={this.getFilterValue}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchFilter;
