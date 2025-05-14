// Enhanced MainMenu.tsx
import { useState, useEffect, useRef } from "react";
import main_menu_data from "@/data/header-menu/main-menu-data";
import Link from "next/link";

const CommonHeaderMainMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const dropdownRefs = useRef<Map<number, HTMLLIElement>>(new Map());

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown !== null) {
        const activeRef = dropdownRefs.current.get(activeDropdown);
        if (activeRef && !activeRef.contains(event.target as Node)) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  const handleDropdownToggle = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <nav className="main-menu">
      <ul className="menu-list">
        {main_menu_data.map((item) => (
          <li
            key={item.id}
            ref={(el) => {
              if (el) dropdownRefs.current.set(item.id, el);
            }}
            className={`menu-item ${item.hasDropdown ? "has-dropdown" : ""} ${
              activeDropdown === item.id ? "dropdown-active" : ""
            }`}
          >
            {item.hasDropdown ? (
              <>
                <div className="menu-link-container">
                  <Link href={item.link} className="menu-link">
                    {item.title}
                  </Link>
                  <button
                    className="dropdown-toggle"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDropdownToggle(item.id);
                    }}
                    aria-expanded={activeDropdown === item.id}
                  >
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      className={activeDropdown === item.id ? "rotate-180" : ""}
                    >
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                  </button>
                </div>
                {item.submenus && item.submenus.length > 0 && (
                  <ul className={`submenu ${activeDropdown === item.id ? "show" : ""}`}>
                    {item.submenus.map((subItem, index) => (
                      <li key={index} className="submenu-item">
                        <Link href={subItem.link} className="submenu-link">
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link href={item.link} className="menu-link">
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CommonHeaderMainMenu;

