import React from "react";
import Toolbar from "./components/Toolbar";
import "./styles.css";
import SideDrawer from "./components/sidemenu/SideDrawer";
import BackDrop from "./components/backdrop/BackDrop";

class Menu extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  backClose = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render () {
    // let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      // sideDrawer = <SideDrawer />;
      backdrop = <BackDrop click={this.backDropClickHandler} />;
    }
    return (
      <div className="menuDiv" >
        <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} obj={this.props.obj} />
        <SideDrawer
          show={this.state.sideDrawerOpen}
          onclick={() => test.backDropClickHandler}
          obj={this.props.obj}
          backClose ={ this.backClose }
        />
        {backdrop}
        
      </div>
    );
  }
}

export default Menu;
