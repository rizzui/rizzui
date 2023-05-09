import React, { Fragment } from 'react';
import { SunIcon } from '@heroicons/react/20/solid';
import { MoonIcon, LinkIcon } from '@heroicons/react/24/outline';

export const defaultCollapseData = [
	{
		title: 'Option A',
		content: (
			<Fragment>
				If you are unhappy with your purchase for any reason, email us within 90
				days and we will refund you in full, no questions asked. If you are
				unhappy with your purchase for any reason, email us within 90 days and
				we will refund you in full, no questions asked.If you are unhappy with
				your purchase for any reason.
			</Fragment>
		),
	},
	{
		title: 'Option B',
		content: (
			<Fragment>
				If you are unhappy with your purchase for any reason, email us within 90
				days and we will refund you in full, no questions asked. If you are
				unhappy with your purchase for any reason, email us within 90 days and
				we will refund you in full, no questions asked.If you are unhappy with
				your purchase for any reason.
			</Fragment>
		),
	},
	{
		title: 'Option C',
		content: (
			<Fragment>
				If you are unhappy with your purchase for any reason, email us within 90
				days and we will refund you in full, no questions asked. If you are
				unhappy with your purchase for any reason, email us within 90 days and
				we will refund you in full, no questions asked.If you are unhappy with
				your purchase for any reason.
			</Fragment>
		),
	},
];

export const customStyleCollapseData = [
	{
		title: 'Option A',
		icon: <LinkIcon />,
		defaultOpen: true,
		content: (
			<Fragment>
				If you are unhappy with your purchase for any reason, email us within 90
				days and we will refund you in full, no questions asked. If you are
				unhappy with your purchase for any reason, email us within 90 days and
				we will refund you in full, no questions asked.If you are unhappy with
				your purchase for any reason.
			</Fragment>
		),
	},
	{
		title: 'Option B',
		icon: <MoonIcon />,
		defaultOpen: false,
		content: (
			<Fragment>
				If you are unhappy with your purchase for any reason, email us within 90
				days and we will refund you in full, no questions asked. If you are
				unhappy with your purchase for any reason, email us within 90 days and
				we will refund you in full, no questions asked.If you are unhappy with
				your purchase for any reason.
			</Fragment>
		),
	},
	{
		title: 'Option C',
		icon: <SunIcon />,
		defaultOpen: false,
		content: (
			<Fragment>
				If you are unhappy with your purchase for any reason, email us within 90
				days and we will refund you in full, no questions asked. If you are
				unhappy with your purchase for any reason, email us within 90 days and
				we will refund you in full, no questions asked.If you are unhappy with
				your purchase for any reason.
			</Fragment>
		),
	},
];
