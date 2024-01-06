import styles from '../style/home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aspernatur aut reiciendis quaerat cupiditate natus porro nobis sit, quae beatae inventore quia iure minima distinctio dolorum culpa mollitia aperiam sint.</p>
      <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe voluptatibus repudiandae eius, officiis mollitia labore, provident libero quis eaque voluptate vel exercitationem sunt ea reiciendis aliquam tenetur! Dolor, doloremque! Alias?</p>
      <Link href="/dashboard">
        <div className={styles.btn}>
          See List Nine Dev
        </div>
      </Link>
    </div>
  )
}
