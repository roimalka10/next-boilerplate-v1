export function getPages() {
  return [
    {
      category_id: 150,
      category_parent: false,
      category_name: "home page",
      category_url: "/",
      show_on_header: true,
    },
    {
      category_id: 200,
      category_parent: 195,
      category_name: "lobby page",
      category_url: "/lobby-page",
      show_on_header: true,
    },
    {
      category_id: 180,
      category_parent: false,
      category_name: "content page",
      category_url: "/content-page",
      show_on_header: true,
    },
  ];
}

export function getPageData() {
  return [
    {
      page_type: "homepage",
      category_id: 150,
      page_main_gallery: ["/vercel.svg"],
      page_main_gallery_mobile: ["/warehouse/2050548"],
      page_main_gallery_headline: "page_main_gallery_headline",
      page_main_gallery_subheadline: "page_main_gallery_subheadline",
      page_main_gallery_title_as_h1: false,
      page_main_gallery_subheadline_as_h2: false,
      page_info: {
        title: "homepage-title",
        subtitle: "homepage-subtitle",
        text: "homepage homepage homepage homepage",
        text2: "text2 text2 text2 text2",
        video: "iframe",
      },
      page_contents: [
        {
          type: "gridboxes",
          title: "homepage grid",
          id: 1,
          "id-custom": 15,
          "is-custom": true,
          status: true,
          content_childrens: [
            {
              type: "gridbox",
              title: "gridbox-title",
              subtitle: "gridbox-subtitle",
              text: "gridbox homepage gridbox homepage",
              id: 4,
              status: true,
            },
            {
              type: "gridbox",
              title: "gridbox-title 2",
              subtitle: "gridbox-subtitle 2",
              text: "gridbox homepage 2 gridbox homepage 2",
              id: 5,
              status: true,
            },
          ],
        },
        {
          type: "gridrows",
          title: "gridrows-title",
          id: 2,
          status: true,
        },
      ],
      page_form: {
        form: 501,
        form_position: "top",
      },
      page_template: {
        hide_sitemap: true,
        no_index: true,
        mark_as_404_page: false,
        mark_as_accessability_page: false,
      },
    },
    {
      page_type: "lobby",
      category_id: 200,
      page_main_gallery: ["/globe.svg"],
      page_main_gallery_mobile: ["/warehouse/2050548"],
      page_main_gallery_headline: "lobby_main_gallery_headline",
      page_main_gallery_subheadline: "lobby_main_gallery_subheadline",
      page_main_gallery_title_as_h1: false,
      page_main_gallery_subheadline_as_h2: false,
      page_info: {
        title: "lobby-title",
        subtitle: "lobby-subtitle",
        text: "lobby lobby lobby lobby",
        text2: "text2 text2 text2 text2",
        video: "iframe",
      },
      page_contents: [
        {
          type: "gridboxes",
          title: "lobby grid",
          id: 1,
          "id-custom": 15,
          "is-custom": true,
          status: true,
          content_childrens: [
            {
              type: "gridbox",
              title: "gridbox-title",
              subtitle: "gridbox-subtitle",
              text: "gridbox lobby gridbox lobby",
              id: 4,
              status: true,
            },
            {
              type: "gridbox",
              title: "gridbox-title 2",
              subtitle: "gridbox-subtitle 2",
              text: "gridbox lobby 2 gridbox lobby 2",
              id: 5,
              status: true,
            },
          ],
        },
        {
          type: "gridrows",
          title: "gridrows-title",
          id: 2,
          status: true,
        },
      ],
      page_form: {
        form: 501,
        form_position: "top",
      },
      page_template: {
        hide_sitemap: true,
        no_index: true,
        mark_as_404_page: false,
        mark_as_accessability_page: false,
      },
    },
    {
      page_type: "content",
      category_id: 180,
      page_main_gallery: ["/window.svg"],
      page_main_gallery_mobile: ["/warehouse/2050548"],
      page_main_gallery_headline: "content_main_gallery_headline",
      page_main_gallery_subheadline: "content_main_gallery_subheadline",
      page_main_gallery_title_as_h1: true,
      page_main_gallery_subheadline_as_h2: true,
      page_info: {
        title: "content-title",
        subtitle: "content-subtitle",
        text: "content content content content",
        text2: "text2 text2 text2 text2",
        video: "iframe",
      },
      page_contents: [
        {
          type: "gridboxes",
          title: "content section",
          id: 1,
          "id-custom": 15,
          "is-custom": true,
          status: true,
          content_childrens: [
            {
              type: "gridbox",
              title: "gridbox-title",
              subtitle: "gridbox-subtitle",
              text: "gridbox content gridbox content",
              id: 4,
              status: true,
            },
            {
              type: "gridbox",
              title: "gridbox-title 2",
              subtitle: "gridbox-subtitle 2",
              text: "gridbox content 2 gridbox content 2",
              id: 5,
              status: true,
            },
          ],
        },
        {
          type: "gridrows",
          title: "gridrows-title",
          id: 2,
          status: true,
        },
      ],
      page_form: {
        form: 501,
        form_position: "top",
      },
      page_template: {
        hide_sitemap: true,
        no_index: true,
        mark_as_404_page: false,
        mark_as_accessability_page: false,
      },
    },
  ];
}
