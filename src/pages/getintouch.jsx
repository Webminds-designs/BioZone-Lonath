import '../css/git.css';

const Getintouch = () => {
    return (
      <section id="section4">
        <div className="getintouch-container">

          <div className="gitSection">

            <div className="git-title">
              <h1>
                Get in touch 
                <br/>
                with Us!
              </h1>
            </div>

            <div className="gitDesc">
              <h2>Want to know more about the classes or want to find out which delivery method suits you the most ? 
              <br/>
              Our team is ready to guide you through your journey to success.
              </h2>
            </div>

            <div className="git-btns">

            <button
              className="ct-button b2"
              onClick={() => window.open("mailto:biozonec@gmail.com?subject=Hello%20Biozone", "_blank")}>
              Send an Email
            </button>

            <button
              className="ct-button b1"
              onClick={() => window.open("https://wa.me/94777219676?text=Hello%20Biozone", "_blank")}>
              Chat on WhatsApp
            </button>

            <button
              className="ct-button b3"
              onClick={() => window.open("https://t.me/+94777219676", "_blank")}>
              Access to Telegram Groups
            </button>

            </div>

          </div>

       </div>
      </section>
    );
  };
  
  export default Getintouch;
  