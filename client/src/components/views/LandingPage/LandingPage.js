import React from 'react'
import { FaCode } from "react-icons/fa";

function LandingPage() {
    return (
        <>
        <div className="app">
            <FaCode style={{ fontSize: '4rem' }} /><br />
            <span style={{ fontSize: '2rem' }}>WhatSup</span>
        </div>
        <div style={{ float:'right' }}>MERN chat app with socket.io</div>
        </>
    )
}

export default LandingPage
