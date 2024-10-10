# Carrega as variáveis do arquivo .env
export $(grep -v '^#' .env | xargs)

# Comando para inserir os dados diretamente no container MySQL
docker exec -i $CONTAINER_NAME mysql -u $MYSQLDB_USER -proot --default-character-set=utf8 $MYSQLDB_DATABASE -e "INSERT INTO db_ecoshop.tb_categorias (ativo, descricao, nome_categoria) VALUES (NULL, 'Biodegradável', 'Biodegradável');
INSERT INTO db_ecoshop.tb_categorias (ativo, descricao, nome_categoria) VALUES (NULL, 'Sacolas Ecológicas', 'Ecobags');
INSERT INTO db_ecoshop.tb_categorias (ativo, descricao, nome_categoria) VALUES (NULL, 'Material de Construção Ecológico', 'Material de Construção Ecológico');
INSERT INTO db_ecoshop.tb_categorias (ativo, descricao, nome_categoria) VALUES (NULL, 'Higiene Ecológica', 'Higiene Ecológica');
INSERT INTO db_ecoshop.tb_categorias (ativo, descricao, nome_categoria) VALUES (NULL, 'Bambu', 'Bambu');
INSERT INTO db_ecoshop.tb_categorias (ativo, descricao, nome_categoria) VALUES (NULL, 'Descartáveis', 'Descartáveis');
INSERT INTO db_ecoshop.tb_categorias (ativo, descricao, nome_categoria) VALUES (NULL, 'Material Orgânico', 'Material Orgânico');"