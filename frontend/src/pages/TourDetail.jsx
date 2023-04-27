import React, { useContext, useEffect, useRef, useState } from "react";
import "../styles/tour-details.css";
import { Col, Container, Form, ListGroup, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "./../components/Booking/Booking";
import Newsletter from "../shared/Newsletter";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config.js";
import { AuthContext } from "../context/AuthContext";

const TourDetail = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);

  //fetch data from database
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);
  console.log(tour);

  const {
    photo,
    title,
    desc,
    price,
    address,
    reviews,
    city,
    distance,
    maxGroupSize,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);
  //format date
  const options = { day: "numeric", month: "long", year: "numeric" };

  //submit request to server
  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert("Please Sign In");
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",

        },
        credentials: "include",
        mode:'cors',
        body: JSON.stringify(reviewObj),
      });
      const result = await res.json();

      if (!res.ok) {
        alert(result.message);
      }
      alert(result.message);
    } catch (error) {
      alert(error.message);
    }
  };

  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading.......</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}

          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour__content">
                  <img src={photo} alt="" />
                  <div className="tour__info">
                    <h2>{title}</h2>
                    <div className="d-flex align-items-center gap-5">
                      <span className="tour__rating d-flex align-items-center gap-1">
                        <i
                          className="ri-star-s-fill"
                          style={{
                            color: "var(--secondary-color)",
                          }}
                        />
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? (
                          "Not Rated"
                        ) : (
                          <span>({reviews?.length})</span>
                        )}
                      </span>

                      <span>
                        <i className="ri-map-pin-user-fill" />
                        {address}
                      </span>
                    </div>
                    <div className="tour__extra-details">
                      <span>
                        <i className="ri-map-pin-2-line" />
                        {city}
                      </span>
                      <span>
                        <i className="ri-money-dollar-circle-line" />${price}
                        /per person
                      </span>
                      <span>
                        <i className="ri-map-pin-time-line" />
                        {distance} k/m
                      </span>
                      <span>
                        <i className="ri-group-line" />
                        {maxGroupSize}People
                      </span>
                    </div>
                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>

                  {/* ===================tour reviews section start ================== */}
                  <div className="tour__reviews mt-4">
                    <h4>Reviews({reviews?.length} reviews)</h4>
                    <Form onSubmit={submitHandler}>
                      <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                        <span
                          onClick={() => {
                            handleClick(1);
                            setTourRating(1);
                          }}
                        >
                          {rating >= 1 ? (
                            <i className="ri-star-s-fill" />
                          ) : (
                            <i className="ri-star-line"></i>
                          )}
                        </span>
                        <span
                          onClick={() => {
                            handleClick(2);
                            setTourRating(2);
                          }}
                        >
                          {rating >= 2 ? (
                            <i className="ri-star-s-fill" />
                          ) : (
                            <i className="ri-star-line"></i>
                          )}
                        </span>
                        <span
                          onClick={() => {
                            handleClick(3);
                            setTourRating(3);
                          }}
                        >
                          {rating >= 3 ? (
                            <i className="ri-star-s-fill" />
                          ) : (
                            <i className="ri-star-line"></i>
                          )}
                        </span>
                        <span
                          onClick={() => {
                            handleClick(4);
                            setTourRating(4);
                          }}
                        >
                          {rating >= 4 ? (
                            <i className="ri-star-s-fill" />
                          ) : (
                            <i className="ri-star-line"></i>
                          )}
                        </span>
                        <span
                          onClick={() => {
                            handleClick(5);
                            setTourRating(5);
                          }}
                        >
                          {rating >= 5 ? (
                            <i className="ri-star-s-fill" />
                          ) : (
                            <i className="ri-star-line"></i>
                          )}
                        </span>
                      </div>

                      <div className="review__input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="Share Your Thoughts"
                          required
                        />
                        <button
                          className="btn primary__btn text-white"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </Form>
                    <ListGroup className="user__reviews">
                      {reviews?.map((review,index) => (
                        <div key={index} className="review__item">
                          <img src={avatar} alt="" />
                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{review.username}</h5>
                                <p>
                                  {new Date(
                                    review.createdAt
                                  ).toLocaleDateString("en-US", options)}
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                {review.rating}
                                <i className="ri-star-s-fill" />
                              </span>
                            </div>
                            <h6>{review.reviewText}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                  {/* ===================tour reviews section end ================== */}
                </div>
              </Col>
              <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TourDetail;
