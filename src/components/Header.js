import React from "react";
import "./Header.css";
import { Typography } from "antd";
const { Title } = Typography;

const Header = () => {
    return (
        <div className="containerStyle">
            <Title>Chat with any PDF</Title>
            <Title level={4}>
                Join millions of students, researchers and professionals to instantly
                answer questions and understand research with AI
            </Title>
        </div>
    );
};

export default Header;
