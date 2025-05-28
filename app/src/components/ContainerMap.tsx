import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import * as L from 'leaflet'              // ← namespace import
import { Contenedor } from '../types/Contenedor'
import iconUrl from '../assets/contenedor.png?url'

const containerIcon = new L.Icon({
    iconUrl,
    iconSize: [32, 32]
})

export default function ContainerMap({ datos }: { datos: Contenedor[] }) {
    return (
        <MapContainer
            center={[40.4168, -3.7038]}
            zoom={12}
            style={{ height: 400, width: '100%' }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {datos.map(c => (
                <Marker
                    key={c.id}
                    position={[c.latitude, c.longitude]}
                    icon={containerIcon}
                />
            ))}
        </MapContainer>
    )
}


