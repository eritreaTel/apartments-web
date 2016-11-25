const React = require('react');

const MessageList = function (props) {

    let msgList = props.messages.map(msg => {
        return <li>{msg}</li>;
    });

    return (
            <ol>
                {msgList}
            </ol>
    );
}

module.exports = MessageList;