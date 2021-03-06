import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Img from "gatsby-image";
import styles from "./Contact.module.scss";

const Contact = ({ title, image, details: { landline, mobile, email } }) => (
    <div className={styles.sectionContact}>
        <Img
            className={styles.contactImage}
            style={{ position: "absolute" }}
            fluid={image.childImageSharp.fluid}
            imgStyle={{ objectFit: "cover" }}
        />
        <Container>
            <Row>
                <Col md={12}>
                    <h2>{title}</h2>
                    <hr />
                    <p>
                        <a style={{ marginRight: "10px" }} href={landline}>
                            {landline}
                        </a>
                        |
                        <a style={{ marginLeft: "10px" }} href={mobile}>
                            {mobile}
                        </a>
                    </p>
                    <p>
                        <a href={`mailto:${email}`}>{email}</a>
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Contact;
