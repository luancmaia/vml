import React from 'react';
import { connect } from 'react-redux';

class MenuBar extends React.Component {
	render() {
		const { disableMenu } = this.props;
		return (
			<span onClick={this.props.enableMenu.bind(this, disableMenu)} class="menu-bars">
				<i  class="fa fa-bars"></i>
			</span>
		);
	}
}

const mapStateToProps = state => {
  return {
    disableMenu: state.disableMenu
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    enableMenu : (flag) => {
    	dispatch({ type: 'DISABLE_MENU', payload: flag ? false : true })
    }
  }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MenuBar);