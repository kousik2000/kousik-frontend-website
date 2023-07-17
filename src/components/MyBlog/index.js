import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BlogDetail from "../BlogDetail";

import { Component } from "react";

import "./index.css";

// const initialBlogList = [
//   {
//     id: 1,
//     title: "MaterialShore",
//     description: "fill this google form",
//     url:
//       " https://docs.google.com/forms/d/e/1FAIpQLSeWQDkmQSs6KTDjJTqyX2zxKTukj6wmcD-OJn-k6p4Q4LAocw/viewform?usp=sf_link",
//     imageUrl:
//       "https://www.jotform.com/blog/wp-content/uploads/2021/04/how-to-use-google-forms-featured-02.png",
//   },
//   {
//     id: 2,
//     title: "Response",
//     description: "Material shore response",
//     url:
//       " https://docs.google.com/forms/d/1l4UT79Ilb9MhIPoPbJMKZ-VfJQgP-GvXNuhngZp0KZA/edit#responses",
//     imageUrl:
//       "https://images.ctfassets.net/lzny33ho1g45/4ODoWVyzgicvbcb6J9ZZZ5/89e33c333afa86e9e2864ba42833a5be/app-tips-google-forms-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
//   },
//   {
//     id: 3,
//     title: "Response",
//     description: "Material shore response",
//     url:
//       " https://docs.google.com/forms/d/1l4UT79Ilb9MhIPoPbJMKZ-VfJQgP-GvXNuhngZp0KZA/edit#responses",
//     imageUrl:
//       "https://images.ctfassets.net/lzny33ho1g45/4ODoWVyzgicvbcb6J9ZZZ5/89e33c333afa86e9e2864ba42833a5be/app-tips-google-forms-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
//   },
//   {
//     id: 4,
//     title: "CodePen",
//     description: "new post in codepen",
//     url: " https://codepen.io/Ramachandruni-Kousik/pen/qBMympJ",
//     imageUrl: "https://spiralking.com/wp-content/uploads/2019/04/code4.png",
//   },
// ];

const settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

class MyBlog extends Component {
  state = { initialBlogList: [] };

  componentDidMount() {
    this.getBlogData();
  }

  getBlogData = async () => {
    const url = "https://backend-mongo.onrender.com/getblogdata";
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    const fetchedData = await response.json();
    this.setState({ initialBlogList: fetchedData });
  };

  render() {
    const { initialBlogList } = this.state;
    return (
      <div className="blog-container">
        <h1 className="sub-head">My Blog</h1>
        <div className="slider-container">
          <Slider {...settings}>
            {initialBlogList.map((eachBlog) => (
              <BlogDetail eachBlog={eachBlog} key={eachBlog.id} />
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default MyBlog;
