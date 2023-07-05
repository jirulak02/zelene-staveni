import Image from "next/image";

import Button from "../ui/Button";

type ServiceInfoDetail = {
	alt: string;
	img: string;
	heading: string;
	text: string;
	href: string;
};

export default function ServiceInfo({
	alt,
	img,
	heading,
	text,
	href,
}: ServiceInfoDetail) {
	return (
		<>
			<Image
				alt={alt}
				width={50}
				height={50}
				quality={100}
				placeholder="blur"
				blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
				src={img}
			/>
			<h2 className="text-hneda">{heading}</h2>
			<p>{text}</p>
			<Button href={href}>ZJISTIT VÍCE</Button>
		</>
	);
}
