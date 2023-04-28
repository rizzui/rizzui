import React, { useState } from 'react';
import { Textarea } from 'rizzui';

export default function TextareaCharacterCount() {
	const [state, setState] = useState('Do not lose hope, nor be sad.');

	return (
		<Textarea
			label="Message"
			value={state}
			onChange={(e) => setState(e.target.value)}
			maxLength={100}
			renderCharacterCount={({ characterCount, maxLength }) => (
				<div className="text-right text-sm opacity-70 rtl:text-left">
					{characterCount}/{maxLength}
				</div>
			)}
		/>
	);
}

export function TextareaClear() {
	const [state, setState] = useState(
		'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
	);

	return (
		<Textarea
			label="Message"
			value={state}
			clearable
			onClear={() => setState('')}
			onChange={(e) => setState(e.target.value)}
		/>
	);
}
