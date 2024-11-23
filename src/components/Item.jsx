import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Item = ({product}) => {
  return (
    <>
      <Card style={{ width: '16rem', marginTop:10}}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
          U$D {product.price}
          </Card.Text>
          <Link to={`/item/${product.id}`}><Button variant="primary">Ver más</Button></Link>
      </Card.Body>
      </Card>
    </>
  )
}

export default Item