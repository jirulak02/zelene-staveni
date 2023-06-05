import { Children } from "@/app/layout";

export default function ContainerBila({ children }: Children) {
	return (
		<div className="m-auto max-w-7xl px-4 py-12 md:py-20 lg:px-0">
			{children}
		</div>
	);
}
