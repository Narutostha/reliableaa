import Link from "next/link";
import main_menu_data from "@/data/header-menu/main-menu-data";

const CommonHeaderMainMenu = () => {
  return (
    <nav className="main-menu">
      <ul className="menu-list">
        {main_menu_data.map((item) => (
          <li
            key={item.id}
            className={`menu-item ${item.hasDropdown ? "has-dropdown" : ""}`}
          >
            <Link href={item.link} className="menu-link">
              {item.title}
            </Link>

            {item.hasDropdown && item.submenus && item.submenus.length > 0 && (
              <ul className="submenu">
                {item.submenus.map((subItem, index) => (
                  <li key={index} className="submenu-item">
                    <Link href={subItem.link} className="submenu-link">
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CommonHeaderMainMenu;
    