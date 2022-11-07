package br.org.generation.treco.model;

import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.swagger.annotations.ApiModelProperty;

@Entity
@Table(name = "tb_usuario") // Dizer o nome da tabela
public class Usuario {

	// Atributos
	@Id // Chave Primaria
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Auto incremento
	private long id;
	
	@NotNull(message = "O atributo Nome Completo é obrigatório!")
	@Size(min = 10, max = 255, message = "O Nome da completo deve conter no mínimo 10 caracteres e no máximo 255!")
	private String nome;
	
	@ApiModelProperty(example = "email@email.com.br")
	@Email(message = "O atributo Usuário deve ser um email válido!")
	@NotNull(message = "O atributo Usuário é obrigatório!")
	@Size(max = 255, message = "O Usuário deve conter no mínimo 10 caracteres e no máximo 255!")
	private String usuario;
	
	@NotNull(message = "O atributo senha é obrigatório!")
	@Size(min = 5, max = 255, message = "O usuário deve conter no mínimo 10 caracteres e no máximo 255!")
	private String senha;

	@OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL) // Um usuario para muitos produtos
	@JsonIgnoreProperties("usuario") // Evita o efeito cascata no banco de dados
	private List<Produto> produto;
	
	// Getters and Setters
	public long getId() { return id; }

	public void setId(long id) { this.id = id; }

	public String getNome() { return nome; }

	public void setNome(String nome) { this.nome = nome; }

	public String getUsuario() { return usuario; }

	public void setUsuario(String usuario) { this.usuario = usuario; }

	public String getSenha() { return senha; }

	public void setSenha(String senha) { this.senha = senha; }

	public List<Produto> getProduto() { return produto; }

	public void setProduto(List<Produto> produto) { this.produto = produto; }
	
}
