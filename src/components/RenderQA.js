import React from "react";
import { Spin } from "antd";
import "./RenderQA.css"

const RenderQA = (props) => {
    const { conversation, isLoading } = props;

    return (
        <>
            {conversation?.map((each, index) => {
                return (
                    <div key={index} className="containerStyle">
                        <div className="userContainer">
                            <div className="userStyle">{each.question}</div>
                        </div>
                        <div className="agentContainer">
                            <div className='agentStyle'>{each.answer}</div>
                        </div>
                    </div>
                );
            })}
            {isLoading && <Spin size="large" style={{ margin: "10px" }} />}
        </>
    );
};

export default RenderQA;
