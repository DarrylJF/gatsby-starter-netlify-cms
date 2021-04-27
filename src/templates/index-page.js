import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Layout from '../components/Layout/Layout'
import About from '../components/About/About'

export const IndexPageTemplate = ({
	                                  image,
	                                  title,
	                                  aboutImage,
	                                  // color,
	                                  // heading,
	                                  // subheading,
	                                  // mainpitch,
	                                  // description,
	                                  // intro,
                                  }) => {
	const imageStyle = {
		position: 'absolute',
		top: '1.875rem',
		left: '2.8125rem',
		height: '70px'
	}
	return (
		<>
			<div style={imageStyle}>

			</div>
			<Jumbotron/>
			<About title={title} aboutImage={aboutImage}/>
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

const IndexPage = ({data}) => {
	const {frontmatter} = data.markdownRemark
	console.log(frontmatter.about.image)

	return (
		<Layout>
			<IndexPageTemplate
				// image={frontmatter.image}
				title={frontmatter.about.title}
				aboutImage={frontmatter.about.image}
				// color={frontmatter.color}
				// heading={frontmatter.heading}
				// subheading={frontmatter.subheading}
				// mainpitch={frontmatter.mainpitch}
				// description={frontmatter.description}
				// intro={frontmatter.intro}
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

export const pageQuery = graphql`
	{
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        about {
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
