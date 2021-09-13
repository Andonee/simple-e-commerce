import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

type CardProps<Type> = {
	src: Type
	alt: Type
	name: Type
	price: Type
}

const StyledCard = withStyles({
	root: {
		// width: '170px',
	},
})(Card)

const CustomCard = ({ src, alt, name, price }: CardProps<string>) => {
	return (
		<StyledCard>
			<CardActionArea>
				<CardMedia component='img' image={src} title={name} alt={alt} />
				<CardContent>
					<Typography variant='h6'> {name}</Typography>
					<Typography variant='h6'> ${price}</Typography>
				</CardContent>
			</CardActionArea>
		</StyledCard>
	)
}

export default CustomCard
