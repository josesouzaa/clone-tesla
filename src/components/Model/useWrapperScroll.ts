import { useMotionValue } from 'framer-motion'
import React, { useContext } from 'react'
import ModelsContext from './ModelsContext'

const useWrapperScroll = () => {

  const { wrapperRef } = useContext(ModelsContext)

  const scrollY = useMotionValue(0)
  const scrollYProgress = useMotionValue(0)

  React.useEffect(() => {
    const element = wrapperRef.current
    if (element) {
      const updateScrollValue = () => {
        const { scrollTop, scrollHeight, offsetHeight } = element
        const fullScroll = scrollHeight - offsetHeight
        scrollY.set(scrollTop)
        scrollYProgress.set(scrollTop / fullScroll)
      }
      element.addEventListener('scroll', updateScrollValue)
      return () => element.removeEventListener('scroll', updateScrollValue)
    }
  }, [scrollY, scrollYProgress, wrapperRef])

  return { scrollY, scrollYProgress }
}

export default useWrapperScroll
