class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        <div class="header page-width">
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>

            <div id="overlay"></div>


            <div class="headicon">
          
                <a href="https://darshathoughtways.com/"><img src="/Assets/header-logo.png" alt="logo"></a>
            
            </div>
            <div class="option" id="myLinks">
                <a href="https://darshathoughtways.com/pages/about.html">
                    <span>About</span>
                </a>

                <a href="/pages/services.html">
                    <span>Services</span>
                </a>

                <a href="#team">
                    <span>Team</span>
                </a>

                <a href="#casestudy">
                    <span>Case Study</span>
                </a>

                <a href="/pages/contact.html">
                    <span>Contact</span>
                </a>
            </div>
        </div>
        `
    }
    }

    // Define a custom section element (footer)
class CustomSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
         <footer class="">
                <div class="footstyle page-width">

                    <div class="contact">
                        <div class="callmail">
                            <div class="conpic">
                                <div class="mailbtm">
                                    <img src="/Assets/email-icon.png" alt="">
                                </div>
                                <span>
                                    <a href="mailto:darshathouhtways@gmail.com">darshathouhtways@gmail.com</a></span>
                            </div>
                            <div class="conpic">
                                <div class="mailbtm">
                                    <img src="/Assets/phone-icon.png" alt="">
                                </div>
                                <span><a href="tel:+919652133108">+91 9652133108</a>
                                </span>
                            </div>
                        </div>
                        <div class="footbot">
                            <img src="/Assets/footer-logo.png" alt="">
                        </div>
                    </div>
                    <div class="conlore">
                        <div class="explorefooter">
                            <h3>EXPLORE</h3>
                            <div class="btmoption">
                                <div class="btmside">
                                    <span>About</span>
                                    <span>Meet Our Team</span>
                                    <span>Case Study</span>
                                    <span>Latest News</span>
                                    <span>Contact</span>
                                </div>
                                <div class="btmside">
                                    <span>Support</span>
                                    <span>Tearms of Use</span>
                                    <span>Privacy Policy</span>
                                    <span>Help</span>
                                </div>
                            </div>


                        </div>
                        <div class="letterfoot">
                            <h3>NEWSLETTER</h3>
                            <span>Subscribe for our latest article and resources</span>
                        </div>
                    </div>
                </div>
            </footer>
             <div class="copyright">
            <span>Copyright &copy; 2024 Darsha Thought ways. All right Reserved</span>
        </div>
            `
    }
}


    customElements.define('custom-header', CustomHeader);
customElements.define('custom-section', CustomSection);

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
        x.style.display = "none";
        document.getElementById("overlay").style.display = "none";
    } else {
        x.style.display = "flex";
        document.getElementById("overlay").style.display = "block";
    }
}
