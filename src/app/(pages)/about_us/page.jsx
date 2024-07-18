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
          <div className=' flex flex-col gap-3 md:gap-10 items-center  my-[80px] xl:mt-[150px] xl:mb-[50px] w-[95%] p-2 md:px-10 lg:px-14 md:w-[85%] sm:py-6 md:py-12 mx-auto  bg-white bg-opacity-20 backdrop-blur-md rounded text-white'>
            <h1 className='text-center font-extrabold text-[25px] sm:text-xl md:text-2xl lg:text-4xl'>
              About Us
            </h1>
            <div className='flex flex-col gap-4 md:gap-8 text-md md:text-xl text-justify'>
              <div>
                Welcome to wecraftsolution! we are passionate entrepreneurs dedicated to providing unique insights through our powerful numerology calculator. At wecraftsolution, We offer personalized recommendations in health, career, relationships, and famous personalities based on your date of birth and name.
              </div>
              <div>
                Driven by a commitment to help others navigate their life paths, our goal is to empower people with valuable information that can positively influence their decisions and growth. Whether they're seeking guidance for their career or looking to understand their relationships better, they're in the right place.
              </div>
              <div>
                Thank you for being part of this journey!
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
export default Page;
