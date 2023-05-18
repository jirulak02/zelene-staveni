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
						src="https://uploadthing.com/f/776ef8ba-414f-4783-abb9-dd9ecce37322_communicate.png"
					/>
					<h5>KONZULTACE ZDARMA</h5>
				</div>
				<div className="flex flex-col items-center justify-center space-y-8 my-10">
					<Image
						style={{ width: "50px" }}
						alt="TODO"
						width="100"
						height="100"
						src="https://uploadthing.com/f/8b8ac783-5332-40bc-8707-8f157dabc550_analytics.png"
					/>
					<h5>CENOVÁ NABÍDKA ZDARMA</h5>
				</div>
				<div className="flex flex-col items-center justify-center space-y-8 my-10">
					<Image
						style={{ width: "50px" }}
						alt="TODO"
						width="100"
						height="100"
						src="https://uploadthing.com/f/68254e67-bcf7-4ca2-9739-6e6e6cf04f47_documentation.png"
					/>
					<h5>PROJEKTOVÁ DOKUMENTACE</h5>
				</div>
				<div className="flex flex-col items-center justify-center space-y-8 my-10">
					<Image
						style={{ width: "50px" }}
						alt="TODO"
						width="100"
						height="100"
						src="https://uploadthing.com/f/fc78c28b-e3d1-4162-9301-34a11897d8d6_work.png"
					/>
					<h5>KOMPLETNÍ REALIZACE</h5>
				</div>
			</div>
		</Container>
	);
}
