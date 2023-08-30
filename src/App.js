import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Switch>
            <Route name="Home" exact path="/">
              <Home />
            </Route>

            <Route name="Create" path="/create">
              <Create />
            </Route>

            
            <Route name="Details" path="/blogs/:id">
              <BlogDetails />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// import {useState} from 'react'
// import logo from './logo.svg';
// import Nav from './Nav';
// import ItemPage from './ItemPage';
// import { items } from './static-data';
// import './App.css';

// class App extends  React.Component {
//     state = {
//       activeTab: 0,
//       cart: []

//     };

//     handleTabChange = (index) => {
//       this.setState({
//         activeTab: index
//       });
//     }

//     handleAddToCart = (item) => {
//       this.setState({
//         cart: [...this.state.cart, item.id]
//       });
//     }

//   renderContent() {
//     switch (this.state.activeTab) {

//         case 0:
//           return (
//           <ItemPage
//           items={items}
//           onAddToCart={this.handleAddToCart}
//           />);
//         case 1:
//             return <span>Cart</span>;

//         default:

//     }
//   }

//   render() {
//     let {activeTab} = this.state;
//     return (
//       <div className="App">
//         <Nav activeTab={activeTab} onTabChange={this.handleTabChange}/>
//         <main className="App-content">
//           <div>{this.state.cart.length} items </div>
//           {this.renderContent()}
//         </main>
//       </div>
//     );
//   }

// }
// function App() {
//   const {activeTab, setActiveTab} = useState(0);

//  const handleTabChange = (index) => {
//   setActiveTab(index + 1);
//  }

//  console.log(setActiveTab);

// const renderContent = () => {
//   switch (activeTab) {
//     default:
//       case 0:
//         return <ItemPage items={items}/>;
//       case 1:
//           return <span>Cart</span>;

//   }
// }

//   return (
//     <div className="App">
//       <Nav activeTab={activeTab} onTabChange={handleTabChange}/>
//       <main className="App-content">
//         {renderContent()}
//       </main>
//     </div>
//   );
// }

export default App;
