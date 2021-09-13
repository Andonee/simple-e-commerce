import React, { useState } from 'react'
import { Card } from '../components/UI'
import { makeStyles, Theme } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'

const Products = () => {
	const classes = useStyles()

	const [category, setCategory] = useState<unknown>('')
	const [search, setSearch] = useState<unknown>('')

	const onCategoryChange = (
		e: React.ChangeEvent<{ name?: string; value: unknown }>
	) => {
		setCategory(e.target.value)
	}

	const onSearchChange = (
		e: React.ChangeEvent<{ name?: string; value: unknown }>
	) => {
		setSearch(e.target.value)
	}
	return (
		<div>
			<div className={classes.searchBar}>
				<TextField
					id='search-product'
					variant='outlined'
					size='small'
					label='Search'
					onChange={onSearchChange}
					value={search}
					className={classes.input}
				/>
				<FormControl variant='outlined' size='small' className={classes.select}>
					<InputLabel id='select-category-label'>Category</InputLabel>
					<Select
						label='Category'
						id='select-category'
						value={category}
						inputProps={{
							name: 'sss',
							id: 'select-category-label',
						}}
						onChange={onCategoryChange}
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
			</div>
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
		</div>
	)
}

export default Products

const useStyles = makeStyles((theme: Theme) => ({
	searchBar: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		margin: '40px auto',
		width: '95%',
		height: '120px',

		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
			height: '60px',
		},
	},
	products: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
		justifyItems: 'center',
		gap: '20px',
	},

	input: {
		flexBasis: '40%',
		maxWidth: '400px',
	},

	select: {
		flexBasis: '40%',
		maxWidth: '400px',
	},
}))
