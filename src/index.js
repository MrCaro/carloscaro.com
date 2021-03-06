import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/main.css'

ReactDOM.render(
  <React.StrictMode>
      {/*TODO create preload component*/}
      <div id="wrapper-preloader">
          <div id="container-preloader">
              <div id="preload">
                  <div>
                      <p className="text-cc_gray-dark uppercase loading-text">loading...</p>
                  </div>
              </div>
          </div>
      </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//change theme dark or light mode toggle setup
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const themeText = document.querySelector('.theme-switch-wrapper em');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        themeText.innerHTML = 'enable dark mode';
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeText.innerHTML = 'enable light mode';
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
