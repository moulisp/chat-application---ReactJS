import React from "react";
import Chatroom from './Chatroom';

export default class MultiChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    from: "Laura",
                    createdAt: new Date(),
                    text: "Hi Rob"
                }, {
                    from: "Rob",
                    createdAt: new Date(),
                    text: "Hello Laura"
                }, {
                    from: "Laura",
                    createdAt: new Date(),
                    text: "How are you?"
                }

            ],
            statusObj: {}
        }
    }
    publishMessage = (message) => {
        this.addMessage(message);
    };
    addMessage = (message) => {
        this.setState((prevState) => ({
            messages: [
                ...prevState.messages,
                message
            ]
        }), () => {
            //callback function to scroll to bottom
            let messagesContents = document.getElementsByClassName("messagesContent");
            for (let i = 0; i < messagesContents.length; i++) {
                console.log(i);
                messagesContents[i].scrollTop = messagesContents[i].scrollHeight;
            }
        });
    };

    sendStatus = (statusObj) => {
        this.setState(() => ({statusObj}));
    }

    render() {
        return (
            <div className="main-content">
                <div>
                    <Chatroom
                        name="Laura"
                        messages={this.state.messages}
                        publishMessage={this.publishMessage}
                        statusObj={this.state.statusObj}
                        sendStatus={this.sendStatus}/>
                </div>
                <div>
                    <Chatroom
                        name="Rob"
                        messages={this.state.messages}
                        publishMessage={this.publishMessage}
                        statusObj={this.state.statusObj}
                        sendStatus={this.sendStatus}/>
                </div>
            </div>
        )
    }
}
