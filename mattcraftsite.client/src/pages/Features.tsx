import { useState, useEffect } from "react";
import React from "react";
import '../App.css';
import { Mod } from "../models/Mod";
import { Input, Link, Spacer } from "@nextui-org/react";
import { SearchIcon } from "../components/SearchIcon";

export default function Features() {

    const [subset, setSubset] = useState<Mod[]>([]);
    const [modList, setModList] = useState<Mod[]>([]);
    const modListApi: string = "api/MattCraft/ModList";

    useEffect(() => {
        fetchModList();
    }, []);

    async function fetchModList(): Promise<void> {
        const response = await fetch(modListApi);
        const result = await response.json();
        setModList(result);
        setSubset(result);
    }

    function updateSearch(search: string): void {
        if (search) {
            const searchResults: Mod[] = modList.filter(mod => mod.Name.toLowerCase().includes(search));
            setSubset(searchResults);
        } else {
            setSubset(modList);
        }
    }

    return (
        <div className="features-div-height">
            <div className="self-start">
                <Spacer y={10} ></Spacer>
                <h1 className="minecraft-font ">Mod List</h1>
                <Spacer y={10} ></Spacer>
            </div>
            <div className="self-start justify-center flex">
                <Input
                    isClearable
                    radius="lg"
                    type="text"
                    placeholder="Search mods..."
                    className="w-2/5"
                    startContent={
                        <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                    }
                    onChange={(event) => {
                        updateSearch(event.target.value);
                    }
                    }
                    onClear={() => {
                        setSubset(modList);
                    }
                    }
                />
            </div>
            <div className="features-div-height">

                <Spacer y={10} ></Spacer>
                <div className="p-3 overflow-y-scroll search-height">
                    <div className="grid grid-cols-5 h-1/5 search-height">
                        {subset.map((mod: Mod, index: number) => <Link className="p-2 text-base text-left" isExternal showAnchorIcon key={index} href={mod.Url}>{mod.Name.trim()}</Link>)}
                    </div>
                </div>
            </div>
        </div>
    );
}