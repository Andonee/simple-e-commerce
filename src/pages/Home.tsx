import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Image, Button, Card } from '../components/UI'
import { useHistory } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

const Home = () => {
	const classes = useStyles()
	const history = useHistory()

	const onProductPageRedirect = () => {
		history.push('/products')
	}

	// This is just an example of styling Material UI components

	// const StyledInput = withStyles({
	// 	root: {
	// 		'& .MuiInput-input': {
	// 			color: 'blue',
	// 		},

	// 		'& .MuiFormLabel-root': {
	// 			color: 'purple',
	// 		},

	// 		'& .Mui-focused': {
	// 			color: 'green',
	// 		},

	// 		'& .MuiInput-underline:before': {
	// 			borderBottom: '1px solid green',
	// 			transition: 'all 1s ease',
	// 		},

	// 		'& .MuiInput-underline:hover:not(.Mui-disabled):before': {
	// 			borderBottom: '5px solid red',
	// 		},
	// 	},
	// })(TextField)

	return (
		<div>
			<section className={classes.banner}>
				<Image
					src='https://www.dporganizer.com/wp-content/uploads/2018/03/27172310/ecommerce-background.jpg'
					alt='banner'
				/>
				<div className={classes.btn}>
					<Button onClick={onProductPageRedirect} backgroundcolor='secondary'>
						shop now
					</Button>
				</div>
			</section>
			<section>
				<Typography className={classes.header} variant='h4'>
					Check out our awesome stuff!
				</Typography>
				<div className={classes.products}>
					<Card
						src='https://image.ceneostatic.pl/data/products/59894500/i-amazon-logo-z-krotkim-rekawem-t-shirt-dla-mezczyzn-czarny-homer-simpson-the-simpsons-last-perfect-licencjonowany-oryginalny-projekt-kolor.jpg'
						alt='Homer T-shirt'
						name='Homer T-shirt'
						price='20'
					/>
					<Card
						src='https://image.ceneostatic.pl/data/products/59894500/i-amazon-logo-z-krotkim-rekawem-t-shirt-dla-mezczyzn-czarny-homer-simpson-the-simpsons-last-perfect-licencjonowany-oryginalny-projekt-kolor.jpg'
						alt='Homer T-shirt'
						name='Homer T-shirt'
						price='20'
					/>
					<Card
						src='https://image.ceneostatic.pl/data/products/59894500/i-amazon-logo-z-krotkim-rekawem-t-shirt-dla-mezczyzn-czarny-homer-simpson-the-simpsons-last-perfect-licencjonowany-oryginalny-projekt-kolor.jpg'
						alt='Homer T-shirt'
						name='Homer T-shirt'
						price='20'
					/>
					<Card
						src='https://image.ceneostatic.pl/data/products/59894500/i-amazon-logo-z-krotkim-rekawem-t-shirt-dla-mezczyzn-czarny-homer-simpson-the-simpsons-last-perfect-licencjonowany-oryginalny-projekt-kolor.jpg'
						alt='Homer T-shirt'
						name='Homer T-shirt'
						price='20'
					/>
					<Card
						src='https://image.ceneostatic.pl/data/products/59894500/i-amazon-logo-z-krotkim-rekawem-t-shirt-dla-mezczyzn-czarny-homer-simpson-the-simpsons-last-perfect-licencjonowany-oryginalny-projekt-kolor.jpg'
						alt='Homer T-shirt'
						name='Homer T-shirt'
						price='20'
					/>
					<Card
						src='https://image.ceneostatic.pl/data/products/59894500/i-amazon-logo-z-krotkim-rekawem-t-shirt-dla-mezczyzn-czarny-homer-simpson-the-simpsons-last-perfect-licencjonowany-oryginalny-projekt-kolor.jpg'
						alt='Homer T-shirt'
						name='Homer T-shirt'
						price='20'
					/>
				</div>
			</section>
		</div>
	)
}

export default Home

const useStyles = makeStyles({
	banner: {
		width: '100%',
		heigh: 'auto',
		position: 'relative',
	},
	btn: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	},

	header: {
		textAlign: 'center',
		marginTop: '50px',
	},

	products: {
		marginTop: '40px',
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
		justifyItems: 'center',
		gap: '20px',
	},
})
