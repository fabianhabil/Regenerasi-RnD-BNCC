import Head from "next/head";
import Image from "next/image";
import { Typography } from "@mui/material";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Typography>First Commit</Typography>
      <Link href="/page2">page 2</Link>
    </>
  );
};

export default Home;
