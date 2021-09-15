import React from 'react'
import Button from '@material-ui/core/Button'

import { withStyles, Theme } from '@material-ui/core/styles'

type CustomButtonProps = {
	onClick?: () => void
	children: React.ReactNode
	backgroundcolor?: 'primary' | 'success' | string
	fontcolor?: string
}
const StyledButton = withStyles((theme: Theme) => ({
	root: {
		background: (props: { backgroundcolor: string; fontcolor: string }) =>
			props.backgroundcolor === 'primary'
				? theme.palette.primary.main
				: props.backgroundcolor === 'secondary'
				? theme.palette.secondary.main
				: props.backgroundcolor,
		color: (props: { backgroundcolor: string; fontcolor: string }) =>
			props.fontcolor,

		'&:hover': {
			background: (props: { backgroundcolor: string; fontcolor: string }) =>
				props.backgroundcolor !== 'primary' &&
				props.backgroundcolor !== 'secondary'
					? props.backgroundcolor + 'd9'
					: 'default',
			color: (props: { backgroundcolor: string; fontcolor: string }) =>
				props.fontcolor && theme.palette.primary.main,
		},
	},

	label: {
		padding: '10px 20px',
	},
}))(Button)

const CustomButton = ({
	onClick,
	children,
	backgroundcolor = 'secondary',
	fontcolor = 'primary',
}: CustomButtonProps) => {
	return (
		<StyledButton
			onClick={onClick}
			variant='outlined'
			backgroundcolor={backgroundcolor}
			fontcolor={fontcolor}
		>
			{children}
		</StyledButton>
	)
}

export default CustomButton
