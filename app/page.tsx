'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/component/Navbar'
import { usePathname } from 'next/navigation'

export default function Home() {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <main className={styles.main}>
      <div className={styles.title}>Homepage</div>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aspernatur aut reiciendis quaerat cupiditate natus porro nobis sit, quae beatae inventore quia iure minima distinctio dolorum culpa mollitia aperiam sint.</p>
      <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe voluptatibus repudiandae eius, officiis mollitia labore, provident libero quis eaque voluptate vel exercitationem sunt ea reiciendis aliquam tenetur! Dolor, doloremque! Alias?</p>
    </main>
  )
}
