import Image from "next/image";
import { ImageProps } from "../layout/Images";

type ModalProps = {
	item: ImageProps;
	close: () => void;
	width: number;
	height: number;
};

export default function Modal({ item, close, width, height }: ModalProps) {
	return (
		<div className="fixed left-0 top-0 z-50 flex h-full w-full">
			<div
				className="absolute h-full w-full cursor-pointer bg-neutral-800/80"
				onClick={() => {
					close();
				}}
			/>
			<div className="relative m-auto flex max-h-screen flex-col justify-center rounded-sm bg-neutral-100 p-10 md:p-16">
				<button
					className="absolute right-0 top-0 p-2 md:p-5"
					onClick={() => {
						close();
					}}
				>
					<div className="h-6 w-6 bg-close" />
				</button>
				<Image
					className="z-20 max-h-[calc(100vh-2.5rem)] w-auto"
					alt={item.alt}
					width={width} //800
					height={height} //600
					quality={100}
					src={item.url}
				/>
				<div className="loader absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2" />
				<h3 className="absolute bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-center md:bottom-3.5">
					{item.name}
				</h3>
			</div>
		</div>
	);
}
