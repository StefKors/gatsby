import React from "react"
import styles from "./PageWrapper.module.css"
import PropTypes from "prop-types"


const PageWrapper = props => <div className={styles.wrapper}>{props.children}</div>

export default PageWrapper
