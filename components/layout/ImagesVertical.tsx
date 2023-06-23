"use client";

import Image from "next/image";
import { useState } from "react";

import { ImageProps, ImagesProps, startItem } from "./Images";
import ModalVertical from "../ui/ModalVertical";

export default function ImagesVertical({ data }: ImagesProps) {
	const [openModal, setOpenModel] = useState(false);
	const [itemState, setItemState] = useState(startItem);

	function modalHandler(item: ImageProps) {
		setItemState(item);
		setOpenModel(true);
	}

	function closeModal() {
		setOpenModel(false);
	}

	return (
		<div className="grid grid-cols-2 gap-2 sm:grid-cols-auto">
			{data.map((item) => (
				<Image
					key={item.id}
					className="m-auto w-[200px] cursor-pointer sm:m-0"
					alt={item.alt}
					width="400"
					height="532"
					placeholder="blur"
					blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
					src={item.url}
					onClick={() => {
						modalHandler(item);
					}}
				/>
			))}
			{openModal && <ModalVertical item={itemState} close={closeModal} />}
		</div>
	);
}
