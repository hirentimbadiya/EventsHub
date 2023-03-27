import MainLayout from '@/components/layout/MainLayout'
import '@/styles/globals.css'
import '@/styles/general.sass'

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <main>
          <Component {...pageProps} />
        </main>
      </MainLayout>
    </>
  )
}
