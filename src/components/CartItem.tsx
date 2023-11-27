import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from '../data/items.json'
import formaturrency from "../utilities/formaturrency"

type CartItemProps = {
    id:number
    quantity: number
}

function CartItem({id, quantity}: CartItemProps) {
    const { removeFromCart,increaseCartQuantity, decreaseCartQuantity } = useShoppingCart()
    const item = storeItems.find(i=>i.id===id)
    if (item == null) return null
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img src={item.imgUrl} className="immg-cart"/>
        <div className="me-auto">
            <div>
                {item.name} {quantity > 0 && 
                <span className="text-muted" style={{fontSize:".75rem"}}>{quantity}</span>
                }
            </div>
            <div className="text-muted" style={{fontSize:".75rem"}}>
                {formaturrency(item.price)}
            </div>
            <Button variant="outline-danger" onClick={()=>decreaseCartQuantity(id)}>-</Button>
            <Button className="btn-primary" onClick={()=>increaseCartQuantity(id)}>+</Button>
        </div>
        <div>{formaturrency(item.price *quantity)}</div>
        <Button variant="outline-danger" size="sm" 
            onClick={()=> removeFromCart(item.id)}> &times; </Button>
    </Stack>
  )
}

export default CartItem
