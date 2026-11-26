import "../styles/ProductCard.css";

export default function ProductCard({ produto }) {
    return (
        <article className="product-card">

            <img
                src={produto.imagem}
                alt={produto.nome}
                className="product-card-image"
            />

            <div className="product-card-info">

                <span className="product-card-category">
                    {produto.categoria}
                </span>

                <h3>{produto.nome}</h3>

                <p>{produto.descricao}</p>

                <strong>
                    R$ {Number(produto.preco).toFixed(2)}
                </strong>

            </div>

        </article>
    );
}
