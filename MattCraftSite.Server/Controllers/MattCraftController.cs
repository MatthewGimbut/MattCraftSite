﻿using Azure;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using MattCraftSite.Server.Models;
using Microsoft.AspNetCore.Mvc;
using System.IO.Compression;
using System.Net;
using System.Transactions;
using MineStatLib;
using Microsoft.VisualBasic;

namespace MattCraftSite.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MattCraftController : AzureController
    {
        private readonly ILogger<MattCraftController> _logger;

        public MattCraftController(ILogger<MattCraftController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ServerStatus Get()
        {
            ServerStatus status = new();
            MineStat mineStat = new(status.Address, 25565);

            if (mineStat.ServerUp)
            {
                status.IsOnline = true;
                
                // Turns out that at the moment, Gamemode is Bedrock specific.
                // Since the MattCraft server is Java edition, this won't work.
                // I'll be leaving it at the default value of "Survival".
                //status.Gamemode = mineStat.Gamemode;
                
                status.Motd = mineStat.Stripped_Motd;
                status.Latency = mineStat.Latency;
                status.Version = mineStat.Version;
                status.CurrentPlayers = mineStat.CurrentPlayersInt;
                status.MaxPlayers = mineStat.MaximumPlayersInt;

                status.PlayerList = 
                    (mineStat.PlayerList != null && mineStat.PlayerList.Length >= 0) 
                    ? new List<string>(mineStat.PlayerList) : [];

                status.Favicon = mineStat.Favicon;
            }
            else
            {
                status.IsOnline = false;
            }

            return status;
        }

        [HttpGet("ModList")]
        public async Task<IActionResult> GetModListAsync()
        {
            string containerName = "modlist";
            string blobName = "modlist.json";

            BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(containerName);
            BlobClient blobClient = containerClient.GetBlobClient(blobName);
            BlobDownloadResult content = await blobClient.DownloadContentAsync();

            return Ok(content.Content.ToString());
        }
    }
}
