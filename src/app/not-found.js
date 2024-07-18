'use client'
import React, { useState } from 'react'
import Header from '@/app/components/Header';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

function Page() {
    const router = useRouter();
    const [homePageCounter, setHomePageCounter] = useState(5);
    const stopCounter = setInterval(() => {
        if (homePageCounter === 0) {
            clearInterval(stopCounter);
            return router.push('/');
        } else {
            setHomePageCounter(homePageCounter - 1);
        }
    }, 1000);
    return (
        <>
            <Header />
            <div className="flex flex-col gap-2 items-center justify-center w-full min-h-screen border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 text-white">
                <div>
                    404 Page not found
                </div>
                <div>
                    Redirecting to homepage in {homePageCounter} seconds...
                </div>
                <div>
                    <Link href={'/'} className='underline text-sky-400'> Redirect Now </Link>
                </div>
            </div>
        </>
    );
}

export default Page;
