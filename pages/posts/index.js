import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';
import Alert from '../../components/alert';
import { getSortedPostsData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css';
import Date from '../../components/date'

export default function PostsHome({allPostsData}) {
  return (
    <Layout>
      <Head>
        <title>Posts</title>
      </Head>

      <h1>Posts</h1>


      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }, index) => (
            <li className={utilStyles.listItem} key={id}>
              {index + 1}: <Link href={`/posts/${id}`}>{title}</Link>
              <br/>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
