'use client'
import React, { useState } from 'react'
import bg from "@/app/images/4.jpeg"
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';


function Page() {
    return (
        <>
            <div className='min-h-screen bg-fixed inset-0 bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${bg.src})` }}>
                <div className='w-full min-h-screen inset-0 bg-black bg-opacity-20 overflow-auto flex flex-col justify-between'>
                    <Header />
                    <div className='flex flex-col gap-3 my-[80px] xl:mt-[150px] xl:mb-[50px] w-[95%] p-2 md:px-10 lg:px-14 md:w-[85%] sm:py-6 md:py-12 mx-auto bg-white bg-opacity-20 backdrop-blur-md rounded text-white text-justify'>
                        <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
                        <div>
                            <p className="text-lg mb-4"><em>Last updated: July 18, 2024</em></p>
                            <p className="mb-4">{`This Privacy Policy outlines how wecraftsolution ("we," "us," or "our") collects, uses, and protects your personal information when you use our services.`}</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
                            <p className="mb-2"><strong>Personal Data:</strong> We may ask for personally identifiable information, including your name and usage data.</p>
                            <p className="mb-2"><strong>Usage Data:</strong> Automatically collected data about your device, such as IP address, browser type, pages visited, and duration of visits.</p>
                            <p className="mb-4"><strong>Cookies:</strong> We use cookies to track activity and improve our services. You can refuse cookies through your browser settings.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-2">How We Use Your Information</h2>
                            <p className="mb-4">We use your data to:</p>
                            <ul className="list-disc list-inside mb-4">
                                <li>Provide and maintain our service</li>
                                <li>Manage your account</li>
                                <li>Contact you with updates and promotional content</li>
                                <li>Analyze usage trends to improve our services</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Data Sharing</h2>
                            <p className="mb-4">We may share your personal information:</p>
                            <ul className="list-disc list-inside mb-4">
                                <li>With service providers to assist in our operations</li>
                                <li>During business transfers (e.g., mergers or acquisitions)</li>
                                <li>With affiliates and partners for related services</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Data Retention</h2>
                            <p className="mb-4">Your personal data will be retained only as long as necessary for the purposes outlined in this policy, or as required by law.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Your Rights</h2>
                            <p className="mb-4">You have the right to:</p>
                            <ul className="list-disc list-inside mb-4">
                                <li>Request deletion of your personal data</li>
                                <li>Access, correct, or update your personal information</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Data Security</h2>
                            <p className="mb-4">While we prioritize your data's security, no method of transmission over the internet is 100% secure. We implement commercially acceptable measures to protect your information.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Children's Privacy</h2>
                            <p className="mb-4">Our services are not directed to anyone under the age of 13. We do not knowingly collect information from children. If we become aware of such data collection, we will take steps to delete it.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Links to Other Websites</h2>
                            <p className="mb-4">Our service may contain links to third-party websites. We are not responsible for their content or privacy practices.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Changes to This Policy</h2>
                            <p className="mb-4">We may update this Privacy Policy periodically. Any changes will be posted on this page with a new effective date.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
                            <p className="mb-4">For questions about this Privacy Policy, contact us at:</p>
                            <p className="mb-4"><strong>Email:</strong>contact@wecraftsolution.com</p>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Page;
