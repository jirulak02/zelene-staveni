import Link from "next/link";

type ButtonProps = {
	children: React.ReactNode;
	href: string;
};

export default function Button({ children, href }: ButtonProps) {
	return (
		<div className="text-center">
			<Link href={href} className="rounded-3xl inline-block">
				<div className="text-base py-3 px-5 rounded-3xl bg-zelena text-neutral-100 hover:bg-neutral-800">
					{children}
				</div>
			</Link>
		</div>
	);
}
