import React from 'react'
import styles from './page_css_4.module.less'
export default function PageCSS4() {
    return (
        <>
            <div className={styles.container}>
                PageCSS1,PageCSS1,PageCSS1
                PageCSS1,PageCSS1,PageCSS1
                PageCSS1,PageCSS1,PageCSS1
            </div>

            <div className={styles.container_2}>
                <div>
                    PageCSS1,PageCSS1,PageCSS1<br />
                    PageCSS1,PageCSS1,PageCSS1
                </div>
            </div>
        </>
    )
}