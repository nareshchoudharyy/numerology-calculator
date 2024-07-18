'use client'
import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import bg from "@/app/images/4.jpeg"
import Faq from './components/Faq'
import { useRouter } from 'next/navigation'
function Page() {
  const router =  useRouter();
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name) {
      newErrors.name = 'Name is required';
    }
    if (!dob) {
      newErrors.dob = 'Date of Birth is required';
    }

    if (!newErrors.name && !newErrors.dob) {
      router.push(`/result?name=${name}&dob=${dob}`);
    }
  };
  return (
    <>
      <div className='bg-fixed inset-0 bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${bg.src})` }}>
        <div className='pt-[150px] inset-0 bg-black bg-opacity-20 overflow-auto flex flex-col justify-between'>
          <Header />
          <div className='w-[95%] p-2 md:px-10 lg:px-14 md:w-[85%] sm:py-6 md:py-12 mx-auto  bg-white bg-opacity-20 backdrop-blur-md rounded text-white'>
            <h1 className='text-center font-extrabold text-[25px] sm:text-xl md:text-2xl lg:text-4xl'>
              Indian numerology calculator: Discover Name Vibrations
            </h1>
            <div className='text-[base] sm:text-md md:text-xl lg:text-2xl my-[20px] sm:my-[30px] md:my-[40px] lg:my-[50px] mx-auto text-justify'>
              Discover the power of numbers with our advanced name numerology calculator. Explore the insights of Indian numerology with our easy-to-use tool. Calculate the vibrational energy of names instantly with our accurate numerology calculator.
            </div>
            <div className='flex items-center justify-center'>
              <div className='bg-white shadow-lg rounded-lg p-8 w-[600px]'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                  <div className='mb-4'>
                    <label className='block text-gray-700'>Name</label>
                    <input
                      type='text'
                      placeholder='Your Name'
                      className='w-full p-2 border rounded text-gray-900'
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='block text-gray-700'>Date of Birth</label>
                    <input
                      type='date'
                      className='w-full p-2 border rounded text-gray-900'
                      onChange={(e) => setDob(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type='submit'
                    className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600'>
                    Calculate
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className='w-[95%] md:w-[85%] py-[50px] mx-auto my-[50px] bg-white bg-opacity-20 backdrop-blur-md rounded text-white'>
            <div className='w-[95%]'>
              <Faq />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Page;
