import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './About.module.scss'
import Img from "gatsby-image";

const About = ({title, aboutImage}) => {

	return (
		<Container className={styles.sectionAbout}>
			<Row>
				<Col md={6}>
					<Img fluid={aboutImage.childImageSharp.image}/>
				</Col>
				<Col md={6}>
					<h2>{title}</h2>
					<hr/>
				</Col>
			</Row>
		</Container>
	)
}
export default About