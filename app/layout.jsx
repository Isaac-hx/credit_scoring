import { Poppins } from "next/font/google";import "./globals.css";

const poppins = Poppins({weight:'200',subsets:['latin']})
export const metadata = {
  title: "Credit Scoring",
  description: "Form Credit Scoring Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-slate-100`}>
        {children}
      </body>
    </html>
  );
}
