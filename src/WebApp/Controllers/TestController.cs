using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using WebApp.Models;
using WebApp.Data;
using Microsoft.AspNetCore.Identity;

namespace WebApp.Controllers
{
    [Produces("application/json")]
    [Route("api/Test")]
    [Authorize]
    public class TestController : Controller
    {
        private readonly ApplicationDbContext context;
        private UserManager<ApplicationUser> _userManager;
        private Task<ApplicationUser> GetCurrentUserAsync() => _userManager.GetUserAsync(HttpContext.User);


        public TestController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            this.context = context;
            this._userManager = userManager;

        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var user = await GetCurrentUserAsync();
            return Ok(user);
        }
    }
}