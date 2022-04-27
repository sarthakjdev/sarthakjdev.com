import '../styles/globals.css'
import MainLayout from '../src/components/layouts/main.jsx'
import "nprogress/nprogress.css"
// import TopProgressBar from '../src/configs/topProgressBarConfig'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
