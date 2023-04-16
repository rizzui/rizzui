import React, { useState } from 'react';
import { AdvancedSelect } from '@redq/rizz';
import { advancedSelectOptions } from '@site/src/data/advanced-select-data';

export default function AdvancedSelectDefault() {
	const [state, setState] = useState([advancedSelectOptions[0]]);
	return (
		<AdvancedSelect
			label="Select Person"
			onChange={setState}
			options={advancedSelectOptions}
			value={state}
			className="[&_ul]:pl-0 [&_li]:!mt-0 first:[&_li]:!mt-2"
		/>
	);
}

export function AdvancedSelectSingle() {
	const [state, setState] = useState([advancedSelectOptions[0]]);
	return (
		<AdvancedSelect
			label="Select Single Person"
			onChange={setState}
			options={advancedSelectOptions}
			value={state}
			className="[&_ul]:pl-0 [&_li]:!mt-0 first:[&_li]:!mt-2"
		/>
	);
}

export function AdvancedSelectMulti() {
	const [state, setState] = useState<any>([
		advancedSelectOptions[0],
		advancedSelectOptions[1],
	]);
	return (
		<AdvancedSelect
			label="Select Single Person"
			value={state}
			onChange={setState}
			options={advancedSelectOptions}
			multiple
			className="[&_ul]:pl-0 [&_li]:!mt-0 first:[&_li]:!mt-2"
		/>
	);
}

export function AdvancedSelectCreateAbleSingle() {
	const [state, setState] = useState([advancedSelectOptions[0]]);
	return (
		<AdvancedSelect
			label="Single Select"
			value={state}
			onChange={setState}
			options={advancedSelectOptions}
			isCreatable
			className="[&_ul]:pl-0 [&_li]:!mt-0 first:[&_li]:!mt-2"
		/>
	);
}

export function AdvancedSelectCreateAbleMulti() {
	const [state, setState] = useState<any>([advancedSelectOptions[0]]);
	return (
		<AdvancedSelect
			label="Multi Select"
			value={state}
			onChange={setState}
			options={advancedSelectOptions}
			multiple
			isCreatable
			className="[&_ul]:pl-0 [&_li]:!mt-0 first:[&_li]:!mt-2"
		/>
	);
}
