import Image from "next/image";

import Container from "../layout/Container";

type ServicesImageProps = {
	name: string;
	url: string;
};

export default function ServicesImage({ name, url }: ServicesImageProps) {
	return (
		<div
			className="relative -mt-image overflow-hidden pb-12"
			style={{ height: "440px" }}
		>
			<Image
				src={url}
				alt="Ukázka realizace"
				fill={true}
				style={{ objectFit: "cover" }}
			/>
			<Container className="absolute h-full w-full bg-shadow">
				<h1 className="absolute flex h-full flex-col justify-center text-neutral-100">
					{name}
				</h1>
			</Container>
		</div>
	);
}
