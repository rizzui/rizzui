import React from 'react';

export default function NotFoundWrapper() {
	return (
		<div className="custom-not-found-wrapper">
			<h1 className="hero__title mb-7">Page Not Found</h1>
			<p className="text-base leading-relaxed">
				We could not find what you were looking for. Please contact the owner of
				the site that linked you to the original URL and let them know their
				link is broken.
			</p>
		</div>
	);
}
