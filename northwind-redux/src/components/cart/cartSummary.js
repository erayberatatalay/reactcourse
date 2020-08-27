import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Badge, NavItem, NavLink
} from 'reactstrap'
import * as cartActions from '../../redux/actions/cartActions'
import { bindActionCreators } from 'redux'
import alertify from 'alertifyjs'
import { Link } from 'react-router-dom'

class cartSummary extends Component {
    removeFromCart(product) {
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " Deleted from cart")
    }
    renderEmpty() {
        return (
            <NavItem>
                <NavLink>
                    Your cart is empty
                </NavLink>
            </NavItem>
        )
    }
    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Your cart
                </DropdownToggle>
                <DropdownMenu right>

                    {this.props.cart.map(cartItem => (
                        <DropdownItem key={cartItem.product.id}>
                            <Badge color="danger" onClick={() => this.removeFromCart(cartItem.product)}>X</Badge>
                            {cartItem.product.productName}
                            <Badge color="success">{cartItem.quantity}</Badge>
                        </DropdownItem>
                    ))}

                    <DropdownItem divider />
                    <DropdownItem><Link to="/cart">Go to cart</Link></DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
    render() {
        return (
            <div>
                {
                    this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()
                }

            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(cartSummary);