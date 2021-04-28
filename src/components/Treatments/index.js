import React from 'react'
import Treatment from '../Treatment/Treatment'
import {graphql, useStaticQuery} from "gatsby";
import {Container, Row, Col} from 'reactstrap'

const Treatments = () => {
	const data = useStaticQuery(graphql`
		{
        treatments: markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
          frontmatter {
              treatments {
                title
                items {
                  title
                  price
                  time
                }
              }
          }
        }
      }
	`)
	const {treatments: {frontmatter: {treatments}}} = data

	return (
		<div>
			<Container>
				<Row>
					<Col md={12}>
						<h2></h2>
						<hr/>
						<div>
							{treatments.map(treatment => (
								<Treatment key={treatment.title} items={treatment.items} title={treatment.title}/>
							))}
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Treatments