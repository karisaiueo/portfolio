import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--f-display",
});
const body = DM_Sans({ subsets: ["latin"], variable: "--f-body" });

export const metadata = {
  title: "Karchive | Web Develop & UI/UX Design",
  description:
    "I’m passionate about creating websites, exploring UI/UX design, and turning ideas into meaningful digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
