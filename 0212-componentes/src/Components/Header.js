import React from 'react'

const Header = ({ title }) => {
    
    return (
        <header>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/produtos'>Produtos</a></li>
            </ul>
            <h1 style={{color: 'green'}}>{title}</h1>
        </header>
    )
}

export default Header
