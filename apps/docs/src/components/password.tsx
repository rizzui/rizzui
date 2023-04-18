import React from 'react';
import { Password } from '@redq/rizzui';

export default function PasswordClearable({ label, variant }) {
	const [state, setState] = React.useState('my_password');
	return (
		<Password
			label={label}
			value={state}
			clearable={true}
			variant={variant}
			color="primary"
			onClear={() => setState('')}
			onChange={(e) => setState(e.target.value)}
			placeholder="Your password"
		/>
	);
}
