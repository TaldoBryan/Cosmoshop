import '../styles/Header.css';

function Header(){
    return(
        <Header className="header">
            <div className="header-container">

                <div className="logo">
                    <h1>CosmoShop</h1>
                </div>

                <nav className="navigation">
                    <a href='/'>Início</a>
                    <a href='/produtos'>Produtos</a>
                    <a href='/sobre'>Sobre</a>
                </nav>
                
                <div className='header-actions'>
                    <button className='cart-button'>
                        🛒 Carrinho
                    </button>
                </div>

            </div>
        </Header>
    )
}
export default Header