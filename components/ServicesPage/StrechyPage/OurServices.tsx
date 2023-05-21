"use client";

import { useState } from "react";

import Container from "@/components/layout/Container";
import { messages } from "@/components/data/SluzbyStrechy";

export default function OurServices() {
	const [message, setMessage] = useState(messages[0].name);
	const [clicked, setClicked] = useState("Nezávazná konzultace");

	function messageHandler(event: React.MouseEvent<HTMLButtonElement>) {
		const target = event.target as HTMLInputElement;
		const newMessage = target.name;
		const innerHTML = target.innerHTML;

		setClicked(innerHTML);
		setMessage(newMessage);
	}

	return (
		<Container className="bg-bezova py-20">
			<div className="text-center items-center flex flex-col space-y-6">
				<h2 className="text-zelena">Naše služby</h2>
				<div className="w-full">
					<div>
						{messages.map((button) => (
							<button
								key={button.title}
								name={button.name}
								onClick={messageHandler}
								className={`text-hneda px-3 py-2 font-semibold hover:text-neutral-800 ${
									clicked === button.title
										? "text-neutral-800 bg-neutral-100 border-2 border-b-0 border-zelena"
										: ""
								}`}
							>
								{button.title}
							</button>
						))}
					</div>
					<div className="w-full -mt-0.5 bg-neutral-100 py-4 px-6 border-2 border-zelena text-left">
						{message}
					</div>
				</div>
				<p className="max-w-xl">
					Pošlete nám výkres střechy, lokalitu a Vaši představu.
					Obratem Vám vypracujeme nabídku. Věříme, že spolu dojdeme k
					řešení, které Vás uspokojí nejen esteticky, ale i finančně.
				</p>
				<p>
					Dodržujeme{" "}
					<a
						href="#"
						className="text-zelena border-b border-bezova hover:border-zelena"
					>
						standardy Zelených střech
					</a>
					.
				</p>
			</div>
		</Container>
	);
}
