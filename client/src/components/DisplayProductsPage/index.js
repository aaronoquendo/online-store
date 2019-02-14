import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/main2.css';

class DisplayProductsPage extends Component {
    constructor(props){
        super(props)
        this.state = {
          products: [],
          currentPath: ''
        }
    }

    componentDidMount(){
        this.getProducts();

    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.location !== prevProps.location) this.getProducts()
    }
    getProducts = (event) => {

        const {gender, apparel_type} = this.props.match.params;
        const params = this.props.match.params;

        console.log("gender",gender);
        console.log("gender",apparel_type);
        console.log("params",params);

        if(typeof gender === "undefined" || typeof apparel_type === "undefined"){
            console.log("worked");
            fetch('/products/get-products',
                {
                    method:'GET',
                    headers:
                        {
                            'Accept':'application/json',
                            'Content-Type':'application/json'
                        }
                }
            )
                .then(response => response.json())
                .then(products => {
                    this.setState({products});
                });
        }else if(this.props.match.params){
            const gender = this.props.match.params.gender;
            const apparel_type = this.props.match.params.apparel_type;

            fetch(`/products/category/${gender}/${apparel_type}`,
                {
                    method:'GET',
                    headers:
                        {
                            'Accept':'application/json',
                            'Content-Type':'application/json'
                        }
                }
            )
                .then(response => response.json())
                .then(products => {
                    //console.log(data);
                    this.setState({products});
                });
        }


    };


    render() {
        console.log(this.state.products);
        console.log("my url params",this.props.match.params);
        console.log("My location",this.props.location);
        return (

            <div id="main-content" className="">
                <div className="container">
                    <div className="category">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="category-img">
                                    <img className="img-fluid"
                                         src="https://cdn.karmaloopassets.com/media/gene-cms/4/-/4-19-kl-cbanners__1240x150.jpg"
                                         alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="row">
                            <div className="filter-menu col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                <div className=""></div>
                                <strong>Filter By</strong>
                                <div className="filter-options">
                                    <div className="filter-options-item">
                                        <div className="filter-option-title">
                                            <h4>Category</h4>

                                        </div>
                                        <div className="filter-option-content">
                                            <ul className="items">
                                                <li className="item">
                                                    <a href="/">Short Sleeve</a>
                                                    <span className="count"> (7)</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="filter-options-item">
                                        <div className="filter-option-title">
                                            <h4>Item Type</h4>

                                        </div>
                                        <div className="filter-option-content">
                                            <ul className="items">
                                                <li className="item">
                                                    <a href="/">Sale</a>
                                                    <span className="count"> (7)</span>
                                                </li>
                                                <li className="item">
                                                    <a href="/">New</a>
                                                    <span className="count"> (7)</span>
                                                </li>
                                                <li className="item">
                                                    <a href="/">Looped in</a>
                                                    <span className="count"> (7)</span>
                                                </li>
                                                <li className="item">
                                                    <a href="/">MA Products</a>
                                                    <span className="count"> (7)</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="filter-options-item">
                                        <div className="filter-option-title">
                                            <h4>Styles</h4>

                                        </div>
                                        <div className="filter-option-content">
                                            <ul className="items">
                                                <li className="item">
                                                    <a href="/">Basic Tees</a>
                                                    <span className="count"> (211)</span>
                                                </li>
                                                <li className="item">
                                                    <a href="/">Short Sleeve</a>
                                                    <span className="count"> (7)</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="filter-options-item">
                                        <div className="filter-option-title">
                                            <h4>Brand</h4>

                                        </div>
                                        <div className="filter-option-content">
                                            <ul className="items">
                                                <li className="item">
                                                    <a href="/">Above.Millions</a>
                                                    <span className="count"> (1)</span>
                                                </li>
                                                <li className="item">
                                                    <a href="/">Adidas</a>
                                                    <span className="count"> (8)</span>
                                                </li>
                                                <li className="item">
                                                    <a href="/">ALL GOOD</a>
                                                    <span className="count"> (1)</span>
                                                </li>
                                                <li className="item">
                                                    <a href="/">Asphalt Yacht Club</a>
                                                    <span className="count"> (8)</span>
                                                </li>
                                                <li className="item">
                                                    <a href="/">Bloodbath</a>
                                                    <span className="count"> (8)</span>
                                                </li>
                                                <li className="item">
                                                    <a href="/">Champion</a>
                                                    <span className="count"> (8)</span>
                                                </li>
                                                <li className="item">
                                                    <a href="/">Champion</a>
                                                    <span className="count"> (8)</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="products col-sm-10 col-md-10 col-lg-10 col-xl-10">
                                <div className="page-title-wrapper">
                                    <h1 className="page-title">
                                        <span className="base">Basic Tees</span>
                                    </h1>
                                </div>
                                <div className="toolbar">
                                    <div className="toolbar-sorter sorter">
                                        <label className="sorter-label" htmlFor="sorter">Sort By</label>
                                        <select id="sorter" className="sorter-options">
                                            <option defaultValue="position"> Popularity</option>
                                            <option defaultValue="price"> Price</option>
                                            <option defaultValue="news_from_date"> Newest Arrivals</option>
                                            <option defaultValue="gender"> Gender</option>
                                            <option defaultValue="sale"> Sale</option>
                                            <option defaultValue="special_sort"> Default</option>
                                        </select>
                                    </div>
                                    <div className="pages">
                                        <div className="items pages-items">
                                            <div className="item">
                                                <strong className="page">
                                                    <span>1</span>
                                                </strong>
                                            </div>
                                            <div className="item">
                                                <a href="/" className="page">
                                                    <span>2</span>
                                                </a>
                                            </div>
                                            <div className="item">
                                                <a href="/" className="page">
                                                    <span>3</span>
                                                </a>
                                            </div>
                                            <div className="item">
                                                <a href="/" className="page">
                                                    <span>4</span>
                                                </a>
                                            </div>
                                            <div className="item">
                                                <a href="/" className="page">
                                                    <span>5</span>
                                                </a>
                                            </div>
                                            <li className="item pages-item-next">
                                                <a className="action next"
                                                   href="https://www.karmaloop.com/category/mens/clothing/tops/basic-tees?p=2&amp;product_list_order=price"
                                                   title="Next">
                                                    <span className="label">Page</span>
                                                    <span>Next</span>
                                                </a>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                                <div className="products-grid-wrapper">
                                    <ol className="product-items">
                                        <div className="container">
                                            <div className="row">
                                                {
                                                  this.state.products.map((product) => {
                                                    console.log(product.img_urls)
                                                      product.product_name = product.product_name.replace(/\s+/g, '-').toLowerCase();
                                                    return(
                                                      <li className="item product-item col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                                                          <div className="product-item-info">
                                                              <Link className="product-item-photo" to={`/product/${product.product_name}`}>

                                                                      <div className="product-image">
                                                                          <img className="image"
                                                                               src={product.img_urls}
                                                                               alt=""/>
                                                                      </div>

                                                              </Link>

                                                              <div className="product-item-details">
                                                                  <strong className="product-item-brand">
                                                                      <span>{product.brand}</span>
                                                                  </strong>
                                                                  <strong className="product-item-name">
                                                                      <a href="/product" className="product-item-link">
                                                                          {product.product_name}
                                                                      </a>
                                                                  </strong>
                                                                  <div className="product-price">
                                                                      <span>{product.price}</span>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </li>
                                                    )
                                                  })
                                                }
                                            </div>
                                        </div>


                                    </ol>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default DisplayProductsPage;
