import '../styles/globals.css'
import MainLayout from '../src/components/layouts/main.jsx'
export default function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
