import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
};

export default function Button({ children, href }: ButtonProps) {
  return (
    <div className="text-center">
      <Link href={href} className="inline-block scroll-smooth rounded-3xl">
        <div className="rounded-3xl bg-zelena px-4 py-2 text-neutral-100 hover:bg-neutral-800 md:px-5 md:py-3">
          {children}
        </div>
      </Link>
    </div>
  );
}
