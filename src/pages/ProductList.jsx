import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Menu, Table } from "semantic-ui-react";
import ProductService from "../services/productService";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartAction";
export default function ProductList() {
  const [products, setProducts] = useState([]);

  //Aksiyon(fonksiyon) çağırmak için kullanılır
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProducts()
      .then((result) => setProducts(result.data.data));
  }, []); //Değişmesini istediğimiz verilerimizi belirtiyoruz.

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Product Name</Table.HeaderCell>
            <Table.HeaderCell>Category Name</Table.HeaderCell>
            <Table.HeaderCell>Unit In Stock</Table.HeaderCell>
            <Table.HeaderCell>Quantity Per Unit</Table.HeaderCell>
            <Table.HeaderCell>Unit Price</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.id}>
              {/* backtick bırakmamızın sebebi stringleri + ile birleştirmek yerine direk birleştirebiliyoruz.
              Bunun dışında avantaj olarak bellekte sadece tek 1 yer tutmasıdır.  
              "string"+"string"=toplam --> her oluşturulan string için ayrı ayrı bellekte yer tutuyor ve toplamı içinde ayrı bir yer tutuyor.  */}

              <Table.Cell>
                <Link to={`/products/${product.productName}`}>
                  {product.productName}
                </Link>
              </Table.Cell>
              <Table.Cell>{product.category.categoryName}</Table.Cell>
              <Table.Cell>{product.unitsInStock}</Table.Cell>
              <Table.Cell>{product.quantityPerUnit}</Table.Cell>
              <Table.Cell>{product.unitPrice}</Table.Cell>
              <Table.Cell>
                <Button onClick={() => handleAddToCart(product)}>
                  Sepete Ekle
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
