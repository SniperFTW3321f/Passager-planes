/* DATABASE - COMMERCIAL FLEET (15 UNITS) */
const fleetData = [
    // --- BOEING ---
    { 
        id: "b747",
        name: "Boeing 747-400", 
        manufacturer: "Boeing", 
        type: "Wide-body", 
        engine: "Jet",
        image: "https://placehold.co/600x400/00509E/FFF?text=Boeing+747",
        description: "Known as the 'Queen of the Skies', the 747 changed air travel forever. It was the first wide-body airplane produced.",
        specs: { passengers: "416", range: "13,450 km", speed: "933 km/h" }
    },
    { 
        id: "b737",
        name: "Boeing 737-800", 
        manufacturer: "Boeing", 
        type: "Narrow-body", 
        engine: "Jet",
        image: "https://placehold.co/600x400/00509E/FFF?text=Boeing+737",
        description: "The best-selling jet commercial airliner. The 737 is the backbone of short-haul fleets worldwide.",
        specs: { passengers: "189", range: "5,436 km", speed: "842 km/h" }
    },
    { 
        id: "b777",
        name: "Boeing 777-300ER", 
        manufacturer: "Boeing", 
        type: "Wide-body", 
        engine: "Jet",
        image: "https://placehold.co/600x400/00509E/FFF?text=Boeing+777",
        description: "The world's largest twinjet. It bridges the gap between smaller wide-bodies and the massive 747.",
        specs: { passengers: "396", range: "13,649 km", speed: "905 km/h" }
    },
    { 
        id: "b787",
        name: "Boeing 787-9 Dreamliner", 
        manufacturer: "Boeing", 
        type: "Wide-body", 
        engine: "Jet",
        image: "https://placehold.co/600x400/00509E/FFF?text=Boeing+787",
        description: "Constructed largely of composite materials, the Dreamliner offers better fuel efficiency and cabin comfort.",
        specs: { passengers: "290", range: "14,140 km", speed: "903 km/h" }
    },
    { 
        id: "b757",
        name: "Boeing 757-200", 
        manufacturer: "Boeing", 
        type: "Narrow-body", 
        engine: "Jet",
        image: "https://placehold.co/600x400/00509E/FFF?text=Boeing+757",
        description: "A mid-size, narrow-body twin-engine jet airliner known for its power and ability to operate from short runways.",
        specs: { passengers: "200", range: "7,222 km", speed: "850 km/h" }
    },

    // --- AIRBUS ---
    { 
        id: "a380",
        name: "Airbus A380", 
        manufacturer: "Airbus", 
        type: "Wide-body", 
        engine: "Jet",
        image: "https://placehold.co/600x400/00205B/FFF?text=Airbus+A380",
        description: "The world's largest passenger airliner. A double-deck, wide-body, four-engine jet airliner.",
        specs: { passengers: "525", range: "15,200 km", speed: "903 km/h" }
    },
    { 
        id: "a320",
        name: "Airbus A320neo", 
        manufacturer: "Airbus", 
        type: "Narrow-body", 
        engine: "Jet",
        image: "https://placehold.co/600x400/00205B/FFF?text=Airbus+A320",
        description: "The A320neo (New Engine Option) offers significant fuel savings and is a direct competitor to the Boeing 737.",
        specs: { passengers: "180", range: "6,300 km", speed: "828 km/h" }
    },
    { 
        id: "a350",
        name: "Airbus A350-900", 
        manufacturer: "Airbus", 
        type: "Wide-body", 
        engine: "Jet",
        image: "https://placehold.co/600x400/00205B/FFF?text=Airbus+A350",
        description: "A long-range, wide-body airliner featuring the latest aerodynamics and advanced technologies.",
        specs: { passengers: "325", range: "15,000 km", speed: "903 km/h" }
    },
    { 
        id: "a330",
        name: "Airbus A330-300", 
        manufacturer: "Airbus", 
        type: "Wide-body", 
        engine: "Jet",
        image: "https://placehold.co/600x400/00205B/FFF?text=Airbus+A330",
        description: "A popular medium-to-long-range wide-body twin-engine jet airliner.",
        specs: { passengers: "277", range: "11,750 km", speed: "871 km/h" }
    },
    { 
        id: "a220",
        name: "Airbus A220-300", 
        manufacturer: "Airbus", 
        type: "Narrow-body", 
        engine: "Jet",
        image: "https://placehold.co/600x400/00205B/FFF?text=Airbus+A220",
        description: "Originally the Bombardier CSeries, this modern narrow-body is efficient and quiet.",
        specs: { passengers: "135", range: "6,204 km", speed: "829 km/h" }
    },

    // --- REGIONAL & OTHERS ---
    { 
        id: "e195",
        name: "Embraer E195-E2", 
        manufacturer: "Embraer", 
        type: "Regional", 
        engine: "Jet",
        image: "https://placehold.co/600x400/008000/FFF?text=Embraer+E195",
        description: "The largest commercial aircraft manufactured by Embraer, known as the 'Profit Hunter'.",
        specs: { passengers: "132", range: "4,815 km", speed: "870 km/h" }
    },
    { 
        id: "atr72",
        name: "ATR 72-600", 
        manufacturer: "ATR", 
        type: "Regional", 
        engine: "Turboprop",
        image: "https://placehold.co/600x400/555/FFF?text=ATR+72",
        description: "A twin-engine turboprop, short-haul regional airliner capable of operating on shorter runways.",
        specs: { passengers: "70", range: "1,528 km", speed: "510 km/h" }
    },
    { 
        id: "q400",
        name: "Bombardier Q400", 
        manufacturer: "Bombardier", 
        type: "Regional", 
        engine: "Turboprop",
        image: "https://placehold.co/600x400/555/FFF?text=Q400",
        description: "Also known as the Dash 8, this turboprop is fast and efficient for regional routes.",
        specs: { passengers: "78", range: "2,040 km", speed: "667 km/h" }
    },
    { 
        id: "crj900",
        name: "CRJ-900", 
        manufacturer: "Bombardier", 
        type: "Regional", 
        engine: "Jet",
        image: "https://placehold.co/600x400/555/FFF?text=CRJ+900",
        description: "A stretched version of the CRJ700 regional jet, popular in North America.",
        specs: { passengers: "90", range: "2,876 km", speed: "860 km/h" }
    },
    { 
        id: "c919",
        name: "Comac C919", 
        manufacturer: "Comac", 
        type: "Narrow-body", 
        engine: "Jet",
        image: "https://placehold.co/600x400/AA0000/FFF?text=Comac+C919",
        description: "China's answer to the Boeing 737 and Airbus A320, developed by Comac.",
        specs: { passengers: "168", range: "5,555 km", speed: "834 km/h" }
    }
];