import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/spinner";

import '../App.css';
import '../output.css';
const mapEndpoint = "api/Unmined";

export default function UnminedMap() {
    const [mapUrl, setMapUrl] = useState<string>();
    const [error, setError] = useState<string>();
    
    useEffect(() => {
        fetchMapUrl();
    }, []);

    async function fetchMapUrl(): Promise<void> {
        try {
            const response = await fetch(mapEndpoint);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setMapUrl(data.url);
        } catch (err) {
            console.error('Error fetching map URL:', err);
            setError('Failed to load map. Please try again later.');
        }
    }

    if (error) {
        return (
            <div className="p-4 text-center text-red-500">
                {error}
            </div>
        );
    }

    if (!mapUrl) {
        return (
            <div className="p-2 flex justify-center">
                <Spinner size="lg"></Spinner>
            </div>
        );
    }

    return (
        <div className="flex justify-center">
            <div className="container h-fit map-size place-content-center">
                <iframe
                    src={mapUrl}
                    style={{
                        width: '100%',
                        height: '100vh',
                        border: 'none',
                        borderRadius: '0.5rem'
                    }}
                    title="Unmined Map"
                    allowFullScreen
                />
            </div>
        </div>
    );
}
