import Head from 'next/head'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import List from './list';
import SideBar from './sidebar'
import styles from './sidebar.module.css'
import listStyles from './list.module.css'

// import SideBar from ;


export default function Home() {
  return (
    <div className="container-fluid p-0">
      <main>
        <div className="row no-gutters ">
          <div className={`col  ${styles.sidebar}`}>
            <SideBar>
            </SideBar>
          </div>
          <div className={`col  ${listStyles.list}`}>
             <List>
             </List>            
          </div>
        </div>
      </main>
    </div>
  )
}
