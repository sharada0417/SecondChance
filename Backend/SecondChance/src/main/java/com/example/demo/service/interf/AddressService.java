package com.example.demo.service.interf;

import com.example.demo.dto.AddressDto;
import com.example.demo.dto.Response;

public interface AddressService {
	Response saveAndUpdateAddress(AddressDto addressDto);
}
