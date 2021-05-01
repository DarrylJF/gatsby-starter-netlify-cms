import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./About.module.scss";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

// ...GatsbyImageSharpFluid

const About = () => <h2>working</h2>;
//     <StaticQuery
//         query={`query About {
//             about: markdownRemark(
//                 frontmatter: { templateKey: { eq: "index-page" } }
//             ) {
//                 frontmatter {
//                     about {
//                         title
//                         aboutImage {
//                             childImageSharp {
//                                 fluid(maxWidth: 800) {
//                                     ...GatsbyImageSharpFluid
//                                 }
//                             }
//                         }
//                         paragraphs
//                         aboutPattern {
//                             childImageSharp {
//                                 fluid {
//                                     ...GatsbyImageSharpFluid
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }`}
//         render={data => {
//             const {
//                 about: {
//                     frontmatter: {
//                         about: { title, aboutImage, paragraphs, aboutPattern },
//                     },
//                 },
//             } = data;
//             return (
//                 <>
//                     <Container className={styles.sectionAbout}>
//                         <Row>
//                             <Col lg={6}>
//                                 <Img fluid={aboutImage.childImageSharp.fluid} />
//                             </Col>
//                             <Col lg={6}>
//                                 <h2>{title}</h2>
//                                 <hr />
//                                 {paragraphs.map(paragraph => (
//                                     <p key={paragraph}>{paragraph}</p>
//                                 ))}
//                             </Col>
//                         </Row>
//                     </Container>
//                     <div className={styles.sectionPattern}>
//                         <Img
//                             fluid={aboutPattern.childImageSharp.fluid}
//                             imgStyle={{ objectFit: "cover" }}
//                             style={{ height: "150px" }}
//                         />
//                     </div>
//                 </>
//             );
//         }}
//     />
// );
export default About;
