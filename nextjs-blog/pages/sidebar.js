// import React, { Component } from "react";
import styles from './sidebar.module.css'

function SideBar() {
    return    (
        <nav className={styles.sidebar}>
            <div className={`container-sm shadow-sm p-3 mb-0 bg-body  bg-primary text-white ${styles.fill}`}>
                <div className="row">
                    <div className={`col ${styles.title}`}>
                        Skafferiet
                    </div>
                </div>
                <div className="row">
                    <div className="col bg-white h-75">
                        asdasd
                    </div>
                </div>
            </div>
        </nav>
)
}

export default SideBar