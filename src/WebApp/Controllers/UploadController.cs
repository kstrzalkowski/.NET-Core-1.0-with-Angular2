using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace WebApp.Controllers
{
    [Produces("application/json")]
    public class UploadController : Controller
    {
        private IHostingEnvironment _environment;


        public UploadController(IHostingEnvironment environment)
        {
            _environment = environment;
        }

        [Route("api/upload")]
        public async Task<ActionResult> Post(IFormFile file)
        {
            try
            {

                var savePath = Path.Combine(_environment.WebRootPath, "uploads", file.FileName);

                int MaxContentLength = 1024 * 1024 * 12; //12 MB
                string[] AllowedFileExtensions = new string[] { ".jpg", ".gif", ".png", ".pdf" };

                if (!AllowedFileExtensions.Contains(file.FileName.Substring(file.FileName.LastIndexOf('.'))))
                {
                    var msg = "Please file of type: " + string.Join(", ", AllowedFileExtensions);
                    return BadRequest(msg);
                }

                else if (file.Length > MaxContentLength)
                {
                    var msg =  "Your file is too large, maximum allowed size is: " + MaxContentLength / 1024 / 1024 + " MB";
                    return BadRequest(msg);
                }


                if (file.Length > 0)
                {
                    using (var fileStream = new FileStream(savePath, FileMode.Create))
                    {
                        await file.CopyToAsync(fileStream);
                    }

                    return Created(savePath, file);
                }
                return BadRequest();

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }

        }
    }
}