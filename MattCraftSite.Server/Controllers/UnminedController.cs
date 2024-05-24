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
            _logger.LogInformation("Received request for the unmined map.");
            string containerName = "map";
            string blobName = "map.jpg";

            BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(containerName);
            BlobClient blobClient = containerClient.GetBlobClient(blobName);
            BlobDownloadResult content = await blobClient.DownloadContentAsync();

            _logger.LogInformation("Completed request for the unmined map.");

            return Ok(content.Content.ToStream());
        }
    }
}
