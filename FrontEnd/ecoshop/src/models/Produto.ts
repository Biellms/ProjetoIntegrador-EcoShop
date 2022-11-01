import Categoria from "./Categoria";
import User from "./User";

interface Produto{
    id: number;
    nomeProduto: string;
    descricao: string;
    preco: number;
    imagem: string;
    categoria?: Categoria | null
    usuario?: User | null
}

export default Produto;