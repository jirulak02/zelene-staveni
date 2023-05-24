import Link from "next/link";

type ButtonProps = {
	children: React.ReactNode;
	href: string;
};

export default function Button({ children, href }: ButtonProps) {
	return (
		<div className="text-center">
			<Link href={href} className="inline-block rounded-3xl">
				<div className="rounded-3xl bg-zelena px-5 py-3 text-base text-neutral-100 hover:bg-neutral-800">
					{children}
				</div>
			</Link>
		</div>
	);
}
