import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import {graphql, useStaticQuery} from "gatsby";
import styles from './OpeningTimes.module.scss'


const OpeningTimes = () => {
	const data = useStaticQuery(graphql`
		{
        opening: markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
          frontmatter {
            opening {
              days
              title
              time
            }
          }
        }
      }
	`)
	console.log(data)
	const {opening: {frontmatter: {opening: {title, time, days}}}} = data
	return (
		<div className={styles.sectionOpening}>
			<Container>
				<Row>
					<Col md={12}>
						<h2>{title}</h2>
						<hr/>
						{days.map(day => (
							<span>{day}</span>
						))}
						<p>{time}</p>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default OpeningTimes