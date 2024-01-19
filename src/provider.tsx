// provider.js
import { createContext, useContext, useState, ReactNode } from "react";

type ThemeContextProps = {
  theme: string;
  toggleTheme: () => void;
  colors: {
    light: {
      backgroundColor: string;
      textColor: string;
      titleColor: string;
    };
    dark: {
      backgroundColor: string;
      textColor: string;
      titleColor: string;
    };
    // Add an index signature to allow indexing with a string
    [key: string]: {
      backgroundColor: string;
      textColor: string;
      titleColor: string;
    };
  };
};


const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const colors = {
    light: {
      backgroundColor: "#f8f8f8",
      textColor: "#292726",
      titleColor: "#007bff",
    },
    dark: {
      backgroundColor: "#292726",
      textColor: "#f8f8f8",
      titleColor: "#ffffff",
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
