import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agefield High Guide",
  description: "Walkthroughs, missions, classes, maps, endings, and achievement guides for Agefield High: Rock the School.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}