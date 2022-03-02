import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'

export default function Hamburger() {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <nav>
        <GiHamburgerMenu size={40} onClick={() => setShowMenu(!showMenu)}/>
    </nav>
  )
}
