package br.org.generation.treco.security;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import br.org.generation.treco.model.Usuario;

/* Classe UserDetailsImpl
 * 
 * Implementa a interface UserDetails, que descreve o usuário para o Spring
 * Security,ou seja, detalha as caracteríticas do usuário.*/
public class UserDetailsImpl implements UserDetails {
	private static final long serialVersionUID = 1L;

	private String userName;
	private String password;
	private List<GrantedAuthority> authorities;

	/* Método construtor com parâmetros
	 * Observe que este método Construtor recebe um objeto Usuario e recupera os
	 * dados necessários através dos respectivos métodos Get*/
	public UserDetailsImpl(Usuario usuario) {
		this.userName = usuario.getUsuario();
		this.password = usuario.getSenha();
	}

	public UserDetailsImpl() {
	}

	/* Sobrecarrega (@Override) o método que retorna as Autorizações da conta do
	 * usuário. Nesta implementação, não há nenhuma autorização negada */
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {

		return userName;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	/* Sobrecarrega (@Override) o método que Indica se o usuário está bloqueado ou desbloqueado.*/
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	/*Sobrecarrega (@Override) o método que indica se as credenciais do usuário(senha) expiraram.*/
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	/*Sobrecarrega (@Override) o método que Indica se o usuário está habilitado ou desabilitado. Se mudar para false nenhum usuário conseguirá logar. */
	@Override
	public boolean isEnabled() {
		return true;
	}
}