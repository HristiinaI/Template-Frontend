class Footer extends HTMLElement {
    constructor() {
      super();
    }

  //runs each time sutom elementi is inserted  
  connectedCallback() {
    this.innerHTML = 
    `
    <style>
        .footer-section{
            background-color: #2D314D;
            width: 100%;
            height: 300px;
            text-align: justify;
            position: absolute;
            color: #FFFFFF;
        }
        
        .footer-section>div{
            padding: 70px;
            vertical-align: top;
            display: inline-block;
            *display: inline;
            zoom: 1;
        }
        
        .footer-section ul{
            list-style:none;
            font-weight: 400;
            color: #FFFFFF;
            font-size: 15px;
            line-height: 1.733;
            position: relative;
        
        }
        
        .footer-section ul li{
            padding: 7px;
        }
        .footer-section ul li:hover{
            color: #30C88F;
        }
        
        #social-container{
            text-align: justify;
            width:100%;
            position: relative;
            top: 60px;
        }
        
        #social-container>div{
            padding: 5px;
            display: inline-block;
            *display: inline;
            zoom: 1;
        }
        
        
        span {
            display: inline-block;
            font-size: 0;
            line-height: 0
        }
        
        .copyright a{
            text-align: justify;
            width:100%;
            color: #FFFFFF;
            font-size:13px;
            position: relative;
            top: 60px;
            right: -165px;
        }
        
        .footer-section .logo{
            position: relative;
            left: -165px;
        }
        
        .footer-section button{
            position: relative;
            right: -160px;
        }
    </style> 

    <section class = "footer-section">
        <div>
        <img class = "logo" src="../img/logo.svg" alt="" />
        <div id = "social-container">
            <div>
                <img src="../img/icon-facebook.svg" alt="image" />
            </div>
            <div>
                <img src="../img/icon-youtube.svg" alt="image" />
            </div>
            <div>
                <img src="../img/icon-twitter.svg" alt="image" />
            </div>
            <div>
                <img src="../img/icon-pinterest.svg" alt="image" />
            </div>
            <div>
                <img src="../img/icon-instagram.svg" alt="image" />
            </div>
        </div><span></span>
        </div>
        <div>
            <ul>
                <li>About us</li>
                <li>Contact</li>
                <li>Blog</li>
                
            </ul>
        </div>
        <div>
            <ul>
                <li>Careers</li>
                <li>Support</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <input class="button"type=button onClick="location.href='request_invate.html'"
                        value='Request Invite'>
            <div class = "copyright" >
                <a>© Easybank. All Rights Reserved</a>
            </div>
        </div>
    </section><span></span>

    `;
    }
}

customElements.define('footer-component', Footer);
