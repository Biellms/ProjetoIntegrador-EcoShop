package com.ecoshop.model;

import java.math.BigDecimal;

import javax.persistence.*;
import javax.validation.constraints.*;

import com.fasterxml.jackson.annotation.*;

@Entity
@Table(name = "tb_produtos")
public class Produto {

	// Atributos
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotBlank
	@Size(max = 255)
	private String nomeProduto;
	
	@NotBlank
	@Size(max = 255)
	private String descricao;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	@NotNull
	@Digits(integer=6, fraction=2)
	private BigDecimal preco;
	
	private String imagem;
	
	@ManyToOne // Muitos produtos para uma categoria
	@JsonIgnoreProperties("produto") // Evita o efeito cascata no banco de dados
	private Categoria categoria;
	
	@ManyToOne // Muitos produtos para um usuario
	@JsonIgnoreProperties("produto") // Evita o efeito cascata no banco de dados
	private Usuario usuario;
	
	// Getters and Setters
	public long getId() { return id; }

	public void setId(long id) { this.id = id; }

	public String getNomeProduto() { return nomeProduto; }

	public void setNomeProduto(String nomeProduto) { this.nomeProduto = nomeProduto; }

	public String getDescricao() { return descricao; }

	public void setDescricao(String descricao) { this.descricao = descricao; }

	public BigDecimal getPreco() { return preco; }

	public void setPreco(BigDecimal preco) { this.preco = preco; }

	public String getImagem() { return imagem; }

	public void setImagem(String imagem) { this.imagem = imagem; }

	public Categoria getCategoria() { return categoria; }

	public void setCategoria(Categoria categoria) { this.categoria = categoria; }

	public Usuario getUsuario() { return usuario; }

	public void setUsuario(Usuario usuario) { this.usuario = usuario; }

}
