import React from 'react';
import { Password } from 'rizzui';

export default function PasswordClearable({ label }) {
	const [state, setState] = React.useState('my_password');
	return (
		<Password
			label={label}
			value={state}
			clearable={true}
			onClear={() => setState('')}
			onChange={(e) => setState(e.target.value)}
			placeholder="Your password"
		/>
	);
}
