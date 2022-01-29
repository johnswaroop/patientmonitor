import React from 'react';
import styles from "./home.module.scss";
import logo from "./logo.png";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function Home() {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };

    const labels = ['Mon', 'Tue', 'Wed', 'Fri', 'Thu', 'Fri', 'Sat'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Heart rate in BPM',
                data: labels.map((s) => { return Math.random()*100 }),
                backgroundColor: 'rgb(4, 116, 207)',
            },
        ],
    };
    return (
        <>
            <div className={styles.container}>
                <div className={styles.profile}>
                    <img src={logo} alt="logo" />
                    <div className={styles.user_cont}>
                        <h1>Sainath Gowlikar</h1>

                        <h3>age:20yrs</h3>
                        <h3>weight:80kg</h3>
                    </div>
                </div>

                <div className={styles.rate}>
                    <div className={styles.heart}>
                        <h2>Heart Rate</h2>
                        <h1>108</h1>
                        <h3>bpm</h3>
                    </div>
                    <div className={styles.card}>
                        <span>
                            <h2>Normal rate</h2>
                            <h1 >60 min</h1>
                        </span>


                        <h1>100 max</h1>
                    </div>
                    {/* Body  */}
                    <div className={styles.temp}>
                        <h2>Body Temperature</h2>
                        <h1>96</h1>
                        <h3>celsius</h3>
                    </div>
                    <div className={styles.cards}>
                        <span>
                            <h2>Normal rate</h2>
                            <h1 >60 min</h1>
                        </span>


                        <h1>100 max</h1>
                    </div>
                </div>
                <div className={styles.graph}>
                    <Bar options={options} data={data} height={"10px"} />
                </div>
            </div>

        </>
    )
}

export default Home
