'use client'

import { MdMoreHoriz } from "react-icons/md"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,
    expence: 2400, 
  },
  {
    name: 'Feb',
    income: 2000,
    expence: 3400, 
  },
  {
    name: 'Mar',
    income: 5000,
    expence: 1400, 
  },
  {
    name: 'May',
    income: 8000,
    expence: 400, 
  },
  {
    name: 'Jun',
    income: 5400,
    expence: 4400, 
  },
  {
    name: 'Jul',
    income: 7000,
    expence: 4230, 
  },
  {
    name: 'Aug',
    income: 4000,
    expence: 2400, 
  },
  {
    name: 'Sep',
    income: 4000,
    expence: 2400, 
  },
  {
    name: 'Oct',
    income: 6000,
    expence: 8400, 
  },
  {
    name: 'Nov',
    income: 8000,
    expence: 6400, 
  },
  {
    name: 'Dec',
    income: 12000,
    expence: 3400, 
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white shadow-lg shadow-shadow rounded-xl w-full h-full p-4">
        {/* Title */}
        <div className="flex justify-between items-center">
            <h1 className='text-lg font-semibold'>Finances</h1>
            <MdMoreHoriz/>
        </div>
        {/*Chart */}
        <ResponsiveContainer width="100%" height="90%">
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
                dataKey="name" 
                axisLine={false} 
                tick={{fill:"#d1d5db"}} 
                tickLine={false}/>
                tickMargin={10}
            <YAxis 
                axisLine={false} 
                tick={{fill:"#d1d5db"}} 
                tickLine={false}
                tickMargin={10}
            />
            <Tooltip />
            <Legend 
                align='center'
                verticalAlign='top'
                wrapperStyle={{paddingTop:"10px", paddingBottom:"10px"}}
            />
            <Line 
                type="monotone" 
                dataKey="income" 
                stroke="#2ca380" 
                activeDot={{ r: 8 }} 
                strokeWidth={2}
            />
            <Line 
                type="monotone" 
                dataKey="expence" 
                stroke="#ff7782" 
                strokeWidth={2}
            />
            </LineChart>
        </ResponsiveContainer> 
    </div>
  )
}

export default FinanceChart