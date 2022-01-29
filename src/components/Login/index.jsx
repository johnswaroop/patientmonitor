import React, { useState } from 'react';
import styles from './login.module.scss'


const DOCTOR = 'Doctor';
const PATIENT = 'Patient'

function Login() {

    const [selectedBtn, setselectedBtn] = useState(DOCTOR);
    const [step, setStep] = useState(1);

    let togglePos = {};

    const togglePosFn = () => {
        if (selectedBtn == DOCTOR) {
            togglePos = { marginRight: "50%" }
        }
        else {
            togglePos = { marginLeft: "50%" }
        }
    }

    togglePosFn();

    console.log(togglePos);

    let mainForm =
        <>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Email address' />
            <input type="text" placeholder='Password' />
        </>

    let patientForm =
        <>
            <input type="text" placeholder='Age' />
            <input type="text" placeholder='weight' />
            <input type="text" placeholder='Blood Group' />
        </>



    return (
        <div className={styles.con}>
            <img className={styles.bg} src="/pic1.png" alt="" />
            <div className={styles.form}>
                <div className={styles.toggleBtn}>
                    <button
                        style={togglePos}
                    >
                        {selectedBtn}
                    </button>
                    <p onClick={() => { setselectedBtn(DOCTOR); setStep(1); }}>Doctor</p>
                    <p style={{ right: "0" }} onClick={() => { setselectedBtn(PATIENT); setStep(1); }}>Patient</p>
                </div>
                <h1>User Registration</h1>
                {
                    (selectedBtn == PATIENT) ? ((step == 1) ? mainForm : patientForm) : mainForm
                }
                <button className={styles.signup}
                    onClick={() => {
                        if (selectedBtn == PATIENT) {
                            setStep(2);
                        }
                    }}
                >
                    {
                        (selectedBtn == PATIENT) ? ((step == 1) ? "Continue" : "Signup") : "Signup"
                    }
                </button>
            </div>
        </div>
    )
}

export default Login;
