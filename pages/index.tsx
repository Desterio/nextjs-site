import Head from 'next/head'
import Header from '@components/header';

const Home = () => (
    <>
        <Head>
            <title>All About NextJS</title>
        </Head>

        <main>
            <Header />
        </main>
    </>
);
export default Home;
