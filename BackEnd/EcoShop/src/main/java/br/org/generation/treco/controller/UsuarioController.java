package br.org.generation.treco.controller;

import java.util.*;

import javax.validation.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import br.org.generation.treco.model.Usuario;
import br.org.generation.treco.model.UsuarioLogin;
import br.org.generation.treco.repository.UsuarioRepository;
import br.org.generation.treco.service.UsuarioService;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UsuarioController {

	/*Faz uma injeção de dependência da classe de Serviço UsuarioService
	 * para ter acesso aos métodos do CRUD com regras de negócio.*/
	@Autowired
	private UsuarioService usuarioService;
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	// SELECT * FROM tb_usuarios;
	@GetMapping("/all")
	public ResponseEntity <List<Usuario>> getAll() {
		return ResponseEntity.ok(usuarioRepository.findAll());
	}
	
	/* SELECT * FROM tb_usuarios WHERE usuario LIKE '%?%';
	@GetMapping("/usuario/{usuario}")
	public ResponseEntity<List<Usuario>> getByUsuario (@PathVariable String usuario) {
		return ResponseEntity.ok(usuarioRepository.findByUsuario(usuario));
	}*/
	
	/*Executa o método autenticarUsuario da classe de serviço para efetuar
	 * o login na api. O método da classe Controladora checa se deu certo e
	 * exibe as mensagens (Response Status) pertinentes. 
	 * 
	 * Caso o login tenha sido bem sucedido, os dados do usuário e o token 
	 * são exibidos. */
	@PostMapping("/logar")
	public ResponseEntity<UsuarioLogin> login(@RequestBody Optional<UsuarioLogin> user) {
		return usuarioService.autenticarUsuario(user)
			.map(respostaAutenticacao -> ResponseEntity.ok(respostaAutenticacao))
			.orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
	}

	/* Executa o método cadastrarUsuario da classe de serviço para criar
	 * um novo usuário na api. O método da classe Controladora checa se 
	 * deu certo e exibe as mensagens (Response Status) pertinentes. 
	 * 
	 * Caso cadastro tenha sido bem sucedido, os dados do usuário são 
	 * exibidos. */
	@PostMapping("/cadastrar")
	public ResponseEntity<Usuario> postUsuario(@Valid @RequestBody Usuario usuario) {
		return usuarioService.cadastrarUsuario(usuario)
			.map(respostaCadastro -> ResponseEntity.status(HttpStatus.CREATED).body(respostaCadastro))
			.orElse(ResponseEntity.status(HttpStatus.BAD_REQUEST).build());

	}

	/* Executa o método atualizarUsuario da classe de serviço para atualizar
	 * os dados de um usuário na api. O método da classe Controladora checa 
	 * se deu certo e exibe as mensagens (Response Status) pertinentes. 
	 * 
	 * Caso a atualização tenha sido bem sucedida, os dados do usuário 
	 * atualizados são exibidos. */
	@PutMapping("/atualizar")
	public ResponseEntity<Usuario> putUsuario(@Valid @RequestBody Usuario usuario) {
		return usuarioService.atualizarUsuario(usuario)
			.map(resposta -> ResponseEntity.status(HttpStatus.OK).body(resposta))
			.orElse(ResponseEntity.status(HttpStatus.BAD_REQUEST).build());
	}
}