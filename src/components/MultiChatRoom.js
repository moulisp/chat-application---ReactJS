import React from "react";
import Chatroom from './Chatroom';

/**
 * Component to handle multiple chatrooms on single page
 */
export default class MultiChatRoom extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //TODO: contains hard coded message.Need to be removed.
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

    /**
     * add message to existing message list.
     * callback function is passed to handle scroll functionality.
     */
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
                messagesContents[i].scrollTop = messagesContents[i].scrollHeight;
            }
        });
    };

    //Publishing status
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
