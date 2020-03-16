import React, { Component, Fragment } from 'react';
import { Card, CardImg, CardBody, CardTitle, Row, Col, Input, FormGroup, Label } from 'reactstrap';
import { Link } from "react-router-dom";
import API from '../utils/API';
import './Products.css';

export default class Products extends Component {

  state = {
    products: [],
    category: [],
    selectedCategoryId: '',
    selectedCategoryName: ''
  }

  componentDidMount() {
    API('/categories', 'GET')
      .then((res) => res.json())
      .then((response) => {
        let newState = this.state;
        newState.category = response;

        if (response.length > 0) {

          const {
            id,
            name
          } = response[0];

          newState.selectedCategoryId = id;
          newState.selectedCategoryName = name;
        }

        this.setState(newState, () => {
          this.getProducts(newState.selectedCategoryId);
        });
      });
  }

  onCategoryChange = (evt) => {
    const {
      target: {
        value,
        selectedIndex
      }
    } = evt;

    this.setState({
      selectedCategoryId: value,
      selectedCategoryName: this.state.category[selectedIndex].name,
      products: []
    })
    this.getProducts(value);
  }

  getProducts = (categoryId) => {
    API(`/products?categoryId=${categoryId}`, 'GET')
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          products: response
        })
      })
  }

  render() {

    const {
      products,
      category,
      selectedCategoryId,
      selectedCategoryName
    } = this.state;
      
    return (
      <Fragment>
        <Row>
          <Col sm="6" className="mx-auto">
            <FormGroup row>
              <Label for="category" sm={2} className="text-right">Category</Label>
              <Col sm={4}>
                <Input type="select" name="category" id="category" onChange={this.onCategoryChange} value={selectedCategoryId}>
                  { category.map((ele, index) => {
                    return(
                      <option key={index} value={ele.id}>{ele.name}</option>
                    )
                  }) }
                </Input>
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <hr/>
        <Row className="ml-3 mr-3 mt-3">
          { products.map((ele, index) => {
            return(
              <Col sm="3" className="mb-4" key={index}>
                <Link to={`/product/${ele.categoryId}/${selectedCategoryName}/${ele.name}`}>
                  <Card className="p-3 minHeight">
                    <CardImg src={ele.imageUrl} alt="Card image cap" />
                    <CardBody>
                      <CardTitle>{ele.name}</CardTitle>
                    </CardBody> 
                  </Card>
                </Link>
              </Col>
            )
          }) }
        </Row>
      </Fragment>
    )
  }

}