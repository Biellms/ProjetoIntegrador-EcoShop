package br.org.generation.treco.security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.org.generation.treco.model.Usuario;
import br.org.generation.treco.repository.UsuarioRepository;

/*  Classe UserDetailsServiceImpl 
 *  Implementa a interface UserDetailsService, que é responsável por recuperar os dados
 *  do usuário no Banco de Dados pelo usuário e converter em um objeto da Classe 
 *  UserDetailsImpl.
 *  Por se tratar de uma implementação de uma interface, a classe deve ter em seu nome o 
 *  sufixo Impl para indicar que se trata de uma implementação.
 *	A annotation @Service indica que esta é uma Classe de Serviço, ou seja,
 * implementa regras de negócio da aplicação */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UsuarioRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {

		Optional<Usuario> usuario = userRepository.findByUsuario(userName);

		/* Se o usuário não existir, o método lança uma Exception do tipo  UsernameNotFoundException. */
		usuario.orElseThrow(() -> new UsernameNotFoundException(userName + " not found."));

		/* Retorna um objeto do tipo UserDetailsImpl criado com os dados recuperados do
		 * Banco de dados.
		 * 
		 * O operador :: faz parte de uma expressão que referencia um método,
		 * complementando uma função lambda. Neste exemplo, o operador faz referência ao
		 * construtor da Classe UserDetailsImpl.*/
		return usuario.map(UserDetailsImpl::new).get();
	}
}