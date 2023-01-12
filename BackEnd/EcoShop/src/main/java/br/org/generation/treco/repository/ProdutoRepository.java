package br.org.generation.treco.repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.org.generation.treco.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long>{
	
	//SELECT * FROM tb_produto WHERE nomeProduto LIKE "%?%";
	public List <Produto> findAllByNomeProdutoContainingIgnoreCase(String produto);
	
	//SELECT * FROM tb_produto WHERE preco > ?;
	public List <Produto> findByPrecoGreaterThanOrderByPreco(BigDecimal preco);
	
	//SELECT * FROM tb_produto WHERE preco < ?;
	public List <Produto> findByPrecoLessThanOrderByPrecoDesc(BigDecimal preco);
	
	@Query(value = "select * from tb_produto where preco between :inicio and :fim", nativeQuery = true)
	public List <Produto> buscarProdutoEntre(@Param("inicio") BigDecimal inicio, @Param("fim") BigDecimal fim);

	@Query(value = "SELECT * FROM tb_produto WHERE categoria_id = :id", nativeQuery = true)
    public List <Produto> buscarProdutoPorCategoria(@Param("id") Long id);

}
