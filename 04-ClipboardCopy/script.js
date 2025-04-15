const copyBtn = document.querySelector('button');
const textarea = document.querySelector('textarea');

copyBtn.addEventListener('click', () => {
    let textValue = textarea.value.trim(); // حذف فضاهای اضافی از ابتدا و انتهای متن

    if (textValue === '') {  // بررسی اینکه آیا textarea خالی است
        alert('Bitte geben Sie Ihren Text ein');  // پیغام هشدار
        return;  // جلوگیری از ادامه کپی کردن اگر متن خالی باشد
    }

    textarea.select(); // انتخاب محتوا
    navigator.clipboard.writeText(textValue); // کپی محتوا به حافظه موقت

    copyBtn.innerText = 'Kopiert'; // تغییر متن دکمه به "کپی شد"
    copyBtn.style.backgroundColor = '#b8860b'; // تغییر رنگ دکمه

    setTimeout(() => {
        copyBtn.innerText = 'Kopie'; // تغییر دوباره متن دکمه بعد از 1.5 ثانیه
        copyBtn.style.backgroundColor = '#ffd700'; // تغییر رنگ دکمه به رنگ اولیه
    }, 1500);
});