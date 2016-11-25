const React = require('react');

const GenerateOneMessage = function (props) {
    console.log('return value is');
    console.log(props.messages[0]);
    return (
         <span>{props.messages[0]}</span>
    );
}

const GenerateManyMessage = function (props) {
    let msgList = props.messages.map(msg => {
            return <li>{msg}</li>;
    });

    return (
        <ol>
            {msgList}
        </ol>

    );
}



const MessageList = function (props) {
    console.log('inside messageList');
    console.log(props.messages);
    let content = (props.messages.length == 1) ? <GenerateOneMessage messages={props.messages} /> : <GenerateManyMessage messages={props.messages} />

    return (
        <span>
            {content}
        </span>
    )
}

module.exports = MessageList;