package com.ecoshop.model;

import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.swagger.annotations.ApiModelProperty;

@Entity
@Table(name = "tb_usuarios")
public class Usuario {

	// Atributos
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotBlank
	@Size(max = 55)
	private String nome;
	
	@ApiModelProperty(example = "email@email.com.br")
	@Email
	@NotBlank
	@Size(max = 70)
	private String usuario;
	
	@NotBlank
	@Size(min = 8)
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
