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
    const bgImage = document.querySelector('#BGImage img');
    const bgName = document.querySelector('#NameBG');
    
    // ★★★ 1. ประกาศตัวแปรสำหรับ Mobile Box ★★★
    const mobileBox = document.querySelector('.member-480');
    const mobileName = document.querySelector('.member-480 h3');
    const mobileRole = document.querySelector('.member-480 p');

    let selectedMemberIndex = null;
    
    memberCols.forEach((col, index) => {
        const img = col.querySelector('img');
        const nameElement = col.querySelector('h3');
        const roleElement = col.querySelector('p');
        
        img.addEventListener('click', function() {
            // กรณีปิด (Deselect)
            if (selectedMemberIndex === index) {
                img.classList.remove('active');
                col.classList.remove('active');
                selectedMemberIndex = null;
                
                // ★★★ 2. สั่งปิด Mobile Box ★★★
                if(mobileBox) mobileBox.classList.remove('active');

                // รีเซ็ตรูปใหญ่
                bgImage.src = "/assets/member/nobg/NoBGQ.png";
                bgName.innerHTML = '<span class="fname">Team</span><span class="lname">Member</span>';
            
            } else {
                // กรณีเลือกใหม่ (Select)
                
                // ปิดทั้งหมดก่อน
                memberCols.forEach(c => {
                    c.querySelector('img').classList.remove('active');
                    c.classList.remove('active');
                });
                
                // เปิดตัวที่เลือก
                img.classList.add('active');
                col.classList.add('active');
                selectedMemberIndex = index;
                
                const memberData = membersData[index];

                // อัพเดท Text ของ Desktop (อันเดิม)
                nameElement.textContent = memberData.name;
                roleElement.textContent = memberData.role;

                // ★★★ 3. อัพเดท Text ของ Mobile Box ★★★
                if(mobileBox && mobileName && mobileRole) {
                    mobileName.textContent = memberData.name;
                    mobileRole.textContent = memberData.role;
                    mobileBox.classList.add('active'); // ใส่ class active เพื่อให้ CSS สั่งแสดง
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