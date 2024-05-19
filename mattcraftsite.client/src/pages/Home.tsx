import { Spacer } from "@nextui-org/spacer";
import { Image } from "@nextui-org/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
                        <div className="p-4 flex">
                            <div className="p-4 text-left text-lg">
                                <p>MattCraft is a modded Minecraft server focused on using building/engineering mods to survive in a world with a much higher difficulty level than vanilla Minecraft.</p>
                                <Spacer y={10} ></Spacer>
                                <p>Use technology mods including Create and Immersive Engineering to build complex solutions for survival, automating away the pain.</p>
                                <Spacer y={5} ></Spacer>
                                <p>Apply that technology across new dimensions like the Aether, Bumblezone, Twilight Forest, and Undergarden.</p>
                                <Spacer y={5} ></Spacer>
                                <p>With unskippable blood moons, mutant creatures, and randomly generated minibosses, there's no shortage of challenge.</p>
                                <Spacer y={5} ></Spacer>
                            </div>
                            <div className="p-2 home-carousel-height flex justify-center">
                                <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} interval={ 5000 } >
                                    <div>
                                        <Image src="/images/entering.jpg" alt=""></Image>
                                    </div>
                                    <div>
                                        <Image src="/images/station.jpg" alt=""></Image>
                                    </div>
                                    <div>
                                        <Image src="/images/fort.jpg" alt=""></Image>
                                    </div>
                                    <div>
                                        <Image src="/images/nice.jpg" alt=""></Image>
                                    </div>
                                </Carousel>
                              
                            </div>

                        </div>

                    </div>
                </div>
                <Spacer y={ 20 } ></Spacer>
                <p className="p-4 text-xl">Check out the installation tab for instructions on how to join.</p>
            </div>
        </div>
    );
}