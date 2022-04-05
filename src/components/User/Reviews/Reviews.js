import React, { useState } from "react";
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
  ReviewDiv,
  Arrow,
  QuoteSpan,
  ContainerReview,
} from "./ReviewsElements.js";
import "./styles.css";

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
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <ReviewsSect>
      <ReviewsSection>
        <ReviewsWrapper>
          <ReviewsTitle>What our students Said</ReviewsTitle>
          <LineAfter />
          <ContainerReview>
            <Container>
              <Arrow direction="left" onClick={() => handleClick("left")}>
                <i className="fa-solid fa-arrow-left"></i>
              </Arrow>
              <Wrapper slideIndex={slideIndex}>
                <SlideDiv>
                  <ImgContainer>
                    <Image
                      alt="review"
                      src="https://images.unsplash.com/photo-1645389418083-f709c6ef7a66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                    />
                  </ImgContainer>
                  <ReviewContainer>
                    <ReviewDescription>RPA advanced course</ReviewDescription>
                    <ReviewPersonTitle>Mahesh B</ReviewPersonTitle>
                    <ReviewDiv>
                      <ReviewDescription>
                        <QuoteSpan>
                          <i class="fas fa-quote-left"></i>
                        </QuoteSpan>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Fugit itaque odio, dolore ut delectus
                        exercitationem praesentium et quia esse labore!
                        <QuoteSpan>
                          <i class="fas fa-quote-right"></i>
                        </QuoteSpan>
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
                </SlideDiv>
              </Wrapper>
              <Arrow direction="right" onClick={() => handleClick("right")}>
                <i className="fa-solid fa-arrow-right"></i>
              </Arrow>
            </Container>
          </ContainerReview>
        </ReviewsWrapper>
      </ReviewsSection>
    </ReviewsSect>
  );
};

export default Reviews;
