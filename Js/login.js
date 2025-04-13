document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Regular Expressions for validation
    var usernameRegex = /^[a-zA-Z0-9_]{3,15}$/; // Username must be alphanumeric and 3-15 characters
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Password with letters, numbers, and special characters

    let isValid = true;

    // Validate Username
    if (!usernameRegex.test(username)) {
        document.getElementById('usernameError').classList.add('show-error');
        isValid = false;
    } else {
        document.getElementById('usernameError').classList.remove('show-error');
    }

    // Validate Password
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').classList.add('show-error');
        isValid = false;
    } else {
        document.getElementById('passwordError').classList.remove('show-error');
    }

    // Handle login
    if (isValid) {
        // Retrieve the users list from localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Find the user by username
        let user = users.find(function (user) {
            return user.username === username;
        });

        // Validate user credentials
        if (user && user.password === password) {
            alert('Login successful!');
            window.location.href = '../HTML/homepage.html'; // Redirect to the homepage
        } else {
            // Show error message for invalid login
            let loginError = document.getElementById('loginError');
            if (!loginError) {
                const errorSpan = document.createElement('span');
                errorSpan.id = 'loginError';
                errorSpan.classList.add('show-error');
                errorSpan.style.color = 'red';
                errorSpan.innerText = 'Invalid username or password.';
                document.getElementById('loginForm').appendChild(errorSpan);
            }
        }
    } else {
        // Remove existing login error if form is invalid
        let loginError = document.getElementById('loginError');
        if (loginError) {
            loginError.remove();
        }
    }
});
///////////////////////////////////
/**
 document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // منع إرسال النموذج

    // الحصول على القيم من النموذج
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // تعبيرات عادية للتحقق من صحة المدخلات
    var usernameRegex = /^[a-zA-Z0-9_]{3,15}$/; // اسم المستخدم يجب أن يكون أحرف أو أرقام أو شرطة سفلية وطوله بين 3 و 15 حرف
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // كلمة المرور يجب أن تحتوي على أحرف وأرقام ورموز خاصة وطولها على الأقل 8 أحرف

    let isValid = true;

    // التحقق من صحة اسم المستخدم
    if (!usernameRegex.test(username)) {
        document.getElementById('usernameError').classList.add('show-error'); // عرض رسالة خطأ إذا كان اسم المستخدم غير صالح
        isValid = false;
    } else {
        document.getElementById('usernameError').classList.remove('show-error'); // إزالة رسالة الخطأ إذا كان اسم المستخدم صالح
    }

    // التحقق من صحة كلمة المرور
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').classList.add('show-error'); // عرض رسالة خطأ إذا كانت كلمة المرور غير صالحة
        isValid = false;
    } else {
        document.getElementById('passwordError').classList.remove('show-error'); // إزالة رسالة الخطأ إذا كانت كلمة المرور صالحة
    }

    // إذا كانت المدخلات صالحة، نقوم بالتحقق من بيانات المستخدم
    if (isValid) {
        // الحصول على قائمة المستخدمين من localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // البحث عن المستخدم باستخدام اسم المستخدم
        let user = users.find(function (user) {
            return user.username === username;
        });

        // التحقق من بيانات المستخدم
        if (user && user.password === password) {
            alert('Login successful!'); // عرض رسالة نجاح الدخول
            window.location.href = '../HTML/homepage.html'; // إعادة توجيه المستخدم إلى الصفحة الرئيسية
            document.getElementById('loginForm').reset(); // مسح النموذج بعد تسجيل الدخول بنجاح
        } else {
            // عرض رسالة خطأ إذا كانت بيانات الدخول غير صحيحة
            let loginError = document.getElementById('loginError');
            if (!loginError) {
                const errorSpan = document.createElement('span');
                errorSpan.id = 'loginError';
                errorSpan.classList.add('show-error');
                errorSpan.style.color = 'red';
                errorSpan.innerText = 'Invalid username or password.'; // رسالة الخطأ
                document.getElementById('loginForm').appendChild(errorSpan); // إضافة رسالة الخطأ إلى النموذج
            }
        }
    } else {
        // إزالة رسالة الخطأ إذا كانت المدخلات غير صالحة
        let loginError = document.getElementById('loginError');
        if (loginError) {
            loginError.remove(); // إزالة رسالة الخطأ إذا كانت المدخلات غير صالحة
        }
    }
});

 */