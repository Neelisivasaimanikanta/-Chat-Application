// Get DOM Elements
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const logoutBtn = document.getElementById('logout-btn');
const sendBtn = document.getElementById('send-btn');
const messageInput = document.getElementById('message-input');
const chatMessages = document.getElementById('chat-messages');
const typingIndicator = document.getElementById('typing-indicator');
const authSection = document.getElementById('auth-section');
const chatSection = document.getElementById('chat-section');

// Dummy user authentication status
let userAuthenticated = false;

// Authentication state change simulation
function toggleAuthSection() {
  if (userAuthenticated) {
    authSection.classList.add('hidden');
    chatSection.classList.remove('hidden');
  } else {
    authSection.classList.remove('hidden');
    chatSection.classList.add('hidden');
  }
}

// Login function (simulated)
loginBtn.addEventListener('click', () => {
  userAuthenticated = true;
  toggleAuthSection();
});

// Sign up function (simulated)
signupBtn.addEventListener('click', () => {
  userAuthenticated = true;
  toggleAuthSection();
});

// Logout function
logoutBtn.addEventListener('click', () => {
  userAuthenticated = false;
  toggleAuthSection();
});

// Send message function
sendBtn.addEventListener('click', () => {
  const messageText = messageInput.value.trim();
  if (messageText) {
    sendMessage(messageText);
    messageInput.value = '';
    typingIndicator.classList.add('hidden');
  }
});

// Typing indicator
messageInput.addEventListener('input', () => {
  typingIndicator.classList.remove('hidden');
  setTimeout(() => {
    typingIndicator.classList.add('hidden');
  }, 2000);
});

// Load chat messages (simulation)
function loadChatMessages() {
  const messages = [
    "Hello! How are you?",
    "I'm fine, thanks for asking!",
    "What's up?",
    "Just working on some projects."
  ];

  messages.forEach((messageText) => {
    createMessage(messageText);
  });
}

// Send message to chat area
function sendMessage(messageText) {
  createMessage(messageText);
}

// Create a message element
function createMessage(messageText) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.textContent = messageText;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Initialize chat messages
loadChatMessages();
toggleAuthSection();
