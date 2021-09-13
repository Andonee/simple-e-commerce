import React from 'react'

import { NavLink } from 'react-router-dom'

import { makeStyles, Theme } from '@material-ui/core/styles'

type NavProps = {
	isOpen: boolean
	openMenuHandler: () => void
}

const Nav = ({ isOpen, openMenuHandler }: NavProps) => {
	const classes = useStyles()

	return (
		<ul
			className={
				isOpen ? `${classes.nav} ${classes.nav_shown}` : `${classes.nav}`
			}
		>
			<NavLink
				exact
				to='/'
				activeClassName={classes.nav_active}
				onClick={openMenuHandler}
			>
				Home
			</NavLink>
			<NavLink
				exact
				to='/products'
				activeClassName={classes.nav_active}
				onClick={openMenuHandler}
			>
				Products
			</NavLink>
			<NavLink
				exact
				to='/contact'
				activeClassName={classes.nav_active}
				onClick={openMenuHandler}
			>
				Contact
			</NavLink>
		</ul>
	)
}

export default Nav

const useStyles = makeStyles((theme: Theme) => ({
	nav: {
		flexBasis: '20%',
		maxWidth: '250px',
		display: 'flex',
		justifyContent: 'space-between',
		marginRight: '30px',
		position: 'relative',
		flexDirection: 'row',
		zIndex: 1000000,

		'& > a': {
			textDecoration: 'none',
			color: theme.palette.primary.main,
			fontSize: '1.2rem',
			borderBottom: '2x solid transparent',
			transition: 'all .3s ease-in',
		},

		'& > a:hover': {
			borderBottom: `2px solid ${theme.palette.primary.main} !important`,
		},

		[theme.breakpoints.down('sm')]: {
			position: 'absolute',
			top: '70px',
			right: 0,
			flexDirection: 'column',
			background: theme.palette.primary.main,
			padding: 0,
			margin: 0,
			width: '300px',
			maxWidth: '100%',
			height: 'calc(100vh - 140px)',
			justifyContent: 'center',
			alignItems: 'center',
			transform: 'translateX(100%)',
			transition: 'all .3s ease-in',
			borderBottom: 'none',

			'& > a': {
				color: '#fff',
				margin: '10px 0',
				fontSize: '1.8rem',
				transition: 'all .1s ease-in',
				borderBottom: 'none !important',
			},

			'& > a:hover': {
				color: '#7b7b7b !important',
				borderBottom: 'none !important',
			},
		},
	},

	nav_active: {
		borderBottom: `2px solid ${theme.palette.primary.main} !important`,

		[theme.breakpoints.down('sm')]: {
			borderBottom: 'none !important',
			color: '#7b7b7b !important',
		},
	},

	nav_shown: {
		transform: 'translateX(0)',
	},
}))
