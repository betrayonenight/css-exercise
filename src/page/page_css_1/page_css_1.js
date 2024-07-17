import React from 'react'
import styles from './page_css_1.module.less'
export default function PageCSS1() {
    console.log(styles)
    return (
        <>
            <div className={styles.container}>
                {/* <a>PageCSS1,PageCSS1,PageCSS1</a>
                <a>PageCSS1,PageCSS1,PageCSS1</a>
                <a>PageCSS1,PageCSS1,PageCSS1</a> */}
            </div>
            <div>
                <div className={styles.container_2}>
                    <div>
                        PageCSS1,PageCSS1,PageCSS1<br/>
                        PageCSS1,PageCSS1,PageCSS1
                    </div>
                </div>
            </div>
            <div className={styles.pie}
                style={{ animationDelay: '-20s' }}>
                PageCSS1,PageCSS1,PageCSS1
            </div>
            <div className={styles.pie}
                style={{ animationDelay: '-60s' }}>
                PageCSS1,PageCSS1,PageCSS1
            </div>

            {/* <main>
                <blockquote>
                    "The only way to get rid of a temptation[...]"
                    <footer>－
                        <cite>
                            Oscar Wilde,
                            The Picture of Dorian Gray
                        </cite>
                    </footer>
                </blockquote>
            </main> */}
        </>
    )
}
