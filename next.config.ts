import type { NextConfig } from "next";
import { withAxiom } from "next-axiom";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    reactCompiler: true,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withAxiom(withNextIntl(nextConfig));
