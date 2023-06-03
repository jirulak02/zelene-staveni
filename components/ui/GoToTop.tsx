"use client";

export default function GoToTop() {
	return (
		<button
			onClick={() =>
				window.document.scrollingElement?.scrollTo({
					top: 0,
					left: 0,
					behavior: "smooth",
				})
			}
			className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-neutral-800/25 hover:bg-zelena"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="48"
				viewBox="0 -960 960 960"
				width="48"
				className="absolute top-1"
				style={{ fill: "rgb(245, 245, 245)" }}
			>
				<path d="M242-424.434 186.434-480 480-773.566 773.566-480 718-424.434l-238-237-238 237Z" />
			</svg>
		</button>
	);
}
