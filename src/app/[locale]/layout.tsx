import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const baseURL = "https://traumaundnervensystem.org";
  const localePath = params.locale === "en" ? "/en" : "/de";

  return {
    metadataBase: new URL(baseURL),
    title: "Das Forum",
    description:
      params.locale === "en"
        ? "Where Trauma Awareness Meets Societal Change"
        : "Wo Traumabewusstsein auf gesellschaftlichen Wandel trifft",
    openGraph: {
      type: "website",
      url: `${baseURL}${localePath}`,
      locale: params.locale === "en" ? "en_US" : "de_DE",
      title: "Das Forum",
      description:
        params.locale === "en"
          ? "Where Trauma Awareness Meets Societal Change"
          : "Wo Traumabewusstsein auf gesellschaftlichen Wandel trifft",
      images: [
        {
          url: `${baseURL}/thumb.png`,
          width: 1200,
          height: 630,
          alt:
            params.locale === "en"
              ? "Das Forum thumbnail"
              : "Das Forum thumbnail - DE",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Das Forum",
      description:
        params.locale === "en"
          ? "Where Trauma Awareness Meets Societal Change"
          : "Wo Traumabewusstsein auf gesellschaftlichen Wandel trifft",
      images: [`${baseURL}/thumb.png`],
    },
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params.locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
