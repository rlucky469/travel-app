import React from "react";
import "../PopularPlace/popular-place.css";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";

import Anchorage from "../../assets/images/popular/Anchorage To La Paz.jpg";
import Singapore from "../../assets/images/popular/Discover Singapore.png";
import Kiwiana from "../../assets/images/popular/Kiwiana Panorama.jpg";
import Quito from "../../assets/images/popular/Anchorage To Quito.jpg";
import Cuzco from "../../assets/images/popular/Cuzco To Anchorage.jpg";
import Ushuaia from "../../assets/images/popular/Anchorage To Ushuaia.jpg";
import Santiago from "../../assets/images/popular/Anchorage To Santiago.jpg";
import Explorer from "../../assets/images/popular/LA Explorer.jpg";

const PopularPlace = () => {
  

  const populars = [
    {
      id: 0,
      tilte: "Discover Singapore",
      image: Singapore,
      location: "European Way, Southampton, United Kingdom",
      category: ["Escorted Tour", "Rail Tour"],
      days: "5 days - 4 nights",
      price: 100,
      afterDiscount: 92,
      rating: 3,
      reviews: 5,
    },
    {
      id: 1,
      tilte: "Kiwiana Panorama",
      image: Kiwiana,
      location: "European Way, Southampton, United Kingdom",
      category: ["River Cruise", "Wildlife"],
      days: "2 days - 1 nights",
      price: 87,
      afterDiscount: 82,
      rating: 4,
      reviews: 9,
    },
    {
      id: 2,
      tilte: "Anchorage To Quito",
      image: Quito,
      location: "European Way, Southampton, United Kingdom",
      category: ["Escorted Tour", "River Cruise"],
      days: "2 days - 1 nights",
      price: 87,
      afterDiscount: 82,
      rating: 4,
      reviews: 9,
    },
    {
      id: 3,
      tilte: "Anchorage To La Paz",
      image: Anchorage,
      location: "European Way, Southampton, United Kingdom",
      category: ["River Cruise", "Rail Tour"],
      days: "unlimited",
      price: 434,
      afterDiscount: 0,
      rating: 5,
      reviews: 20,
    },
    {
      id: 4,
      tilte: "Cuzco To Anchorage",
      image: Cuzco,
      location: "European Way, Southampton, United Kingdom",
      category: ["River Cruise", "Tour & Cruise"],
      days: "1 days - 9 hours",
      price: 395,
      afterDiscount: 0,
      rating: 3,
      reviews: 12,
    },
    {
      id: 5,
      tilte: "Anchorage To Ushuaia",
      image: Ushuaia,
      location: "European Way, Southampton, United Kingdom",
      category: ["Escorted Tour", "Wildlife"],
      days: "5 days - 4 nights",
      price: 93,
      afterDiscount: 0,
      rating: 3,
      reviews: 12,
    },
    {
      id: 6,
      tilte: "Anchorage To Santiago",
      image: Santiago,
      location: "European Way, Southampton, United Kingdom",
      category: ["Escorted Tour", "Wildlife"],
      days: "1 day - 1 night",
      price: 42,
      afterDiscount: 0,
      rating: 5,
      reviews: 18,
    },
    {
      id: 7,
      tilte: "LA Explorer",
      image: Explorer,
      location: "European Way, Southampton, United Kingdom",
      category: ["Rail Tour", "Tour & Cruise"],
      days: "1 night",
      price: 99,
      afterDiscount: 0,
      rating: 4,
      reviews: 22,
    },
  ];

  return (
    <section className="popular">
      <Container>
        <Row>
          <Col md="12">
            <div className="main_heading">
              <h1> Popular Activities </h1>
            </div>
          </Col>
        </Row>
        <Row>
        {populars.map((val, inx)=>{
          return(
          <Col  md={3} sm={6} xs={12} className="mb-5" key={inx}>
            <Card className="rounded-2 shadow-sm">
              <Card.Img
                variant="top"
                src={val.image}
                className="img-fluid"
                alt={"image"}
              />
              <Card.Body>
                <Card.Text>
                  <i className="bi bi-geo-alt"></i>
                  <span className="text">{val.location}</span>
                </Card.Text>
                <Card.Title> {val.tilte} </Card.Title>
                <p className="reviwe">
                  <span>
                    <i className="bi bi-star-fill me-1"></i>
                  </span>
                  <span>{val.rating} </span>
                  <span>( {val.reviews} reviews )</span>
                </p>
                {val.category.map((cat, index)=>{
                  return(
                    <span key={index} 
                    className={cat.replace(/ .*/, "") + " badge"}>{cat}</span>
                  )
                })}
                
              </Card.Body>

              <Card.Footer className="py-4">
                {val.afterDiscount ? (
                  <p className="text-decoration-line-through"> ${val.price.toFixed(2)}</p>
                ): ""}
               
                <Stack
                  direction="horizontal"
                  className="justify-content-between  mt-3"
                >
                  <p>
                    From <b>{val.afterDiscount ? val.afterDiscount.toFixed(2) : val.price.toFixed(2)}</b>
                  </p>
                  <p>
                  
                    <i className="bi bi-clock"></i> {val.days}
                  </p>
                </Stack>
              </Card.Footer>
            </Card>
          </Col>
        )
        })}
        </Row>
      </Container>
    </section>
  );
};

export default PopularPlace;
