import Image from "next/image";

import Container from "../layout/Container";

type ServicesImageProps = {
	name: string;
};

export default function ServicesImage({ name }: ServicesImageProps) {
	return (
		<div className="pb-12 -mt-image relative" style={{ height: "440px" }}>
			<Image
				style={{ height: "440px" }}
				alt="TODO"
				width="2000"
				height="700"
				src="/main.jpeg"
			/>
			<Container>
				<h1 className="absolute flex flex-col top-0 h-full justify-center text-neutral-100">
					{name}
				</h1>
			</Container>
		</div>
	);
}
