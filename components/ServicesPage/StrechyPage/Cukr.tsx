import Image from "next/image";

import Container from "@/components/layout/Container";

export default function Cukr() {
	return (
		<Container className="my-20">
			<h3 className="text-hneda text-center my-5">
				"Nejsme z cukru. Děláme tak, jak je potřeba."
			</h3>
			<div className="grid grid-cols-3">
				<div className="flex flex-col text-center items-center space-y-3">
					<Image
						style={{ width: "400px" }}
						className="m-2"
						alt="TODO"
						width="800"
						height="500"
						src="/strechy/snih.jpg"
					/>
					<h4 className="text-zelena">V ZIMĚ</h4>
				</div>
				<div className="flex flex-col text-center items-center space-y-3">
					<Image
						style={{ width: "400px" }}
						className="m-2"
						alt="TODO"
						width="800"
						height="500"
						src="/strechy/tma.jpg"
					/>
					<h4 className="text-zelena">V NOCI</h4>
				</div>
				<div className="flex flex-col text-center items-center space-y-3">
					<Image
						style={{ width: "400px" }}
						className="m-2"
						alt="TODO"
						width="800"
						height="500"
						src="/strechy/dest.jpg"
					/>
					<h4 className="text-zelena">V DEŠTI</h4>
				</div>
			</div>
		</Container>
	);
}
