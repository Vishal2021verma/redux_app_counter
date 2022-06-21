import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
function ProductCard() {
  const product = useSelector((state) => state.allproducts.count);

  return (
    <>
      {(product || []).map((products, index) => {
        return (
          <div className="card">
            <Card key={index} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={products.image} style={{height: "20rem"}}  />
              <Card.Body>
                <Card.Title>{products.title}</Card.Title>
                <Card.Body>
                  <Card.Text>Price: {products.price}</Card.Text>
                  <Card.Text>Rating: {products.rating.rate}</Card.Text>
                </Card.Body>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </>
  );
}
export default ProductCard;
