import { Spacer, Image, Accordion, AccordionItem } from "@nextui-org/react";
import { Carousel } from "react-responsive-carousel";
import '../App.css';
import '../extra.css';

export default function Faq() {
    return (
        <div className="grid grid-cols-1">
            <Spacer y={10} ></Spacer>
            <div className="minecraft-font">
                <h1>FAQ</h1>
            </div>
            <Spacer y={10} ></Spacer>

            <div className="grid grid-cols-2 p-4 w-4/5 justify-self-center">
                <div className="text-left text-xl p-4">
                    <Accordion variant="bordered">
                        <AccordionItem key="1" title="Why does my game crash when launching Forge?" className="p-2">
                            <p>You probably just need to allocate more RAM. Click the three vertical dots near the "Play" button for the modpack in the CurseForge launcher.
                                Click "Profile Options". Uncheck "Use System Memory Settings" and drag the slider to somewhere between 8,000MB to 10,000MB.</p>
                        </AccordionItem>
                        <AccordionItem key="2" title="Do you accept donations?" className="p-2">
                            <p>No.</p>
                        </AccordionItem>
                        <AccordionItem key="3" title="Where is the server based geographically?" className="p-2">
                            <p>The server is located on the west coast of the US.</p>
                        </AccordionItem>
                        <AccordionItem key="4" title="How do I fix my game crashing with out of memory errors?" className="p-2">
                            <p>Click the three vertical dots near the "Play" button for the modpack in the CurseForge launcher.
                                Click "Profile Options". Uncheck "Use System Memory Settings" and drag the slider to somewhere between 8,000MB to 10,000MB.</p>
                        </AccordionItem>
                        <AccordionItem key="5" title="How does the server handle mod pack updates?" className="p-2">
                            <p>The CurseForge client will alert you when there is a more recent version of the mod pack published.
                                If that's the case, you can use the build in version selector to update and connect.</p>
                        </AccordionItem>
                        <AccordionItem key="6" title="Can I request a new mod be added?" className="p-2">
                            <p>We are not accepting requests for new mods at the moment.</p>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true} interval={5000} >
                        <div>
                            <Image src="/images/b1.jpg" alt=""></Image>
                        </div>
                        <div>
                            <Image src="/images/dawn.jpg" alt=""></Image>
                        </div>
                        <div>
                            <Image src="/images/dusk.jpg" alt=""></Image>
                        </div>
                        <div>
                            <Image src="/images/underdark.jpg" alt=""></Image>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

