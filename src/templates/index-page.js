import React from 'react'
// import PropTypes from 'prop-types'
// import {Link, graphql} from 'gatsby'
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Layout from '../components/Layout/Layout'
import About from '../components/About/About'

export const IndexPageTemplate = ({
	                                  // title,
	                                  // image,
	                                  // subheading,
	                                  // mainpitch,
	                                  // description,
	                                  // intro,
                                  }) => {

	return (
		<>
			<Jumbotron/>
			<About />
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
