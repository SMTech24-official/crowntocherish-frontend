import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container by default
        padding: "2rem", // Adds padding around the container
        screens: {
          sm: "100%", // Customize container width on small screens
          md: "100%", // Customize container width on medium screens
          lg: "1024px", // Set custom width for large screens
          xl: "1480px", // Set custom width for extra-large screens
        },
      },
      colors: {
        text_title: "#DB2777",
        text_default: "#000000",
        button_bg: "#DB2777",
        button_hover_bg: "#BE185D",
        secondary: "#ffe88c",
        // section_bg: "#FFE4E6",
        section_bg: "#0000000",
        nav_bg: "#e0adb5",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to top right, #FFE4E6, #FECDD3, #FFE4E6)",
        // 'custom-gradient': 'linear-gradient(to bottom left, #FFE4E6, #FECDD3, #FFE4E6)',
        // 'custom-gradient': 'linear-gradient(to bottom right, #FFE4E6, #FECDD3)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate"),
	function ({ addComponents }: PluginAPI) {
		addComponents({

		  ".section-gap": {
			  paddingTop: "2rem",  // Default padding for all screen sizes
			  paddingBottom: "2rem", // Default padding for all screen sizes
	
			  // For small screens (sm)
			  "@screen sm": {
				paddingTop: "4rem", // Adjust padding for small screens
				paddingBottom: "4rem",
			  },
	
			  // For medium screens (md)
			  "@screen md": {
				paddingTop: "6rem", // Adjust padding for medium screens
				paddingBottom: "6rem",
			  },
	
			  // For large screens (lg)
			  "@screen lg": {
				paddingTop: "8rem", // Adjust padding for large screens
				paddingBottom: "8rem",
			  },
	
			  // For extra-large screens (xl)
			  "@screen xl": {
				paddingTop: "10rem", // Adjust padding for extra-large screens
				paddingBottom: "10rem",
			  },
			},
		});
	  },
  ],
};
export default config;
