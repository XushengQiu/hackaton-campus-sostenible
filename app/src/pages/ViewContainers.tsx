// src/pages/ViewContainers.tsx
import React, { useEffect, useState } from 'react'
import { Contenedor } from '../types/Contenedor'
import ContainersList from '../components/ContainersList'
import ContainerMap from '../components/ContainerMap'

export default function ViewContainers() {
    const [datos, setDatos] = useState<Contenedor[]>([])
    useEffect(() => {
        fetch('/api/contenedores')
            .then(r => r.json())
            .then(setDatos)
    }, [])
    return (
        <div>
            <h2>Lista de contenedores</h2>
            <ContainersList datos={datos}/>
            <h2>Mapa contenedores</h2>
            <ContainerMap datos={datos}/>
        </div>
    )
}
