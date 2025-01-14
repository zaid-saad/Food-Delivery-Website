import { createContext, useState } from "react";
// import { food_list } from "../assets/assets";
import { useEffect } from "react";
import axios from 'axios'

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setcartItems] = useState({})
    const url = 'http://localhost:4000'
    const [token, setToken] = useState("")
    const [food_list, setFoodList] = useState([])

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setcartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }

        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } })
        }
    }

    const removeFromCart = async (itemId) => {
        setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } })
        }
    }

    const gettotalcartamount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {

            if (cartItems[item] > 0) {
                let item_info = food_list.find((product) => product._id === item)
                totalAmount += item_info.price * cartItems[item]
            }


        }
        return totalAmount
    }

    const fetchFood = async () => {
        const response = await axios.get(url + "/api/food/list")
        setFoodList(response.data.data)
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get",{}, { headers: { token } })
        setcartItems(response.data.cartData)

    }




    useEffect(() => {
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))
        }
        async function loadData() {
            await fetchFood();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData()
    })

    const ContextValue = {
        food_list,
        addToCart,
        cartItems,
        setcartItems,
        removeFromCart,
        gettotalcartamount,
        url,
        token,
        setToken
    }



    return (
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;