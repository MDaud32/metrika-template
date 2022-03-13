import Head from 'next/head';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
}
