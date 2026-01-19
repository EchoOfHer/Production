class MyNavbar extends HTMLElement {
    constructor() {
        super(); // ต้องมี super() เสมอเมื่อใช้ constructor
    }

    connectedCallback() {
        this.innerHTML = `
      <style>
        @font-face {
            font-family: 'SourceSan3'; /* Give it a name you'll use later */
            src: url('/assets/fonts/SourceSans3-VariableFont_wght.ttf') format('truetype'); /* Path to your file */
            font-weight: normal;
            font-style: normal;
        }
        body {
            margin: 0;
            background-color: #2B2B2B;
        }
        nav {
            background: #2B2B2B;
            padding: 25px 100px;
            display: flex;
            
            align-items: center; /* 2. เพิ่มอันนี้เพื่อให้ Logo กับตัวหนังสือตรงกันในแนวตั้ง */
            
            position: relative; 
            opacity: 0.7;
            z-index: 5;
        }
        nav a {
            font-weight: 100;
            padding-right: 20px;
            color: white;
            margin-right: 130px;
            text-decoration: none;
            font-family: 'SourceSan3';
            font-weight:lighter;
            font-size: 24px;
        }

        nav a:hover {
            font-weight: bold;
            color:#FF9248;
        }
        nav icon{
            margin-right: auto; 
            
            display: flex; /* จัดให้รูปข้างใน icon ตรงกลาง */
            align-items: center;
        }
        img{
            height: 45px;     /* ปรับขนาดตามความเหมาะสมของดีไซน์ */
            width: auto;

        }
      </style>
      <nav>
        <icon>
            <img src="/assets/images/logo.png" alt="Girl in a jacket">
        </icon>
        <a href="../index.html">HOME</a>
        <a href="/views/prototype.html">PROTOTYPE</a>
        <a href="/views/member.html">TEAM</a>
        <a href="contact.html">CONTACT</a>
    </nav>
    `;
    }
}

// ตรวจสอบว่ามีชื่อนี้อยู่หรือยังก่อนกด define
if (!customElements.get('main-navbar')) {
    customElements.define('main-navbar', MyNavbar);
}