import Image from "next/image";

type ImageProps = {
	data: {
		id: string;
		name?: string;
		url: string;
	}[];
};

export default function Images({ data }: ImageProps) {
	return (
		<div className="grid grid-cols-2 gap-2 sm:grid-cols-auto">
			{data.map((item) => (
				<Image
					key={item.id}
					className="m-auto w-[200px] sm:m-0"
					alt={`Ukázka realizace v lokalitě ${item.name}`}
					width="400"
					height="300"
					src={item.url}
				/>
			))}
		</div>
	);
}
