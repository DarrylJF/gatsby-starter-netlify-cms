import React from "react";
import Links from "../../constants/links";
import styles from "./Drawer.module.scss";
import CloseIcon from "@material-ui/icons/Close";
// import { graphql, useStaticQuery } from "gatsby";
// import Img from "gatsby-image";

const Drawer = ({ close }) => {
    // const data = useStaticQuery(graphql`
    //     query DrawerLogo {
    //         drawerLogo: markdownRemark(
    //             frontmatter: { templateKey: { eq: "index-page" } }
    //         ) {
    //             frontmatter {
    //                 image {
    //                     childImageSharp {
    //                         fluid {
    //                             ...GatsbyImageSharpFluid
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `);
    // const {
    //     drawerLogo: {
    //         frontmatter: { image },
    //     },
    // } = data;
    return (
        <div className={styles.navMobile}>
            <CloseIcon onClick={close} />
            <Links />
            <div className={styles.drawerLogo}>
                {/*<Img fluid={image.childImageSharp.fluid} />*/}
            </div>
        </div>
    );
};

export default Drawer;
