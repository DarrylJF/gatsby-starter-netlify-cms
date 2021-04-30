import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import {graphql, useStaticQuery} from "gatsby";
import styles from './FacialTreatments.module.scss'

const FacialTreatments = () => {
	const data = useStaticQuery(graphql`
		{
        facial: markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
          frontmatter {
            facialTreatments {
              title
              type {
                subtitle
                paragraph
              }
            }
          }
        }
      }
	`)
	console.log(data)
	const {facial: {frontmatter: {facialTreatments: {title, type}}}} = data

	return (
		<div className={styles.facialTreatments}>
			<Container>
				<Row>
					<Col md={12}>
						<h2>{title}</h2>
						<hr/>
					</Col>
					<Row style={{justifyContent: 'center'}}>
						{type.map(t => (
							<Col key={t.subtitle} xs={12} lg={5}>
								<h4>{t.subtitle}</h4>
								<p>{t.paragraph}</p>
							</Col>
						))}
					</Row>
				</Row>
			</Container>
		</div>
	)
}

export default FacialTreatments