import React, {useState} from 'react'

import MenuIcon from '@material-ui/icons/Menu';
import Links from '../../constants/links'
import styles from './Navbar.module.scss'
import Drawer from "../Drawer";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const isOpenHandler = () => {
		setIsOpen(!isOpen)
	}
	return (
		<>
			<nav className={styles.navbar}>
				<div>
					<Links styleClass={styles.nav}/>
					<MenuIcon onClick={isOpenHandler}/>
				</div>
			</nav>
			{isOpen ? <Drawer close={isOpenHandler}/> : null}
		</>
	)
}

export default Navbar
