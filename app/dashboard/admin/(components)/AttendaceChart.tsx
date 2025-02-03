'use client'
import { BarChart, Bar, Rectangle, XAxis, YAxis } from 'recharts';
import {CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MdMoreHoriz } from "react-icons/md"; 

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
const AttendaceChart = () => {
    return (
        <div className='bg-white shadow-lg shadow-shadow rounded-xl w-full h-full p-4'>
            {/* Top */}
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Attendaces</h1>
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
                    <CartesianGrid 
                        strokeDasharray="3 3" 
                        vertical={false} 
                        stroke='#ddd'
                    />
                    <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tick={{fill:"#d1d5db"}} 
                        tickLine={false}
                    />
                    <YAxis 
                        axisLine={false} 
                        tick={{fill:"#d1d5db"}} 
                        tickLine={false}
                    />
                    <Tooltip 
                        contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}
                    />
                    <Legend 
                        align='left'
                        verticalAlign='top'
                        wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}
                    />
                    <Bar 
                        dataKey="present" 
                        fill="#7380ec" 
                        legendType='circle'
                        radius={[5,5,0,0]}
                    />
                    <Bar 
                        dataKey="absent" 
                        fill="#d65c66" 
                        legendType='circle'
                        radius={[5,5,0,0]}
                    />
                </BarChart>
            </ResponsiveContainer>  
        </div>
    )
}

export default AttendaceChart