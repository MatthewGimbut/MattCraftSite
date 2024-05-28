import { ServerStatus } from "../models/ServerStatus";
import { useState, useEffect } from "react";
import { Button, Card, Image, Popover, PopoverContent, PopoverTrigger, Skeleton, Divider, CardBody, Spinner } from "@nextui-org/react";
import React from "react";
import '../App.css';

const checkEmoji: number = 0x2705;
const xEmoji: number = 0x274C;

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

    if (!isLoaded) {
        return (
            <div>
                <Spinner size="lg">Fetching server status... this will take a few seconds!</Spinner>
            </div>
        );
    }

    return (
        <div style={{ minWidth: '450px' }} className="w-4/5 gap-3">
            <Card className="grid grid-cols-1 space-y-3 p-3 bg-minecraft-dirt server-status-text " radius="lg">
                <CardBody className="overflow-visible py-2">
                    <Skeleton isLoaded={isLoaded} className="rounded-lg ">
                        <div className="grid grid-cols-3">
                            <Image src={status?.favicon}></Image>
                            <div className="server-status-text flex justify-center">
                                <p className="text-center text-small">{status?.isOnline ? String.fromCodePoint(checkEmoji) : String.fromCodePoint(xEmoji)}</p>
                                <p className="text-center text-small">{status?.isOnline ? " Online" : " Offline"}</p>
                            </div>
                            <div className="float-right">
                                <Popover key="success" color="success" placement="top">
                                    <PopoverTrigger>
                                        <Button className="float-right green-button" color="success"><p>{status?.currentPlayers}/{status?.maxPlayers} players</p></Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <div className="">
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
                            </div>
                        </div>
                    </Skeleton>
                    <Divider />
                    <div className="space-y-3 server-status-text ">
                        <Skeleton isLoaded={isLoaded} className="rounded-lg">
                            <div className="rounded-lg">
                                <p className="text-base p-2 text-center">{status?.motd}</p>
                            </div>
                        </Skeleton>
                        <div className="grid grid-cols-3 justify-items-center">
                            <Skeleton isLoaded={isLoaded} className="w-3/5 rounded-lg">
                                <div className="rounded-lg">
                                    <p className="text-xs p-2 text-center">Latency</p>
                                    <p className="text-xs p-2 text-center">{status?.latency ? status.latency + " ms" : "n/a"}</p>
                                </div>
                            </Skeleton>
                            <Skeleton isLoaded={isLoaded} className="w-3/5 rounded-lg">
                                <div className="rounded-lg">
                                    <p className="text-xs p-2 text-center">Version</p>
                                    <p className="text-xs p-2 text-center">{status?.version}</p>
                                </div>
                            </Skeleton>
                            <Skeleton isLoaded={isLoaded} className="w-4/5 rounded-lg">
                                <div className="rounded-lg">
                                    <p className="text-xs p-2 text-center">Gamemode</p>
                                    <p className="text-xs p-2 text-center">{status?.gamemode}</p>
                                </div>
                            </Skeleton>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}