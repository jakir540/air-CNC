import React from 'react';
import Calender from '../Calender/Calender';
import Button from '../Button/Button';

const RoomReservation = () => {
    return (
        <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
            <div >
            <div className='flex items-center gap-1 p-4'>
                <h3>$258</h3>
                <h3>night</h3>
            </div>

            </div>
            <div className='flex justify-center w-full'><Calender></Calender></div>
            <hr />
            <div>
        <Button label="Reserve"></Button>

            </div>
            <hr />
            <div className='p-4 flex items-center justify-between font-semibold text-lg'>
                <div>total:</div>
                <div>total:$ 300</div>
            </div>
            
        </div>
    );
};

export default RoomReservation;