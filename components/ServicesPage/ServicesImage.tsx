import Image from "next/image";

import Container from "../layout/Container";

type ServicesImageProps = {
	name: string;
	url: string;
};

export default function ServicesImage({ name, url }: ServicesImageProps) {
	return (
		<div className="relative -mt-image h-[280px] overflow-hidden pb-12 md:h-[440px]">
			<Image
				src={url}
				alt="Ukázka realizace"
				fill={true}
				priority
				className="object-cover"
			/>
			<Container className="absolute h-full w-full bg-shadow">
				<h1 className="absolute flex h-full w-full flex-col justify-center px-3 text-center text-neutral-100 md:text-left">
					{name}
				</h1>
			</Container>
		</div>
	);
}
