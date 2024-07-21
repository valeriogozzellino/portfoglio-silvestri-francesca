'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const HomeBtn = () => {
  return (
    <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link href='/'>FRANCESCA SILVESTRI</Link>
    </motion.span>
  )
}

export default HomeBtn
