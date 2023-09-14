import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        return savedCart || []
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const handleAddToCart = (product, quantity) => {
        const productWithQuantity = { product: product, quantity: quantity };
        if (cart.length === 0) setCart([productWithQuantity])

        cart.forEach(item => {
            if (item.product.id === product.id) {
                const cartCopy = [...cart];
                const foundProduct = cartCopy.find((prod) => {
                    return prod.product.id === product.id;
                });
                const index = cartCopy.indexOf(foundProduct);
                cartCopy[index] = {
                    product: product,
                    quantity: foundProduct.quantity + quantity
                }
                setCart(cartCopy);
            } else {
                setCart([...cart, productWithQuantity]);
            }
        });
    }


    const handleQuantityChange = (product, type) => {
        const cartCopy = [...cart];
        const foundProduct = cart.find(prod => prod.product.id === product.id);

        if (type === "down" && foundProduct.quantity === 1) {
            setCart(cartCopy.filter((prod) => prod.product.id !== product.id));
        } else if (type === "up") {

            setCart(cartCopy.map((prod) => {
                return prod.product.id === product.id ? { ...foundProduct, quantity: foundProduct.quantity + 1 } : prod;
            }))

        } else {
            setCart(cartCopy.map((prod) => {
                return prod.product.id === product.id ? { ...foundProduct, quantity: foundProduct.quantity - 1 } : prod;
            }));
        }
    }

    const calculateTotal = (cart) => {
        const total = cart.map((item) => {
            let total = 0;
            let quantity = item.quantity;
            for (const item of cart) {
                total += item.product.price * quantity;
            }
            return total;
        })
        return parseFloat(total).toFixed(2);
    }

    const calculateTax = (cart) => {
        const tax = calculateTotal(cart) * 0.2;
        const roundedTax = Math.round(tax * 100) / 100;
        return roundedTax;
    }

    const calculateGrandTotal = (cart) => {
        const subtotal = Number(calculateTotal(cart));
        const tax = calculateTax(cart);
        const shippingFee = 50;
        const grandtotal = parseFloat(subtotal + shippingFee + tax).toFixed(2);
        console.log(typeof grandtotal) // NOT A NUMBER
        return grandtotal;
    }

    return (
        <CartContext.Provider value={{ cart, setCart, handleAddToCart, calculateTotal, calculateGrandTotal, calculateTax, handleQuantityChange }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;