import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./FacialTreatments.module.scss";

const FacialTreatments = ({ facialTitle, facialTypes }) => (
    <div className={styles.facialTreatments}>
        <Container>
            <Row>
                <Col md={12}>
                    <h2>{facialTitle}</h2>
                    <hr />
                </Col>
                <Row style={{ justifyContent: "center" }}>
                    {facialTypes.map(type => (
                        <Col key={type.facialType} xs={12} lg={5}>
                            <h4>{type.facialType}</h4>
                            <p>{type.facialDescription}</p>
                        </Col>
                    ))}
                </Row>
            </Row>
        </Container>
    </div>
);

export default FacialTreatments;
