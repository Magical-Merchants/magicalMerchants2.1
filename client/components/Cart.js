import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Cart = (props) => {
    // We will need to make sure that somehow only the items the user has clicked on are in props
  const {products} = props
  return (
    <div>
      <div>
        {this.props.products.map(product => (
            <p key={product.id}>
                <Link to ={`/products/${product.id}`}>{product.name}</Link>
                {/* I think the line below will be an issue right now b/c we need to account for the number of that item that the user currently has in their cart, which I don't think is being stored in the product instance */}
                <p>Quantity in cart: {product.quantity}</p>
                <p>Cost per item: {product.cost}</p>
                <p>Total: {product.quantity * product.cost}</p>
            </p>
        ))}
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    //I think we'll need an action creator that grabs just the items the user has put in their cart; not totally sure how to do that
    products: state.products
  }
}

export default connect(mapState)(Cart)