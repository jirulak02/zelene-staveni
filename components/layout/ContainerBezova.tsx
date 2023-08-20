import { Children } from "@/app/layout";

export default function ContainerBezova({ children }: Children) {
  return (
    <div className="bg-bezova py-12 md:py-20">
      <div className="m-auto max-w-7xl px-4 lg:px-0">{children}</div>
    </div>
  );
}
