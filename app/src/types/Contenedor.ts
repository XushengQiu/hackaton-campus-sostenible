// src/types/Contenedor.ts

export interface Contenedor {
    id: string
    type: string
    center: string
    location: string
    latitude: number
    longitude: number
    capacity: number
    unit: string
    filled75: boolean   // true = >75% lleno, false = vacío o ≤75%
}
