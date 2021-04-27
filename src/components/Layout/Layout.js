import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../all.sass'
import 'bootstrap/dist/css/bootstrap.min.css';
import {graphql, useStaticQuery} from "gatsby";

import styles from './Layout.module.scss'
import Img from "gatsby-image";

const TemplateWrapper = ({children}) => {
	const data = useStaticQuery(graphql`
	query LogoImage	{
        logo: markdownRemark(frontmatter: {templateKey: {eq: "index-page"}, about: {aboutImage: {}}}) {
          frontmatter {
            image {
              childImageSharp {
                image: fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
    }
`)
	console.log(data)
	const {logo: {frontmatter: {image: {childImageSharp: {image}}}}} = data
	return (
		<div className={styles.App}>
			<a className={styles.logo}>
				<Img fluid={image}/>
			</a>
			<Navbar/>
			<div className={styles.pageContent}>{children}</div>
		</div>
	)
}

export default TemplateWrapper
