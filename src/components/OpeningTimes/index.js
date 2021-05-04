import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./OpeningTimes.module.scss";

const OpeningTimes = ({ title, times, days }) => (
    <div className={styles.sectionOpening}>
        <Container>
            <Row>
                <Col md={12}>
                    <h2>{title}</h2>
                    <hr />
                    {days.map(day => (
                        <span key={day}>{day}</span>
                    ))}
                    <p>{times}</p>
                </Col>
            </Row>
        </Container>
    </div>
);

export default OpeningTimes;
