export function createMenu() {
    const pages = [
      { name: 'Home', path: '/index.html' },
      { name: 'Page 1', path: '/page1.html' },
      { name: 'Page 2', path: '/page2.html' },
      // Add more pages here
    ];
    const menuContainer = document.createElement('nav');
    const menuList = document.createElement('ul');
    pages.forEach(page => {
      const menuItem = document.createElement('li');
      const menuLink = document.createElement('a');
      menuLink.textContent = page.name;
      menuLink.href = page.path;
      menuItem.appendChild(menuLink);
      menuList.appendChild(menuItem);
    });
    menuContainer.appendChild(menuList);
    document.body.insertBefore(menuContainer, document.body.firstChild);
  }