// I created this file to handle the light and dark themes for my MovieShelf website.

// I added this function to change the website to dark mode.
function enableDarkMode() {
  document.documentElement.classList.add("dark-theme");

  // I saved the dark theme choice so it stays after refreshing the page.
  localStorage.setItem("movieshelf-theme", "dark");
}

// I added this function to change the website back to light mode.
function enableLightMode() {
  document.documentElement.classList.remove("dark-theme");

  // I saved the light theme choice so the website remembers my selection.
  localStorage.setItem("movieshelf-theme", "light");
}

// I added this function to switch between the light and dark themes.
function toggleTheme() {
  const isDark = document.documentElement.classList.contains("dark-theme");

  if (isDark) {
    enableLightMode();
  } else {
    enableDarkMode();
  }
}

// I added this function to check which theme the user selected previously.
function loadTheme() {
  const savedTheme = localStorage.getItem("movieshelf-theme");

  // I used the saved theme to keep the same theme after refreshing the website.
  if (savedTheme === "dark") {
    enableDarkMode();
  } else {
    enableLightMode();
  }
}

// I exported these functions so I can use them in my MovieShelf application.
export { toggleTheme, loadTheme };

// I loaded the saved theme when the website starts.
loadTheme();
