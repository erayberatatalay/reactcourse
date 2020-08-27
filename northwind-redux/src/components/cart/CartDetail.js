import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as cartActions from '../../redux/actions/cartActions'
import { bindActionCreators } from 'redux'

class CartDetail extends Component {
    render() {
        return (
            <div>
                Cart
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

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);