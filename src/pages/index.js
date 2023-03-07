import styles from "../styles/Home.module.css";
import { fetcher } from "../lib/api";
import Header from "../components/Header/Header";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Slider from "@/components/Slider/Slider";
import download from "downloadjs";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Manutention from "@/components/Manutention/Manutention";

const options = {
  showDots: false,
  swipeable: true,
  draggable: true,
  autoPlay: true,
  infinite: true,
  removeArrowOnDeviceType: ["tablet", "mobile", "desktop", "superLargeDesktop"],
};

export default function Home({ homeInfo, cms }) {
  return (
    <>
      <Manutention />
      <Header />
      <div className={styles.page}>
        <Hero />
      </div>
      <Footer />
    </>
  );
}
