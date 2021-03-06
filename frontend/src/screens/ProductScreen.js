import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import Rating from '../components/Rating';


function ProductScreen(props) {
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        };
    }, [])

    const handleAddToCart = () => {
        props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
    };

    return (
        <div>
            <div className="back-to-result">
                <Link to="/">Back to results</Link>
            </div>
            {loading ? <div>Loading...</div> : //if it is loading
                error ? <div>{error}</div> : // if there is an error
                    (<div className="details">
                        <div className="details-image">
                            <img src={product.image} alt="product" />
                        </div>
                        <div className="details-info">
                            <ul>
                                <li>
                                    <h4>{product.name}</h4>
                                </li>
                                <li>
                                    <a href="#reviews">
                                        <Rating
                                        value={product.rating}
                                        text={product.numReviews + ' reviews'}
                                        />
                                    </a>
                                </li>
                                <li>
                                    Price :<b> ${product.price}</b>
                                </li>
                                <li>
                                    Description:
                                    <div>
                                        {product.description}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="details-action">
                            <ul>
                                <li>
                                    Price: ${product.price}
                                </li>
                                <li>
                                    Status: {product.countInStock>0? "In Stock": "Unavailable"}
                                </li>
                                <li>
                                    <div className="custom-select">
                                        Qty: <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                                            {[...Array(product.countInStock).keys()].map((x) =>
                                                <option key={x+1} value={x + 1}>{x + 1}
                                                </option>)}
                                        </select>
                                    </div>
                                </li>
                                <li>
                                    {product.countInStock>0 && <button onClick={handleAddToCart} className="button">Add to Cart</button>}
                                </li>
                            </ul>
                        </div>
                    </div>)
            }

        </div>
    );
}
export default ProductScreen;