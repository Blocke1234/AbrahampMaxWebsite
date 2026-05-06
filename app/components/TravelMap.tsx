'use client'

import { useState } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps'

// ── States lived in ──────────────────────────────────────────────────────────
const LIVED_IN_STATES = [
  'Mississippi', 'Minnesota', 'Tennessee',
  'South Carolina', 'Connecticut', 'Hawaii', 'New Mexico',
]

// ── Countries visited ─────────────────────────────────────────────────────────
const COUNTRIES_VISITED = [
  { name: 'Australia',    coordinates: [133.7751, -25.2744] as [number, number] },
  { name: 'Japan',        coordinates: [138.2529,  36.2048] as [number, number] },
  { name: 'South Korea',  coordinates: [127.7669,  35.9078] as [number, number] },
  { name: 'Greece',       coordinates: [21.8243,   39.0742] as [number, number] },
  { name: 'Canada',       coordinates: [-106.3468, 56.1304] as [number, number] },
  { name: 'India',        coordinates: [78.9629,   20.5937] as [number, number] },
  { name: 'Dubai (UAE)',  coordinates: [55.2708,   25.2048] as [number, number] },
]

const US_GEO  = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'
const WORLD_GEO = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const STATE_NAME_MAP: Record<string, string> = {
  '01': 'Alabama','02': 'Alaska','04': 'Arizona','05': 'Arkansas','06': 'California',
  '08': 'Colorado','09': 'Connecticut','10': 'Delaware','12': 'Florida','13': 'Georgia',
  '15': 'Hawaii','16': 'Idaho','17': 'Illinois','18': 'Indiana','19': 'Iowa',
  '20': 'Kansas','21': 'Kentucky','22': 'Louisiana','23': 'Maine','24': 'Maryland',
  '25': 'Massachusetts','26': 'Michigan','27': 'Minnesota','28': 'Mississippi',
  '29': 'Missouri','30': 'Montana','31': 'Nebraska','32': 'Nevada','33': 'New Hampshire',
  '34': 'New Jersey','35': 'New Mexico','36': 'New York','37': 'North Carolina',
  '38': 'North Dakota','39': 'Ohio','40': 'Oklahoma','41': 'Oregon','42': 'Pennsylvania',
  '44': 'Rhode Island','45': 'South Carolina','46': 'South Dakota','47': 'Tennessee',
  '48': 'Texas','49': 'Utah','50': 'Vermont','51': 'Virginia','53': 'Washington',
  '54': 'West Virginia','55': 'Wisconsin','56': 'Wyoming',
}

export default function TravelMap() {
  const [hoveredState, setHoveredState]     = useState<string | null>(null)
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)
  const [activeTab, setActiveTab]           = useState<'us' | 'world'>('us')

  return (
    <div className="w-full">
      {/* Tab toggle */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('us')}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
            activeTab === 'us'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-800 text-gray-400 hover:text-white'
          }`}
        >
          🇺🇸 States Lived In
        </button>
        <button
          onClick={() => setActiveTab('world')}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
            activeTab === 'world'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-800 text-gray-400 hover:text-white'
          }`}
        >
          🌍 Countries Visited
        </button>
      </div>

      {/* Map container — 3D tilt effect via CSS perspective */}
      <div
        className="relative rounded-2xl overflow-hidden border border-gray-700 shadow-2xl shadow-purple-900/20"
        style={{ perspective: '1000px' }}
      >
        <div
          style={{
            transform: 'rotateX(6deg)',
            transformOrigin: 'center bottom',
            background: 'linear-gradient(to bottom, #0f0f1a, #0a0a14)',
          }}
        >
          {/* Tooltip */}
          {(hoveredState || hoveredCountry) && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-gray-900 border border-purple-500/50 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg pointer-events-none">
              {hoveredState ?? hoveredCountry}
            </div>
          )}

          {/* US MAP */}
          {activeTab === 'us' && (
            <ComposableMap
              projection="geoAlbersUsa"
              style={{ width: '100%', height: 'auto' }}
              projectionConfig={{ scale: 900 }}
            >
              <Geographies geography={US_GEO}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const stateName = STATE_NAME_MAP[geo.id] ?? ''
                    const isLived   = LIVED_IN_STATES.includes(stateName)
                    const isHovered = hoveredState === stateName

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => setHoveredState(stateName)}
                        onMouseLeave={() => setHoveredState(null)}
                        style={{
                          default: {
                            fill: isLived ? '#7c3aed' : '#374151',
                            stroke: '#4b5563',
                            strokeWidth: 0.5,
                            outline: 'none',
                          },
                          hover: {
                            fill: isLived ? '#a855f7' : '#4b5563',
                            stroke: '#6b7280',
                            strokeWidth: 0.5,
                            outline: 'none',
                            cursor: 'pointer',
                          },
                          pressed: { outline: 'none' },
                        }}
                      />
                    )
                  })
                }
              </Geographies>
            </ComposableMap>
          )}

          {/* WORLD MAP */}
          {activeTab === 'world' && (
            <ComposableMap
              style={{ width: '100%', height: 'auto' }}
              projectionConfig={{ scale: 140, center: [20, 10] }}
            >
              <ZoomableGroup>
                <Geographies geography={WORLD_GEO}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: { fill: '#374151', stroke: '#4b5563', strokeWidth: 0.3, outline: 'none' },
                          hover:   { fill: '#4b5563', stroke: '#6b7280', strokeWidth: 0.3, outline: 'none' },
                          pressed: { outline: 'none' },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {/* Country pins */}
                {COUNTRIES_VISITED.map((country) => (
                  <Marker
                    key={country.name}
                    coordinates={country.coordinates}
                    onMouseEnter={() => setHoveredCountry(country.name)}
                    onMouseLeave={() => setHoveredCountry(null)}
                  >
                    {/* Pulse ring */}
                    <circle r={8} fill="#7c3aed" fillOpacity={0.2} />
                    {/* Dot */}
                    <circle
                      r={4}
                      fill={hoveredCountry === country.name ? '#a855f7' : '#7c3aed'}
                      stroke="#e9d5ff"
                      strokeWidth={1.5}
                      style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                    />
                  </Marker>
                ))}
              </ZoomableGroup>
            </ComposableMap>
          )}
        </div>

        {/* Bottom reflection gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-4 px-1">
        {activeTab === 'us' ? (
          <>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-3 h-3 rounded-sm bg-purple-600 inline-block" />
              Lived here ({LIVED_IN_STATES.length} states)
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-3 h-3 rounded-sm bg-gray-800 border border-gray-700 inline-block" />
              Not yet
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-3 h-3 rounded-full bg-purple-600 inline-block" />
              Visited ({COUNTRIES_VISITED.length} countries)
            </div>
            <div className="flex flex-wrap gap-2 mt-1">
              {COUNTRIES_VISITED.map(c => (
                <span key={c.name} className="text-xs text-gray-500 bg-gray-900 border border-gray-800 px-2 py-0.5 rounded-full">
                  {c.name}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
