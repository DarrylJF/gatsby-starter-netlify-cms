import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import MapArea from "../MapArea";
import styles from "./Location.module.scss";

const Location = ({
    title,
    address: { name, secondName, street, postcode, info },
}) => (
    <div className={styles.sectionLocation}>
        <Container>
            <Row>
                <Col md={6}>
                    <h2>{title}</h2>
                    <hr />
                    <p>{name}</p>
                    <p>{secondName}</p>
                    <p>{street}</p>
                    <p>{postcode}</p>
                    <span>{info}</span>
                </Col>
                <Col md={6}>
                    <div>{/*<MapArea/>*/}</div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Location;
