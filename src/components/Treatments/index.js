import React from "react";
import Treatment from "../Treatment";
import { graphql, StaticQuery } from "gatsby";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Treatments.module.scss";

const treatmentsQuery = graphql`
    {
        treatments: markdownRemark(
            frontmatter: { templateKey: { eq: "index-page" } }
        ) {
            frontmatter {
                treatments {
                    image {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    title
                    items {
                        title
                        time
                        price
                    }
                    subtitle
                    extra
                }
            }
        }
    }
`;

const Treatments = () => (
    <StaticQuery
        query={treatmentsQuery}
        render={data => {
            const {
                treatments: {
                    frontmatter: { treatments },
                },
            } = data;
            return (
                <div className={styles.sectionTreatments}>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <h2>Treatments</h2>
                                <hr />
                                <Row>
                                    {treatments.map(treatment => (
                                        <Treatment
                                            key={treatment.title}
                                            items={treatment.items}
                                            title={treatment.title}
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
        }}
    />
);

export default Treatments;
