import { Suspense } from 'react';
import Link from 'next/link';
import styles from '../../style/dashboard.module.css'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if(!res.ok) {
    throw new Error('Fail to fetch data')
  }
  return res.json();
}

export default async function DashBoardPage() {
  const data = await getData();
  return (
    <div>
      <h1>All list Nine dev</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {(data || [])?.map((item: any) => (
          <Link href={'/dashboard/' + item?.id} key={item?.userId}>
            <div className={styles.single}><h3>{item?.title}</h3></div>
          </Link>
        ))}
      </Suspense>
    </div>
  )
}
