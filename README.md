# mern-chat-socketio
MERN stack chat app with socket.io

## For usage
1) git clone https://github.com/jennwah/mern-chat-socketio.git
2) npm install in root directory
3) cd client and npm install 
4) In server folder, do create your dev.js file in config to setup your mongoDB uri like below:

In /config/dev.js

module.exports = {
  mongoURI: //your mongoURI here
}

This is a MERN chat app with socket.io. Redux is also implemented for global state management. AntD design is used for styling. Refer to (here)[https://ant.design/docs/react/introduce] for more.
