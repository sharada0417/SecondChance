package security;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class JwtUtils {
	private static final long EXPIRATION_TIME_IN_MILISEC = 1000L * 60L * 60L * 24L *30L * 6L;
	
	private SecretKey key;
	
	@Value("${secreteJwtString")
	private String secreteJwString;
	
}
