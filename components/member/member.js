document.addEventListener('DOMContentLoaded', function() {
    const membersData = [
        {
            name: "Jirawat Jakthong",
            role: "Frontend Developer",
            bgImage: "/assets/member/nobg/NoBGPeach.png" // เพิ่ม path รูปใหญ่
        },
        {
            name: "Dechachai Kumkhong",
            role: "Backend Developer",
            bgImage: "/assets/member/nobg/NoBGDream.png" // เปลี่ยนตามรูปจริง
        },
        {
            name: "Member 3",
            role: "CEO",
            bgImage: "/assets/member/nobg/NoBG3.png"
        },
        {
            name: "Natthawut Saengmani",
            role: "Developer",
            bgImage: "/assets/member/nobg/NoBG4.png"
        },
        {
            name: "Khanatip Khankingpai",
            role: "Developer",
            bgImage: "/assets/member/nobg/NoBGQ.png"
        }
    ];

    const memberCols = document.querySelectorAll('.member-list .col');
    const bgImage = document.querySelector('#BGImage img'); // เลือกรูปใหญ่
    const bgName = document.querySelector('#NameBG'); // เลือกชื่อใหญ่
    let selectedMemberIndex = null;
    
    memberCols.forEach((col, index) => {
        const img = col.querySelector('img');
        const nameElement = col.querySelector('h3');
        const roleElement = col.querySelector('p');
        
        img.addEventListener('click', function() {
            // ถ้าคลิกรูปเดิม ให้ปิด
            if (selectedMemberIndex === index) {
                img.classList.remove('active');
                col.classList.remove('active');
                selectedMemberIndex = null;
                console.log('ปิดการเลือก');
                
                // รีเซ็ตรูปใหญ่กลับไปเป็นรูปเริ่มต้น
                bgImage.src = "/assets/member/nobg/NoBGQ.png";
                bgName.innerHTML = '<span class="fname">Khanatip</span><span class="lname">khankingpai</span>';
            } else {
                // ปิดทั้งหมด
                memberCols.forEach(c => {
                    c.querySelector('img').classList.remove('active');
                    c.classList.remove('active');
                });
                
                // เปิดรูปที่คลิก
                img.classList.add('active');
                col.classList.add('active');
                selectedMemberIndex = index;
                
                // อัพเดทชื่อและตำแหน่ง
                const memberData = membersData[index];
                nameElement.textContent = memberData.name;
                roleElement.textContent = memberData.role;
                
                // เปลี่ยนรูปใหญ่ตรงกลาง
                bgImage.src = memberData.bgImage;
                
                // เปลี่ยนชื่อใหญ่ (แยกชื่อ-นามสกุล)
                const nameParts = memberData.name.split(' ');
                if (nameParts.length >= 2) {
                    bgName.innerHTML = `<span class="fname">${nameParts[0]}</span><span class="lname">${nameParts[1]}</span>`;
                } else {
                    bgName.innerHTML = `<span class="fname">${memberData.name}</span>`;
                }
                
                console.log('เลือกสมาชิก:', memberData);
            }
        });
    });
});