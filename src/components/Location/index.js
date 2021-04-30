import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { graphql, useStaticQuery } from "gatsby";
import styles from "./Location.module.scss";

const Location = () => {
    const data = useStaticQuery(graphql`
        {
            location: markdownRemark(
                frontmatter: { templateKey: { eq: "index-page" } }
            ) {
                frontmatter {
                    location {
                        title
                        address {
                            name
                            secondName
                            street
                            postcode
                            info
                        }
                    }
                }
            }
        }
    `);
    const {
        location: {
            frontmatter: {
                location: {
                    title,
                    address: { name, secondName, street, postcode, info },
                },
            },
        },
    } = data;
    return (
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
                        <div></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Location;
