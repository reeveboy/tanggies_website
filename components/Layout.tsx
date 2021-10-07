import React from "react";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Tanggies Goa</title>
        <meta
          property="og:title"
          content="Tanggies Restaurant - Best Food Served in South Goa"
          key="title"
        />
        <meta
          name="description"
          content="Tanngies Restaurant is settled in South Goa overlooking the confluence of the Arabian
              sea and the Sal River, Cavelossim harbors a few of the prettiest
              sights in Goa. People came from far and wide to have a taste of this magical
              blend of spices that had all the locals talking, which gave us no
              option but to create the restaurant we are today."
        />

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
