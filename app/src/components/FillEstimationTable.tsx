// src/components/FillEstimationTable.tsx
import React from 'react'

interface Row { id: string; eta: string }

interface Props { rows: Row[] }

export default function FillEstimationTable({ rows }: Props) {
    return (
        <table>
            <thead>
            <tr><th>ID</th><th>Estimación llenado</th></tr>
            </thead>
            <tbody>
            {rows.map(r => (
                <tr key={r.id}>
                    <td>{r.id}</td>
                    <td>{r.eta}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
