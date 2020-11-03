import React, { Component } from 'react'
import {dish} from './food_data'

const MenuContext = React.createContext();
class MenuProvider extends Component {
    state ={
        foods: [],
        cart: [],
        //cart: dish,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,  
    };
    componentDidMount() {
    this.setFoods();
  }
    setFoods = () =>{
        let tempFoods = [];
        dish.forEach(item =>{
            const singleItem = {...item};
            tempFoods = [...tempFoods ,singleItem];
        })
        this.setState(() =>{
            return {foods: tempFoods};
        })
    }
    getItem = (id) =>{
        const food= this.state.foods.find(item=> item.id===id);
        return food
    }

    addToCart = (id) => {
    let tempFoods = [...this.state.foods];
    const index = tempFoods.indexOf(this.getItem(id));
    const food = tempFoods[index];
    food.inCart = true;
    food.count = 1;
    const price = food.price;
    food.total = price;

    this.setState(() => {
      return {
        foods: [...tempFoods],
        cart: [...this.state.cart, food],
      };
    } ,
    () =>{
        this.addTotal()
    }
    );
};
increment = (id) =>{
    let tempCart = [...this.state.cart];
    const selectedFood = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedFood);
    const food = tempCart[index];
    food.count = food.count + 1;
    food.total = food.count * food.price;
    this.setState(() => {
      return {
        cart: [...tempCart]
      };
    }, this.addTotal());
};
decrement = (id) =>{
     let tempCart = [...this.state.cart];
    const selectedFood = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedFood);
    const food = tempCart[index];
    food.count = food.count - 1;
    if (food.count === 0) {
      this.removeItem(id);
    } else {
      food.total = food.count * food.price;
      this.setState(() => {
        return { cart: [...tempCart] };
      }, this.addTotal(id));
    }
};
removeItem = (id) =>{
    let tempFoods = [...this.state.foods];
    let tempCart = [...this.state.cart];
    
    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempFoods.indexOf(this.getItem(id));
    let removedFood = tempFoods[index];
    removedFood.inCart = false;
    removedFood.count = 0;
    removedFood.total = 0;

    this.setState(() => {
      return {
        cart: [...tempCart],
        foods: [...tempFoods]
      };
    },
     ()=> {
         this.addTotal();
        });
  };
clearCart = (id) =>{
    this.setState(() =>{
        return{
            cart: []
        }
    },()=>{
        this.setFoods()
        this.addTotal()
    });
};
addTotal =() =>{
    let subTotal =0;
    this.state.cart.map(item =>(subTotal+=item.total));
    const tempTax = subTotal*0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() =>{
        return{
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total,
        }
    })
}

    render() {
        return (
            <MenuContext.Provider value={{
                ...this.state,
                addToCart: this.addToCart,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
            }}>
                {this.props.children}
            </MenuContext.Provider>
        )
    }
}
const MenuConsumer = MenuContext.Consumer;
export {MenuProvider ,MenuConsumer}
