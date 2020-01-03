import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <div>
    <Link to="/" style={{marginRight: 20}}>Inicio</Link>
    <Link to="/about">Acerca de mi</Link>
  </div>
)