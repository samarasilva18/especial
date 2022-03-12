import React from "react";
import ReactDOM from "react-dom";
//import Componente1 from "./componentes/Componente1"
//import { CompA, CompB as B } from "./componentes/DoisComponentes"
//import MultiElementos from "./componentes/MultiElementos"
//import { Teste1, Teste2, Teste3 } from "./componentes/MultiElementos";
//import FamiliaGomes from "./componentes/FamiliaGomes";
//import Familia from "./componentes/Familia";
//import Nome from "./componentes/Nome";
//import ComponenteComFuncao from "./componentes/ComponenteComFuncao";
import Pai from "./componentes/Pai"

//Git do Professor: https://github.com/XandyGomes

const element = document.getElementById('root')

ReactDOM.render(
    <div>
        {/*<Componente1 valor="Olá pessoal" soma={3 + 4}/>*/}
        {/*<CompA valor = "Primeiro componente"/>*/}
        {/*<B valor = "Segundo componente"/>*/}
        {/*<Teste1/>
        <Teste2/>
        <Teste3/>*/}
        {/*<FamiliaGomes/>*/}
        {/* <Familia sobrenome="Silva " endereco="Rua Tal " numero="Nº 111 " cidade="Franca " estado="SP">
            <Nome nome="João "/>
            <Nome nome="Alexandre "/>
            <Nome nome="Sergio "/>
        </Familia> */}
        {/*<Familia>
            <Nome nome="Joyce " sobrenome="Gomes"/>
            <Nome nome="Josimara " sobrenome="Gomes"/>
            <Nome nome="Janaina " sobrenome="Gomes"/>
        </Familia>*/}
        {/* <FamiliaGomes sobrenome="Gomes"/> */}
        {/* <ComponenteComFuncao/> */}
        <Pai/>
    </div>
, element
)