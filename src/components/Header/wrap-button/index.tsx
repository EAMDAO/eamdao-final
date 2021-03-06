import React, { useState } from "react";
import "./wrap-button.scss";
import Wrap from "../../../components/Wrap";

function WrapButton() {
    const [showWrap, setShowWrap] = useState(false);

    const handelOpenWrap = () => {
        setShowWrap(false);
    };

    const handelCloseWrap = () => {
        setShowWrap(false);
    };

    return (
        <div>
            <div className="wrap-button" onClick={handelOpenWrap}>
                <p>Status: DEV MODE</p>
            </div>
            <Wrap open={showWrap} handleClose={handelCloseWrap} />
        </div>
    );
}

export default WrapButton;
//wrap button not required so just added status text change to live when ACTIVE
