let father = document.getElementById('parent');
let proplems = document.getElementById('fixProplems');
let UserName = document.getElementById('username');
let Password = document.getElementById('password');
let confirmpassword = document.getElementById('confirmpassword');
let ButtonRegister = document.getElementById('buttonREGISTER');
let count = 0;
let messageDisplayed = false; // تتبع إذا كانت الرسالة قد تم عرضها بالفعل

ButtonRegister.onclick = function(event) {
    // إمسح الرسائل السابقة قبل إضافة رسالة جديدة
    proplems.innerHTML = '';
    messageDisplayed = false; // إعادة تعيين حالة عرض الرسالة

    if (UserName.value == "") {
        let prag = document.createElement('p');
        prag.innerHTML = '❶ USERNAME : this cannot be empty';
        prag.style.color = 'red';
        proplems.appendChild(prag);
        messageDisplayed = true; // تم عرض الرسالة
    }

    if (Password.value.length < 8) {
        let prag = document.createElement('p');
        prag.innerHTML = '❷ Password should be at least 8 characters long';
        prag.style.color = 'red';
        proplems.appendChild(prag);
        messageDisplayed = true; // تم عرض الرسالة
    }

    if (confirmpassword.value !== Password.value) {
        let prag = document.createElement('p');
        prag.innerHTML = '❸ Passwords do not match';
        prag.style.color = 'red';
        proplems.appendChild(prag);
        messageDisplayed = true; // تم عرض الرسالة
    }

  
    //لو مش اتعرضت اي رساله ممكن اضيف رساله فاضيه
    if (!messageDisplayed) {
        let prag = document.createElement('p');
        prag.innerHTML = '';
        proplems.appendChild(prag);
    }
};
