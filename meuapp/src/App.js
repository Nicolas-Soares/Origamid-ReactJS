import React from 'react'

const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
        { nome: 'Guitarra', preco: 'R$ 3500' }
    ],
    ativa: false
}

const luana = {
    cliente: 'Luana',
    idade: 24,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true
}

function calculateTotal(compras) {
    const result = compras.map((item) => Number(item.preco.replace('R$ ', ''))).reduce((a, b) => a + b)

    return result
}

function App () {
    const dados = mario
    const total = calculateTotal(dados.compras)
    const style = {
        color: 'green',
        text: 'Ativo',
    }

    if (dados.ativa === false) {
        style.color = 'red'
        style.text = 'Inativo'
    }

    return (
        <>
            <p>Nome: {dados.cliente}</p>
            <p>Idade: {dados.idade}</p>
            <p>
                Situação: <span style={{ color: style.color, fontWeight: 'bold' }}>{style.text}</span>
            </p>
            <p>Total gasto: R$ {total}</p>

            {total > 10000 && <p>Você está gastando muito.</p>}
        </>
    )
}

export default App