"use client"
import "./globals.css"
import React, { useState } from "react"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"



export default function RootLayoutPage({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <html lang="en">
            <body>
                <Header />
                <div className="layout-container">
                    <main className="main-content">
                        {children}
                    </main>
                </div>
                <button className="open-modal-btn" onClick={openModal}>
                <span role="img" aria-label="chat" className="emoji">💬</span>
                    

                </button>
                {isModalOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={e => e.stopPropagation()}>
                            <iframe
                                src="https://chat-with-resume.streamlit.app/?embedded=true"
                                title="Streamlit App"
                                frameBorder="0"
                                allowFullScreen
                                className="streamlit-iframe"
                            ></iframe>
                            <button className="close-modal-btn" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                )}
                <Footer />
            </body>
        </html>
    )
}
