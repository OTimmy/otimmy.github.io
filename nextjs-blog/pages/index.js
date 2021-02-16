import Head from 'next/head'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import List from './List/list';
import SideBar from './SideBar/sidebar'
import styles from './SideBar/sidebar.module.css'
import listStyles from './List/list.module.css'

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
