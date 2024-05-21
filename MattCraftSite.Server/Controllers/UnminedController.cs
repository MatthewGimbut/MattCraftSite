using Azure;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Microsoft.AspNetCore.Mvc;
using System.IO.Compression;
using System.Net;
using System.Transactions;

namespace MattCraftSite.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UnminedController : AzureController
    {
        private readonly ILogger<UnminedController> _logger;

        public UnminedController(ILogger<UnminedController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            string containerName = "map";
            string blobName = "map.jpg";

            BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(containerName);
            BlobClient blobClient = containerClient.GetBlobClient(blobName);
            BlobDownloadResult content = await blobClient.DownloadContentAsync();

            return Ok(content.Content.ToStream());
        }
    }
}
