import React, { useState } from 'react';
import { CheckboxGroup, Checkbox, AdvancedCheckbox } from '@redq/rizzui';

export default function CheckboxGroupDefault() {
	const [values, setValues] = useState<string[]>([]);
	return (
		<CheckboxGroup
			values={values}
			setValues={setValues}
			className="flex flex-row gap-4"
		>
			<Checkbox label="Apple" value="apple" />
			<Checkbox label="Pear" value="pear" />
			<Checkbox label="Orange" value="orange" disabled />
			<Checkbox label="Blueberry" value="blueberry" />
		</CheckboxGroup>
	);
}

export function CheckboxGroupAdvanced() {
	const [values, setValues] = React.useState<string[]>(['one']);
	return (
		<CheckboxGroup values={values} setValues={setValues} className="flex gap-4">
			<AdvancedCheckbox
				value="any"
				className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
			>
				Any
			</AdvancedCheckbox>
			<AdvancedCheckbox
				value="one"
				className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
			>
				1
			</AdvancedCheckbox>
			<AdvancedCheckbox
				value="two"
				className="cursor-not-allowed rounded-full border border-gray-300 px-6 py-1.5 text-gray-300"
				disabled
			>
				2
			</AdvancedCheckbox>
			<AdvancedCheckbox
				value="three"
				defaultChecked
				className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
			>
				3
			</AdvancedCheckbox>
			<AdvancedCheckbox
				value="four"
				className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
			>
				4
			</AdvancedCheckbox>
			<AdvancedCheckbox
				value="five+"
				className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
			>
				5+
			</AdvancedCheckbox>
		</CheckboxGroup>
	);
}
