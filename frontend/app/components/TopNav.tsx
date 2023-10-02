import { Link } from "@remix-run/react";

interface User {
  id: number;
  username: string;
  email: string;
}

const menu = [
  { text: "home", url: "/" },
  { text: "login", url: "/login" },
  { text: "register", url: "/register" },
  { text: "dashboard", url: "/dashboard" },
];

function filterMenu(
  menu: { text: string; url: string }[],
  userExists: boolean
) {
  if (userExists) {
    return menu.filter(
      (item) => item.text !== "login" && item.text !== "register"
    );
  }
  return menu;
}

export const TopNav: React.FC<{data: User | null}> = ({ data }) => {
  const userExists = data ? true : false;
  const filteredMenu = filterMenu(menu, userExists);
  return (
    <nav className="bg-blue-500 p-4 rounded-md">
      <ul className="flex space-x-4">
        {filteredMenu.map((item, index) => (
          <li key={index}>
            <Link to={item.url} className="text-white hover:text-blue-300">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNav;
