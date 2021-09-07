import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const Footer = () => {
	const classes = useStyles()

	return <div className={classes.footer}>Awesome Footer</div>
}

export default Footer

const useStyles = makeStyles({
	footer: {
		width: '100%',
		height: '70px',
		background: '#383838',
		color: '#a0a0a0',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
