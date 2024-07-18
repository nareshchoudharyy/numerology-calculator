'use client'
import React from 'react'
import bg from "@/app/images/4.jpeg"
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
function Page() {
    return (
        <>
            <div className='min-h-screen bg-fixed inset-0 bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${bg.src})` }}>
                <div className='w-full min-h-screen inset-0 bg-black bg-opacity-20 overflow-auto flex flex-col justify-between'>
                    <Header />
                    <div className=' flex flex-col gap-10 items-center  my-[80px] xl:mt-[150px] xl:mb-[50px] w-[95%] p-2 md:px-10 lg:px-14 md:w-[85%] sm:py-6 md:py-12 mx-auto  bg-white bg-opacity-20 backdrop-blur-md rounded text-white'>
                        <section className="bg-white  rounded">
                            <div className="py-8 lg:py-12 px-4 mx-auto max-w-screen-md">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Contact Us</h2>
                                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                                <form
                                    action="https://formspree.io/f/xjkbklol"
                                    method="POST" className="space-y-8"
                                >
                                    <div>
                                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                        <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@flowbite.com" required/>
                                    </div>
                                    <div>
                                        <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
                                        <input type="text" id="subject" name="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let us know how we can help you" required/>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
                                        <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..." required></textarea>
                                    </div>
                                    <div className='text-center'>
                                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Send message</button>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}
export default Page;
