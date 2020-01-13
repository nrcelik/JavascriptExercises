using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Clock.Controllers
{
    public class ClockController : Controller
    {
        // GET: Clock
        public ActionResult Index()
        {
            return View();
        }
    }
}