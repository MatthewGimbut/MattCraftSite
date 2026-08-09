using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Mvc;

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
        public IActionResult Get()
        {
            _logger.LogInformation("Received request for the unmined map.");
            string indexUrl = Url.Action(nameof(GetBlob), "Unmined", new { blobName = "index.html" });
            return Ok(new { url = indexUrl });
        }

        [HttpGet("{*blobName}")]
        public async Task<IActionResult> GetBlob(string blobName)
        {
            const string containerName = "map";

            try
            {
                BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(containerName);
                BlobClient blobClient = containerClient.GetBlobClient(blobName);

                if (!await blobClient.ExistsAsync())
                {
                    return NotFound();
                }

                var properties = await blobClient.GetPropertiesAsync();
                var download = await blobClient.DownloadStreamingAsync();
                var contentType = string.IsNullOrWhiteSpace(properties.Value.ContentType)
                    ? "application/octet-stream"
                    : properties.Value.ContentType;

                Response.Headers.ContentDisposition = "inline";
                return File(download.Value.Content, contentType);
            }
            catch (System.Exception ex)
            {
                _logger.LogError(ex, "Error retrieving unmined map blob {BlobName}", blobName);
                return StatusCode(500, "Error retrieving map data");
            }
        }
    }
}
