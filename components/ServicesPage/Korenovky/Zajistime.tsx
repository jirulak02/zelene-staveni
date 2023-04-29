import Container from "@/components/layout/Container";
import Image from "next/image";

export default function Zajistime() {
	return (
		<Container className="bg-bezova py-20">
			<h3 className="text-center text-hneda">
				CO VŠECHNO PRO VÁS ZAJISTÍME
			</h3>
			<div className="grid grid-cols-4">
				<div className="flex flex-col items-center justify-center space-y-8 my-10">
					<Image
						style={{ width: "50px" }}
						alt="TODO"
						width="100"
						height="100"
						src="/icons/communicate.png"
					/>
					<h5>KONZULTACE ZDARMA</h5>
				</div>
				<div className="flex flex-col items-center justify-center space-y-8 my-10">
					<Image
						style={{ width: "50px" }}
						alt="TODO"
						width="100"
						height="100"
						src="/icons/analytics.png"
					/>
					<h5>CENOVÁ NABÍDKA ZDARMA</h5>
				</div>
				<div className="flex flex-col items-center justify-center space-y-8 my-10">
					<Image
						style={{ width: "50px" }}
						alt="TODO"
						width="100"
						height="100"
						src="/icons/documentation.png"
					/>
					<h5>PROJEKTOVÁ DOKUMENTACE</h5>
				</div>
				<div className="flex flex-col items-center justify-center space-y-8 my-10">
					<Image
						style={{ width: "50px" }}
						alt="TODO"
						width="100"
						height="100"
						src="/icons/work.png"
					/>
					<h5>KOMPLETNÍ REALIZACE</h5>
				</div>
			</div>
		</Container>
	);
}
