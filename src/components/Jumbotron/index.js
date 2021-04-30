import React from 'react'
import styles from './Jumbotron.module.scss'

const Jumbotron = ({title}) => {
	return (
		<div className={styles.jumbotron}>
			<h1>
				{title}
				{/*Blackthorn Beauty*/}
				{/*<span>& Piercings</span>*/}
			</h1>
		</div>
	)
}

export default Jumbotron