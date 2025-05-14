"use client";
import React from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumbs';
// Removing the problematic import

const ErrorPage = () => {
    return (
        <>
            <Breadcrumb breadcrumbTitle='Error Page' />
            <div className="error-page-area section-space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="error-content text-center">
                                <div className="error-image">
                                    {/* Replacing image with styled div */}
                                    <div 
                                        className="error-bg-container" 
                                        style={{ 
                                            height: "300px", 
                                            width: "100%", 
                                            position: "relative",
                                            backgroundColor: "#f5f5f5",
                                            borderRadius: "8px",
                                            marginBottom: "30px"
                                        }}
                                    >
                                        <div 
                                            style={{ 
                                                position: "absolute", 
                                                top: "50%", 
                                                left: "50%", 
                                                transform: "translate(-50%, -50%)",
                                                fontSize: "120px",
                                                fontWeight: "bold",
                                                color: "#f44336"
                                            }}
                                        >
                                            404
                                        </div>
                                    </div>
                                </div>
                                <div className="error-text">
                                    <h2>Oops! Page Not Found</h2>
                                    <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                                    <div className="error-button">
                                        <Link href="/" className="bd-btn btn-primary">Back to Home</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;