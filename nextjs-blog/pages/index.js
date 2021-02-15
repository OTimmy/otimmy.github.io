import Head from 'next/head'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SideBar from './sidebar'

// import SideBar from ;


export default function Home() {
  return (
    <div className="container-fluid nopadding p-0">
      <main>
      <SideBar>
      </SideBar>
      </main>
    </div>
  )
}
