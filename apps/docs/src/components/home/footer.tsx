import React from 'react';

export default function Footer() {
	return (
		<footer className="border-b-[3px] md:border-b-4 border-gray-900 mt-4 sm:mt-6 md:mt-12">
			<div className="container mx-auto text-center">
				<div className="py-2 border-t border-gray-200">
					Designed and Developed by -{' '}
					<a
						target="_blank"
						href="https://redq.io/"
						className="text-gray-900 font-semibold"
					>
						REDQ
					</a>
				</div>
			</div>
		</footer>
	);
}
