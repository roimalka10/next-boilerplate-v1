export const fetchPages = async () => {
  try {
    const response = await fetch(`http://localhost:5000/pages`, { cache: "force-cache" });
    const pages = await response.json();
    return pages;
  } catch (error) {
    console.error("Error fetching pages:", error);
    return null;
  }
};

export const fetchPageBySlug = async (slug) => {
  try {
    const response = await fetch(`http://localhost:5000/pages`, { cache: "force-cache" });
    const page = await response.json();

    if (!slug || slug === "") {
      return page.find((p) => p.category_url === "/") || null;
    }

    return page.find((p) => p.category_url === `/${slug}`) || null;
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
};

export const fetchPageData = async (categoryId) => {
  try {
    const response = await fetch(`http://localhost:5000/pages/${categoryId}`, {
      cache: "force-cache",
    });
    const pagesData = await response.json();
    return pagesData;
  } catch (error) {
    console.error("Error fetching page content:", error);
    return null;
  }
};
