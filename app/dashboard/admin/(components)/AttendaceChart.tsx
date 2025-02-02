'use client'
import { BarChart, Bar, Rectangle, XAxis, YAxis } from 'recharts';
import {CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MdMoreHoriz } from "react-icons/md"; 

const AttendaceChart = () => {
    const data = [
        {
          name: 'Mon',
          present: 60,
          absent: 40,
        },
        {
          name: 'Tue',
          present: 70,
          absent: 60,
        },
        {
          name: 'Wen',
          present: 90,
          absent: 75,
        },
        {
          name: 'Thu',
          present: 90,
          absent: 75,
        },
        {
          name: 'Fri',
          present: 65,
          absent: 55,
        }, 
    ];
    return (
        <div className='bg-white shadow-lg shadow-shadow rounded-xl w-full h-full p-4'>
            {/* Top */}
            <div className="flex justify-between">
                <h1>Attendaces</h1>
                <MdMoreHoriz />
            </div>
            {/* Chart */}
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                   barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="present" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    <Bar dataKey="absent" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                </BarChart>
            </ResponsiveContainer>  
        </div>
    )
}

export default AttendaceChart