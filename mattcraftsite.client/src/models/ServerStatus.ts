export interface ServerStatus {
    address: string;
    port: number;
    gamemode: string;
    motd: string;
    latency: number;
    version: string;
    currentPlayers: number;
    maxPlayers: number;
    playerList: string[];
    favicon: string;
}