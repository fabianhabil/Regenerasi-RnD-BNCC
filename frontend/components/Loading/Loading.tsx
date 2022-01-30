import React, { useState } from "react";
import { Hidden } from "@mui/material";
import LoadingComponent from "./LoadingComponent";
import Head from "next/head";

function Loading() {
  return (
    <>
      <Head>
        <title>Misch PTE Scholarship</title>
      </Head>
      <LoadingComponent />
    </>
  );
}

// Loading.getLayout = function getLayout(page: any) {
//   return (
//     <>
//       <Layout>{page}</Layout>
//     </>
//   );
// };

export default Loading;
