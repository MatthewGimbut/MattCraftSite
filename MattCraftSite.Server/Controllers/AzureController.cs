using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Mvc;

namespace MattCraftSite.Server.Controllers
{
    public class AzureController : ControllerBase
    {
        public BlobServiceClient blobServiceClient { get; }

        public AzureController() 
        {
            this.blobServiceClient = new BlobServiceClient(Environment.GetEnvironmentVariable("StorageAccountConnectionString"));
        }
    }
}
