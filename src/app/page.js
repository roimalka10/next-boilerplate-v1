import { fetchPageBySlug, fetchPageData } from "../_lib/api";
import HomePage from "../_components/templates/HomePage";

export default async function Home() {
    const page = await fetchPageBySlug("");

    const pageData = page ? await fetchPageData(page.category_id) : null;

    if (!page || !pageData) {
        return <div>Page not found.</div>;
    }

    switch (pageData.page_type) {
        case "homepage":
            return <HomePage pageData={pageData} />;
        default:
            return <div>Page type not supported.</div>;
    }
}
