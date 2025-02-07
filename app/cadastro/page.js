'use client'
 
import { useState } from "react";
 
export default Cadastro;
 
function Cadastro() {
 
    const [ nome, alteraNome ] = useState("");
    const [ erroNome, alteraErroNome ] = useState(false);
   
    const [ senha, alteraSenha ] = useState("");
    const [ confirma, alteraConfirma ] = useState("");
    const [ erroSenha, alteraErroSenha ] = useState(false);
 
    function salvar(){
        console.log("O nome cadastrado é:"+ nome);
        alteraNome( nome.toUpperCase() )
        // Esse código faz com que tudo oque a pessoa digitou fique em MAIUSCULO
 
        if(nome.length < 5 ){
            alteraErroNome(true)
        }else{
            alteraErroNome(false)
        }  
 
        // Essa parte ele confirma se os textos escritos em senha e confirma senha são identicos, se não forem aparecem o erro "erroSenha == true ?"
        if( senha != confirma ){
            alteraErroSenha(true)
        }else{
            alteraErroSenha(false)
        }
    }
 
    return (
        <main className="p-10">
            <h1 className="text-lg">Cadastro</h1>
 
            <hr/>
 
            <p>Digite seu nome</p>
            <input onChange={ (e)=> alteraNome(e.target.value) } value={nome} className="outline"></input>
            {/* Estamos criando uma variavel (e) "event", ele salva cada tecla apertada pela pessoa, e ele precisa de um "alvo" para saber de onde virá o evento e no caso precisamos oque está dentro do "value" e usamos o camando "e.target.value" e ao mesmo tempo estamos jogando todo esse trelelê dentro da função alteraNome*/}
 
            <br/>
 
            {
                erroNome == true ?
                //nome.length < 5 ? Aqui ele está contando quantas letras tem e por isso precisa usar o "length"
 
                    <div className="bg-red-500 text-white">
                        <p>O nome deve conter pelo menos 5 caracteres</p>
                    </div>
                :
                    <div></div>
            }
 
            <p>Digite sua senha</p>
            <input onChange={ (e)=> alteraSenha(e.target.value) } value={senha} className="outline"></input>
            <br/>
 
            <p>confirme sua senha</p>
            <input onChange={ (e)=> alteraConfirma(e.target.value) } value={confirma} className="outline"></input>
            <br/>
 
            {
                erroSenha == true ?
                //nome.length < 5 ? Aqui ele está contando quantas letras tem e por isso precisa usar o "length"
 
                    <div className="bg-red-500 text-white">
                        <p>As senha digitadas não coicidem...</p>
                    </div>
                :
                    <div></div>
            }
 
            <button onClick={()=>salvar()} className="p-5 mt-5 bg-lime-500 text-white">Salvar</button>
            {/* É preciso colocar o ()  ^ < bem aqui para que ele entenda que é uma função e não uma variavel */}
 
        </main>
     );
}
 