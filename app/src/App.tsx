// src/App.tsx
import React from 'react'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ViewContainers from './pages/ViewContainers'
import ViewFilling from './pages/ViewFilling'
import 'leaflet/dist/leaflet.css'

export default function App() {
    console.log('🚀 App con Router!')
    return (
        <Router>
            <nav style={{ padding: '1rem', background: '#ececec' }}>
                <Link to="/">Visualizar contenedores</Link> |{' '}
                <Link to="/fill">Visualizar llenado</Link>
            </nav>
            <main style={{ padding: '1rem' }}>
                <Routes>
                    <Route path="/" element={<ViewContainers />} />
                    <Route path="/fill" element={<ViewFilling />} />
                    <Route path="*" element={<ViewContainers />} />
                </Routes>
            </main>
        </Router>
    )
}

