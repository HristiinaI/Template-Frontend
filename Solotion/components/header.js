class Header extends HTMLElement {
    constructor() {
      super();
    }

    
  connectedCallback() {
    this.innerHTML = 
    `
    <style>
        header{
            position: relative;
            width: 100%;
        }
        
        .nav-div{
            position: relative;
            z-index: 3;
        }
        
        nav{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: auto;
            background-color: #FFFFFF;
        }
        
        nav>ul{
            display: inline-block;
            vertical-align: middle;
        }
        
        .logo{
            margin-left: 165px;
            display: inline-block;
            vertical-align: middle;
            padding: 10px 0 10px 0;
        }
        
        nav>ul>li{
            /* margin-top: 32px; */
            padding: 25px 20px;
            display: inline-block;
            vertical-align: middle;
            position: relative;
            font-size:14px;
            color: #9597A5; 
            font-family: 'Public Sans', sans-serif;
            border-bottom: 3px solid transparent;
        }
        
        nav>ul li:hover{
        color: hsl(233, 26%, 24%);
        border-bottom: 2px solid #33D35E;
        
    }
    
    </style>  
    <header>
            <div class="nav-div">
                <nav>
                    <figure class = "logo">
                        <img src="../img/logo.svg" alt="" />
                    </figure>
                    <ul>
                        <li onClick="location.href='index.html'">Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                    <div class="nav-button ">
                        <input class="button"type=button onClick="location.href='request_invate.html'"
                        value='Request Invite'>              
                    </div>
                </nav>
            </div>
        </header>  `;
    }
  }



  customElements.define('header-component', Header);