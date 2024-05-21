import { Spacer } from "@nextui-org/react";

export default function Installation() {
    return (
        <div className="p-4">
            <div className="flex justify-center">
                <h1>Installation</h1>
            </div>
            <Spacer y={10}></Spacer>
            <div className="grid grid-cols-2 gap-4">
                <div className="grid grid-cols-1 gap-3 p-4">
                    <p>test</p>
                    <p>2</p>
                    <p>3</p>
                </div>
                <div className="grid grid-cols-1 gap-3 p-4">
                    <p>test</p>
                    <p>3</p>
                </div>

            </div>
        </div>
    );
}

