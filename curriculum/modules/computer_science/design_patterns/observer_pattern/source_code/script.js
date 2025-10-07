console.clear();

// Email { id, title, body, unread, starred, date, sender }
// RULE: Update state? Publish!

class App {
  
  // Data
  #messages = [];
  #current = null; // Upon selection, this will become a number (ID)
  // Data CRUD operations
  addMessage(message){
    // Change the data/state...
    this.#messages.push(message);
    // ...publish (React)
    this.#publish();
    
  }
  markMessageAsRead(id){
    // Pick the right message based in the id
    const message = this.#messages.find( message => message.id === id );
    // Change its status
    message.unread = false;
    this.#publish();
  }
  deleteMessage(id){}
  selectMessage(id){
    this.#current = id;
    this.#publish();
  }
  
  // PubSub
  #subscribers = []; // Hold the subscribers
  // Add subscribers:
  subscribe(subscriber){
    this.#subscribers.push(subscriber);
    // Return an unsubscribe function
    return function unsubscribe(){
      console.log("Unsubscribe me please!")
      // Challenge: unsubscribe this subscriber
    }
  }
  #publish(){
    // Notify All the subscribers => Call all subscriber functions
    this.#subscribers.forEach( sub => {
      const state = { messages: this.#messages, current: this.#current }
      sub(state) 
    })
  }
  debug(){
    console.log(this.#subscribers);
  }
  
}

const app = new App();

function renderEmailList(state){
  // console.log("renderEmailList()", state)
  const list = document.querySelector(".list");
  list.innerHTML = "";
  // Iterate over the list of messages
  state.messages.forEach( message =>{
    // console.log(message);

    // For every message, render the following markup
    
    // Object, dynamic rendering:
    const li = document.createElement("li");
    let liInner = "";
    liInner += `<strong>${message.title}</strong>`
    if ( message.unread ){
      liInner += `<span> (unread)</span>`
    }
    li.innerHTML = liInner;
    li.addEventListener("click", ()=>{
      // Read this email
      console.log("Reading email with id:", message.id);
      app.selectMessage(message.id);
    })
    list.appendChild(li);

    
    // Simple string, dynamic rendering:
    // let li = "";
    // li += `<li><strong>${message.title}</strong>`
    // if ( message.unread ){
    //   li += `<span>(unread)</span>`
    // }
    // li += `</li>`;
    // list.innerHTML += li;
  })
}
function renderInbox(state){
  // console.log("renderInbox()",state)
  // Reading all the messages and counting the total unread messages
  const numOfUnread = state.messages.filter( message => message.unread === true ).length;
  // Re-render the Inbox UI
  // console.log(numOfUnread);
  document.querySelector("#inbox").innerHTML = `Inbox: ${numOfUnread}`
}
// Challenge: implement this subscriber
function renderEmailViewer(state){
  console.log("renderEmailViewer()",state.current);
  // Challenge: Render the `current` email
}

// Challenge: mark each email as 'read'

const unsubscribeEmailList = app.subscribe(renderEmailList);
const unsubscribeInbox = app.subscribe(renderInbox);
const unsubscribeEmailViewre = app.subscribe(renderEmailViewer);
// app.debug();

app.addMessage({ id: 1, title: "Email A", body: "Body A", unread: true });
app.addMessage({ id: 2, title: "Email B", body: "Body B", unread: true });
// app.markMessageAsRead(2);
unsubscribeEmailList();
app.addMessage({ id: 3, title: "Email C", body: "Body C", unread: false });
// app.addMessages([{},{},{}])