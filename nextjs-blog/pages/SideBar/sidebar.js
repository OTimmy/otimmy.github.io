// import React, { Component } from "react";
import styles from './sidebar.module.css'

function SideBar() {
    return    (
        <div >
            <div className={` bg-body  bg-primary text-white ${styles.fill}`}>
                <div className="row">
                    <div className={`col ${styles.title}`}>
                        Skafferiet
                    </div>
                </div>
                <div className={`row `}>
                    <div className={`col bg-white`}>
                        asdasd
                    </div>
                </div>
            </div>
        </div>
)
}

export default SideBar