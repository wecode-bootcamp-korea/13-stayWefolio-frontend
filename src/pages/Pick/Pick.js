import React, { Component } from "react";
import PickArticle from "./PickArticle/PickArticle";
import SearchFilter from "./SearchFilter/SearchFilter";
import PageButton from "./PageButton/PageButton";
import Nav from "../../components/Nav/Nav"

import "./Pick.scss";

const LIMIT = 12;
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
       "PageButton", "PageButton", "PageButton", "PageButton","PageButton", "PageButton"],
      currentOffset: 0,
      searchedType: "",
      searchedLocation: "",
      searchedPrice:""
    };
  }

  componentDidMount() {
    //  서버와 통신할 때 실제 사용하는 코드
    fetch(`http://10.58.1.45:8000/main/picks?limit=12&offset=0`) 
      .then((res) => res.json())
      .then((res) => {
      console.log("통신확인")
        this.setState({
          // hotels: res.hotels,
          searchedHotel: res.hotels
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
    const { currentOffset }= this.state;
    if (prevState.currentOffset !== this.state.currentOffset){
       this.paging(currentOffset);
      }
  }

  pagingNum = (targetPage) => {
    const { currentOffset } = this.state;

    if( targetPage === "<<" ){
      targetPage = 1;
    } else if ( targetPage === "<" ){
    //  console.log("currentOffset", currentOffset)
      targetPage = (currentOffset/12) -1;
    } else if ( targetPage === ">" ){
      targetPage = (currentOffset/12) +1
    } else if (targetPage === ">>"){
      targetPage = 10;
    } 

    this.setState({ currentOffset: ((targetPage - 1) * 12)})
  }

  paging = (offset) => {
    const { searchedType, searchedLocation, searchedPrice } = this.state;
    fetch(`http://10.58.1.45:8000/main/picks?limit=${LIMIT}&offset=${offset}`)
    
    // let type = {searchedType? `category=${searchedType}+&`: "" }
    // let location = {searchedLocation? `location=${searchedLocation}`: "" }
    // let price = { }



    // fetch(`http://10.58.1.45:8000/main/picks?&limit=${LIMIT}&offset=${offset}&`
    //   {searchedType? `category=${searchedType}&` : "" }
    //   {searchedLocation? `location=${searchedLocation}&`: "" }
    //   {searchedPrice? `price=${searchedPrice}&`:""}
    //   )

      .then((res) => res.json())
      .then((res) => this.setState({ searchedHotel: res.hotels }))
  }

  filtering = (searchValue) => {
    const { searchedHotel } = this.state;
    // console.log(searchedHotel[0].filters[0].options.includes(searchValue))

    if(searchedHotel[0].filters[0].options.includes(searchValue)){
      this.setState(
        searchValue.includes("전체")
        ? { searchedType: "" }
        : { searchedType: searchValue }
      )
    } else if (searchedHotel[0].filters[1].options.includes(searchValue)){
      this.setState(
        searchValue.includes("전체")
        ? { searchedLocation: "" }
        : { searchedLocation: searchValue }
      )
    } else if (searchedHotel[0].filters[2].options.includes(searchValue)){
      this.setState(
        searchValue.includes("전체")
        ? { searchedPrice: "" }
        : { searchedPrice: searchValue }
      )
    }
  }

  // front에서 검색필터 처리하는 함수 
  // searchHotel = (searchValue) => {
  //   const { hotels } = this.state;
  //   this.setState({ handleSearch: searchValue });
  //   if (searchValue.includes("전체")) {
  //     return this.setState({ searchedHotel: hotels });
  //   } else {
  //     let searchedHotel = hotels.filter((hotel) => {
  //       if (hotel.category.includes(searchValue)) {
  //         return hotel;
  //       }
  //     });
  //     return this.setState({ searchedHotel });
  //   }
  // };

  handlePage = (targetPage) => {
    let newPageArr = ["<<", "<", 1, 2, 3, 4, 5, 6, 7, ">", ">>"];
    const resetColor= ["PageButton","PageButton", "PageButton", "PageButton", "PageButton", 
    "PageButton", "PageButton", "PageButton", "PageButton","PageButton", "PageButton"];
    let pageIdxBtnColor = ["PageButton","PageButton", "PageButton", "PageButton", "PageButton", 
    "PageButton", "PageButton", "PageButton", "PageButton","PageButton", "PageButton"];

    if (targetPage >= 4){
      newPageArr = [
        "<<", "<", targetPage-3, targetPage-2, targetPage-1,
        +targetPage, +targetPage+1, +targetPage+2, +targetPage+3, ">", ">>"
      ];
      pageIdxBtnColor.splice(5, 1, "PageButton clicked");
    } else if(Number(targetPage) === 3){
      pageIdxBtnColor.splice(4, 1, "PageButton clicked")
    } else if(Number(targetPage) === 2){
      pageIdxBtnColor.splice(3, 1, "PageButton clicked");
    } else if (targetPage === 1 || "<<"){
      pageIdxBtnColor.splice(2, 1, "PageButton clicked");
    }  
    
    if (targetPage ===  "<"){
      const beforePageArr = this.state.pageArr.slice(2,9).map((num)=>(Number(num)-1));
      newPageArr= ["<<", "<", ...beforePageArr, ">", ">>"];
      pageIdxBtnColor = resetColor;
      pageIdxBtnColor.splice(5, 1, "PageButton clicked");
    } else if (targetPage === ">"){
      const nextPageArr = this.state.pageArr.slice(2,9).map((num)=>(Number(num)+1));
      newPageArr=["<<", "<", ...nextPageArr, ">", ">>"]
      pageIdxBtnColor = resetColor;
      pageIdxBtnColor.splice(5, 1, "PageButton clicked");
    }  else if(targetPage === ">>"){
      newPageArr= ["<<", "<", 4, 5, 6, 7, 8, 9, 10, ">", ">>"]
      pageIdxBtnColor = resetColor;
      pageIdxBtnColor.splice(8, 1, "PageButton clicked");
    }  
    this.setState({ clickedPageArr: pageIdxBtnColor })
    this.setState({ pageArr : newPageArr })
  }

  render() {
    const { searchedType, searchedLocation, searchedPrice } = this.state;
    console.log(searchedType, searchedLocation, searchedPrice);
    const { searchedHotel, pageArr, clickedPageArr } = this.state;

    return (
      <div className="Pick">
        <div className="container">
          <Nav></Nav>
          <section>
            <div>
              <span className="title">PICK</span>
              <br></br>
              <span className="titleDesc">
                매일 하루 한번! 스테이폴리오가 추천합니다
              </span>
            </div>
            <div className="searchFilterCon">
              {searchedHotel[0]?.filters?.map((filter, idx) => (
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
            {searchedHotel[1]?.picks.map((hotel) => (
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
                  pagingNum={this.pagingNum}
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
