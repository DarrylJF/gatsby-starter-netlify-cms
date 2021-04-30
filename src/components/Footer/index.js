import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import {graphql, useStaticQuery} from "gatsby";
import Img from 'gatsby-image'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import styles from './Footer.module.scss'

const Footer = () => {
	const data = useStaticQuery(graphql`
	 {
        footer: markdownRemark {
          frontmatter {
            footer {
              childImageSharp {
                fluid(maxWidth: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
`)
	const {footer: {frontmatter: {footer}}} = data
	return (
		<>
			<div className={styles.sectionFooter}>
				<Container>
					<Row style={{justifyContent: 'center'}}>
						<div>
							<a>
								<InstagramIcon/>
							</a>
						</div>
						<Col xs={2}>
							<Img fluid={footer.childImageSharp.fluid}
							     style={{position: 'absolute', top: '0', right: '0', left: '0', bottom: '0'}}
							     imgStyle={{objectFit: 'contain'}}
							/>
						</Col>
						<div>
							<a>
								<FacebookIcon/>
							</a>
						</div>
					</Row>
				</Container>
			</div>
		</>
	)
}

export default Footer