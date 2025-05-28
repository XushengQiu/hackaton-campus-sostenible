// src/pages/ViewFilling.tsx
import React, { useEffect, useState } from 'react'
import { Contenedor } from '../types/Contenedor'
import FillForm from '../components/FillForm'
import UsageChart from '../components/UsageChart'
import FillEstimationTable from '../components/FillEstimationTable'

export default function ViewFilling() {
    const [contenedores, setContenedores] = useState<Contenedor[]>([])
    const [chartData, setChartData] = useState<{date:string,percent:number}[]>([])
    const [etaRows, setEtaRows] = useState<{id:string,eta:string}[]>([])

    // cargar lista de contenedores para el <select>
    useEffect(() => {
        fetch('/api/contenedores')
            .then(r => r.json())
            .then(setContenedores)
    }, [])

    const onFetchData = (id:string, from:Date, to:Date) => {
        // asume API: /api/usage?id=...&from=...&to=...
        const qs = `?id=${id}&from=${from.toISOString()}&to=${to.toISOString()}`
        fetch('/api/usage' + qs)
            .then(r => r.json())
            .then((body:{usage:{date:string,percent:number}[], eta:string}) => {
                setChartData(body.usage)
                setEtaRows([{ id, eta: body.eta }])
            })
    }

    return (
        <div>
            <h2>Visualizar llenado</h2>
            <FillForm contenedores={contenedores} onFetchData={onFetchData}/>
            <UsageChart data={chartData}/>
            <h3>Estimación de llenado máximo</h3>
            <FillEstimationTable rows={etaRows}/>
        </div>
    )
}
