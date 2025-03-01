import { Children } from "@/app/[locale]/layout";

export default function ContainerBila({ children }: Children) {
  return <div className="m-auto max-w-7xl px-4 py-12 md:py-20 xl:px-0">{children}</div>;
}
