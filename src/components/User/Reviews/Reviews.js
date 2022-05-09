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
                      src="https://navrik.blob.core.windows.net/navrikimage/default.jpg"
                    />
                  </ImgContainer>
                  <ReviewContainer>
                    <ReviewDescription>RPA advanced course</ReviewDescription>
                    <ReviewPersonTitle>Mahesh B</ReviewPersonTitle>
                    <ReviewDiv>
                      <ReviewDescription>
                        <QuoteSpan>
                          <i className="fas fa-quote-left"></i>
                        </QuoteSpan>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Fugit itaque odio, dolore ut delectus
                        exercitationem praesentium et quia esse labore!
                        <QuoteSpan>
                          <i className="fas fa-quote-right"></i>
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
