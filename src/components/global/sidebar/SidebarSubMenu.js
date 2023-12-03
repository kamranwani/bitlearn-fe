import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  IoChevronDownOutline,
  IoChevronForwardOutline,
  IoRemoveSharp,
} from "react-icons/io5";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { FaChevronRight } from "react-icons/fa";

const SidebarSubMenu = ({ route }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  // console.log('route',route)

  const history = useHistory();

  const handleSubMenu = () => {
    setOpen(!open);
    history.push(route.path);
  };

  return (
    <>
      <li className="relative px-6 py-3" key={route.name}>
        <button
          className="inline-flex items-center justify-between focus:outline-none w-full text-sm font-semibold transition-colors duration-150 hover:text-green-600 dark:hover:text-gray-200"
          onClick={handleSubMenu}
          aria-haspopup="true"
        >
          <span className="flex justify-between w-full items-center ">
            {/* <route.icon className="w-5 h-5" aria-hidden="true" /> */}
            <span className="">{t(`${route.name}`)}</span>
            <span className="">
              {open ? <IoChevronDownOutline /> : <IoChevronForwardOutline />}
            </span>
          </span>
          {/* <DropdownIcon className="w-4 h-4" aria-hidden="true" /> */}
        </button>
        {open && (
          <ul
            className="p-2  overflow-hidden text-sm font-medium text-gray-500 rounded-md dark:text-gray-400 dark:bg-transparent"
            aria-label="submenu"
          >
            {route.routes.map((child, i) => (
              <li key={i + 1}>
                <NavLink
                  to={child.path}
                  // target={`${child.name === 'Sell' ? '_blank' : '_self'}`}
                  className="flex items-center font-serif py-1 text-sm text-gryay-600 hover:text-green-600 cursor-pointer"
                  activeClassName="text-green-500 dark:text-gray-100"
                >
                  <Route path={child.path} exact={route.exact}>
                    <span
                      className="absolute inset-y-0 left-0 w-1 bg-green-600 rounded-tr-lg rounded-br-lg"
                      aria-hidden="true"
                    ></span>
                  </Route>

                  <div className="text-gray-500 hover:text-green-600 dark:hover:text-gray-200 flex items-center justify-between my-2 w-full">
                    <div className="mr-2 flex items-center">
                      {child.icon}
                      <span className="ml-3">{t(`${child.name}`)}</span>
                    </div>
                    <FaChevronRight />
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </li>
    </>
  );
};

export default SidebarSubMenu;
