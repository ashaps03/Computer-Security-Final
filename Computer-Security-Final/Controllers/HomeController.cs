using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq; // Add this for JObject

public class HomeController : Controller
{
    [HttpPost]
    public IActionResult CreateAccount([FromBody] JObject data)
    {
        // Your JavaScript sends a POST request with the user data in the request body (as JSON).
        // Here, you can access the data in the 'data' parameter.

        // Extract values from the dynamic object
        string username = data["username"]?.ToString();
        string password = data["password"]?.ToString();

        // Implement your account creation logic here, using username and password.
        // For simplicity, let's assume success for now.

        // Return a response, such as a success message or an error.
        return Json(new { success = true, message = "Account created successfully" });
    }
}
