import { Spacer } from "@nextui-org/react";

export default function NotFound() {
    return (
        <div>
            <div className="self-start">
                <Spacer y={10} ></Spacer>
                <h1 className="minecraft-font ">How did you get here?</h1>
                <Spacer y={10} ></Spacer>
            </div>
            <p>There's nothing to see here. Try again.</p>
        </div>
    );
}