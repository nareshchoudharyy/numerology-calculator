'use client'
import React, { useEffect, useState } from 'react'
import bg from "@/app/images/4.jpeg"
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useRouter, useSearchParams } from 'next/navigation';
const zodiacSigns = [
    {
        sign: "Aries",
        emoji: "♈️",
        start: "03-21",
        end: "04-19",
        famous: ["Rani Mukerji", "Ajay Devgn"],
        relationshipAdvice: "Be brave and take chances in love. Your boldness will inspire your partner and keep the relationship exciting.",
        careerAdvice: "Pursue leadership roles or start your own business. Your natural ability to take initiative will drive your success.",
        healthAdvice: "Maintain a regular exercise routine to stay active and healthy. Focus on activities that channel your energy positively."
    },
    {
        sign: "Taurus",
        emoji: "♉️",
        start: "04-20",
        end: "05-20",
        famous: ["Sachin Tendulkar", "Anushka Sharma"],
        relationshipAdvice: "Look for stable and secure relationships. Your need for consistency and reliability will help you build lasting bonds.",
        careerAdvice: "Excel in finance or arts-related jobs. Your patience and dedication make you well-suited for these fields.",
        healthAdvice: "Eat a balanced diet and get good sleep. These habits will help you maintain your physical and mental well-being."
    },
    {
        sign: "Gemini",
        emoji: "♊️",
        start: "05-21",
        end: "06-20",
        famous: ["Karan Johar", "Sonam Kapoor"],
        relationshipAdvice: "Enjoy change and variety in relationships. Embrace new experiences and keep things interesting with your partner.",
        careerAdvice: "Great in communication and social media jobs. Your adaptability and quick thinking are assets in these areas.",
        healthAdvice: "Stay active both mentally and physically. Engage in activities that challenge your mind and body to stay healthy."
    },
    {
        sign: "Cancer",
        emoji: "♋️",
        start: "06-21",
        end: "07-22",
        famous: ["Priyanka Chopra", "Ranveer Singh"],
        relationshipAdvice: "Take care of your loved ones. Your nurturing nature will help you build strong and supportive relationships.",
        careerAdvice: "Good in caregiving and hospitality fields. Your empathy and compassion make you excel in these careers.",
        healthAdvice: "Focus on self-care and emotional health. Take time to recharge and address your emotional needs regularly."
    },
    {
        sign: "Leo",
        emoji: "♌️",
        start: "07-23",
        end: "08-22",
        famous: ["Saif Ali Khan", "Sridevi"],
        relationshipAdvice: "Be confident and let your light shine. Your charisma will attract positive attention and strengthen your relationships.",
        careerAdvice: "Excel in creative and leadership roles. Your natural ability to inspire others will lead to success.",
        healthAdvice: "Do cardio exercises to stay fit. Regular physical activity will help you maintain your health and energy levels."
    },
    {
        sign: "Virgo",
        emoji: "♍️",
        start: "08-23",
        end: "09-22",
        famous: ["Akshay Kumar", "Kareena Kapoor"],
        relationshipAdvice: "Pay attention to the little things. Your detail-oriented nature will help you create a loving and attentive relationship.",
        careerAdvice: "Great in jobs that need analysis and organization. Your precision and dedication make you a valuable asset.",
        healthAdvice: "Eat healthy and take care of your digestion. Focus on a balanced diet and regular check-ups to stay well."
    },
    {
        sign: "Libra",
        emoji: "♎️",
        start: "09-23",
        end: "10-22",
        famous: ["Amitabh Bachchan", "Rekha"],
        relationshipAdvice: "Look for balance and harmony in love. Strive to create a peaceful and fair relationship with your partner.",
        careerAdvice: "Good in roles needing diplomacy and beauty. Your ability to see both sides makes you a great mediator.",
        healthAdvice: "Do relaxing activities for mental clarity. Regular relaxation will help you maintain a balanced mind."
    },
    {
        sign: "Scorpio",
        emoji: "♏️",
        start: "10-23",
        end: "11-21",
        famous: ["Aishwarya Rai", "Shah Rukh Khan"],
        relationshipAdvice: "Be passionate and deep in relationships. Your intensity will create strong and meaningful connections with your partner.",
        careerAdvice: "Great in research and detective jobs. Your focus and determination make you excellent in uncovering details.",
        healthAdvice: "Balance physical and emotional health. Engage in activities that support both your body and mind."
    },
    {
        sign: "Sagittarius",
        emoji: "♐️",
        start: "11-22",
        end: "12-21",
        famous: ["Yami Gautam", "John Abraham"],
        relationshipAdvice: "Explore new things together. Your adventurous spirit will keep your relationship exciting and fresh.",
        careerAdvice: "Good in jobs involving travel and teaching. Your love for learning and exploration will drive your success.",
        healthAdvice: "Stay fit with outdoor activities. Engaging in nature-based exercises will help you maintain your health."
    },
    {
        sign: "Capricorn",
        emoji: "♑️",
        start: "12-22",
        end: "01-19",
        famous: ["Deepika Padukone", "Salman Khan"],
        relationshipAdvice: "Work hard and be reliable in love. Your dedication and responsibility will strengthen your relationships.",
        careerAdvice: "Excel in responsible and management roles. Your discipline and organization skills are key to your success.",
        healthAdvice: "Stick to a regular health routine. Consistency in your health practices will keep you fit and healthy."
    },
    {
        sign: "Aquarius",
        emoji: "♒️",
        start: "01-20",
        end: "02-18",
        famous: ["Abhishek Bachchan", "Preity Zinta"],
        relationshipAdvice: "Be innovative and think differently. Your unique perspective will bring excitement and novelty to your relationships.",
        careerAdvice: "Good in tech and social change jobs. Your forward-thinking and innovative ideas will lead to success.",
        healthAdvice: "Join group activities for motivation. Participating in social fitness activities will keep you engaged and healthy."
    },
    {
        sign: "Pisces",
        emoji: "♓️",
        start: "02-19",
        end: "03-20",
        famous: ["Alia Bhatt", "Aamir Khan"],
        relationshipAdvice: "Dream big and show kindness in love. Your compassionate nature will create deep and meaningful relationships.",
        careerAdvice: "Great in creative and caring professions. Your empathy and creativity are strengths in these fields.",
        healthAdvice: "Practice mindfulness for emotional balance. Regular meditation will help you stay centered and peaceful."
    }
];
const calculateLuckyNumber = (name) => {
    const letters = name.toUpperCase().replace(/[^A-Z]/g, '');
    const number = letters.split('').reduce((acc, char) => acc + char.charCodeAt(0) - 64, 0);
    return number % 9 === 0 ? 9 : number % 9;
};
const getZodiacSign = (dob) => {
    const date = new Date(dob);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${month}-${day}`;

    return zodiacSigns.find(sign =>
        (formattedDate >= sign.start && formattedDate <= sign.end)
    );
};
const getFamousPersonalities = (sign) => {
    const zodiac = zodiacSigns.find(z => z.sign === sign);
    return zodiac ? zodiac.famous : [];
};
function capitalizeWordsRegex(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
function Page() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const dob = searchParams.get('dob');

    const [result, setResult] = useState(null);
    const [falseDetails, setFalseDetails] = useState(false);
    const [homePageCounter, setHomePageCounter] = useState(5);

    useEffect(() => {
        if (!name || !dob) {
            setFalseDetails(true);
        }
    }, [name, dob]);

    useEffect(() => {
        if (falseDetails) {
            const intervalId = setInterval(() => {
                setHomePageCounter(prevCounter => {
                    if (prevCounter === 1) {
                        clearInterval(intervalId);
                        router.push('/');
                    }
                    return prevCounter - 1;
                });
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [falseDetails, router]);

    useEffect(() => {
        if (name && dob) {
            const luckyNumber = calculateLuckyNumber(name);
            const zodiac = getZodiacSign(dob);
            const capitalizedName = capitalizeWordsRegex(name);
            const famousPersonalities = getFamousPersonalities(zodiac.sign);

            setResult({
                name: capitalizedName,
                dob,
                luckyNumber,
                zodiac,
                famousPersonalities
            });
        }
    }, [name, dob]);

    if (falseDetails) {
        return (
            <div className='bg-fixed inset-0 bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${bg.src})` }}>
                <div className=' inset-0 bg-black bg-opacity-20 overflow-auto'>
                    <Header />
                    <div className="flex items-center justify-center w-full min-h-screen border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 text-white">
                        Redirecting to homepage in {homePageCounter} seconds...
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }

    return (
        <div className='min-h-screen bg-fixed inset-0 bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${bg.src})` }}>
            <div className='w-full min-h-screen inset-0 bg-black bg-opacity-20 overflow-auto flex flex-col justify-between'>
                <Header />
                <div className={`flex flex-col gap-5 my-[80px] xl:mt-[150px] xl:mb-[50px] w-[95%] p-2 md:px-10 lg:px-14 md:w-[85%] sm:py-6 md:py-12 mx-auto  bg-white bg-opacity-20 backdrop-blur-md rounded text-white ${!result ? "items-center" : ""}`}>
                    {
                        !result ?
                            <div role="status">
                                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                            :
                            <>
                                <h1 className='text-center font-extrabold text-[25px] sm:text-xl md:text-2xl lg:text-4xl'>
                                    Your Numerology Result
                                </h1>
                                <div className='p-10 flex flex-col gap-5'>
                                    <div className='text-xl'>
                                        Name :-
                                        <div className='text-lg'>
                                            {result.name}
                                        </div>
                                    </div>
                                    <div className='text-xl'>
                                        Zodiac Sign :-
                                        <div className='text-lg'>
                                            {result.zodiac.emoji} {result.zodiac.sign}
                                        </div>
                                    </div>
                                    <div className='text-xl'>
                                        Lucky Number :-
                                        <div className='text-lg'>
                                            {result.luckyNumber}
                                        </div>
                                    </div>
                                    <div className='text-xl'>
                                        Famous Personalities :-
                                        <div className='text-lg flex gap-2'>
                                            {result.famousPersonalities.map((person, index) => (
                                                <div key={index}>
                                                    {(index === 1 && index !== (result.length - 1)) ? ' and ' : ''}
                                                    <span key={index}>{person}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='text-xl'>
                                        Career Advice :-
                                        <div className='text-lg'>
                                            {result.zodiac.careerAdvice}
                                        </div>
                                    </div>
                                    <div className='text-xl'>
                                        Health Advice :-
                                        <div className='text-lg'>
                                            {result.zodiac.healthAdvice}
                                        </div>
                                    </div>
                                    <div className='text-xl'>
                                        Relationship Advice :-
                                        <div className='text-lg'>
                                            {result.zodiac.relationshipAdvice}
                                        </div>
                                    </div>
                                </div>
                            </>
                    }
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Page;