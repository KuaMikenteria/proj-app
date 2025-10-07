// src/pages/HomePage.tsx
import { useState } from 'react'

function HomePage() {
  const [clicked, setClicked] = useState(false)

  return (
    <button
      className={`get-started-button ${clicked ? 'clicked' : ''}`}
      onClick={() => {
        setClicked(true)
        setTimeout(() => setClicked(false), 200)
      }}
    >
      Get Started
    </button>
  )
}

export default HomePage
