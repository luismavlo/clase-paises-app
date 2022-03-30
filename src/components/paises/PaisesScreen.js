import React from 'react'
import Navbar from '../../shared/Navbar'
import PaisTable from './PaisTable'
import Search from './Search'


const PaisesScreen = () => {
  return (
    <>
      <Navbar title="BUSCAR PAÍS" />
      <br />
      <div className="content_form_search">
        <Search />
        <br />
        <PaisTable />
      </div>
    </>
  )
}

export default PaisesScreen