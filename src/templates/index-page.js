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
    openingTitle,
    openingTimes,
    openingDays,
    locationTitle,
    locationAddress,
    contactTitle,
    contactImage,
    contactDetails,
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
            <OpeningTimes
                title={openingTitle}
                times={openingTimes}
                days={openingDays}
            />
            <Location title={locationTitle} address={locationAddress} />
            <Contact
                title={contactTitle}
                image={contactImage}
                details={contactDetails}
            />
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
    openingTitle: PropTypes.string,
    openingTimes: PropTypes.string,
    openingDays: PropTypes.array,
    locationTitle: PropTypes.string,
    locationAddress: PropTypes.object,
    contactTitle: PropTypes.string,
    contactImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    contactDetails: PropTypes.object,
};

const IndexPage = ({ data }) => {
    const {
        frontmatter: {
            mainTitle,
            about: { aboutTitle, paragraphs, aboutImage, aboutPattern },
            treatments,
            facialTreatments: { facialTitle, facialTypes },
            opening: { openingTitle, openingTimes, openingDays },
            location: { locationTitle, locationAddress },
            contact: { contactTitle, contactImage, contactDetails },
        },
    } = data.markdownRemark;

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
                openingTitle={openingTitle}
                openingTimes={openingTimes}
                openingDays={openingDays}
                locationTitle={locationTitle}
                locationAddress={locationAddress}
                contactTitle={contactTitle}
                contactImage={contactImage}
                contactDetails={contactDetails}
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
                opening {
                    openingTitle
                    openingDays
                    openingTimes
                }
                location {
                    locationTitle
                    locationAddress {
                        name
                        secondName
                        street
                        postcode
                        info
                    }
                }
                contact {
                    contactTitle
                    contactImage {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    contactDetails {
                        landline
                        mobile
                        email
                    }
                }
            }
        }
    }
`;
