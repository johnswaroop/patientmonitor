import React from 'react';
import styles from './docscreen.module.scss'
import profilePic from './logo.png'

function DocScreen() {
    return (
        <div className={styles.con}>
            <div className={styles.patientCard}>
                <div className={styles.topRow}>
                    <img src={profilePic} alt="" />
                    <span className={styles.details}>
                        <p>Name</p>
                        <h1>kumar sing</h1>
                        <span className={styles.minDetails}>
                            <p style={{ gridArea: "a" }}>Age</p>
                            <h2 style={{ gridArea: "c" }}>20</h2>
                            <p style={{ gridArea: "b" }}>Weight</p>
                            <h2 style={{ gridArea: "d" }}>50kg</h2>
                            <p style={{ gridArea: "e" }}>Blood group</p>
                            <h2 style={{ gridArea: "f" }}>B+</h2>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )

}

export default DocScreen;
