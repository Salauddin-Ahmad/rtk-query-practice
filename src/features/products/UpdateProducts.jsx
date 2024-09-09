import { useState } from 'react';
import { useUpdateProductMutation } from '../../services/productsApi';

const UpdateProducts = ({ editingProduct, setEditingProduct }) => {

    const [updatedProduct, setUpdatedProduct] = useState(product)
    const [updateProduct] = useUpdateProductMutation();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await updateProduct({
                id: editingProduct.id,
                updatedProduct
            });
            setEditingProduct(null);
            
        } catch (error) {
            console.log('Failed to save the product', error)
        }

    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <h2>Edit product</h2>
                <div>
                    <label>Title</label>
                    <input
                        type='text'
                        placeholder='Title'
                        name="title"
                        value={updateProduct.title}
                        onChange={(e) => {
                            setUpdatedProduct({ ...updatedProduct, title: e.target.value })
                        }
                        }
                    />
                </div>

                <div>
                    <label>Description</label>
                    <input
                        placeholder='Description'
                        name="description"
                        value={updatedProduct.description}
                        onChange={(e) => {
                            setUpdatedProduct({ ...updatedProduct, description: e.target.value })
                        }
                        }
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input
                        type='number'
                        name="price"
                        placeholder='Price'
                        value={updatedProduct.price}
                        onChange={(e) => {
                            setUpdatedProduct({ ...updatedProduct, price: parseFloat(e.target.value) })
                        }
                        }
                    />


                </div>
                <div>
                    <label>Category</label>
                    <input
                        type='text'
                        placeholder='Category'
                        name="category"
                        value={updatedProduct.category}
                        onChange={(e) => {
                            setUpdatedProduct({ ...updatedProduct, category: e.target.value })
                        }
                        }
                    />
                </div>
                <button type='submit'>Save</button>
                <button onClick={() => setEditingProduct(null)}>Cancel</button>
            </form>
        </div>
    );
};

export default UpdateProducts;