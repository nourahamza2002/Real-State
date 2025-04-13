document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const registerMeChecked = document.getElementById('registerMe').checked;

    // Regular Expressions for validation
    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/; // Alphanumeric with underscore, 3-15 characters
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Basic email validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // 8+ chars, letters, numbers, symbols

    let isValid = true;

    // Validate Username
    isValid = toggleError('usernameError', usernameRegex.test(username)) && isValid;

    // Validate Email
    isValid = toggleError('emailError', emailRegex.test(email)) && isValid;

    // Validate Password
    isValid = toggleError('passwordError', passwordRegex.test(password)) && isValid;

    // Validate Confirm Password
    isValid = toggleError('confirmPasswordError', password === confirmPassword) && isValid;

    // Validate "Register me" checkbox
    if (!registerMeChecked) {
        displayCustomError('registerMe', 'You must agree to "Register me" to proceed.');
        isValid = false;
    } else {
        removeCustomError('registerMe');
    }

    // If form is valid, save data to localStorage and redirect
    if (isValid) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const newUser = { username, email, password }; // Store hashed password in real-world applications
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('loggedInUser', username);
        alert('Registration successful!');
        window.location.href = '../HTML/homepage.html';
        document.getElementById('registrationForm').reset();
    }
});

// Helper Functions
function toggleError(elementId, condition) {
    const element = document.getElementById(elementId);
    if (!condition) {
        element.classList.add('show-error');
        return false;
    } else {
        element.classList.remove('show-error');
        return true;
    }
}

function displayCustomError(inputId, message) {
    let errorSpan = document.getElementById(`${inputId}Error`);
    if (!errorSpan) {
        errorSpan = document.createElement('span');
        errorSpan.id = `${inputId}Error`;
        errorSpan.classList.add('show-error');
        errorSpan.style.color = 'red';
        document.getElementById(inputId).parentElement.appendChild(errorSpan);
    }
    errorSpan.textContent = message;
}

function removeCustomError(inputId) {
    const errorSpan = document.getElementById(`${inputId}Error`);
    if (errorSpan) {
        errorSpan.remove();
    }
}

// Update header on page load
document.addEventListener('DOMContentLoaded', function () {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const loginLink = document.getElementById('loginLink');
    const userProfile = document.getElementById('userProfile');

    if (loggedInUser) {
        if (loginLink) loginLink.style.display = 'none';
        if (userProfile) {
            userProfile.style.display = 'inline';
            userProfile.textContent = `Welcome, ${loggedInUser}`;
        }
    }
});
/////////////////////////////////////////////////////////////

/**
 // عند تقديم النموذج (submit) يتم تنفيذ هذا الكود
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // منع إرسال النموذج بشكل افتراضي

    // الحصول على قيم الحقول المدخلة من المستخدم
    const username = document.getElementById('username').value.trim(); // اسم المستخدم
    const email = document.getElementById('email').value.trim(); // البريد الإلكتروني
    const password = document.getElementById('password').value; // كلمة المرور
    const confirmPassword = document.getElementById('confirmPassword').value; // تأكيد كلمة المرور
    const registerMeChecked = document.getElementById('registerMe').checked; // حالة اختيار "Register me"

    // تعريف التعبيرات النمطية (Regular Expressions) للتحقق من صحة البيانات المدخلة
    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/; // اسم المستخدم: من 3 إلى 15 حرفًا أو رقمًا أو underscore
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // التحقق من البريد الإلكتروني
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // كلمة المرور: 8+ حروف ورموز

    let isValid = true; // متغير لمتابعة حالة التحقق من صحة البيانات

    // التحقق من صحة اسم المستخدم
    isValid = toggleError('usernameError', usernameRegex.test(username)) && isValid;

    // التحقق من صحة البريد الإلكتروني
    isValid = toggleError('emailError', emailRegex.test(email)) && isValid;

    // التحقق من صحة كلمة المرور
    isValid = toggleError('passwordError', passwordRegex.test(password)) && isValid;

    // التحقق من تطابق كلمة المرور مع تأكيد كلمة المرور
    isValid = toggleError('confirmPasswordError', password === confirmPassword) && isValid;

    // التحقق من اختيار "Register me"
    if (!registerMeChecked) {
        displayCustomError('registerMe', 'You must agree to "Register me" to proceed.'); // عرض رسالة خطأ إذا لم يتم تحديده
        isValid = false; // تغيير حالة التحقق إلى غير صحيح
    } else {
        removeCustomError('registerMe'); // إزالة رسالة الخطأ إذا تم تحديده
    }

    // إذا كانت البيانات صحيحة، نقوم بتخزينها في localStorage ونعيد توجيه المستخدم للصفحة الرئيسية
    if (isValid) {
        const users = JSON.parse(localStorage.getItem('users')) || []; // الحصول على قائمة المستخدمين من localStorage أو تهيئتها كمصفوفة فارغة
        const newUser = { username, email, password }; // إنشاء كائن جديد يحتوي على بيانات المستخدم
        users.push(newUser); // إضافة المستخدم الجديد إلى المصفوفة
        localStorage.setItem('users', JSON.stringify(users)); // تخزين قائمة المستخدمين في localStorage
        localStorage.setItem('loggedInUser', username); // تخزين اسم المستخدم في localStorage لتحديد المستخدم الحالي
        alert('Registration successful!'); // عرض رسالة تأكيد عند نجاح التسجيل
        window.location.href = '../HTML/homepage.html'; // إعادة توجيه المستخدم إلى الصفحة الرئيسية بعد التسجيل
        document.getElementById('registrationForm').reset(); // إعادة تعيين النموذج بعد تقديمه
    }
});

// دالة للتحقق من صحة البيانات وعرض أو إزالة رسائل الخطأ بناءً على النتيجة
function toggleError(elementId, condition) {
    const element = document.getElementById(elementId); // الحصول على عنصر الرسالة المرتبطة بالتحقق
    if (!condition) {
        element.classList.add('show-error'); // إذا كانت البيانات غير صحيحة، نعرض رسالة الخطأ
        return false; // إرجاع قيمة false إذا كانت البيانات غير صحيحة
    } else {
        element.classList.remove('show-error'); // إزالة رسالة الخطأ إذا كانت البيانات صحيحة
        return true; // إرجاع قيمة true إذا كانت البيانات صحيحة
    }
}

// دالة لعرض رسالة خطأ مخصصة في حال لم يتم تحديد "Register me"
function displayCustomError(inputId, message) {
    let errorSpan = document.getElementById(`${inputId}Error`); // الحصول على عنصر الخطأ
    if (!errorSpan) {
        errorSpan = document.createElement('span'); // إنشاء عنصر جديد لعرض رسالة الخطأ
        errorSpan.id = `${inputId}Error`; // إعطاء عنصر الخطأ معرّف فريد
        errorSpan.classList.add('show-error'); // إضافة كلاس "show-error" لعرض الرسالة
        errorSpan.style.color = 'red'; // تحديد لون الرسالة باللون الأحمر
        document.getElementById(inputId).parentElement.appendChild(errorSpan); // إضافة الرسالة داخل الحقل
    }
    errorSpan.textContent = message; // تعيين نص رسالة الخطأ
}

// دالة لإزالة رسالة الخطأ عند تحديد "Register me"
function removeCustomError(inputId) {
    const errorSpan = document.getElementById(`${inputId}Error`); // الحصول على عنصر الخطأ
    if (errorSpan) {
        errorSpan.remove(); // إزالة رسالة الخطأ إذا كانت موجودة
    }
}

// عند تحميل الصفحة، نقوم بتحديث العناصر في الهيدر حسب حالة تسجيل الدخول
document.addEventListener('DOMContentLoaded', function () {
    const loggedInUser = localStorage.getItem('loggedInUser'); // الحصول على اسم المستخدم من localStorage
    const loginLink = document.getElementById('loginLink'); // الحصول على رابط تسجيل الدخول
    const userProfile = document.getElementById('userProfile'); // الحصول على عنصر عرض ملف المستخدم

    if (loggedInUser) {
        if (loginLink) loginLink.style.display = 'none'; // إذا كان هناك مستخدم مسجل، إخفاء رابط تسجيل الدخول
        if (userProfile) {
            userProfile.style.display = 'inline'; // عرض اسم المستخدم في الملف الشخصي
            userProfile.textContent = `Welcome, ${loggedInUser}`; // عرض رسالة ترحيب بالاسم
        }
    }
});

 */