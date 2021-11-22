import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { useRouter } from "next/router";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import catchErrors from "../../utils/catchErrors";
import cookie from "js-cookie";


export default function CourseList({ products }) {
  const [hover, setHover] = React.useState("none");
  const [success, setSuccess] = React.useState(false);
  const router = useRouter();

  products = products.filter(product => product.status === "active");


  let customer = true;
  // if (user) {
  //   if (user.role === "user") {
  //     customer = true;
  //   }
  // }


  async function handleAddProductToCart(productId, productPrice) {
    try {
      const url = `${baseUrl}/api/cart`;
      const payload = { productId, productPrice };
      const token = cookie.get("token");
      const headers = { headers: { Authorization: token }};
      await axios.put(url, payload, headers);
      setSuccess(true);
    } catch (error) {
      catchErrors(error, window.alert);
    } finally {
      router.reload();
    }
  }


  function mapProductsToItems(products) {
    return products.map(product => (
      <div class="col-12 col-md-6 col-lg-4 col-xl-3 productCard"
        onMouseEnter={() => setHover(product._id)}
        onMouseLeave={() => setHover("none")}
      >
        <a class="productLink" href={`/products/product?_id=${product._id}`}>
          <img src={product.imageURL} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-name styled-font-md">{product.name}</h5>
            <p class="card-desc styled-font-tn">{product.shortDesc}</p>
            <p class="card-price styled-font-md">
              {`${(product.price).toFixed(2)}` + " " + String.fromCharCode(8362) }
            </p>
          </div>
        </a>
        {customer ? (
          <Button fluid color="instagram" icon="cart"
            className={hover !== product._id ? "add-to-cart-hidden" : "add-to-cart"}
            onClick={() => handleAddProductToCart(product._id, product.price)}
          >
            לרכישה
            <Icon name="cart" />
          </Button>
        ) : (
          <> </>
        )}
      </div>
    ));
  }


  return (
    <div class="row">
      {mapProductsToItems(products)}
    </div>
  );
}
