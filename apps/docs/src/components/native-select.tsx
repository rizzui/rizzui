import React, { useState } from 'react';
import { NativeSelect } from '@redq/rizzui';

const options = [
	{
		id: 1,
		name: 'John',
		value: 'John',
	},
	{
		age: 20,
		id: 2,
		name: 'Doe',
		value: 'Doe',
	},
	{
		class: 12,
		id: 3,
		name: 'Miller',
		value: 'Miller',
	},
	{
		id: 4,
		name: 'James',
		value: 'James',
	},
	{
		disabled: true,
		id: 5,
		name: 'Franky',
		value: 'Franky',
	},
];

export default function NativeSelectDefault() {
	const [value, setValue] = useState([]);

	return (
		<NativeSelect
			label="Select Name"
			options={options}
			placeholder="Choose option from below"
			selectedValue={value}
			setSelectedValue={setValue}
		/>
	);
}

export function NativeSelectCustomIcon() {
	const [value, setValue] = useState([]);

	return (
		<NativeSelect
			label="Select Name"
			placeholder="Choose option from below"
			options={options}
			selectedValue={value}
			setSelectedValue={setValue}
			dropDownIcon={
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="mr-2 h-5 w-5"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19.5 8.25l-7.5 7.5-7.5-7.5"
					/>
				</svg>
			}
		/>
	);
}

export function NativeSelectHelperText() {
	const [value, setValue] = useState([]);

	return (
		<NativeSelect
			label="Select Name"
			placeholder="Choose option from below"
			options={options}
			selectedValue={value}
			setSelectedValue={setValue}
			dropDownIcon={
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="mr-2 h-5 w-5"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19.5 8.25l-7.5 7.5-7.5-7.5"
					/>
				</svg>
			}
			helperText="Please enter your full name"
		/>
	);
}

export function NativeSelectError() {
	const [value, setValue] = useState([]);

	return (
		<NativeSelect
			label="Select Name"
			placeholder="Choose option from below"
			options={options}
			selectedValue={value}
			setSelectedValue={setValue}
			dropDownIcon={
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="mr-2 h-5 w-5"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19.5 8.25l-7.5 7.5-7.5-7.5"
					/>
				</svg>
			}
			error="This field is required"
		/>
	);
}
