import Image from "next/image";

import Button from "../ui/Button";

type InfoCardDetail = {
  className?: string;
  alt: string;
  img: string;
  heading: string;
  text: string;
  href: string;
};

export default function InfoCard({ className, alt, img, heading, text, href }: InfoCardDetail) {
  return (
    <div
      className={`flex flex-col items-center space-y-2 bg-neutral-100 px-6 py-4 text-center sm:space-y-3 lg:my-10 lg:px-10 ${className}`}
    >
      <Image
        alt={alt}
        width={50}
        height={50}
        quality={100}
        priority
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
        src={img}
      />
      <h3 className="text-hneda">{heading}</h3>
      <p>{text}</p>
      <Button href={href}>ZJISTIT VÍCE</Button>
    </div>
  );
}
