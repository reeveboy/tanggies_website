import React from "react";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Tanggies Goa</title>
        <meta property="og:title" content="My page title" key="title" />

        <link rel="shortcut icon" href="/images/Tree.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="" style={{ minWidth: "390px" }}>
        {children}
      </div>
    </>
  );
};

export default Layout;
