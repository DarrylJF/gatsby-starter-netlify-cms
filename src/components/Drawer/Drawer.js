import React from 'react'
import Links from '../../constants/links'
import styles from './Drawer.module.scss'
import CloseIcon from '@material-ui/icons/Close';

const Drawer = ({close}) => {
	return (
		<div className={styles.navMobile}>
			<CloseIcon onClick={close}/>
			<Links />
		</div>
	)
}

export default Drawer