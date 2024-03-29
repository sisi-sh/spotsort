import React from "react"
import { connect } from "react-redux"

import UserArea from "components/user/user-area.jsx"
import TestPanel from "components/test-panel.jsx"
import Toast from "components/communication/toast.jsx"

import styles from "styles/components/wrappers/app-wrapper.module.css"

const PageWrapper = (props) => (
    <div className={styles.this}>
        <header>
            <div className={styles.location}>
                <span>SpotSort</span>
                <div className={styles.divider}></div>
                <span className={styles.pageTitle}>{props.title}</span>
            </div>

            <UserArea />
        </header>
        <main>{props.children}</main>

        {/* Overlay */}
        {props.toast && <Toast />}
        <TestPanel />
    </div>
)

const mapState = (state) => {
    return {
        user: state.user,
        toast: state.communication.toast,
    }
}

export default connect(mapState)(PageWrapper)
