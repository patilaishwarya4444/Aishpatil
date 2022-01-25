package black.box.Light;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
@Service
public class CorporateServices {
	@Autowired //get the instance/memory of the component
	CorporateRepository repo;
	
public Corporate addingNewOne(Corporate object)
{
	return repo.save(object);
}
}