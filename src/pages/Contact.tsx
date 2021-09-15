import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Input } from '../components/UI'

const Contact = () => {
	const classes = useStyles()
	const [message, setMessage] = useState({
		title: '',
		content: '',
		email: '',
	})

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Sent message', message)
	}

	const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMessage(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
		return
	}
	return (
		<div className={classes.contact}>
			<Typography variant='h3'>Feel free to contact us!</Typography>
			<form className={classes.form} onSubmit={onSubmit}>
				<Input
					onChange={onInputHandler}
					id='title-input-field'
					label='Title'
					name='title'
					value={message.title}
				/>
				<Input
					onChange={onInputHandler}
					id='message-input-field'
					label='Your message'
					multiline={true}
					name='content'
					value={message.content}
				/>
				<Input
					onChange={onInputHandler}
					id='name-input-field'
					label='Your name'
					name='email'
					value={message.email}
				/>

				<input className={classes.input} type='submit' value='Send' />
			</form>
		</div>
	)
}

export default Contact

const useStyles = makeStyles({
	contact: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '50px auto',
		maxWidth: '90%',
	},

	form: {
		display: 'flex',
		flexDirection: 'column',
		maxWidth: '90vw',
		width: '450px',
		margin: '50px auto',
	},

	input: {
		marginTop: '40px',
		fontSize: '1.2rem',
		textTransform: 'uppercase',
		background: '#fff',
		padding: '5px 10px',
		border: '1px solid gray',
		cursor: 'pointer',
	},
})
