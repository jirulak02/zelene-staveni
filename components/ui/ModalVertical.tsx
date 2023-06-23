import Image from "next/image";
import { ImageProps } from "../layout/Images";

type ModalProps = {
	item: ImageProps;
	close: () => void;
};

export default function ModalVertical({ item, close }: ModalProps) {
	return (
		<div className="fixed left-0 top-0 z-50 flex h-full w-full">
			<div
				className="absolute h-full w-full cursor-pointer bg-neutral-800/80"
				onClick={() => {
					close();
				}}
			/>
			<div className="relative m-auto flex flex-col justify-center rounded-sm bg-neutral-100 p-6 sm:p-10 md:p-16">
				<button
					className="absolute right-0 top-0 sm:p-2 md:p-5"
					onClick={() => {
						close();
					}}
				>
					<div className="h-6 w-6 bg-close" />
				</button>
				<Image
					className="w-[400px]"
					alt={item.alt}
					width="800"
					height="1064"
					placeholder="blur"
					blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
					src={item.url}
				/>
				<h3 className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-center sm:bottom-1 md:bottom-3.5">
					{item.name}
				</h3>
			</div>
		</div>
	);
}
