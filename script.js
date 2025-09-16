document.addEventListener('DOMContentLoaded', () => {
    const langThBtn = document.getElementById('lang-th-btn');
    const langEnBtn = document.getElementById('lang-en-btn');

    const setLanguage = (lang) => {
        // เลือก element ทั้งหมดที่มี class lang-th และ lang-en
        const thElements = document.querySelectorAll('.lang-th');
        const enElements = document.querySelectorAll('.lang-en');

        if (lang === 'th') {
            thElements.forEach(el => el.classList.remove('hidden'));
            enElements.forEach(el => el.classList.add('hidden'));
            langThBtn.classList.add('active');
            langEnBtn.classList.remove('active');
            document.documentElement.lang = 'th';
        } else {
            thElements.forEach(el => el.classList.add('hidden'));
            enElements.forEach(el => el.classList.remove('hidden'));
            langEnBtn.classList.add('active');
            langThBtn.classList.remove('active');
            document.documentElement.lang = 'en';
        }
        // บันทึกภาษาที่เลือกลงใน localStorage
        localStorage.setItem('preferredLanguage', lang);
    };

    langThBtn.addEventListener('click', () => setLanguage('th'));
    langEnBtn.addEventListener('click', () => setLanguage('en'));

    // ตรวจสอบภาษาที่บันทึกไว้เมื่อโหลดหน้าเว็บ
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'th'; // ค่าเริ่มต้นคือ 'th'
    setLanguage(preferredLanguage);
});