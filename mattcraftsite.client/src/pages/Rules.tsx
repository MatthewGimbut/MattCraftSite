import { Spacer, Image } from "@nextui-org/react";
import { Carousel } from "react-responsive-carousel";
export default function Rules() {
    return (
        <div className="grid grid-cols-1">
            <Spacer y={10} ></Spacer>
            <div className="minecraft-font">
                <h1>Rules</h1>
            </div>
            <Spacer y={10} ></Spacer>

            <div className="grid grid-cols-2 p-4 w-4/5 justify-self-center">
                <div className="grid grid-cols-1 text-left text-xl p-4">
                    <p>There are very few server-wide rules in MattCraft. Teams managed through FTB Teams set their own rules asides from the following server-wide requirements:
                    </p>
                    <p>No intentional griefing.</p>
                    <p>No exploiting of bugs/glitches. This applies to both vanilla content and modded content.</p>
                    <p>The use of autoclickers/scripting is prohibited.</p>
                    <p>No harassment, slurs, etc.</p>
                    <p>Use of proximity voice chat is not required, but is storngly encouraged.</p>
                </div>
                <div>
                    <Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true} interval={5000} >
                        <div>
                            <Image src="/images/b2.jpg" alt=""></Image>
                        </div>
                        <div>
                            <Image src="/images/fish.jpg" alt=""></Image>
                        </div>
                        <div>
                            <Image src="/images/aether.jpg" alt=""></Image>
                        </div>
                        <div>
                            <Image src="/images/cave.jpg" alt=""></Image>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

