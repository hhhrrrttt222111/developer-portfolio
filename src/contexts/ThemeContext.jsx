import React, { createContext, useState, useCallback, useMemo } from "react";
import { themeData } from "../data/themeData";

export const ThemeContext = createContext({
  theme: themeData.theme,
  drawerOpen: false,
  toggleDrawer: () => {},
});

const ThemeContextProvider = ({ children }) => {
  const [theme] = useState(themeData.theme); // Theme is static here
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle drawer state
  const toggleDrawer = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      theme,
      drawerOpen,
      toggleDrawer,
    }),
    [theme, drawerOpen, toggleDrawer]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
