// import React, { Component } from "react";
import styles from './sidebar.module.css'

function SideBar() {
    return    (
        <nav className={styles.sidebar}>
            <div className={`container-sm shadow-sm p-3 mb-5 bg-body  bg-primary text-white ${styles.fill}`}>
                <div className="row">
                    <div className="col">
                        Skafferiet
                    </div>
                </div>
            </div>
        </nav>
)
}

export default SideBar