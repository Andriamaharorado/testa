import StoreItems from "../components/StoreItems"
import storeItems from "../data/items.json"
import {Col,Row} from "react-bootstrap"

function Store() {
  return (
    <div>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item=>(
            <Col key={item.id}><StoreItems {...item}/></Col>
        ))}
      </Row>
    </div>
  )
}

export default Store
