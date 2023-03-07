import TextContent from '@/components/TextContent'
import TitlePage from '@/components/TitlePage'
import Head from 'next/head'
import Layout from '../components/Layout'
import HomeLink from '@/components/HomeLink'
import HomeCard from '@/components/HomeCard'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portofoliio Web</title>
        <meta name="description" content="Portofoliio Web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <TitlePage title='Ahmad Shaleh' />
        <TextContent>Saya Ahmad, seorang <b>Fullstack Web Developer</b>, dan saya senang dapat berbagi karya dan pengalaman saya dengan anda disini.</TextContent>
        <HomeCard />
        <TextContent>Sebagai seorang software engineer, saya telah mengembangkan berbagai aplikasi dan platform yang melibatkan teknologi canggih seperti Java, Python, dan React Native. Saya selalu mencari cara untuk meningkatkan keterampilan saya dan mengeksplorasi teknologi baru yang dapat membantu saya menciptakan solusi yang lebih baik.</TextContent>
        <div className="flex gap-10 pt-6">
          <HomeLink text='Github' />
          <HomeLink text='Youtube' />
        </div>
      </Layout>
    </>
  )
}
