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
			className="fixed bottom-4 right-4 z-50 h-12 w-12 cursor-pointer rounded-full bg-neutral-800/25 hover:bg-zelena md:bottom-6 md:right-6"
		>
			<div className="absolute top-1.5 h-8 w-full rounded-full bg-top"></div>
		</div>
	);
}
