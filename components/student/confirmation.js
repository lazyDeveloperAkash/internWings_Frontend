import React from 'react'
import { RxCross1 } from "react-icons/rx";

const Confirmation = (props) => {

    const { setConfirmation } = props;

    return (
        <>
            <div className='absolute w-full h-full flex items-center top-0 justify-center bg-[#0000001a]'>
                <div className='h-4/5 w-4/5 bg-slate-400'>
                    <RxCross1 onClick={()=> setConfirmation(false)}/>
                    baki ha
                </div>
            </div>
        </>
    )
}

export default Confirmation