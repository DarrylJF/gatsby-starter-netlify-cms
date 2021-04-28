import React from 'react'
// import PropTypes from 'prop-types'
// import {Link, graphql} from 'gatsby'
import Jumbotron from "../components/Jumbotron";
import Layout from '../components/Layout'
import About from '../components/About'
import Treatments from "../components/Treatments";
// import MapArea from "../components/MapArea";

export const IndexPageTemplate = (
	// {
	                                  // title,
	                                  // image,
	                                  // subheading,
	                                  // mainpitch,
	                                  // description,
	                                  // intro,
                                  // }
                                  ) => {

	return (
		<>
			<Jumbotron/>
			<About />
			<Treatments/>
			{/*<MapArea onMarkerMove={() => console.log('marker has moved')}/>*/}
		</>
		)
}

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

const IndexPage = () => {
	// const {frontmatter} = data.markdownRemark
	// console.log(frontmatter)


	return (
		<Layout>
			<IndexPageTemplate
			/>
		</Layout>
	)
}

// IndexPage.propTypes = {
// 	data: PropTypes.shape({
// 		markdownRemark: PropTypes.shape({
// 			frontmatter: PropTypes.object,
// 		}),
// 	}),
// }

export default IndexPage

// export const pageQuery = graphql`
// 	{
//     markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
//       frontmatter {
//         image {
//           childImageSharp {
//             fluid(maxWidth: 70) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `
