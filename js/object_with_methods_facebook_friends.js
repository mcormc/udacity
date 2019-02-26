/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here

var facebookProfile = {
    name: "Jason",
    friends: 500,
    messages: ["I love bread.", "Hello, Jason here", "Do the Scarn!"],
    postMessage(message) {
        facebookProfile.messages.push(message); 
    },
    deleteMessage(index) {
        facebookProfile.messages.splice(index,1);  
    }, 
    addFriend() {
        facebookProfile.friends += 1; 
    },
    removeFriend() {
        facebookProfile.friends = facebookProfile.friends -1; 
    }, 
};
