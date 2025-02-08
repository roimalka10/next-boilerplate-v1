import { getPages, getPageData } from "../mock";

export const fetchPageBySlug = async (slug) => {
  try {
    const pages = getPages(); // ✅ Get all pages from mock API

    if (!slug || slug === "") {
      // ✅ If slug is empty, return the home page
      return pages.find((p) => p.category_url === "/") || null;
    }

    // ✅ Find the correct page for other URLs
    return pages.find((p) => p.category_url === `/${slug}`) || null;
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
};

export const fetchPageData = async (categoryId) => {
  try {
    const pagesData = getPageData(); // Now it's an array

    // ✅ Find the correct page data by category_id
    return pagesData.find((p) => p.category_id === categoryId) || null;
  } catch (error) {
    console.error("Error fetching page content:", error);
    return null;
  }
};
