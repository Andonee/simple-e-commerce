import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

type ImageProps = {
	src: string
	alt: string
}

const Image = ({ src, alt }: ImageProps) => {
	const classes = useStyles()

	return <img src={src} alt={alt} className={classes.image} />
}

export default Image

const useStyles = makeStyles({
	image: {
		width: '100%',
		height: 'auto',
	},
})
