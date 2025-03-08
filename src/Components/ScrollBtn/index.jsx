import React from 'react'
import { Button } from './styles'
import { Link } from 'react-scroll'

const ScrollBtn = ({ text, bg, color }) => (
  <Link to="contacts" spy={true} smooth={true} offset={-80} duration={800}>
    <Button style={{ background: bg, color: color }} type="button">
      {text}
    </Button>
  </Link>
)

export { ScrollBtn }
