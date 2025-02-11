import { fetchPageBySlug, fetchPageData } from "../../_lib/api";
import LobbyPage from "../../_components/templates/LobbyPage";

export default async function DynamicPage({ params }) {
  const slug = (await params)?.slug || "";

  const page = await fetchPageBySlug(slug);

  const pageData = page ? await fetchPageData(page.category_id) : null;

  if (!page || !pageData) {
    return <div>Page not found.</div>;
  }

  switch (pageData.page_type) {
    case "lobby":
      return <LobbyPage className={page?.category_class} pageData={pageData} />;
    case "content":
      return <LobbyPage className={page?.category_class} pageData={pageData} />;
    default:
      return <div>Page type not supported.</div>;
  }
}
