import React from "react";
import Treatment from "../Treatment";
import { graphql, StaticQuery } from "gatsby";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Treatments.module.scss";

const Treatments = ({ treatments }) => (
    <div className={styles.sectionTreatments}>
        <Container>
            <Row>
                <Col md={12}>
                    <h2>Treatments</h2>
                    <hr />
                    <Row>
                        {treatments.map(treatment => (
                            <Treatment
                                key={treatment.treatment}
                                types={treatment.types}
                                treatment={treatment.treatment}
                                extra={treatment.extra}
                                subtitle={treatment.subtitle}
                                image={treatment.image}
                            />
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Treatments;
