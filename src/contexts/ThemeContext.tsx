import { createContext, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

interface PropTypes {
  children: React.ReactNode;
}
interface ContextTypes {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}
export const ThemeContext = createContext<ContextTypes>({
  isDarkMode: false,
  setIsDarkMode: () => {}
});

export default function ThemeProvider({ children }: PropTypes) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>{children}</ThemeContext.Provider>
  );
}
