import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Row, Col, Card } from 'reactstrap';
import API from '../utils/API';
import './productDetails.css';

const ProductDetails = () => {
    
  let {
    categoryId,
    category,
    name
  } = useParams();

  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    API(`/productDetails?categoryId=${categoryId}&name=${name}`, 'GET')
      .then((res) => res.json())
      .then((response) => {
        setProductDetails(response[0]);
      });
  }, [categoryId, category, name]);

  return (
    <Row>
      <Col sm="6" className="mx-auto">
        <Card className="customCard">
          <Row>
            <Col sm="4">
                <img width="100%" src={productDetails.imageUrl} alt={productDetails.name}/>
            </Col>
            <Col sm="8">
                <div><h2>{category}</h2></div>
                <div><h3>{productDetails.name}</h3></div>
                <div>{productDetails.description}</div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

export default ProductDetails;