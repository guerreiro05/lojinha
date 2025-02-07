'use client'

import { useState } from "react";


export default function Home() {

// aqui entra o javascript normal
// let = carrinho 0;
const[ carrinho, alteracarrinho ] = useState(0);
const [precoproduto, alteraprecoproduto] = useState(25)
const [valortotal, alteravalortotal] = useState()

function manipulacarrinho() {
  alteracarrinho(carrinho + 1);
}

function limpacarrinho() {
  if (carrinho > 0) {
    alteracarrinho(carrinho - 1);
  }
}

function aplicacupom() {
alteraprecoproduto(19)


}


  return (
   <div>
   
   <button  onClick={() => alteracarrinho(0)}  className="bg-yellow-400 text-black mt-5 p-3 rounded">  Limpar </button>
   <button  onClick={() => aplicacupom()} className="bg-black text-white  p-3 rounded">  Adicionar cupom </button>
         
      
      
     

   <h1 className="bg-sky-500 text-white p-3">Lojinha da tj</h1>
   <p className="p3 text-lg">
    Carrinho: <strong> {carrinho} </strong> itens
    </p>

   <hr/>

   <p className="p3 text-lg">
    Valor total: R$ <strong> {carrinho * precoproduto},00 </strong> 
    </p>


   <h2>Produtos</h2>

  <div className="border bg-sky-700 w-fit p-2 text-center text-white">

   <img className="" src="https://placehold.co/200" />
   <h3 className="text-lg text-lime-200 font-bold">Produto modelo</h3>
   <p>R$ {precoproduto},00</p>
   <button onClick={()=>manipulacarrinho(true)} className="bg-lime-400 text-black mt-5 p-3">adicionar ao carrinho</button>
   <hr/>
   <button onClick={()=>limpacarrinho(false)} className="bg-red-400 text-black mt-5 p-3">remover do carrinho</button>




  </div>
   </div>


  );
}
