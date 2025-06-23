"use client"

import { Loader } from "@googlemaps/js-api-loader"
import { useEffect, useRef } from "react"

export function GoogleMap() {
    const mapRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        async function handleGoogleMaps() {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: "quarterly",
                libraries: ["places"]
            });

            const { Map } = await loader.importLibrary("maps")

            const location = {
                lat: -23.7372386,
                lng: -46.5798619
            }

            const options: google.maps.MapOptions = {
                center: location,
                zoom: 18,
                mapId: "map"
            }

            const map = new Map(mapRef.current as HTMLElement, options)

            const { AdvancedMarkerElement } = await loader.importLibrary("marker") as google.maps.MarkerLibrary

            new AdvancedMarkerElement({
                position: location,
                map: map,
                title: "Skina Cell"
            })
        }

        handleGoogleMaps()
    }, [])

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-2xl md:text-3xl font-serif my-6">Nosso endereço</h1>
            <div ref={mapRef} className="w-10/12 h-[calc(80vh-10rem)]" />
        </div>
    )
}
