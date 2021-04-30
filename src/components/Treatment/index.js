import React from "react";
import Col from "react-bootstrap/Col";
import styles from "./Treatment.module.scss";
import Img from "gatsby-image";

const Treatment = ({ items, title, subtitle, extra, image }) => {
    return (
        <Col md={4}>
            <div className={styles.treatment}>
                <Img
                    style={{
                        height: "283px",
                        border: "1px solid #cecece",
                        borderBottom: "none",
                    }}
                    fluid={image.childImageSharp.fluid}
                />
                <div className={styles.treatmentInner}>
                    <hr />
                    <h3>{title}</h3>
                    {!!subtitle && (
                        <span className={styles.treatmentSubtitle}>
                            {subtitle}
                        </span>
                    )}
                    <ul>
                        {items.map(item => (
                            <li key={item.title}>
                                <p>
                                    {item.title}
                                    <span> | £{item.price}</span>
                                </p>
                                <span>{item.time} mins</span>
                            </li>
                        ))}
                        <li>
                            <span>{!!extra && <span>{extra}</span>}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Col>
    );
};

export default Treatment;
