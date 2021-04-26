import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../all.sass'
// import useSiteMetadata from '../SiteMetadata'

import styles from './Layout.module.scss'

const TemplateWrapper = ({children}) => {
	// const {title, description} = useSiteMetadata()
	return (
		<div className={styles.App}>
			<Navbar/>

			<div>{children}</div>
		</div>
	)
}

export default TemplateWrapper
