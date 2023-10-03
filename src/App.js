import React, { useState } from "react";
import PdfUploader from "./components/PdfUploader";
import ChatComponent from "./components/ChatComponent";
import RenderQA from "./components/RenderQA";
import { Layout, Typography } from "antd";
import "./App.css";

const App = () => {
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { Header, Content } = Layout;
  const { Title } = Typography;

  const handleResp = (question, answer) => {
    setConversation([...conversation, { question, answer }]);
  };

  return (
      <>
        <Layout style={{ height: "100vh", backgroundColor: "white" }}>
          <Header
              style={{
                display: "flex",
                alignItems: "center",
              }}
          >
            <Title style={{ color: "white " }}>Document Summarizer AI</Title>
          </Header>
          <Content style={{ width: "80%", margin: "auto" }}>
            <div className="pdf-uploader">
              <PdfUploader />
            </div>

            <br />
            <br />
            <div className="render-qa">
              <RenderQA conversation={conversation} isLoading={isLoading} />
            </div>

            <br />
            <br />
          </Content>
          <div className="chat-component">
            <ChatComponent
                handleResp={handleResp}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />
          </div>
        </Layout>
      </>
  );
};

export default App;
