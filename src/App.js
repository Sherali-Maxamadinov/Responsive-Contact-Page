import "./App.css";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="contact-page">
          <div className="contact">
            <div className="header">
              <h1>Contact Us</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                animi nesciunt vel quo doloremque sequi rerum? Beatae totam
                perspiciatis quibusdam officia consectetur voluptatibus
                voluptates, repudiandae voluptatum aperiam magnam quam soluta?
              </p>
            </div>
            <div className="body">
              <div className="details">
                <div className="detail">
                  <div className="icon"></div>
                  <div className="text">
                    <h3>Address</h3>
                    <p>4671 Sugar Camp Road, Montana, Minniesota, 556124</p>
                  </div>
                </div>
                <div className="detail">
                  <div className="icon"></div>
                  <div className="text">
                    <h3>Phone</h3>
                    <p>507-475-6094</p>
                  </div>
                </div>
                <div className="detail">
                  <div className="icon"></div>
                  <div className="text">
                    <h3>Email</h3>
                    <p>maxamadinov.s.j@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="form">
                <h2>Send Message</h2>
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Email" />
                <textarea
                  name="message"
                  className="textarea"
                  placeholder="Type Your Message..."
                  rows="4"
                ></textarea>
                <button>Send</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
