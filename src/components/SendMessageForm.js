import React from "react";
import ReactDOM from 'react-dom';

export default class SendMessageFrom extends React.Component {

    constructor(props) {
        super(props);
        this.lastTypedTime = new Date(0);
    };

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
        //console.log("test");
    };
    componentWillUnmount() {
        clearInterval(this.typingStatus);
    };

    refreshTypingStatus = () => {
        let inputBox = ReactDOM.findDOMNode(this.refs.inputText)
        if (document.activeElement !== inputBox || inputBox.value == '' || ((new Date().getTime() - this.lastTypedTime.getTime()) > 1000)) {
            this
                .props
                .sendStatus("");
            //clearInterval(this.typingStatus);

        } else {
            this
                .props
                .sendStatus(this.props.user + " is typying...")
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