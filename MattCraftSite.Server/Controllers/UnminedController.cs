using Azure;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Azure.Storage.Sas;
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
            string blobName = "index.html";

            try
            {
                BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(containerName);
                BlobClient blobClient = containerClient.GetBlobClient(blobName);

                // Check if the blob exists
                if (!await blobClient.ExistsAsync())
                {
                    _logger.LogWarning("Unmined map index.html not found in blob storage.");
                    return NotFound("Map data not found. Please ensure unmined has been run.");
                }

                // Generate SAS URL with 7 days expiration for the index.html
                BlobSasBuilder sasBuilder = new BlobSasBuilder()
                {
                    BlobContainerName = containerName,
                    BlobName = blobName,
                    Resource = "b", // b = blob
                    StartsOn = DateTimeOffset.UtcNow.AddMinutes(-5),
                    ExpiresOn = DateTimeOffset.UtcNow.AddDays(7)
                };
                sasBuilder.SetPermissions(BlobSasPermissions.Read);

                Uri sasUri = blobClient.GenerateSasUri(sasBuilder);

                _logger.LogInformation("Generated SAS URL for unmined map.");
                return Ok(new { url = sasUri.ToString() });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error generating SAS URL for unmined map");
                return StatusCode(500, "Error retrieving map data");
            }
        }
    }
}
