package br.org.generation.treco.model;

import java.math.BigDecimal;

import javax.persistence.*;
import javax.validation.constraints.*;

import com.fasterxml.jackson.annotation.*;

@Entity
@Table(name = "tb_produto") // Dizer o nome da tabela
public class Produto {

	// Atributos
	@Id // Chave Primaria
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Auto incremento
	private long id;
	
	@NotNull(message = "O atributo Nome Produto é obrigatório!")
	@Size(max = 255, message = "O Nome da Produto deve conter no mínimo 10 caracteres e no máximo 255!")
	private String nomeProduto;
	
	@NotNull(message = "O atributo descricao é obrigatório!")
	@Size(min = 5, max = 255, message = "A descrição deve conter no mínimo 10 caracteres e no máximo 255!")
	private String descricao;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING) // Formatar Preço
	@NotNull(message = "O atributo preço é obrigatório!")
	@Digits(integer=6, fraction=2, message = "O decimal deve conter 6 inteiros e 2 fracionados")
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
