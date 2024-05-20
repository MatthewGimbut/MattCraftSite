import { ServerStatus } from "../models/ServerStatus";
import { useState, useEffect } from "react";
import { Button, Card, Image, Popover, PopoverContent, PopoverTrigger, Skeleton, Divider, CardBody, Spacer } from "@nextui-org/react";
import React from "react";
import '../App.css';

export default function MattCraftStatus() {

    const [status, setStatus] = useState<ServerStatus>();
    const serverStatusApi: string = "api/MattCraft";

    const [isLoaded, setIsLoaded] = React.useState(false);

    useEffect(() => {
        fetchServerStatus();
    }, []);

    async function fetchServerStatus(): Promise<void> {
        const response = await fetch(serverStatusApi);
        const status: ServerStatus = await response.json();
        setStatus(status);
        setIsLoaded(true);
    }

    function formatActivePlayers(): string {
        let list: string = "";

        status?.playerList.forEach(player => {
            list += player + "\n";
        });

        return list;
    }

    return (
        <div className="w-4/5 gap-3">
            <Card className="grid grid-cols-1 space-y-3 p-3" radius="lg">
                <CardBody className="overflow-visible py-2 space-y-2">
                    <Skeleton isLoaded={isLoaded} className="rounded-lg ">
                        <div className="grid grid-cols-3">
                            <Image src={"data:image/jpeg;base64," + status?.favicon}></Image>
                            <div>
                                <p className="text-center text-small">{status ? "check" : "x"}</p>
                                <p className="text-center text-small">{status ? "Online" : "Offline"}</p>
                            </div>
                            <div className="float-right">
                                <Popover key="primary" color="primary" placement="top">
                                    <PopoverTrigger>
                                        <Button className="float-right" color="primary"><p>{status?.currentPlayers}/{status?.maxPlayers} players</p></Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <div className="px-1 py-2">
                                            <div>
                                                <p className="text-small font-bold">
                                                    Active Players
                                                </p>
                                            </div>
                                            <div className="text-tiny">
                                                <p>
                                                    {formatActivePlayers()}
                                                </p>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                                <p className="text-right"></p>
                            </div>
                        </div>
                    </Skeleton>
                    <Divider />
                    <div className="space-y-3">
                        <Skeleton isLoaded={isLoaded} className="rounded-lg">
                            <div className="rounded-lg bg-default-100">
                                <p className="text-base p-2 text-center">{status?.motd}</p>
                            </div>
                        </Skeleton>
                        <div className="grid grid-cols-3 justify-items-center">
                            <Skeleton isLoaded={isLoaded} className="w-3/5 rounded-lg">
                                <div className="rounded-lg bg-default-100">
                                    <p className="text-base p-2 text-center">Latency: {status?.latency}ms</p>
                                </div>
                            </Skeleton>
                            <Skeleton isLoaded={isLoaded} className="w-3/5 rounded-lg">
                                <div className="rounded-lg bg-default-100">
                                    <p className="text-base p-2 text-center">Version: {status?.version}</p>
                                </div>
                            </Skeleton>
                            <Skeleton isLoaded={isLoaded} className="w-4/5 rounded-lg">
                                <div className="rounded-lg bg-default-100">
                                    <p className="text-base p-2 text-center">Gamemode: {status?.gamemode}</p>
                                </div>
                            </Skeleton>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}