import React from 'react';
import { Avatar } from 'rizzui';

export const advancedSelectOptions = [
	{
		id: 1,
		name: 'John',
		label: (
			<span className="inline-flex items-center gap-2">
				<Avatar
					size="24px"
					src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
				/>
				John Doe
			</span>
		),
	},
	{
		id: 2,
		name: 'Emily',
		label: (
			<span className="inline-flex items-center gap-2">
				<Avatar
					size="24px"
					src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
				/>
				Emily Josh
			</span>
		),
	},
	{
		id: 3,
		name: 'Miller',
		label: (
			<span className="inline-flex items-center gap-2">
				<Avatar
					size="24px"
					src="https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
				/>
				Miller Wills
			</span>
		),
	},
	{
		id: 4,
		name: 'James',
		disabled: true,
		label: (
			<span className="inline-flex items-center gap-2">
				<Avatar
					size="24px"
					src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
				/>
				James Wan
			</span>
		),
	},
	{
		id: 5,
		name: 'Franky',
		label: (
			<span className="inline-flex items-center gap-2">
				<Avatar
					size="24px"
					src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
				/>
				Franky Sam
			</span>
		),
	},
];
