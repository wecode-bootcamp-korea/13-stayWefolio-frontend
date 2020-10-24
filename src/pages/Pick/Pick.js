import React, { Component } from "react";
import PickArticle from "./PickArticle/PickArticle";
import SearchFilter from "./SearchFilter/SearchFilter";
import PageButton from "./PageButton/PageButton";

import "./Pick.scss";

const SEARCH_FILTER = [
  { id: 0, type: "타입전체" },
  { id: 1, type: "지역전체" },
  { id: 2, type: "금액전체" },
];

// const API ="http://10.58.1.45:8000/main/picks"

export class Pick extends Component {
  constructor() {
    super();
    this.state = {
      hotels: [],
      searchedHotel: [],
      handleSearch: "",
      filterList:[],
      pageArr: ["<<", "<", 1, 2, 3, 4, 5, 6, 7, ">", ">>"],
      clickedPageArr: ["PageButton","PageButton", "PageButton clicked", "PageButton", "PageButton", 
       "PageButton", "PageButton", "PageButton", "PageButton","PageButton", "PageButton"]
    };
  }

  componentDidMount() {
    // fetch(API) 
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log("haha");
    //     this.setState({
    //       //hotels: res.hotels,
    //       searchedHotel: res.hotels
    //     });
    //   });

    fetch("/data/pickData/hotels_data.json", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          hotels: res.hotels,
          searchedHotel: res.hotels
        });
      });

    fetch("/data/pickData/filterList_data.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          filterList: res.filterList,
        });
      });  
  }

  searchHotel = (searchValue) => {
    const { hotels, handleSearch, searchedHotel } = this.state;
    this.setState({ handleSearch: searchValue });
    if (searchValue.includes("전체")) {
      return this.setState({ searchedHotel: hotels });
    } else {
      let searchedHotel = hotels.filter((hotel) => {
        if (hotel.category.includes(searchValue)) {
          return hotel;
        }
      });
      return this.setState({ searchedHotel });
    }
  };

  handlePage = (targetPage) => {
    let newPageArr = ["<<", "<", 1, 2, 3, 4, 5, 6, 7, ">", ">>"];
    let defaultColor = ["PageButton","PageButton", "PageButton", "PageButton", "PageButton", 
    "PageButton", "PageButton", "PageButton", "PageButton","PageButton", "PageButton"];
  
    if (targetPage >= 4){
      newPageArr = [
        "<<", "<", targetPage-3, targetPage-2, targetPage-1,
        +targetPage, +targetPage+1, +targetPage+2, +targetPage+3, ">", ">>"
      ];
      defaultColor.splice(5, 1, "PageButton clicked");
    } else if(Number(targetPage) === 3){
      defaultColor.splice(4, 1, "PageButton clicked")
    } else if(Number(targetPage) === 2){
      defaultColor.splice(3, 1, "PageButton clicked");
    } else if (targetPage === 1 || "<<"){
      defaultColor.splice(2, 1, "PageButton clicked");
    }  
    
    if (targetPage ===  "<"){
      console.log(defaultColor)
      const beforePageArr = this.state.pageArr.slice(2,9).map((num)=>(Number(num)-1));
      newPageArr= ["<<", "<", ...beforePageArr, ">", ">>"];
      defaultColor =["PageButton","PageButton", "PageButton", "PageButton", "PageButton", 
      "PageButton", "PageButton", "PageButton", "PageButton","PageButton", "PageButton"];
      defaultColor.splice(5, 1, "PageButton clicked");
      //console.log(nextPageArr)
    } else if (targetPage === ">"){
      const nextPageArr = this.state.pageArr.slice(2,9).map((num)=>(Number(num)+1));
      newPageArr=["<<", "<", ...nextPageArr, ">", ">>"]
      defaultColor =["PageButton","PageButton", "PageButton", "PageButton", "PageButton", 
      "PageButton", "PageButton", "PageButton", "PageButton","PageButton", "PageButton"];
      defaultColor.splice(5, 1, "PageButton clicked");
    }  else if(targetPage === ">>"){
      newPageArr= ["<<", "<", 4, 5, 6, 7, 8, 9, 10, ">", ">>"]
      defaultColor =["PageButton","PageButton", "PageButton", "PageButton", "PageButton", 
      "PageButton", "PageButton", "PageButton", "PageButton","PageButton", "PageButton"];
      defaultColor.splice(8, 1, "PageButton clicked");
    }  
    this.setState({ clickedPageArr: defaultColor })
    this.setState({ pageArr : newPageArr })
  }

  render() {
   // console.log(this.state.clickedPageArr);
    const { searchedHotel, filterList, pageArr, clickedPageArr } = this.state;

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
              {filterList.map((filter) => (
                <SearchFilter
                  event={this.searchHotel}
                  key={filter.id}
                  data={filter}
                  id={filter.id}
                  //name={filter.type}
                />
              ))}
            </div>
          </section>
          <div className="articleCon">
            {searchedHotel.map((hotel) => (
              <PickArticle
                key={hotel.id}
                name={hotel.name}
                engName={hotel.english_name}
                desc={hotel.introduction}
                mainImg={hotel.thumbnail_url}
                location={hotel.location}
                type={hotel.category}
                minPrice={hotel.min_price}
                maxPrice={hotel.max_price}
                tags={hotel.tags}
              />
            ))}
          </div>
          <div className="pagination">
            <ul>
              {pageArr.map((page, idx) => (
                <PageButton
                  id={idx}
                  key={idx}
                  clicked={clickedPageArr[idx]}
                  getPageNum={this.handlePage}
                  pageNum={page} 
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Pick;
