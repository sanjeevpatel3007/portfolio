// import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
import CursorAnimation from "./components/cursor-animation";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fevicon1.png" type="image/x-icon" />
        <title>Sanjeev Patel - Software Developer</title>
        <meta
          name="description"
          content="This is the portfolio of Sanjeev Patel. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges."
        />
      </head>
      <body className={`${inter.className} relative`}>
        <CursorAnimation />
        <div className="relative z-[1]">
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
            <Navbar />
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}



// export const metadata = {

//   title: "Sanjeev Patel - Software Developer",
//   description:
//     "This is the portfolio of Sanjeev Patel. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
// };