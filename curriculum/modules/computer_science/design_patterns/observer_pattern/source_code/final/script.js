class App {
  
  #messages = [];
  #current = null; // Upon selection, this will become a number (ID)

  // Data CRUD operations
  addMessage(message){
    this.#messages.push(message);
    this.#publish();
  }
  addMessages(messages){
    this.#messages.push(...messages);
    this.#publish();
  }
  markMessageAsRead(id){
    // Pick the right message based in the id
    const message = this.#messages.find( message => message.id === id );
    // Change its status
    message.unread = false;
    this.#publish();
  }
  deleteMessage(id){
    this.#messages = this.#messages.filter( msg => msg.id !== id); 
    if ( this.#current === id ){
      this.#current = null;
    }
    this.#publish();
  }
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
      this.#subscribers = this.#subscribers.filter( sub => sub !== subscriber);
    }.bind(this);
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
function renderEmailViewer(state){

  const message = document.querySelector(".message");
  message.innerHTML = "";

  if ( !state.current ){
    return;
  }

  const currentMessage = state.messages.find( message => message.id === state.current );

  const frag = document.createDocumentFragment();
  const h2 = document.createElement('h2');
  h2.textContent = currentMessage.title;
  const p = document.createElement('p');
  p.textContent = currentMessage.body;
  frag.appendChild(h2);
  frag.appendChild(p);
  if ( currentMessage.unread ){
    const button = document.createElement('button');
    button.innerHTML = "<small>Mark as read</small>";
    button.addEventListener("click", ()=>{
      app.markMessageAsRead(state.current);
    })
    frag.appendChild(button);
  }

  const delButton = document.createElement('button');
  delButton.innerHTML = "<small>Delete</small>";
  delButton.addEventListener("click", ()=>{
    app.deleteMessage(currentMessage.id);
  })
  frag.appendChild(delButton);

  message.appendChild(frag);
}

const unsubscribeEmailList = app.subscribe(renderEmailList);
const unsubscribeInbox = app.subscribe(renderInbox);
const unsubscribeEmailViewer = app.subscribe(renderEmailViewer);

// Unsubscribe:
// unsubscribeEmailList();
// unsubscribeInbox();
// unsubscribeEmailViewer()

app.addMessage({ id: 1, title: "Email A", body: "Body A", unread: true });
// app.addMessage({ id: 2, title: "Email B", body: "Body B", unread: true });
// app.addMessage({ id: 3, title: "Email C", body: "Body C", unread: false });
app.addMessages([
  { id: 2, title: "Email B", body: "Body B", unread: true },
  { id: 3, title: "Email C", body: "Body C", unread: false }
])