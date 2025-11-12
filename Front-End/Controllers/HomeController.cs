using System.Diagnostics;
using System.Threading.Tasks;
using Front_End.Models;
using Front_End.Services;
using Microsoft.AspNetCore.Mvc;

namespace Front_End.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly GoogleSheetsService _googleSheetsService;
        public HomeController(ILogger<HomeController> logger, IConfiguration _configuration)
        {
            _googleSheetsService = new GoogleSheetsService(_configuration);
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Detail()
        {
            return View();
        }
        public IActionResult DetailHondaHr()
        {
            return View();
        }
        public IActionResult DetailHondaCity()
        {
            return View();
        }
        public IActionResult DetailHondaCivic()
        {
            return View();
        }
        public IActionResult DetailHondaAccord()
        {
            return View();
        }
        public IActionResult DetailHondaBRV()
        {
            return View();
        }
        public async Task<IActionResult> Dangky(string name, string phone, string type, string selectedRadio)
        {
            var msg = "";
            var status = 0;
            var Save = await _googleSheetsService.AppendData(name, phone, type, selectedRadio);
            if (Save == 1)
            {
                status = 1;
                msg = "Đăng ký thành công!";
            }
            else
            {
                msg = "Đăng ký thất bại. Vui lòng thử lại.";
            }
            return Ok(new
            {
                status = status,
                msg = msg
            });
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
