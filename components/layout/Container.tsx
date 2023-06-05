type ContainerProps = {
	children: React.ReactNode;
	className?: string;
};

export default function Container({ children, className }: ContainerProps) {
	return (
		<div className={className}>
			<div className="m-auto max-w-7xl px-4 lg:px-0">{children}</div>
		</div>
	);
}
