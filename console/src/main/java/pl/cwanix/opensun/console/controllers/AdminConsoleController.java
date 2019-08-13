package pl.cwanix.opensun.console.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AdminConsoleController {
	
	@GetMapping({"/{path:[^\\.]*}", "/**/{path:^(?!api).*}/{path:[^\\.]*}"})
	public String redirect() {
		return "forward:/";
	}

}
