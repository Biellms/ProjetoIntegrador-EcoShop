import Categoria from "../models/Categoria";
import User from "../models/User";

export type CartApi = Omit<Cart,'amount'>

export type Cart = {
    nomeProduto: string,
    descricao: string,
    preco: number,
    imagem: string;
    categoria?: Categoria | null
    usuario?: User | null
    amount: number
}