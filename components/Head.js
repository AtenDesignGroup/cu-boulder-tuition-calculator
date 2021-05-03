import NextHead from "next/head";

export const Head = ({ children, title, description }) => (
  <>
    <NextHead>
      <meta charSet="UTF-8" />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title || ''}</title>
      <meta name='description' content={description || ''} />
      <link rel='preconnect' href='https://cdn.sanity.io' />
      {children}
    </NextHead>
  </>
);