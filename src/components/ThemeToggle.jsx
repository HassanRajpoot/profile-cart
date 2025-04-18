import { useDispatch, useSelector } from "react-redux";
import { setIsDarkMode } from "../redux/slices/themeSlice";
import { IoToggle } from "react-icons/io5";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };
  return (
    <button
      onClick={toggleDarkMode}
      className={`rounded flex items-center gap-2 px-3 py-2  text-white bg-gray-800 dark:bg-gray-200 dark:text-black transition-colors duration-300`}
    >
      <IoToggle className="text-xl" />
      {isDarkMode ? "Dark" : "Light"} Mode
    </button>
  );
}
