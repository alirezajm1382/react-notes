import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const SharedTemplate = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default SharedTemplate