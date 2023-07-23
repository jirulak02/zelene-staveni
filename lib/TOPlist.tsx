"use client";

import { useEffect, useRef } from "react";

export default function TOPlist() {
	const anchorRef = useRef<HTMLAnchorElement>(null);

	useEffect(() => {
		console.log("rerender");
		const img = document.createElement("img");
		img.src =
			"https://toplist.cz/dot.asp?id=1080441&http=" +
			encodeURIComponent(document.referrer) +
			"&t=" +
			encodeURIComponent(document.title) +
			"&l=" +
			encodeURIComponent(document.URL) +
			"&wi=" +
			encodeURIComponent(window.screen.width) +
			"&he=" +
			encodeURIComponent(window.screen.height) +
			"&cd=" +
			encodeURIComponent(window.screen.colorDepth);
		img.width = 1;
		img.height = 1;
		img.className = "border-none";
		img.alt = "TOPlist";

		if (anchorRef.current) {
			anchorRef.current.appendChild(img);
		}
	}, []);

	return (
		<a href="https://www.toplist.cz" ref={anchorRef}>
			<noscript>
				<img
					src="https://toplist.cz/dot.asp?id=1080441&njs=1"
					className="border-none"
					alt="TOPlist"
					width="1"
					height="1"
				/>
			</noscript>
		</a>
	);
}
