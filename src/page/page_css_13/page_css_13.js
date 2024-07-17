import React from 'react'
import styles from './page_css_13.module.less'
export default function PageCSS13() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                {/* PageCSS1,PageCSS1,PageCSS1
            PageCSS1,PageCSS1,PageCSS1
            PageCSS1,PageCSS1,PageCSS1 */}
            </div>
            <div className={styles.pie}
                style={{ animationDelay: '-20s' }}>
                PageCSS1,PageCSS1,PageCSS1
            </div>
            <div className={styles.pie}
                style={{ animationDelay: '-60s' }}>
                PageCSS1,PageCSS1,PageCSS1
            </div>
        </div>

    )
}