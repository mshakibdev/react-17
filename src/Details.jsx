import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import useFetch from "./services/useFetch";
import Spinner from "./Spinner";

export default function Detail(props) {
  const [sku, setSku] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  const { data: product, loading, error } = useFetch("products/" + id);

  if (loading) return <Spinner />;
  if (product.length === 0) return <PageNotFound />;

  if (error) throw error;

  return (
    <div id="detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p id="price">${product.price}</p>
      <select id="sku" value={sku} onChange={(e) => setSku(e.target.value)}>
        <option value="">What Size?</option>
        {product.skus.map((skuObj) => (
          <option key={skuObj.sku} value={skuObj.sku}>
            {skuObj.size}
          </option>
        ))}
      </select>
      <p>
        <button
          className="btn btn-primary"
          disabled={!sku}
          onClick={() => {
            props.addToCart(id, sku);
            navigate("/cart");
          }}
        >
          Add to Cart
        </button>
      </p>
      <img src={`/images/${product.image}`} alt={product.category} />
    </div>
  );
}
