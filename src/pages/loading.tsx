
import { Inter } from 'next/font/google'
import router from 'next/router';
import React, { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Loading()
{

    const [progress, setProgress] = useState(0);

    useEffect(() =>
    {
        const timer = setInterval(() =>
        {
            setProgress((oldProgress) =>
            {
                if (oldProgress === 100)
                {
                    clearInterval(timer);
                    router.push('/overview');
                    return 100;
                }
                const newProgress = oldProgress + 0.5;
                return newProgress;
            });
        }, 30);

        return () =>
        {
            clearInterval(timer);
        };
    }, []);


    return (
        <main className={`${inter.className} flex flex-col min-h-screen`}>
            <div className='bg-radial-gradient flex flex-col flex-grow items-center justify-between'>
                <div></div>
                <div className='flex flex-col items-center'>
                    <div className='text-text-primary text-36 mb-4 font-semibold'>TruffleAI</div>
                    <div className="w-48 h-1 rounded-full bg-border-color overflow-hidden">
                        <div style={{ width: `${progress}%` }} className="h-full bg-icon-color transition-all duration-2000 ease-out" />
                    </div>
                </div>
                <div className='text-text-secondary text-12 pb-4 self-center'>© 2023 La Famiglia x Rostlab</div>
            </div>
        </main>
    )
}