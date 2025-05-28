// src/components/FillForm.tsx
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Contenedor } from '../types/Contenedor'

interface Props {
    contenedores: Contenedor[]
    onFetchData: (id: string, from: Date, to: Date) => void
}

export default function FillForm({ contenedores, onFetchData }: Props) {
    const [selId, setSelId] = useState(contenedores[0]?.id || '')
    const [from, setFrom] = useState<Date | null>(null)
    const [to, setTo] = useState<Date | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (selId && from && to && from <= to)
            onFetchData(selId, from, to)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Contenedor:
                <select value={selId} onChange={e => setSelId(e.target.value)}>
                    {contenedores.map(c => (
                        <option key={c.id} value={c.id}>{c.id}</option>
                    ))}
                </select>
            </label>
            <label>
                Fecha inicio:
                <DatePicker
                    selected={from}
                    onChange={d => setFrom(d)}
                    showTimeSelect
                    dateFormat="Pp"
                />
            </label>
            <label>
                Fecha fin:
                <DatePicker
                    selected={to}
                    onChange={d => setTo(d)}
                    showTimeSelect
                    dateFormat="Pp"
                />
            </label>
            <button type="submit">Mostrar</button>
        </form>
    )
}
