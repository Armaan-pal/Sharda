class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        <div class="header page-width">
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>

            <div id="overlay"></div>

            
            <div class="headicon"><img src="/Assets/header-logo.png" alt=""></div>
            <div class="option" id="myLinks">
                <a href="#">
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
        this.innerHTML = ``
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
