import React, { useState } from "react"; // Import useState
import axios from "axios";
import { Input } from "antd";

const { Search } = Input;

const ChatComponent = (props) => {
    const { handleResp, isLoading, setIsLoading } = props;

    // Define a state variable to keep track of the search value
    const [searchValue, setSearchValue] = useState("");

    const onSearch = async (question) => {
        // Clear the search input
        setSearchValue("");
        setIsLoading(true);

        try {
            const response = await axios.get("http://localhost:5001/chat", {
                params: {
                    question,
                },
            });
            handleResp(question, response.data);
        } catch (error) {
            console.error(`Error: ${error}`);
            handleResp(question, error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        // Update searchValue state when the user types in the input box
        setSearchValue(e.target.value);
    };

    return (
        <Search
            placeholder="input search text"
            enterButton="Ask"
            size="large"
            onSearch={onSearch}
            loading={isLoading}
            value={searchValue} // Control the value
            onChange={handleChange} // Update the value when changed
        />
    );
};

export default ChatComponent;
