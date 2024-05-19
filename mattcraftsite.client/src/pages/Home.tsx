import { Spacer } from "@nextui-org/spacer";
import { Image } from "@nextui-org/react";
export default function Home() {

    return (
        <div className="container">

            <div>
                <div>
                    <Spacer y={ 10 } ></Spacer>
                    <h1>MattCraft 1.20.1</h1>
                    <p className="text-xl">mc.server.matt-craft.com:25565</p>
                    <Spacer y={10} ></Spacer>
                    <div className="flex justify-center p-4">
                        <div className="p-4">
                            <p className="text-center text-lg">MattCraft is a modded Minecraft server focused on using building/engineering mods to survive in a world with a much higher difficulty level than vanilla Minecraft.</p>
                            <Spacer y={5} ></Spacer>
                            <p className="text-center text-lg">Use technology mods including Create and Immersive Engineering to build complex solutions for survival, automating away the pain.</p>
                            <p className="text-center text-lg">Apply that technology across new dimensions like the Aether, Bumblezone, Twilight Forest, and Undergarden.</p>
                            <p className="text-center text-lg">With unskippable blood moons, mutant creatures, and randomly generated minibosses, there's no shortage of challenge.</p>
                            <Spacer y={5} ></Spacer>
                            <div className="p-4 flex">
                                <Image width={1024} isBlurred src="/images/station.jpg" alt=""></Image>
                                <Spacer x={ 20 } ></Spacer>
                                <Image width={1024} isBlurred src="/images/fort.jpg" alt=""></Image>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
    );

}
