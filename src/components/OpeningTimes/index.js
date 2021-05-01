import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { graphql, StaticQuery } from "gatsby";
import styles from "./OpeningTimes.module.scss";

const OpeningTimes = () => (
    <StaticQuery
        query={graphql`
            {
                opening: markdownRemark(
                    frontmatter: { templateKey: { eq: "index-page" } }
                ) {
                    frontmatter {
                        opening {
                            days
                            title
                            time
                        }
                    }
                }
            }
        `}
        render={data => {
            const {
                opening: {
                    frontmatter: {
                        opening: { title, time, days },
                    },
                },
            } = data;
            return (
                <div className={styles.sectionOpening}>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <h2>{title}</h2>
                                <hr />
                                {days.map(day => (
                                    <span>{day}</span>
                                ))}
                                <p>{time}</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        }}
    />
);


export default OpeningTimes;
