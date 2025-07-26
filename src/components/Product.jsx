import { Link } from "react-router-dom";

function Product({ prod }) {
  return (
    <Link to={`/singleProduct/${prod.id}`}>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={prod.thumbnail} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {prod.title}
            <div className="badge badge-secondary">New</div>
          </h2>
          <p className="line-clamp-2">{prod.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-primary">
              Buy {prod.price}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Product;
