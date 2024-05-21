import React from "react";
import { useEffect, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Button } from "@nextui-org/react";
import { Spinner } from "@nextui-org/spinner";

import '../App.css';
import '../output.css';
const imgEndpoint = "api/Unmined";

export default function UnminedMap() {
    const [img, setImg] = useState<string>();
    
    useEffect(() => {
        fetchImage();
    }, []);

    async function fetchImage(): Promise<void> {
        const response = await fetch(imgEndpoint);
        console.log(JSON.stringify(response));
        const data = await response.blob();
        const imageObjectUrl = URL.createObjectURL(data);
        setImg(imageObjectUrl);
    }

    if (!img) {
        return (
            <div className = "p-2 flex justify-center">
                <Spinner size="lg"></Spinner>
            </div>
        );
    }

    return (
        <div>
            <TransformWrapper>
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <React.Fragment>
                        <div className="flex justify-center">
                            <div className="container h-fit px-4 map-size place-content-center">
                                <div className="tools sm:flex gap-4 place-content-center p-2">
                                    <Button onClick={() => zoomIn()}>Zoom In</Button>
                                    <Button onClick={() => zoomOut()}>Zoom Out</Button>
                                    <Button onClick={() => resetTransform()}>Reset</Button>
                                </div>
                                <TransformComponent>
                                    <img className="p-1" src={img} alt="Map of the current MattCraft server world" />
                                </TransformComponent>
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </TransformWrapper>
        </div>
    );

}
