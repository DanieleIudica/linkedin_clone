import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setMeAction } from "../redux/action";
import MainUser from "./MainUser";

export const User = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch()
  const me = useSelector((state) => state.user.me)

  useEffect(() => {
   // fetchUser();
   dispatch(setMeAction())
   
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MWQ2ZTZkNzlhNTAwMTUwOTAyZWYiLCJpYXQiOjE2NjM1NzMzNTksImV4cCI6MTY2NDc4Mjk1OX0.us8ZDLkkp2W8eygVu_nKJqPUZKcBcc9Q66_L9RtWObc",
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        setMeAction(data);
        console.log(data);
      }
    } catch (err) {
        console.log(err)
    }
  };
  return (
    <Container className="mt-4">
      {me && (
        <Row>
          <Col xs={8}>
            <MainUser />
          </Col>

          <Col xs={4}>
            <h1>SideBar</h1>
          </Col>
        </Row>
      )}
    </Container>
  );
};
