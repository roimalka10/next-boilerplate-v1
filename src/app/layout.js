import "../styles/globals.css";
import Header from "../_components/grids/layoutGrids/Header";
import Footer from "../_components/grids/layoutGrids/Footer";
import { fetchPages } from "../_lib/api";

export default async function RootLayout({ children }) {
    const pages = await fetchPages();

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
