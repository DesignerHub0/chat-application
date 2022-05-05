import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';

const projectID = 'd725ca11-c012-4ee9-99eb-23f2a32aa06b';
const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
}

export default App;