import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Nav from './Nav/Nav'

const Navbar = () => {
	const classes = useStyles()

	const [isOpen, setIsOpen] = useState(false)

	const openMenuHandler = () => {
		setIsOpen(!isOpen)
	}
	return (
		<div className={classes.navbar}>
			<div className={classes.logo}>Logo</div>
			<Nav isOpen={isOpen} openMenuHandler={openMenuHandler} />
			<div className={classes.navbar__burger} onClick={openMenuHandler}>
				<div className={classes.navbar__burger_line1}></div>
				<div className={classes.navbar__burger_line2}></div>
				<div className={classes.navbar__burger_line3}></div>
			</div>
		</div>
	)
}

export default Navbar

const useStyles = makeStyles(theme => ({
	navbar: {
		width: '100%',
		height: '70px',
		background: '#fff',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		position: 'relative',
	},
	logo: {
		fontWeight: 'bold',
		marginLeft: '30px',
		fontSize: '2rem',
	},
	navbar__burger: {
		display: 'flex',
		flexDirection: 'column',
		width: '30px',
		height: '25px',
		justifyContent: 'space-between',
		marginRight: '20px',
		cursor: 'pointer',

		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	navbar__burger_line1: {
		height: '2px',
		width: '100%',
		background: '#383838',
	},
	navbar__burger_line2: {
		height: '2px',
		width: '100%',
		background: '#383838',
	},
	navbar__burger_line3: {
		height: '2px',
		width: '100%',
		background: '#383838',
	},
}))
