'use client' 
import { MdMoreHoriz } from "react-icons/md";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

const CountChart = () => {

const data = [
    {
      name: 'Total',
      count: 100,
      fill: 'white',
    },
    {
      name: 'Boys',
      count: 50,
      fill: '#BAE1FF',
    },
    {
      name: 'Girl',
      count: 50,
      fill: '#FFB3BA',
    },
  ];
   
  return (
    <div className="bg-white shadow-lg shadow-shadow rounded-xl w-full h-full p-4">
        {/* Title */}
        <div className="flex justify-between items-center">
          <h1 className='text-lg font-semibold'>Students</h1>
          <MdMoreHoriz/>
        </div>
        {/* Chart */}
        <div className="w-full h-[75%]">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
              <RadialBar 
                label={{ position: 'insideStart', fill: '#fff' }}
                background 
                dataKey="count"
              /> 
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
        {/* Bottom */}
        <div  className="flex justify-center gap-16">
          <div className="flex flex-col gap-1 items-center">
            <div className="w-5 h-5 bg-stats-pastel_blue rounded-full" />
            <p className="font-bold">1243</p>
            <p className="text-xs text-info-dark">Boys (54%)</p> 
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div className="w-5 h-5 bg-stats-pastel_pink rounded-full" />
            <p className="font-bold">1433</p>
            <p className="text-xs text-info-dark">Girls (45%)</p> 
          </div>
        </div>
    </div>
  )
}

export default CountChart