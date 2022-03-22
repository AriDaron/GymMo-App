import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"


export const Navbar = () => {
    return (
        <ul className="navbar">
            <ul className="navbar_item">
                <Link className="dropbtn" to="/">Home</Link>
            </ul>
            <ul className="navbar_item">
                <Link className="dropbtn" to="/exercises">Tutorials</Link>
            </ul>
            <ul className="navbar_item">
                <Link className="dropbtn" to="/audios">MoAudios</Link>
            </ul>
            
            <ul className="navbar_item">
                <div className="dropdown" >
                    <button className="dropbtn">Journal</button>
                    <div className="dropdown-content">
                        <Link className="Jnavbar_link" to="/journal">Reflection Journal</Link>
                        <Link className="Jnavbar_link" to="/meals">Meal Journal</Link>
                        <Link className="Jnavbar_link" to="/workouts">Workout Journal </Link>
                    </div>
                </div>            </ul>
            <ul className="navbar_item ">
                <Link className="dropbtn" to="#"
                    onClick={
                        () => {
                            localStorage.removeItem("gymMo_user")
                        }

                    }>
                    Logout
                </Link>
            </ul>
        </ul>
    )

}
// import React from 'react';
// import { Fragment } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem
// } from 'reactstrap';
// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   render() {
//     return <Fragment>
//       <Navbar color="light" light expand="md">
//         <NavbarBrand href="/">reactstrap</NavbarBrand>
//         <NavbarToggler onClick={this.toggle} />
//         <Collapse isOpen={this.state.isOpen} navbar>
//           <Nav className="ml-auto" navbar>
//             <NavItem>
//               <NavLink href="/components/">Components</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Options
//                 </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>
//                   Option 1
//                   </DropdownItem>
//                 <DropdownItem>
//                   Option 2
//                   </DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem>
//                   Reset
//                   </DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav>
//         </Collapse>
//       </Navbar>
//     </Fragment>
//   }
// }