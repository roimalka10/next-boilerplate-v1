import "../styles/globals.css";
import Header from "../_components/grids/Header";
import Footer from "../_components/grids/Footer";
import { getPages } from "../mock";

export default async function RootLayout({ children }) {
  const pages = getPages();

  return (
    <html lang="en">
      <head />
      <body>
        <Header pages={pages} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
