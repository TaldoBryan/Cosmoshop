import '../styles/Header.css';

function Header(){
    return(
        <header className="header">
            <div className="header-container">

                <div className="logo">
                    <h1>CosmoShop</h1>
                </div>

                <nav className="navigation">
                    <a href='/'>Início</a>
                    <a href='/produtos'>Produtos</a>
                    <a href='/login'>Login/Cadastro</a>
                </nav>
                
                <div className='header-actions'>
                    <button className='cart-button'>
                        🛒
                    </button>
                </div>

            </div>
        </header>
    )
}
export default Header