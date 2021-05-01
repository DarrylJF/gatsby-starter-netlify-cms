import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../all.sass";
import "bootstrap/dist/css/bootstrap.min.css";
import { graphql, StaticQuery } from "gatsby";

import styles from "./Layout.module.scss";
import Img from "gatsby-image";

const TemplateWrapper = ({ children }) => (
    <StaticQuery
        query={graphql`
            {
                markdownRemark(
                    frontmatter: { templateKey: { eq: "index-page" } }
                ) {
                    frontmatter {
                        logo {
                            childImageSharp {
                                fluid {
                                    src
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={data => {
            const {
                markdownRemark: {
                    frontmatter: { logo },
                },
            } = data;
            return (
                <div className={styles.App}>
                    <div className={styles.logo}>
                        <Img
                            fluid={logo.childImageSharp.fluid}
                            style={{
                                position: "absolute",
                                top: "0",
                                left: "0",
                                right: "0",
                                bottom: "0",
                                inset: "0px",
                            }}
                        />
                    </div>

                    <Navbar />
                    <div className={styles.pageContent}>
                        {children}
                        <Footer />
                    </div>
                </div>
            );
        }}
    />
);

export default TemplateWrapper;
