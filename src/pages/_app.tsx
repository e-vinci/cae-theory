import type { AppProps } from "next/app";
import "./code-block.css";
import "prism-themes/themes/prism-vsc-dark-plus.css"; // Import Prism CSS

/**
 * Temporary component to deal with global styles
 * @param 
 * @returns 
 */
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
