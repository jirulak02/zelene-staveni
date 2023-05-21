import Image from "next/image";

import Container from "../layout/Container";

type ServicesImageProps = {
	name: string;
	url: string;
};

export default function ServicesImage({ name, url }: ServicesImageProps) {
	return (
		<div
			className="pb-12 -mt-image relative overflow-hidden"
			style={{ height: "440px" }}
		>
			<Image
				src={url}
				alt="Ukázka realizace"
				fill={true}
				style={{ objectFit: "cover" }}
			/>
			<Container className="absolute w-full h-full bg-shadow">
				<h1 className="absolute flex flex-col h-full justify-center text-neutral-100">
					{name}
				</h1>
			</Container>
		</div>
	);
}
