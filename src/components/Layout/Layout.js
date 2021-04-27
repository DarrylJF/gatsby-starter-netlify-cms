import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../all.sass'
// import useSiteMetadata from '../SiteMetadata'

import styles from './Layout.module.scss'
import Img from "gatsby-image";

const TemplateWrapper = ({children}) => {
	// const {title, description} = useSiteMetadata()
	return (
		<div className={styles.App}>
			<Navbar/>
			<div className={styles.pageContent}>{children}</div>
		</div>
	)
}

export default TemplateWrapper
