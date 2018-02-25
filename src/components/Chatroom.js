import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';
import SendMessageFrom from './SendMessageForm';

export default class Chatroom extends React.Component {
    constructor(props) {
        super(props);

    };

    sendMessage = (message) => {
        message = Object.assign(message, {from: this.props.name})
        //Publish message
        this
            .props
            .publishMessage(message);
    }

    sendStatus = (statusMessage) => {
        let status = {
            "user": this.props.name,
            "message": statusMessage
        }
        this
            .props
            .sendStatus(status);
    }

    render() {
        return (
            <div className="chatRoom">
                <header>
                    <h3>Chat Application - {this.props.name}</h3>
                    <span>
                        {this.props.statusObj.user !== this.props.name && this.props.statusObj.message}
                    </span>
                </header>
                <section ref="messagesContent" className="messagesContent">
                    <Messages messages={this.props.messages} user={this.props.name}/>
                </section>
                <footer>
                    <SendMessageFrom
                        sendMessage={this.sendMessage}
                        sendStatus={this.sendStatus}
                        user={this.props.name}/>
                </footer>
            </div>
        )
    }
}