
import { useState } from "react";
import { useDeleteProductsMutation, useGetProductsQuery } from "../../services/productsApi";
import UpdateProducts from "./UpdateProducts";

const ProductsView = () => {
    const { data: products, isLoading, error } = useGetProductsQuery();

    const [deleteProduct] = useDeleteProductsMutation();
    const [editingProduct, setEditingProduct] =  useState(null);

    const handleDelete = async (id) => {
        await deleteProduct(id)
    }
    
    return (
        <div>
            <h2>Lsit of products</h2>
            {isLoading && <p>Loading...</p>}
            {error && <p>error: {error.message}</p>}

            {!isLoading && !error && products && products.length > 0 && (
                <section className="products">
                    {products.map((product) => {
                        return <article key={product.id} className="product">
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <p>Price: {product.price}</p>
                            <button onClick={() =>  
                                handleDelete(product.id)}>Delete
                                </button>

                            <button onClick={() => setEditingProduct(product)}>Edit</button>
                        </article>
                    })

                    }
                </section>
            )}
        {editingProduct && <UpdateProducts editingProduct={editingProduct} setEditingProduct={setEditingProduct} /> }
        
        </div>
    );
};

export default ProductsView;