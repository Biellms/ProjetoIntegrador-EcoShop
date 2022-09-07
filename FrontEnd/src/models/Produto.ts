import Categoria from "./Categoria";

interface Produto{
    id: number;
    nomeProduto: string;
    descricao: string;
    preco: number;
    imagem: string;
    categoria?: Categoria | null
}

export default Produto;