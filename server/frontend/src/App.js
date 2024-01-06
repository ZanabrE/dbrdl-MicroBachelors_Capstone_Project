import './bootstrap.min.css';
import React from 'react';
import HomePage from './homepage.js';
import ContactUs from './contactus.js';


window.watsonAssistantChatOptions = {
integrationID: "b96d719e-5ff4-44c9-aaf0-fd7ea9622492", 
region: "us-south", 
serviceInstanceID: "e79978e4-5622-468a-b028-f932f1f55902", 
onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function(){
const t=document.createElement('script');
t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
document.head.appendChild(t);
});


class App extends React.Component {

  state = {
    pageshown:<HomePage/>
  }

  setPageHome = ()=> {
    this.setState({pageshown:<HomePage/>});    
  }
  
  setPageAboutUs = ()=> {
    this.setState({pageshown:<AboutUs/>})
  }

  setPageContactUs = ()=> {
    this.setState({pageshown:<ContactUs/>});    
  }
  
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#" onClick={this.setPageHome}>Home <span class="sr-only">(current)</span></a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#" onClick={this.setPageAboutUs}>About Us</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#" onClick={this.setPageContactUs}>Contact Us</a>
              </li>

            </ul>
          </div>
        </nav>
        <div>
          {this.state.pageshown}
        </div>
      </div>
    );
  }
}

export default App;
