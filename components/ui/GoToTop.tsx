"use client";

export default function GoToTop() {
	return (
		<div
			onClick={() =>
				window.document.scrollingElement?.scrollTo({
					top: 0,
					left: 0,
					behavior: "smooth",
				})
			}
			className="fixed bottom-6 right-6 z-50 h-12 w-12 cursor-pointer rounded-full bg-neutral-800/25 hover:bg-zelena"
		>
			<div className="absolute top-1.5 h-8 w-full rounded-full bg-top"></div>
		</div>
	);
}
