import React from "react";
import Links from "../../constants/links";
import styles from "./Drawer.module.scss";
import CloseIcon from "@material-ui/icons/Close";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

const drawerQuery = graphql`
    {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                logo {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;

const Drawer = ({ close }) => (
    <StaticQuery
        query={drawerQuery}
        render={data => {
            const {
                markdownRemark: {
                    frontmatter: { logo },
                },
            } = data;
            return (
                <div className={styles.navMobile}>
                    <CloseIcon onClick={close} />
                    <Links />
                    <div className={styles.drawerLogo}>
                        <Img fluid={logo.childImageSharp.fluid} />
                    </div>
                </div>
            );
        }}
    />
);

export default Drawer;
