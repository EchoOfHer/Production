document.addEventListener('DOMContentLoaded', function() {
    const membersData = [
        {
            name: "Jirawat Jakthong",
            role: "CTO",
            bgImage: "/assets/member/nobg/NoBGPeach.png"
        },
        {
            name: "Dechachai Kumkhong",
            role: "Accounting",
            bgImage: "/assets/member/nobg/NoBGDream.png"
        },
        {
            name: "Wiwanthanee Pronrod",
            role: "CEO",
            bgImage: "/assets/member/nobg/NoBG3.png"
        },
        {
            name: "Natthawut Saengmani",
            role: "Developer",
            bgImage: "/assets/member/nobg/NoBG4.png"
        },
        {
            name: "Khanatip Gankingpai",
            role: "Developer",
            bgImage: "/assets/member/nobg/NoBGQ.png"
        }
    ];

    const memberCols = document.querySelectorAll('.member-list .col');
    const memberList = document.querySelector('.member-list');
    const bgImage = document.querySelector('#BGImage img');
    const bgName = document.querySelector('#NameBG');
    
    const mobileBox = document.querySelector('.member-480');
    const mobileName = document.querySelector('.member-480 h3');
    const mobileRole = document.querySelector('.member-480 p');

    let selectedMemberIndex = null;
    
    // ★★★ หา index ของ CEO และเลื่อนให้อยู่ตรงกลาง ★★★
    const ceoIndex = membersData.findIndex(member => member.role === "CEO");
    
    if (ceoIndex !== -1) {
        const ceoCol = memberCols[ceoIndex];
        const ceoImg = ceoCol.querySelector('img');
        const ceoNameElement = ceoCol.querySelector('h3');
        const ceoRoleElement = ceoCol.querySelector('p');
        const ceoData = membersData[ceoIndex];
        
        // ★★★ เลื่อน scroll ให้ CEO อยู่ตรงกลาง (สำหรับ mobile) ★★★
        setTimeout(() => {
            const colRect = ceoCol.getBoundingClientRect();
            const listRect = memberList.getBoundingClientRect();
            const scrollLeft = ceoCol.offsetLeft - (listRect.width / 2) + (colRect.width / 2);
            memberList.scrollLeft = scrollLeft;
        }, 100);
        
        // ตั้งค่า active
        ceoImg.classList.add('active');
        ceoCol.classList.add('active');
        selectedMemberIndex = ceoIndex;
        
        // แสดงข้อมูล Desktop
        ceoNameElement.textContent = ceoData.name;
        ceoRoleElement.textContent = ceoData.role;
        
        // แสดงข้อมูล Mobile
        if(mobileBox && mobileName && mobileRole) {
            mobileName.textContent = ceoData.name;
            mobileRole.textContent = ceoData.role;
            mobileBox.classList.add('active');
        }
        
        // เปลี่ยนรูปใหญ่
        bgImage.src = ceoData.bgImage;
        
        // เปลี่ยนชื่อใหญ่
        const nameParts = ceoData.name.split(' ');
        if (nameParts.length >= 2) {
            bgName.innerHTML = `<span class="fname">${nameParts[0]}</span><span class="lname">${nameParts[1]}</span>`;
        } else {
            bgName.innerHTML = `<span class="fname">${ceoData.name}</span>`;
        }
    }
    
    memberCols.forEach((col, index) => {
        const img = col.querySelector('img');
        const nameElement = col.querySelector('h3');
        const roleElement = col.querySelector('p');
        
        img.addEventListener('click', function() {
            if (selectedMemberIndex === index) {
                // ★★★ กรณีปิด (Deselect) ★★★
                img.classList.remove('active');
                col.classList.remove('active');
                selectedMemberIndex = null;
                
                // ★★★ บังคับรีเซ็ต style ★★★
                img.style.border = '0px solid transparent';
                img.style.padding = '0px';
                img.style.filter = 'grayscale(100%)';
                img.style.transform = 'translateY(0px)';
                
                if(mobileBox) mobileBox.classList.remove('active');

                bgImage.src = "/assets/member/nobg/NoBGQ.png";
                bgName.innerHTML = '<span class="fname">Team</span><span class="lname">Member</span>';
            
            } else {
                // ★★★ กรณีเลือกใหม่ (Select) ★★★
                
                // ปิดทั้งหมดก่อน และรีเซ็ต style
                memberCols.forEach(c => {
                    const cImg = c.querySelector('img');
                    cImg.classList.remove('active');
                    c.classList.remove('active');
                    // รีเซ็ต style ของรูปที่ไม่ได้เลือก
                    cImg.style.border = '0px solid transparent';
                    cImg.style.padding = '0px';
                    cImg.style.filter = 'grayscale(100%)';
                    cImg.style.transform = 'translateY(0px)';
                });
                
                // เปิดตัวที่เลือก
                img.classList.add('active');
                col.classList.add('active');
                selectedMemberIndex = index;
                
                // ล้าง inline style เพื่อให้ใช้ CSS class แทน
                img.style.border = '';
                img.style.padding = '';
                img.style.filter = '';
                img.style.transform = '';
                
                const memberData = membersData[index];

                // อัพเดท Text ของ Desktop (อันเดิม)
                nameElement.textContent = memberData.name;
                roleElement.textContent = memberData.role;

                // อัพเดท Text ของ Mobile Box
                if(mobileBox && mobileName && mobileRole) {
                    mobileName.textContent = memberData.name;
                    mobileRole.textContent = memberData.role;
                    mobileBox.classList.add('active');
                }
                
                // เปลี่ยนรูปใหญ่
                bgImage.src = memberData.bgImage;
                
                // เปลี่ยนชื่อใหญ่
                const nameParts = memberData.name.split(' ');
                if (nameParts.length >= 2) {
                    bgName.innerHTML = `<span class="fname">${nameParts[0]}</span><span class="lname">${nameParts[1]}</span>`;
                } else {
                    bgName.innerHTML = `<span class="fname">${memberData.name}</span>`;
                }
            }
        });
    });
});

// Dropdown controller
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle-nav i');
    const dropdownMenu = document.getElementById('dropdown_menu');
    
    toggleBtn.addEventListener('click', function() {
        dropdownMenu.classList.toggle('open');
        
        // เปลี่ยนไอคอนระหว่าง bars กับ times
        if (dropdownMenu.classList.contains('open')) {
            this.classList.remove('fa-bars');
            this.classList.add('fa-times');
        } else {
            this.classList.remove('fa-times');
            this.classList.add('fa-bars');
        }
    });
    
    // ปิด dropdown เมื่อคลิกข้างนอก
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav')) {
            dropdownMenu.classList.remove('open');
            toggleBtn.classList.remove('fa-times');
            toggleBtn.classList.add('fa-bars');
        }
    });
});