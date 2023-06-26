import Image from "next/image";

import { ImageProps } from "../layout/Images";

type ModalProps = {
	item: ImageProps;
	close: () => void;
	getNewItem: (side: string, item: ImageProps) => void;
	width: number;
	height: number;
};

export default function Modal({
	item,
	close,
	getNewItem,
	width,
	height,
}: ModalProps) {
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
					className="z-20 max-h-[calc(100vh-2.5rem)] min-h-[150px] w-auto"
					alt={item.alt}
					width={width}
					height={height}
					quality={100}
					src={item.url}
				/>
				<div className="loader absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2" />
				<h3 className="absolute bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-center md:bottom-3.5">
					{item.name}
				</h3>
				<button
					className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full hover:bg-neutral-200 active:bg-neutral-800 md:left-1 md:p-2"
					onClick={() => getNewItem("left", item)}
					aria-label="Předchozí fotka"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="40"
						viewBox="0 -960 960 960"
						width="40"
					>
						<path d="M650-80 250-480l400-400 61 61.666L372.666-480 711-141.666 650-80Z" />
					</svg>
				</button>
				<button
					className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full hover:bg-neutral-200 active:bg-neutral-800 md:right-1 md:p-2"
					onClick={() => getNewItem("right", item)}
					aria-label="Další fotka"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="40"
						viewBox="0 -960 960 960"
						width="40"
					>
						<path d="M309.666-81.333 248.667-143 587-481.333 248.667-819.667l60.999-61.666 400 400-400 400Z" />
					</svg>
				</button>
			</div>
		</div>
	);
}
