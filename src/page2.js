export default function page2() {
    console.log('Page 2 Loaded');
    const button = document.createElement('button');
    button.textContent = 'Click Me';
    button.addEventListener('click', () => {
      console.log('Button clicked on Page 2!');
});
    document.body.appendChild(button);
  }