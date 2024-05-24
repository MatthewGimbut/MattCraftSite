import { Spacer, Image, Link } from "@nextui-org/react";
import '../App.css';

const checkEmoji: number = 0x2714;

export default function Installation() {
    return (
        <div className="grid grid-cols-1">
            <Spacer y={10} ></Spacer>
            <div className="minecraft-font">
                <h1>Installation</h1>
            </div>
            <Spacer y={10} ></Spacer>
            <div className="grid grid-cols-2 p-4 w-4/5 justify-self-center">
                <div className="grid grid-cols-2 p-2 text-left">
                    <div className="p-2">
                        <p className="text-xl underline minecraft-font">Install the mod pack</p>
                        <p className="p-1">{String.fromCodePoint(checkEmoji)} Download and install <Link isExternal href="https://www.azul.com/downloads/?version=java-17-lts&package=jdk#zulu">Java 17</Link> if it or a newer version isn't already installed on your computer.</p>
                        <p className="p-1">{String.fromCodePoint(checkEmoji)} Download the <Link isExternal href="https://download.curseforge.com/">CurseForge client</Link>.</p>
                        <p className="p-1">{String.fromCodePoint(checkEmoji)} Navigate to the <Link isExternal href="https://www.curseforge.com/minecraft/modpacks/matt-craft-modpack">MattCraft</Link> modpack.</p>
                        <p className="p-1">{String.fromCodePoint(checkEmoji)} Click files and select the most recent version.</p>
                        <p className="p-1">{String.fromCodePoint(checkEmoji)} Click "Install" and if prompted, "Open link". This will open the modpack in the CurseForge client and begin downloading the mods.</p>
                        <p className="p-1">{String.fromCodePoint(checkEmoji)} Click the three dots next to the play button, then "Profile Options", and then uncheck "Use System Memory Settings". Drag the slider to anywhere over 8000MB.</p>
                        <p className="p-1">{String.fromCodePoint(checkEmoji)} Once complete, click the modpack and then click play. You're now ready to join the server!</p>
                        <p className="p-1 exclamation-mark">{String.fromCodePoint(checkEmoji)} If you see a red X after adding the server to Minecraft, it is safe to ignore. You can still connect.</p>

                    </div>
                    <div className="p-2">
                        <p className="text-xl underline minecraft-font">Install shaders [optional]</p>
                        <p className="">Optifine is the popular choice but it has many compatibility issues and will likely lead to crashes with the modpack. We recommend the following if you're interested in shaders.</p>
                        <Spacer y={2} ></Spacer>
                        <p className="p-1">{String.fromCodePoint(checkEmoji)} Download the <Link isExternal href="https://www.curseforge.com/minecraft/mc-mods/oculus/files/4952626">Oculus</Link> and <Link isExternal href="https://www.curseforge.com/minecraft/mc-mods/embeddium/files/4949986">Embeddium</Link> .jar files for Minecraft version 1.20.1.</p>
                        <p className="p-1">{String.fromCodePoint(checkEmoji)} Download the shader pack of your choice.</p>
                        <p className="p-1">{String.fromCodePoint(checkEmoji)} In the CurseForge client, select the modpack and click "Open Folder" in the options menu next to "Play".</p>
                        <p className="p-1">{String.fromCodePoint(checkEmoji)} Put the two .jar files from step 0 in the "mods" folder. These mods are clientside only and will not affect the modpack installation.</p>
                        <p className="p-1">{String.fromCodePoint(checkEmoji)} Put your shaderpack .zip in the "shaderpacks" folder.</p>
                        <p>You can now launch the game and consider your shaders in the "Video Settings..." option in Minecraft.</p>
                    </div>
                    <div className="p-2">
                        <p className="text-xl underline minecraft-font">Configure your game [optional]</p>
                        <p className="">With over 150 mods, there are a lot of overlapping keybindings. These can all be managed in your control settings and are sorted by mod name. Here are a few suggestions to get you started...</p>
                        <Spacer y={2} ></Spacer>
                        <p className="p-1">{String.fromCodePoint(checkEmoji)} Sophisticated Backpacks - Bind "Open Backpack".</p>
                        <p className="p-1">{String.fromCodePoint(checkEmoji)} Voice Chat - Bind "Voice Chat Settings" and "Push To Talk".</p>
                        <Spacer y={5} ></Spacer>
                    </div>
                </div>
                <div className="">
                    <Image src="/images/factory.jpg"></Image>
                </div>
                
            </div>

        </div>
    );
}

