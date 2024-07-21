'use client'

import React from 'react'
import { useEffect } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'

export const TextGenerateEffect = ({
  words,
  duration,
  startDelay,
  className,
  staggerDuration,
}: {
  words: string
  duration: number
  startDelay: number
  staggerDuration: number
  className?: string
}) => {
  const [scope, animate] = useAnimate()
  let wordsArray = words.split(' ')

  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration,
        delay: stagger(staggerDuration, { startDelay }),
      }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope.current])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className='opacity-0'>
              {word}{' '}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={className}>
      <div className='leading-snug tracking-wide'>{renderWords()}</div>
    </div>
  )
}
