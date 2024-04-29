import React from 'react';

interface CardPageProps {
    // Add any props you need for the card page here
}

const CardPage: React.FC<CardPageProps> = () => {
    return (
        <div className='flex flex-col items-center justify-between p-5'>
            Card
        </div>
    );
};

export default CardPage;