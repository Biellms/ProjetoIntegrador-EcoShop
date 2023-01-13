package com.ecoshop.security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ecoshop.model.Usuario;
import com.ecoshop.repository.UsuarioRepository;

/*  Classe UserDetailsServiceImpl 
 * 
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

		usuario.orElseThrow(() -> new UsernameNotFoundException(userName + " not found."));

		return usuario.map(UserDetailsImpl::new).get();
	}
}