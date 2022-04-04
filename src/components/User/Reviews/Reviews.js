import React, { useEffect, useState } from "react";
import {
  ReviewsSect,
  ReviewsSection,
  ReviewsTitle,
  ReviewsWrapper,
  LineAfter,
  Container,
  Image,
  ImgContainer,
  Wrapper,
  ReviewDescription,
  ReviewContainer,
  ReviewPersonTitle,
  Rating,
  SlideDiv,
  Slide,
  ReviewDiv,
} from "./ReviewsElements.js";
import "./styles.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const reviews = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1645528923001-581af59a419c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "lorem impus lsjadlas lsaldgla lsagljlk ;a sldioashg lasdlkg lknsldga oia dlsagoi",
    name: "Mahesh b ",
    courseName: "RPA Basics",
    rating: 5,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1645529324261-9f72a3bfe5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    description:
      "lorem impus lsjadlas lsaldgla lsagljlk ;a sldioashg lasdlkg lknsldga oia dlsagoi",
    name: "Mahesh b ",
    courseName: "RPA Advanced",
    rating: 5,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1645528098824-5644b1671fbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    description:
      "lorem impus lsjadlas lsaldgla lsagljlk ;a sldioashg lasdlkg lknsldga oia dlsagoi",
    name: "Mahesh b ",
    courseName: "RPA Advanced",
    rating: 5,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1645389418083-f709c6ef7a66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    description:
      " lorem impus lsjadlas lsaldgla lsagljlk ;a sldioashg lasdlkg lknsldga oia dlsagoilorem impus lsjadlas lsaldgla lsagljlk ;a sldioashg lasdlkg lknsldga oia dlsagoilorem impus lsjadlas lsaldgla lsagljlk ;a sldioashg lasdlkg lknsldga oia dlsagoi",
    name: "Mahesh b ",
    courseName: "RPA Advanced",
    rating: 5,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1645544311737-24c0f91685e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    description:
      "lorem impus lsjadlas lsaldgla lsagljlk ;a sldioashg lasdlkg lknsldga oia dlsagoi lorem impus lsjadlas lsaldgla lsagljlk ;a sldioashg lasdlkg lknsldga oia dlsagoi",
    name: "Mahesh b ",
    courseName: "RPA Advanced",
    rating: 5,
  },
];

const Reviews = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: 3000,
    arrows: true,
  };
  return (
    <ReviewsSect>
      <ReviewsSection>
        <ReviewsWrapper>
          <ReviewsTitle>What our students Said</ReviewsTitle>
          <LineAfter />
          <Container>
            <Wrapper>
              {/* <Slider>
                <SlideDiv>
                  <Slide>
                    <ImgContainer>
                      <Image
                        alt="review"
                        src="https://images.pexels.com/photos/6465937/pexels-photo-6465937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      />
                    </ImgContainer>
                    <ReviewContainer>
                      <ReviewDescription>RPA Basics</ReviewDescription>
                      <ReviewPersonTitle>Mike</ReviewPersonTitle>
                      <ReviewDiv>
                        <ReviewDescription>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Vel cum perspiciatis commodi, facilis culpa
                          voluptas dolorum hic molestias animi nam?Lorem ipsum,
                          dolor sit amet consectetur adipisicing elit. Vel cum
                          perspiciatis commodi, facilis culpa voluptas dolorum
                          hic molestias animi nam?
                        </ReviewDescription>
                      </ReviewDiv>
                      <Rating>
                        5 <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </Rating>
                    </ReviewContainer>
                  </Slide>
                </SlideDiv>
              </Slider> */}
            </Wrapper>
          </Container>
        </ReviewsWrapper>
      </ReviewsSection>
    </ReviewsSect>
  );
};

export default Reviews;
