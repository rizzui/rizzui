import React from 'react';
import { NotificationCard, cn } from '@redq/rizz';
import toast from 'react-hot-toast';

export const notification = () =>
	toast.custom(
		(t) => (
			<NotificationCard
				title="Success"
				description="This is a success notification toast."
				media={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="h-6 w-6 text-green"
					>
						<path
							fillRule="evenodd"
							d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
							clipRule="evenodd"
						/>
					</svg>
				}
				variant="flat"
				color="success"
				onClear={() => toast.dismiss(t.id)}
				containerClassName={cn(
					'max-w-md transition-transform ease-in-out',
					t.visible ? '' : 'translate-x-[150%] duration-300'
				)}
			/>
		),
		{
			duration: 10000,
			position: 'top-right',
		}
	);
