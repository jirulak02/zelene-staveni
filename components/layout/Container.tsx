type ContainerProps = {
	children: React.ReactNode;
	className?: string;
};

export default function Container({ children, className }: ContainerProps) {
	return (
		<div className={className}>
			<div className="max-w-7xl m-auto px-3 lg:px-0">{children}</div>
		</div>
	);
}
