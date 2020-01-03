import React from 'react'
import Navigation from '../components/navigation'
import Header from '../components/header'

export default () => (
  <div style={{ color: 'teal' }}>
    <Navigation />
    <Header headerText="Acerca de mi"/>
    <p>Diseñador y Programador de Páginas Web</p>
  </div>
)