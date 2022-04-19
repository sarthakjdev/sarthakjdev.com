import '../styles/globals.css'
import MainLayout from '../src/components/layouts/main.jsx'
import "nprogress/nprogress.css"
import TopProgressBar from '../src/configs/topProgressBarConfig'

export default function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
