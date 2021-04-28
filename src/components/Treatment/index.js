import React from 'react'
import {Col} from 'reactstrap'
import styles from './Treatment.module.scss'


const Treatment = ({items, title, subtitle, extra}) => {


	return (
		<Col md={4}>
			<div className={styles.treatment}>
				<div/>
				<div className={styles.treatmentInner}>
					<hr/>
					<h3>{title}</h3>
					{!!subtitle && (
						<span className={styles.treatmentSubtitle}>{subtitle}</span>
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
							<span>{!!extra && (<span>{extra}</span>)}</span>
						</li>
					</ul>
				</div>
			</div>
		</Col>
	)
}

export default Treatment