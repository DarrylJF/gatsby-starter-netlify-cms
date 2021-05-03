import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Jumbotron from "../components/Jumbotron";
import Layout from "../components/Layout";
import About from "../components/About";
import Treatments from "../components/Treatments";
// import MapArea from "../components/MapArea";
import FacialTreatments from "../components/FacialTreatments";
import OpeningTimes from "../components/OpeningTimes";
import Location from "../components/Location";
import Contact from "../components/Contact";

export const IndexPageTemplate = ({
    mainTitle,
    aboutTitle,
    aboutImage,
    aboutPattern,
    paragraphs,
    treatments,
    facialTitle,
    facialTypes,
}) => {
    return (
        <>
            <Jumbotron title={mainTitle} />
            <About
                title={aboutTitle}
                paragraphs={paragraphs}
                aboutImage={aboutImage}
                aboutPattern={aboutPattern}
            />
            <Treatments treatments={treatments} />
            {/*<MapArea onMarkerMove={() => console.log('marker has moved')}/>*/}
            <FacialTreatments
                facialTitle={facialTitle}
                facialTypes={facialTypes}
            />
            <OpeningTimes />
            <Location />
            <Contact />
        </>
    );
};

IndexPageTemplate.propTypes = {
    mainTitle: PropTypes.string,
    aboutTitle: PropTypes.string,
    aboutImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    aboutPattern: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    paragraphs: PropTypes.array,
    treatments: PropTypes.array,
    facialTitle: PropTypes.string,
    facialTypes: PropTypes.array,
};

const IndexPage = ({ data }) => {
    const {
        frontmatter: {
            mainTitle,
            about: { aboutTitle, paragraphs, aboutImage, aboutPattern },
            treatments,
            facialTreatments: { facialTitle, facialTypes },
        },
    } = data.markdownRemark;
    console.log(data.markdownRemark);
    return (
        <Layout>
            <IndexPageTemplate
                mainTitle={mainTitle}
                aboutTitle={aboutTitle}
                aboutImage={aboutImage}
                aboutPattern={aboutPattern}
                paragraphs={paragraphs}
                treatments={treatments}
                facialTitle={facialTitle}
                facialTypes={facialTypes}
            />
        </Layout>
    );
};

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default IndexPage;
//...GatsbyImageSharpFluid
export const pageQuery = graphql`
    {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                mainTitle
                about {
                    aboutTitle
                    paragraphs
                    aboutImage {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    aboutPattern {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                treatments {
                    treatment
                    subtitle
                    extra
                    image {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    types {
                        type
                        price
                        time
                    }
                }
                facialTreatments {
                    facialTitle
                    facialTypes {
                        facialType
                        facialDescription
                    }
                }
            }
        }
    }
`;
