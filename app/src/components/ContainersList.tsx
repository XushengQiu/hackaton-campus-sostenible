// src/components/ContainersList.tsx
import React from 'react'
import { Contenedor } from '../types/Contenedor'

interface Props { datos: Contenedor[] }

export default function ContainersList({ datos }: Props) {
    return (
        <table>
            <thead>
            <tr>
                {['ID','Type','Center','Location','Lat','Lng','Cap','Unit'].map(h =>
                    <th key={h}>{h}</th>
                )}
            </tr>
            </thead>
            <tbody>
            {datos.map(c => (
                <tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.type}</td>
                    <td>{c.center}</td>
                    <td>{c.location}</td>
                    <td>{c.latitude}</td>
                    <td>{c.longitude}</td>
                    <td>{c.capacity}</td>
                    <td>{c.unit}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
