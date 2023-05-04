import React from 'react';
import { Input } from 'rizzui';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function InputCounter() {
	const [state, setState] = React.useState(0);
	return (
		<Input
			label="Quantity Counter"
			type="number"
			min={0}
			step={1}
			value={state}
			onChange={(e) => setState(Number(e.target.value))}
			suffix={
				<div className="-mr-3.5 grid gap-[2px] p-0.5 rtl:-ml-3.5 rtl:-mr-0">
					<button
						type="button"
						className="rounded-[3px] bg-gray-100 py-0.5 px-1.5 hover:bg-gray-200 focus:bg-gray-200"
						onClick={() => setState((prevState) => prevState + 1)}
					>
						<ChevronUpIcon className="h-3 w-3" />
					</button>
					<button
						type="button"
						className="rounded-[3px]  bg-gray-100 py-0.5 px-1.5 hover:bg-gray-200 focus:bg-gray-200"
						onClick={() => setState((prevState) => prevState - 1)}
					>
						<ChevronDownIcon className="h-3 w-3" />
					</button>
				</div>
			}
		/>
	);
}

export function InputCharacterCounter() {
	const MAXLENGTH = 24;
	const [state, setState] = React.useState('Chat GPT is awesome!');

	return (
		<Input
			label="Character Counter"
			type="text"
			value={state}
			maxLength={MAXLENGTH}
			onChange={(e) => setState(() => e.target.value)}
			suffix={state.length + `/${MAXLENGTH}`}
			suffixClassName="opacity-70"
		/>
	);
}

export function InputClearable({ label }) {
	const [state, setState] = React.useState('This is Jhon.');
	return (
		<Input
			type="text"
			label={label}
			placeholder="clearable ..."
			value={state}
			onChange={(e) => setState(e.target.value)}
			onClear={() => setState('')}
			clearable
		/>
	);
}
