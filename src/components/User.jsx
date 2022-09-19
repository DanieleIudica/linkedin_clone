import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainUser from "./MainUser";

export const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
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
        setUser(data);
        console.log(data);
      }
    } catch (err) {
        console.log(err)
    }
  };
  return (
    <Container fluid className="mt-4">
      {user && (
        <Row>
          <Col xs={8}>
            <MainUser user={user} />
          </Col>

          <Col xs={4}>
            <h1>SideBar</h1>
          </Col>
        </Row>
      )}
    </Container>
  );
};
