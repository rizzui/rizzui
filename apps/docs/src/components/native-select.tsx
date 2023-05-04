import React from 'react';
import { NativeSelect } from 'rizzui';

export default function NativeSelectDefault() {
	const [state, setState] = React.useState('John');
	return (
		<NativeSelect
			label="Name"
			value={state}
			options={['John', 'Miller', 'James', 'Franky']}
			onChange={(e) => setState(e.target.value)}
			clearable={!!state}
			onClear={() => setState('')}
		/>
	);
}
