"use client";
import React from 'react';
import Link from 'next/link';
// Import a png or jpg version instead of webp to avoid the Sharp library issue
// If you have the file in another format, use that. Otherwise, we'll create a workaround.
import { usePathname } from 'next/navigation';

const NotFound = () => {
    const pathname = usePathname();

    return (
        <>
            <div className="error-page-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="error-content text-center">
                                <div className="error-image">
                                    {/* Use a div with background image set in CSS instead of direct Image component */}
                                    <div 
                                        className="error-bg-image" 
                                        style={{ 
                                            height: "300px", 
                                            width: "100%", 
                                            position: "relative",
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
                                    <h2>Page Not Found</h2>
                                    <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                                    <p>Requested path: <code>{pathname}</code></p>
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

export default NotFound;