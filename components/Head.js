import NextHead from "next/head";
import { GoogleFonts } from "next-google-fonts";

export const Head = ({ children, title }) => (
  <>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&family=Roboto:wght@400;700&display=swap" />
    <NextHead>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>

      {children}
    </NextHead>
  </>
);