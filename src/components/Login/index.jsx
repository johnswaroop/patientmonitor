import React, { useState, useEffect } from 'react';
import styles from './login.module.scss'
import { useHistory } from 'react-router-dom';


const DOCTOR = 'Doctor';
const PATIENT = 'Patient'

function Login() {

    const [selectedBtn, setselectedBtn] = useState(DOCTOR);
    const [step, setStep] = useState(1);

    const loc = useHistory()

    let togglePos = {};

    const togglePosFn = () => {
        if (selectedBtn == DOCTOR) {
            togglePos = { marginRight: "50%" }
        }
        else {
            togglePos = { marginLeft: "50%" }
        }
    }

    const [patientData, setpatientData] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        weight: "",
        bloodGroup: ""
    })

    const [doctorData, setdoctorData] = useState({
        name: "",
        email: "",
        password: ""
    })

    console.log(patientData);
    console.log(doctorData);

    const patientDataHandler = (e) => {
        setpatientData((pt) => {
            pt[e.target.name] = e.target.value;
            return { ...pt }
        })
    }

    const doctorDataHandler = (e) => {
        setdoctorData((dt) => {
            dt[e.target.name] = e.target.value;
            return { ...dt }
        })
    }

    togglePosFn();

    console.log(togglePos);

    // useEffect(() => {
    //   window.location.href='./'
    // }, [step])


    let docForm =
        <>
            <input key={step + 'n'} type="text" placeholder='Name' name='name'
                onChange={(e) => {
                    doctorDataHandler(e);
                }} />
            <input key={step + 'e'} type="text" placeholder='Email address' name='email'
                onChange={(e) => {
                    doctorDataHandler(e);
                }}
            />
            <input key={step + 'p'} type="text" placeholder='Password' name='password'
                onChange={(e) => {
                    doctorDataHandler(e);
                }}
            />
        </>

    let patForm =
        <>
            <input key={step + 'doc'} type="text" placeholder='Name' name='name'
                onChange={(e) => {
                    patientDataHandler(e)
                }} />
            <input key={step + 'docEmail'} type="text" placeholder='Email address' name='email'
                onChange={(e) => {
                    patientDataHandler(e)
                }}
            />
            <input key={step + 'password'} type="text" placeholder='Password' name='password'
                onChange={(e) => {
                    patientDataHandler(e)
                }}
            />
        </>

    let mainForm = (selectedBtn == DOCTOR) ? docForm : patForm;

    let patientForm =
        <>
            <input type="text" placeholder='Age'
                name='age'
                onChange={(e) => {
                    doctorDataHandler(e);
                }} />
            <input type="text" placeholder='weight'
                name='weight'
                onChange={(e) => {
                    doctorDataHandler(e);
                }} />
            <input type="text" placeholder='Blood Group'
                name='bloodGroup'
                onChange={(e) => {
                    doctorDataHandler(e);
                }} />
        </>

    return (
        <div className={styles.con} key={step}>
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
                        if (selectedBtn == DOCTOR) {
                            localStorage.setItem('doctor-data', JSON.stringify(doctorData));
                            loc.push('/doctor')
                        }
                        if (selectedBtn == PATIENT && step == 2) {
                            localStorage.setItem('patient-data', JSON.stringify(patientData));
                            loc.push('/patient')
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
