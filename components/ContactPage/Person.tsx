import Image from "next/image";

type PersonDetail = {
  title: string;
  phone: string;
  email: string;
  name: string;
  img: string;
};

export default function Person({ title, phone, email, name, img }: PersonDetail) {
  const removeSpaces = (str: string) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        result += str[i];
      }
    }
    return result;
  };
  return (
    <div className="grid grid-cols-1 gap-3 text-center">
      <div>
        <p>{title}</p>
        <p>
          Tel:{" "}
          <a
            className="border-b border-neutral-100 hover:border-neutral-800"
            href={`tel:${removeSpaces(phone)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {phone}
          </a>
        </p>
        <p>
          Email:{" "}
          <a
            className="border-b border-neutral-100 hover:border-neutral-800"
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {email}
          </a>
        </p>
      </div>
      <Image
        className="row-start-1 m-auto mt-4 items-center rounded-full lg:row-start-auto"
        alt={name}
        width={250}
        height={250}
        quality={100}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
        src={img}
      />
    </div>
  );
}
