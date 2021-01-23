import React, {Component} from "react";
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types'
class ProductList extends Component {
    componentDidMount() {
        this.props.getItems();
    }
    render() {
        const { items } = this.props.item;
        console.log(items)
        return (
            <p>aqui va la lista de products</p>
        )
    }
}
ProductList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    item: state.item
})
export default connect(mapStateToProps, {getItems})(ProductList);