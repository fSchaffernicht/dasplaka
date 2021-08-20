import React from 'react'
import "./Alert.scss"

export function Alert({ children, show }) {
  if (!show) return null

  return (
    <div className="alert">
      {children}
    </div>
  )
}