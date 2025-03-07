import React from 'react'
import { Button } from './styles'
import { Link } from 'react-scroll'

const ScrollBtn = ({ text }) => (
    <Link
    to="contacts"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
    >
    <Button type="submit">{text}</Button>
    </Link>
)

export { ScrollBtn }