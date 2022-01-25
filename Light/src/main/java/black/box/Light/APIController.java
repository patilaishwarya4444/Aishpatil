package black.box.Light;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/rest")
@CrossOrigin(origins="http://localhost:3000")
public class APIController {
	@Autowired
	CorporateServices service;
		@PostMapping("/new")
		public String happy(@RequestBody Corporate corp)
		{
		return service.addingNewOne(corp).getOrg()+"has successfully inserted";
		
	}

}
