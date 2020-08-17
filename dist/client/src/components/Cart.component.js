import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Badge } from 'reactstrap';
import { useTransition, animated } from "react-spring";

function Cart(){
    const [show, setShow] = useState(false);
    const maskTransitions = useTransition(show, null, {
      from: { position: "fixed", opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    });
    const transitions = useTransition(show, null, {
        from: { position: "fixed", opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    return (
      <div className="cart">
        <FontAwesomeIcon
          icon={faShoppingCart}
          style={{ color: "white", cursor:"pointer" }}
          className="cart fa-2x"
          onClick={() => setShow(!show)}
        />
        <Badge color="info">4</Badge>
        {maskTransitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div
                key={key}
                style={props}
                className="shoppingMask"
                onClick={() => setShow(false)}
              ></animated.div>
            )
        )}

        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div
                key={key}
                style={props}
                className="shopping bg-dark container"
              >
                <h1>Im the shopping list</h1>
              </animated.div>
            )
        )}
      </div>
    );
}
export default Cart