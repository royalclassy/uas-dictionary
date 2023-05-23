export const getFont = () => {
  return localStorage.getItem("font");
};

export const getTheme = () => {
  if (localStorage.getItem("theme") === "dark") {
    return true;
  }
  return false;
};
