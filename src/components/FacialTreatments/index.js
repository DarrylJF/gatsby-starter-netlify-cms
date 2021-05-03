import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { graphql, StaticQuery } from "gatsby";
import styles from "./FacialTreatments.module.scss";

const facialTreatmentsQuery = graphql`
    {
        facial: markdownRemark(
            frontmatter: { templateKey: { eq: "index-page" } }
        ) {
            frontmatter {
                facialTreatments {
                    title
                    type {
                        subtitle
                        paragraph
                    }
                }
            }
        }
    }
`;

const FacialTreatments = () => (
    <StaticQuery
        query={facialTreatmentsQuery}
        render={data => {
            const {
                facial: {
                    frontmatter: {
                        facialTreatments: { title, type },
                    },
                },
            } = data;
            return (
                <div className={styles.facialTreatments}>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <h2>{title}</h2>
                                <hr />
                            </Col>
                            <Row style={{ justifyContent: "center" }}>
                                {type.map(t => (
                                    <Col key={t.subtitle} xs={12} lg={5}>
                                        <h4>{t.subtitle}</h4>
                                        <p>{t.paragraph}</p>
                                    </Col>
                                ))}
                            </Row>
                        </Row>
                    </Container>
                </div>
            );
        }}
    />
);

export default FacialTreatments;
