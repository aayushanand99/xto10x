import React, { Component } from "react";
import { HeadComponent, BodyComponent } from "./Components";
import "./App.css";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      categories: [],
      products: [],
      filteredProducts: null,
      selectedCategory: null,
    };
  }

  componentDidMount() {
    fetch("http://demo4603548.mockable.io/products")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        let products = json.products;
        let categories = [];
        products.map((item, index) => {
          if (item.category && categories.indexOf(item.category) === -1) {
            categories.push(item.category);
          }
        });
        categories = categories.filter((item) => item !== "");
        this.setState({ categories: categories, products: products });
      });
  }

  onClickCategory = (cat) => {
    let prod = this.state.filteredProducts ? this.state.filteredProducts : [];
    this.state.products.map((item, index) => {
      if (item.category === cat) {
        prod.push(item);
      }
    });
    let selectedCategory = this.state.selectedCategory;
    if (selectedCategory != null) {
      selectedCategory.push(cat);
    } else {
      selectedCategory = [cat];
    }
    this.setState({ filteredProducts: prod, selectedCategory });
  };

  render() {
    return (
      <div style={styles.container}>
        <HeadComponent
          categories={this.state.categories}
          clickCategory={(item) => this.onClickCategory(item)}
          selectedCategory={this.state.selectedCategory}
        />
        <BodyComponent
          products={this.state.products}
          filteredProducts={this.state.filteredProducts}
        />
      </div>
    );
  }
}

const styles = {
  container: {
    display: "block",
  },
};
export default App;
