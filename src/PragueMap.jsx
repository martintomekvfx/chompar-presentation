import { MapContainer, TileLayer, Polyline, CircleMarker, Marker } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MAP_CENTER, DEFAULT_ZOOM, MAP_STYLE, METRO_B, ART_POINTS } from './mapData'

const CHUMPER_URL = `${import.meta.env.BASE_URL}chumper.png`

const chumperIcon = L.divIcon({
    html: `<img src="${CHUMPER_URL}" style="width: 24px; height: 24px;" />`,
    className: 'chumper-marker',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
})

export default function PragueMap() {
    return (
        <div className="w-full h-full relative">
            <MapContainer
                center={MAP_CENTER}
                zoom={DEFAULT_ZOOM}
                className="w-full h-full"
                zoomControl={false}
                attributionControl={false}
                style={{ background: '#FAFAFA' }}
            >
                <TileLayer
                    url={MAP_STYLE.tileUrl}
                    attribution={MAP_STYLE.attribution}
                />

                {/* Metro B line */}
                <Polyline
                    positions={METRO_B.map(s => s.location)}
                    pathOptions={{
                        color: '#eab308',
                        weight: 4,
                        opacity: 0.6
                    }}
                />

                {/* Metro B stations */}
                {METRO_B.map(station => (
                    <CircleMarker
                        key={station.name}
                        center={station.location}
                        radius={5}
                        pathOptions={{
                            color: '#eab308',
                            fillColor: '#FAFAFA',
                            fillOpacity: 1,
                            weight: 2
                        }}
                    />
                ))}

                {/* Art points */}
                {ART_POINTS.map(point => (
                    <Marker
                        key={point.id}
                        position={point.location}
                        icon={chumperIcon}
                    />
                ))}
            </MapContainer>

            {/* Overlay label */}
            <div className="absolute top-4 left-4 z-[1000] bg-white/90 px-4 py-2 shadow-lg">
                <p className="text-xs tracking-widest text-black/40">PRAGUE</p>
                <p className="text-lg font-bold text-black">{ART_POINTS.length} Chomps</p>
            </div>
        </div>
    )
}
