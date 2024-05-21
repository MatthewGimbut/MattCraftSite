using Azure;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using MattCraftSite.Server.Models;
using Microsoft.AspNetCore.Mvc;
using System.IO.Compression;
using System.Net;
using System.Transactions;

namespace MattCraftSite.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MattCraftController : ControllerBase
    {
        private readonly ILogger<MattCraftController> _logger;

        public MattCraftController(ILogger<MattCraftController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ServerStatus Get()
        {
            byte[] iconBytes = System.IO.File.ReadAllBytes("C:\\Users\\mattg\\workspace\\MinecraftServer1-20-1\\forge\\server-icon.png");

            Thread.Sleep(2000);

            ServerStatus status = new ServerStatus
            {
                Address = "mc.server.matt-craft.com",
                Port = 25565,
                Gamemode = "Survival",
                Motd = "MattCraft MOTD",
                Latency = 32,
                Version = "1.20.1",
                CurrentPlayers = 1,
                MaxPlayers = 32,
                PlayerList = new[]
                {
                    "Brimast_mg"
                },
                Favicon = Convert.ToBase64String(iconBytes)
            };


            return status;
        }
    }
}
