import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

const redHatText = Red_Hat_Text({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap", // Helps with performance/display
});

export const metadata = {
  title: "Product List with Cart",
  description: "A dessert product list with cart functionality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={redHatText.className}>{children}</body>
    </html>
  );
}
