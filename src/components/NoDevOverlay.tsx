"use client"

import { useEffect } from "react"

export default function NoDevOverlay() {
  useEffect(() => {
    // Hide Next.js dev overlay elements
    const hideDevOverlay = () => {
      // Hide all possible Next.js dev overlay elements
      const selectors = [
        '[data-nextjs-dialog]',
        '[data-nextjs-toast]',
        '[data-nextjs-router]',
        '#__next-build-widget',
        '.__next-dev-overlay',
        '[data-nextjs-dialog-overlay]',
        '[data-nextjs-dialog-content]',
      ]

      selectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector)
        elements.forEach((el) => {
          if (el instanceof HTMLElement) {
            el.style.display = 'none'
            el.style.visibility = 'hidden'
            el.style.opacity = '0'
            el.style.pointerEvents = 'none'
          }
        })
      })

      // Hide any fixed position elements in bottom-left
      const allElements = document.querySelectorAll('*')
      allElements.forEach((el) => {
        if (el instanceof HTMLElement) {
          const style = window.getComputedStyle(el)
          if (
            style.position === 'fixed' &&
            (style.bottom === '0px' || style.bottom === '0' || parseInt(style.bottom) < 100) &&
            (style.left === '0px' || style.left === '0' || parseInt(style.left) < 100) &&
            el.textContent?.includes('Route')
          ) {
            el.style.display = 'none'
            el.style.visibility = 'hidden'
            el.style.opacity = '0'
            el.style.pointerEvents = 'none'
          }
        }
      })
    }

    // Run immediately and on interval
    hideDevOverlay()
    const interval = setInterval(hideDevOverlay, 100)

    return () => clearInterval(interval)
  }, [])

  return null
}

