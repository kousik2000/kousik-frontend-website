import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Component } from "react";
import PortfolioDetail from "../PortfolioDetail";
import "./index.css";

// const initialPortfolioList = [
//   {
//     id: 1,
//     title: "NxtWatch",
//     url: " https://watchtube.ccbp.tech/",
//     imageUrl: "https://i.ibb.co/ScDPpVw/nxt-watch.jpg",
//     github: "https://github.com/kousik2000/nxtWatch.git",
//   },
//   {
//     id: 2,
//     title: "Calculator",
//     url: "https://calculator-kousikramachandruni-gmailcom.vercel.app/",
//     imageUrl:
//       "https://user-images.githubusercontent.com/123394631/224341590-8973410a-9450-47d6-8449-153afb45982b.png",
//     github: "https://github.com/kousik2000/calculator.git",
//   },
//   {
//     id: 3,
//     title: "Todo Application",
//     url: "https://github.com/kousik2000/react-todo.git",
//     imageUrl: "https://i.ibb.co/WkL35cb/todo-JPG.jpg",
//     github: "https://github.com/kousik2000/react-todo.git",
//   },
//   {
//     id: 4,
//     title: "Covid19 Dashboard",
//     url: "https://bharatcovid19.ccbp.tech/",
//     imageUrl: "https://i.ibb.co/1f2m5xK/covid19.jpg",
//     github: "https://github.com/kousik2000/covid19-dashbaord.git",
//   },
// ];

const settings = {
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  responsive: [
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 952,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

class Portfolio extends Component {
  state = { initialPortfolioList: [] };

  componentDidMount() {
    this.getPortfolioData();
  }

  getPortfolioData = async () => {
    const url = "https://portfolio-backend-rho.vercel.app/portfolio";
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    const fetchedData = await response.json();
    this.setState({ initialPortfolioList: fetchedData });
  };

  render() {
    const { initialPortfolioList } = this.state;
    return (
      <div className="portfolio-container">
        <h1 className="sub-head">My Projects</h1>
        <div className="portfolio-slider-container">
          <Slider {...settings}>
            {initialPortfolioList.map((eachPortfolio) => (
              <PortfolioDetail
                eachPortfolio={eachPortfolio}
                key={eachPortfolio.id}
              />
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Portfolio;
