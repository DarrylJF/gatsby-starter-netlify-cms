import React from "react";
import Treatment from "../Treatment";
import {graphql, useStaticQuery} from "gatsby";
import {Container, Row, Col} from "reactstrap";
import styles from "./Treatments.module.scss";

const Treatments = () => {
	const data = useStaticQuery(graphql`
    {
      treatments: markdownRemark(
        frontmatter: { templateKey: { eq: "index-page" } }
      ) {
        frontmatter {
          treatments {
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            items {
              title
              time
              price
            }
            subtitle
            extra
          }
        }
      }
    }
  `);
	const {
		treatments: {
			frontmatter: {treatments},
		},
	} = data;
	console.log(data);
	return (
		<div className={styles.sectionTreatments}>
			<Container>
				<Row>
					<Col md={12}>
						<h2>Treatments</h2>
						<hr/>
						<Row>
							{treatments.map((treatment) => (
								<Treatment
									key={treatment.title}
									items={treatment.items}
									title={treatment.title}
									extra={treatment.extra}
									subtitle={treatment.subtitle}
									image={treatment.image}
								/>
							))}
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Treatments;
