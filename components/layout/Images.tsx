"use client";

import Image from "next/image";
import { useState } from "react";

import Modal from "../ui/Modal";

export type ImagesProps = {
  data: ImageProps[];
  width: number;
  height: number;
};

export type ImageProps = {
  id: string;
  name?: string;
  alt: string;
  url: string;
};

export const startItem: ImageProps = {
  id: "",
  name: "",
  alt: "",
  url: "",
};

export default function Images({ data, width, height }: ImagesProps) {
  const [openModal, setOpenModel] = useState(false);
  const [itemState, setItemState] = useState(startItem);

  const modalHandler = (item: ImageProps) => {
    setItemState(item);
    setOpenModel(true);
  };

  const closeModal = () => {
    setOpenModel(false);
  };

  const getNewItem = (side: string, item: ImageProps) => {
    let index = data.indexOf(item);
    if (side === "left") {
      if (index === 0) {
        setItemState(data[data.length - 1]);
      } else {
        setItemState(data[index - 1]);
      }
    }
    if (side === "right") {
      if (index === data.length - 1) {
        setItemState(data[0]);
      } else {
        setItemState(data[index + 1]);
      }
    }
  };

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-auto">
      {data.map((item) => (
        <Image
          key={item.id}
          className="m-auto cursor-pointer sm:m-0"
          alt={item.alt}
          width={width}
          height={height}
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
          src={item.url}
          onClick={() => {
            modalHandler(item);
          }}
        />
      ))}
      {openModal && height == 150 && (
        <Modal
          item={itemState}
          close={closeModal}
          getNewItem={getNewItem}
          width={800}
          height={600}
        />
      )}
      {openModal && height == 250 && (
        <Modal
          item={itemState}
          close={closeModal}
          getNewItem={getNewItem}
          width={400}
          height={500}
        />
      )}
      {openModal && height == 140 && (
        <Modal
          item={itemState}
          close={closeModal}
          getNewItem={getNewItem}
          width={800}
          height={560}
        />
      )}
    </div>
  );
}
