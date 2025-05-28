// src/components/UsageChart.tsx
import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'

interface DataPoint { date: string; percent: number }
interface Props { data: DataPoint[] }

export default function UsageChart({ data }: Props) {
    return (
        <LineChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="date"/>
            <YAxis domain={[0,100]}/>
            <Tooltip/>
            <Line type="monotone" dataKey="percent" dot={false}/>
        </LineChart>
    )
}
