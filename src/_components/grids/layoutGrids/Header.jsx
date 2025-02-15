"use client";

import React, { use } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = ({ pagesPromise }) => {
  const pathname = usePathname();
  const pages = use(pagesPromise);

  return (
    <header className="header">
      <nav>
        <ul className="header-menu">
          {pages
            .filter((page) => page.show_on_header)
            .map((page) => {
              return (
                <li
                  className={`${pathname === page.category_url ? "active" : ""}`}
                  key={page.category_id}
                >
                  <Link href={page.category_url}>{page.category_name}</Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
