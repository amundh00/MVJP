export default function page1() {
    console.log('Page 1 Loaded');
    const messageElement = document.createElement('p');
    messageElement.textContent = 'This message is added by page1.js';
    document.body.appendChild(messageElement);
  }