const ProductList = () => {

    const products = [
        {id: 1, name: 'Xiomi', price: 1000},
        {id: 2, name: 'Samsung', price: 2000},
        {id: 3, name: 'Nothing', price: 1000}

    ]

    return <div>
        {products.map((products) => (
            <div key={products.id}>
                <h1>Prodct Name: {products.name}</h1>
                <h2>Product price: {products.price}</h2>
            </div>            

        ))}

    </div>

}

export default ProductList