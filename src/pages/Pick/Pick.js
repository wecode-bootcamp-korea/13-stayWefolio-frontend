import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PickArticle from "./PickArticle/PickArticle";
import SearchFilter from "./SearchFilter/SearchFilter";
import PageButton from "./PageButton/PageButton";

import "./Pick.scss";

const API = "http://10.58.1.45:8000/main/picks";

export class Pick extends Component {
  constructor() {
    super();
    this.state = {
      hotels: [],
      searchedHotel: [],
      handleSearch: "",
      filterList: [],
      pageHandling: {
        pages: [
          { value: 1, current: true },
          { value: 2, current: false },
          { value: 3, current: false },
          { value: 4, current: false },
          { value: 5, current: false },
          { value: 6, current: false },
          { value: 7, current: false },
        ],
        prev: null,
        next: 2,
      },
      qS: {
        limit: 12,
        offset: 0,
        location: "",
        category: "",
        price: "",
      },
    };
  }

  componentDidMount() {
    //  서버와 통신할 때 실제 사용하는 코드
    fetch(`${API}?limit=12&offset=0`)
      .then((res) => res.json())
      .then((res) => {
        console.log("통신확인");
        this.setState({
          // hotels: res.hotels,
          searchedHotel: res.hotels,
        });
      });

    // fetch("/data/pickData/hotels_data.json", {
    //   method: "GET"
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     this.setState({
    //       searchedHotel: res.hotels
    //     });
    //   });
  }

  // 서버와 pagination 하는 function
  componentDidUpdate(prevPros, prevState) {
    const { qS } = this.state;
    if (
      prevState.qS.offset !== qS.offset ||
      prevState.qS.category !== qS.category ||
      prevState.qS.location !== qS.location ||
      prevState.qS.price !== qS.price
    ) {
      this.paging(qS);
    }
  }

  paging = (queryS) => {
    for (let key in queryS) {
      if (queryS[key] === "") {
        delete queryS[key];
      }
    }

    // console.log(queryS)
    const queryString =
      "?" +
      Object.entries(queryS)
        .map((e) => "&" + e.join("="))
        .join("");
    // console.log(queryString)

    fetch(`${API}${queryString}`)
      .then((res) => res.json())
      .then((res) => this.setState({ searchedHotel: res.hotels }));
  };

  setQS = (targetPage) => {
    console.log("setQS", targetPage);
    const newOffset = (targetPage - 1) * 12;

    this.setState((prevState) => ({
      qS: {
        ...prevState.qS,
        offset: newOffset,
      },
    }));
  };

  filtering = (searchValue) => {
    const { searchedHotel } = this.state;
    const initPageHandling = {
      pages: [
        { value: 1, current: true },
        { value: 2, current: false },
        { value: 3, current: false },
        { value: 4, current: false },
        { value: 5, current: false },
        { value: 6, current: false },
        { value: 7, current: false },
      ],
      prev: null,
      next: 8,
    };

    let searchType = "";
    let searchLocation = "";
    let searchPrice = "";

    if (searchedHotel[0].filters[0].options.includes(searchValue)) {
      searchValue.includes("전체")
        ? (searchType = "")
        : (searchType = searchValue);
      this.setState(
        (prevState) => ({
          qS: {
            ...prevState.qS,
            category: searchType,
          },
          pageHandling: {
            ...prevState.qS,
            ...initPageHandling,
          },
        }),
        () => this.setQS(1)
      );
    } else if (searchedHotel[0].filters[1].options.includes(searchValue)) {
      searchValue.includes("전체")
        ? (searchLocation = "")
        : (searchLocation = searchValue);
      this.setState(
        (prevState) => ({
          qS: {
            ...prevState.qS,
            location: searchLocation,
          },
          pageHandling: {
            ...prevState.qS,
            ...initPageHandling,
          },
        }),
        () => this.setQS(1)
      );
    } else if (searchedHotel[0].filters[2].options.includes(searchValue)) {
      searchValue.includes("전체")
        ? (searchPrice = "")
        : (searchPrice = searchValue);
      this.setState(
        (prevState) => ({
          qS: {
            ...prevState.qS,
            price: searchPrice,
          },
          pageHandling: {
            ...prevState.qS,
            ...initPageHandling,
          },
        }),
        () => this.setQS(1)
      );
    }
  };

  handlePageBtns = (targetPage) => {
    console.log(targetPage);
    const condition = {
      currentPage: targetPage,
      totalPage: 10,
      itemPerPage: 12,
      limit: 7,
    };

    const isClicked = (page, currentPage) => ({
      value: page,
      current: currentPage == page ? true : false,
    });

    const paging = ({ currentPage, totalPage, itemPerPage, limit }) => {
      const { pages, prev, next } = this.state.pageHandling;
      let newPages = [];

      if (currentPage < 4) {
        newPages = [1, 2, 3, 4, 5, 6, 7];
      } else if (currentPage === "<") {
        if (prev !== null) {
          newPages = pages.map((btn) => btn.value - 1);
          currentPage = prev;
        } else {
          newPages = [1, 2, 3, 4, 5, 6, 7];
          currentPage = 1;
        }
      } else if (currentPage === ">") {
        if (pages[3]["value"] + 1 < 5) {
          newPages = [1, 2, 3, 4, 5, 6, 7];
          currentPage = next;
          console.log(newPages, currentPage);
        } else {
          newPages = pages.map((btn) => +btn.value + 1);
          currentPage = next;
        }
        // newPages = pages.map((btn)=> +btn.value +1);
        // currentPage = pages[3]["value"]+1;
      } else {
        newPages = [
          currentPage - 3,
          currentPage - 2,
          currentPage - 1,
          currentPage,
          +currentPage + 1,
          +currentPage + 2,
          +currentPage + 3,
        ];
      }

      const clickedArr = newPages.map((page) => isClicked(page, currentPage));
      const prevPage = currentPage - 1;
      const nextPage = +currentPage + 1;

      return {
        pages: clickedArr,
        prev: prevPage > 0 ? prevPage : null,
        next: nextPage <= 10 ? nextPage : null,
      };
    };
    const changed = paging(condition);

    this.setState((prevState) => ({
      pageHandling: {
        ...prevState.pageHandling,
        pages: changed.pages,
        prev: changed.prev,
        next: changed.next,
      },
    }));
  };

  render() {
    // console.log(this.state.searchedHotel);
    const { searchedHotel } = this.state;

    return (
      <div className="Pick">
        <div className="container">
          <section>
            <div>
              <span className="title">PICK</span>
              <br></br>
              <span className="titleDesc">
                매일 하루 한번! 스테이폴리오가 추천합니다
              </span>
            </div>
            <div className="searchFilterCon">
              {searchedHotel &&
                searchedHotel[0]?.filters?.map((filter, idx) => (
                  <SearchFilter
                    event={this.searchHotel}
                    filtering={this.filtering}
                    key={idx}
                    data={filter}
                    id={idx}
                  />
                ))}
            </div>
          </section>
          <div className="articleCon">
            {searchedHotel &&
              searchedHotel[1]?.picks.map((hotel) => (
                <PickArticle
                  key={hotel.id}
                  id={hotel.id}
                  name={hotel.name}
                  engName={hotel.english_name}
                  desc={hotel.introduction}
                  mainImg={hotel.thumbnail_url}
                  location={hotel.location}
                  type={hotel.category}
                  minPrice={hotel.min_price}
                  maxPrice={hotel.max_price}
                  tags={hotel.tags}
                  history={this.props.history}
                />
              ))}
          </div>
          <div className="pagination">
            <ul>
              <PageButton
                pages={this.state.pageHandling.pages}
                prev={this.state.pageHandling.prev}
                next={this.state.pageHandling.next}
                clickEvent={this.handlePageBtns}
                setQS={this.setQS}
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Pick);
