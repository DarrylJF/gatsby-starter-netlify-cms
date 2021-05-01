import React from "react";
// import PropTypes from 'prop-types'
// import {Link, graphql} from 'gatsby'
import Jumbotron from "../components/Jumbotron";
import Layout from "../components/Layout";
import About from "../components/About";
import Treatments from "../components/Treatments";
// import MapArea from "../components/MapArea";
import FacialTreatments from "../components/FacialTreatments";
import OpeningTimes from "../components/OpeningTimes";
import Location from "../components/Location";
import Contact from "../components/Contact";

export const IndexPageTemplate = (
    // {
    title
    // image,
    // subheading,
    // mainpitch,
    // description,
    // intro,
    // }
) => {
    return (
        <>
            <Jumbotron title={title.title} />
            <About />
            <Treatments />
            {/*<MapArea onMarkerMove={() => console.log('marker has moved')}/>*/}
            <FacialTreatments />
            <OpeningTimes />
            <Location />
            <Contact />
        </>
    );
};

// IndexPageTemplate.propTypes = {
// 	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
// 	title: PropTypes.string,
// 	color: PropTypes.string,
// 	heading: PropTypes.string,
// 	subheading: PropTypes.string,
// 	mainpitch: PropTypes.object,
// 	description: PropTypes.string,
// 	intro: PropTypes.shape({
// 		blurbs: PropTypes.array,
// 	}),
// }

const IndexPage = ({ data }) => {
    const { frontmatter: {title} } = data.markdownRemark;

    return (
        <Layout>
            <IndexPageTemplate title={title} />
        </Layout>
    );
};

// IndexPage.propTypes = {
// 	data: PropTypes.shape({
// 		markdownRemark: PropTypes.shape({
// 			frontmatter: PropTypes.object,
// 		}),
// 	}),
// }

export default IndexPage;

export const pageQuery = graphql`
    {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                title
            }
        }
    }
`;
