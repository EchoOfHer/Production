class MyNavbar extends HTMLElement {
    constructor() {
        super(); // ต้องมี super() เสมอเมื่อใช้ constructor
    }

    connectedCallback() {
        this.innerHTML = `
      <style>
        /* CSS */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
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
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            color: white;
            margin-right: 130px;
            font-family: 'Inter';
            font-weight: 100; /* ตัวบางปกติ */
            font-size: 24px;
            transition: color 0.3s;
        }

    /* หัวใจสำคัญ: สร้างพื้นที่สำรองสำหรับตัวหนา */
        nav a::before {
            display: block;
            content: attr(data-text); /* ดึงข้อความจาก data-text มา */
            font-weight: bold;         /* สั่งให้เป็นตัวหนา */
            height: 0;                /* ทำให้ไม่มีความสูง จะได้ไม่ดันบรรทัด */
            visibility: hidden;       /* ซ่อนไว้เพื่อจองพื้นที่ความกว้างเฉยๆ */
        }

        nav a:hover {
            font-weight: bold;         /* เมื่อ Hover ค่อยเปลี่ยนเป็นตัวหนา */
            color: #FF9248;
        }
        nav icon{
            margin-right: auto; 
            margin-left:35px;
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
        <img src="/assets/images/logo.png" alt="Logo">
    </icon>
    <a href="../index.html" data-text="HOME">HOME</a>
    <a href="/views/prototype.html" data-text="PROTOTYPE">PROTOTYPE</a>
    <a href="team.html" data-text="TEAM">TEAM</a>
    <a href="contact.html" data-text="CONTACT">CONTACT</a>
</nav>
    `;
    }
}

// ตรวจสอบว่ามีชื่อนี้อยู่หรือยังก่อนกด define
if (!customElements.get('main-navbar')) {
    customElements.define('main-navbar', MyNavbar);
}