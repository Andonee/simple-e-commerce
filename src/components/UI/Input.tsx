import React from 'react'
import TextField from '@material-ui/core/TextField'

type InputType = {
	id: string
	label: string
	variant?: 'filled' | 'outlined'
	multiline?: boolean
	size?: 'small' | 'medium'
	rows?: number
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	name: string
	value: string
}

const Input = ({
	id,
	label,
	variant,
	multiline = false,
	size = 'medium',
	rows = 4,
	onChange,
	name,
	value,
}: InputType) => {
	return (
		<TextField
			id={id}
			label={label}
			variant={variant}
			multiline={multiline}
			size={size}
			rows={rows}
			onChange={onChange}
			name={name}
			value={value}
		/>
	)
}

export default Input
