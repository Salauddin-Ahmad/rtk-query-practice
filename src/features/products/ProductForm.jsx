import { nanoid } from "nanoid";
import { useState } from "react";
import { useAddProductMutation } from "../../services/productsApi";

const ProductForm = () => {
   const [addProduct] = useAddProductMutation()
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
    })

    // useEffect(() => {
    //     if (producToEdit) {
    //         setProduct({
    //             title: producToEdit.title,
    //             price: producToEdit.price,
    //             description: producToEdit.description,
    //             category: producToEdit.category,
    //         })
    //     }

    // }, [producToEdit])

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        // if (isEdit) {
        //     dispatch(updateProduct({ id: producToEdit.id, product: product }))
        //     resetForm()
        // } else {
        //     (dispatch(createProduct({ ...product, id: nanoid() })))
        //     resetForm()
        // } 

        console.log({ ...product, id: nanoid()});
       try {
        await addProduct({...product, id: nanoid() })
       } catch (error) {
        console.log('Failed to save the product', error)
       }

        // setProduct({
        //     title: '',
        //     price: '',
        //     description: '',
        //     category: '',
        // })


    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input
                    name="title"
                    value={product.title}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Price</label>
                <input
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Description</label>
                <input
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Category</label>
                <input
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                />
            </div>
            <button>Add Product</button>

            {/* <button type="submit">
                {isEdit ? "Update Product" : "Add Product"}
            </button> */}
        </form>

    );
};

export default ProductForm;