using System.Runtime.CompilerServices;

namespace MattCraftSite.Server.Models
{
    public class ServerStatus
    {
        public string Address { get; set; }

        public int Port { get; set; }

        public string Gamemode { get; set; }

        public string Motd {  get; set; }

        public long Latency { get; set; }

        public string Version { get; set; }

        public int CurrentPlayers { get; set; }

        public int MaxPlayers { get; set; }

        public string[] PlayerList { get; set; }

        // Base64 format
        public string Favicon { get; set; }

        public ServerStatus() { }
    }
}
