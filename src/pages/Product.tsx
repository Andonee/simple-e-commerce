import React, { useEffect } from 'react'

import { RouteComponentProps } from 'react-router'

import { makeStyles } from '@material-ui/core/styles'

import { Button, Image } from '../components/UI'

type RouterType = {
	id: string
}

const Product = ({ match }: RouteComponentProps<RouterType>) => {
	const classes = useStyles()

	useEffect(() => {
		const id = match.params.id
		console.log('Params ID', id)
	}, [match.params.id])

	const addToCartHandler = () => {
		console.log('addToCart')
	}

	const buyNowHandler = () => {
		console.log('buyNow')
	}

	return (
		<div className={classes.product}>
			<div className={classes.imageContainer}>
				<div className={classes.image}>
					<Image
						src={
							'https://image.ceneostatic.pl/data/products/59894500/i-amazon-logo-z-krotkim-rekawem-t-shirt-dla-mezczyzn-czarny-homer-simpson-the-simpsons-last-perfect-licencjonowany-oryginalny-projekt-kolor.jpg'
						}
						alt='Some awesome thing'
					/>
				</div>
				<div className={classes.actionBtns}>
					<Button onClick={addToCartHandler} backgroundcolor='secondary'>
						Add to cart
					</Button>
					<Button
						onClick={buyNowHandler}
						backgroundcolor='primary'
						fontcolor='#fff'
					>
						Buy now
					</Button>
				</div>
			</div>
			<div className={classes.description}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
				cupiditate non, error voluptates unde officiis atque expedita
				necessitatibus ducimus, dicta est porro id sapiente nisi deserunt
				perspiciatis corporis eum voluptatum! Autem quos molestiae at neque,
				cupiditate sapiente eaque totam ut, quae tempora est possimus ex natus
				ea cum provident nostrum vero fuga modi, quisquam porro illum. Cumque
				voluptatem quibusdam vero! Error, ipsam? Modi deserunt molestias
				perspiciatis sit molestiae repellat minus quidem cupiditate quod
				asperiores amet error earum voluptatem consectetur, possimus quae facere
				architecto aliquam deleniti eius illo veritatis ipsa sunt. Neque nobis
				voluptates inventore hic tenetur facilis obcaecati amet est illo odio
				omnis numquam, tempore, nulla blanditiis. Necessitatibus consequatur,
				nemo rem sit neque, a rerum illo doloribus voluptatem quia beatae.
			</div>
		</div>
	)
}

export default Product

const useStyles = makeStyles({
	product: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		width: '90%',
		margin: '50px auto',

		'@media (min-width: 756px)': {
			flexDirection: 'row',
		},
	},
	imageContainer: {
		flexBasis: '40%',
	},
	description: {
		flexBasis: '40%',
		fontSize: '1.2rem',
		textAlign: 'justify',
		marginTop: '40px',

		'@media (min-width: 756px)': {
			marginTop: 0,
		},
	},
	image: {
		maxWidth: '500px',
		margin: '0 auto',
	},
	actionBtns: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		width: '95%',
		maxWidth: '500px',
		margin: '20px auto',
		height: '130px',
	},
})
