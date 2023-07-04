import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage("color-theme", "light");

  useEffect(() => {
    const className = "dark";
    const htmlElement = document.documentElement;

    colorMode === "dark"
      ? htmlElement.classList.add(className)
      : htmlElement.classList.remove(className);
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;