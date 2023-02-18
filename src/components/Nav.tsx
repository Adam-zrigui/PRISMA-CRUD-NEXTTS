import React from 'react'
import styles from '@/styles/Nav.module.css'
import Link from 'next/link'
export default function Nav() {
  return (
    <nav className={styles.nav}>
<div className={styles.one}>
<h1 className={styles.h1}>PRISMA CRUD</h1>
</div>
<div className={styles.two}>
   <ul className={styles.ul}>
   <Link href='/'  style={{ textDecoration: 'none' }}> <li className={styles.li}>home </li> </Link>
   <Link href='/pages'  style={{ textDecoration: 'none' }}><li  className={styles.li}>Posts </li></Link>
   <Link href='/login'  style={{ textDecoration: 'none' }}><li className={styles.li}>sign in </li></Link>
   </ul>
</div>
    </nav>
  )
}
