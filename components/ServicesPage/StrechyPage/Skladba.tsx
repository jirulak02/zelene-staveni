import Container from "@/components/layout/Container";
import Image from "next/image";

const array1 = Array(7).fill(0);

export default function Skladba() {
	return (
		<Container className="my-20">
			<h2 className="text-zelena text-center">
				Dokážeme udělat celou skladbu střechy
			</h2>
			<h3 className="text-hneda text-center my-8">
				Ručíme Vám tak za celou střechu
			</h3>
			<div className="grid grid-cols-auto mb-10">
				{array1.map((item) => (
					<Image
						key={Math.random().toString()}
						style={{ width: "150px" }}
						className="items-center m-2"
						alt="TODO"
						width="150"
						height="150"
						src="/square.jpeg"
					/>
				))}
			</div>

			<div className="grid grid-cols-2 items-center">
				<div className="ml-auto -mt-3">
					<h4 className="text-hneda my-8">Skladba zelené střechy</h4>
					<p>✓ Rostliny</p>
					<p>✓ Substrát</p>
					<p>✓ Filtrační vrstva</p>
					<p>✓ Drenážní + hydroakumulační vrstva</p>
					<p>✓ Ochranná vrstva</p>
					<p>✓ Hydroizolace odolná prorůstání</p>
				</div>
				<Image
					style={{ width: "300px" }}
					className="items-center ml-5"
					alt="TODO"
					width="400"
					height="466"
					src="/strechy/skladba.png"
				/>
			</div>
		</Container>
	);
}
