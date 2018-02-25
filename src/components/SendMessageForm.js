import React from "react";
import ReactDOM from 'react-dom';

/**
 * Component to handle send message functionality.
 */
export default class SendMessageFrom extends React.Component {

    constructor(props) {
        super(props);
        this.lastTypedTime = new Date(0);
    };

    /**
     * Handles send message button/form submit
     */
    onSubmit = (e) => {
        e.preventDefault();
        let error = "";
        const message = e
            .target
            .elements
            .inputMessage
            .value
            .trim();

        if (message) {
            let sendMessage = {
                createdAt: (new Date()),
                text: message
            };
            this
                .props
                .sendMessage(sendMessage);
            e.target.elements.inputMessage.value = "";
        }
    };

    onInputChange = (e) => {
        this.lastTypedTime = new Date();
    };

    onInputFoucs = () => {
        this.typingStatus = setInterval(this.refreshTypingStatus, 500);
    };

    componentWillUnmount() {
        clearInterval(this.typingStatus);
    };

    //Get the typying status of the user
    refreshTypingStatus = () => {
        let inputBox = ReactDOM.findDOMNode(this.refs.inputText)
        if (document.activeElement !== inputBox || inputBox.value == '' || ((new Date().getTime() - this.lastTypedTime.getTime()) > 1000)) {
            this
                .props
                .sendStatus("");
        } else {
            this
                .props
                .sendStatus(this.props.user + " is typing...")
        }

    };

    onInputBlur = () => {
        clearInterval(this.typingStatus);
        this.refreshTypingStatus();
    };

    render() {
        return (
            <div>
                <form className="sendMessageForm" onSubmit={this.onSubmit}>
                    <input
                        className="inputTextBox"
                        ref="inputText"
                        placeholder="Type a message..."
                        type='text'
                        name="inputMessage"
                        autoComplete="off"
                        onChange={this.onInputChange}
                        onFocus={this.onInputFoucs}
                        onBlur={this.onInputBlur}/>
                    <button className='submitButton'>
                        Send
                    </button>
                </form>
            </div>
        )
    }
}