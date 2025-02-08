import { fetchPageBySlug, fetchPageData } from "../../_lib/api";
import LobbyPage from "../../_components/templates/LobbyPage";

export default async function DynamicPage({ params }) {
  const slug = (await params)?.slug || "";

  // ✅ Find the correct page from the API
  const page = await fetchPageBySlug(slug);

  // ✅ Fetch the page content
  const pageData = page ? await fetchPageData(page.category_id) : null;

  if (!page || !pageData) {
    return <div>Page not found.</div>;
  }

  // ✅ Render the correct page template
  switch (pageData.page_type) {
    case "lobby":
      return <LobbyPage pageData={pageData} />;
    case "content":
      return <LobbyPage pageData={pageData} />;
    default:
      return <div>Page type not supported.</div>;
  }
}
