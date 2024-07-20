

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const countDownDate = new Date("nov 24, 2023 00:00:00 PST").getTime();
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft(`${days}-days ${hours}:${minutes} ${seconds}s`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='text-[4rem]'>
            {timeLeft}
        </div>
    );
};

export default CountdownTimer;









