"use client";

type ButtonProps = {
	children: React.ReactNode;
	id: string;
};

export default function ScrollButton({ children, id }: ButtonProps) {
	return (
		<div className="text-center">
			<div className="inline-block cursor-pointer rounded-3xl">
				<div
					onClick={() =>
						document.getElementById(id)?.scrollIntoView({
							behavior: "smooth",
						})
					}
					className="rounded-3xl bg-zelena px-5 py-3 text-base text-neutral-100 hover:bg-neutral-800"
				>
					{children}
				</div>
			</div>
		</div>
	);
}
