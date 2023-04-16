import React from 'react';

export default function Footer() {
	return (
		<footer className="border-b-4 border-gray-900">
			<div className="container mx-auto text-center">
				<div className="py-2 border-t border-gray-200">
					Designed and Developed by -{' '}
					<a
						target="_blank"
						href="https://redq.io/"
						className="text-gray-900 font-semibold"
					>
						RedQ, Inc
					</a>
				</div>
			</div>
		</footer>
	);
}
