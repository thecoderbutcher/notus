'use client'

import { useState } from "react";
import { MdMoreHoriz } from "react-icons/md"; 
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece]

const events = [
    {id:1,
        title:"lorem ipsu dolor",
        time: "12:00 PM - 16:00 PM",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {id:2,
        title:"lorem ipsu dolor",
        time: "12:00 PM - 2:00 PM",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {id:3,
        title:"lorem ipsu dolor caa ne sip",
        time: "12:00 PM - 2:00 PM",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
]

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className='bg-white shadow-lg shadow-shadow rounded-xl w-full p-4'>
            <Calendar onChange={onChange} value={value} />
            <div className="flex items-center justify-between">
                <p className="text-xl font-semibold my-4">Events</p>
                <MdMoreHoriz/> 
            </div>
            <div className="flex flex-col gap-4 ">
                { events.map( event =>(
                    <div key={event.id} className="p-2 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-primary/70 even:border-t-variant-dark/70">
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-content/80">{event.title}</p>
                            <span className="text-content/50 text-xs">{event.time}</span>
                        </div>
                        <p className="mt-2 text-content/60 text-sm">{event.description}</p>
                    </div>    
                ))}
            </div>
        </div>
    )
}

export default EventCalendar