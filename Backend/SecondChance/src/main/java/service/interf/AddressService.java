package service.interf;

import dto.AddressDto;
import dto.Response;

public interface AddressService {
	Response saveAndUpdateAddress(AddressDto addressDto);
}
