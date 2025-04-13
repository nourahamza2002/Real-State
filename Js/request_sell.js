// Regular expressions for validation
var validationPatterns = {
    firstName: /^[A-Za-z]{3,}$/,
    lastName: /^[A-Za-z]{3,}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    address: /^[0-9a-zA-Z\s,.-]{10,}$/,
    phone: /^[0-9]{11}$/,
    details: /^[A-Za-z\s.,!?-]{1,500}$/
};

// object carry all Input fields 
var formInputs = {
    firstName: document.getElementById("firstName"),
    lastName: document.getElementById("LastName"),
    address: document.getElementById("address"),
    email: document.getElementById("email"),
    phone: document.getElementById("phone"),
    details: document.getElementById("details")
};

// Error messages for each field
var errorMessages = {
    firstName: "Please enter a valid first name (at least 3 letters)",
    lastName: "Please enter a valid last name (at least 3 letters)",
    email: "Please enter a valid email address (e.g., example@domain.com)",
    address: "Please enter a valid address (at least 10 characters)",
    phone: "Please enter a valid 11-digit phone number",
    details: "Please enter valid details (letters, spaces, and basic punctuation only)"
};

// pic Form and submit button 
var form = document.getElementById("sellForm");

function validationOfField(fieldName,value) {

    var errorElement = formInputs[fieldName].parentElement.querySelector(".error-message");
    var pattern = validationPatterns[fieldName];

    if (!pattern.test(value)) {

        errorElement.innerText = errorMessages[fieldName];
        return false
    }
    else {

        errorElement.innerText = "";
        return true;

    }
}


// pic the submited success paragrph 
var submitedParagraph = document.querySelector(".form-submited");

function check(event) {

    event.preventDefault(); // Prevent form submission

    var isValid = true;

    // varible carry all fields names (keys) in array
    var fields = Object.keys(formInputs);
    
    for (var i = 0; i < fields.length;i++) {
        // varible carry each fieldname 
        var fieldName = fields[i];

        // pass the element value and the name of the element to check the validation
        isFieldValid = validationOfField(fieldName,formInputs[fieldName].value)
        isValid = isValid && isFieldValid;
    }

    // submit form only when is vaild is true
    if (isValid) {

        window.scrollTo(0,0);
        
        var setTimeForSuccess = setTimeout(function () {

            submitedParagraph.classList.add("show");

        },500);

        // clear the effect after 3sec
        var clearEffect = setTimeout(function () {

            submitedParagraph.style.visibility = "hidden";

        },3000);
           
        var fields = Object.keys(formInputs);

        // save data to localstorage
        for(var i = 0; i < fields.length ; i++) {

            var fieldsName = fields[i];
            localStorage.setItem(fieldsName,formInputs[fieldsName].value);

        }
    }
}

form.addEventListener("submit", check);

////////////////////////////////////////////////////////
/*
// Regular expressions for validation
// الأنماط العادية للتحقق من صحة المدخلات
var validationPatterns = {
    firstName: /^[A-Za-z]{3,}$/,  // تحقق من أن الاسم الأول يحتوي على 3 أحرف على الأقل
    lastName: /^[A-Za-z]{3,}$/,   // تحقق من أن الاسم الأخير يحتوي على 3 أحرف على الأقل
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,  // تحقق من صيغة البريد الإلكتروني
    address: /^[0-9a-zA-Z\s,.-]{10,}$/, // تحقق من أن العنوان يحتوي على 10 أحرف على الأقل
    phone: /^[0-9]{11}$/,  // تحقق من أن رقم الهاتف يتكون من 11 رقم
    details: /^[A-Za-z\s.,!?-]{1,500}$/  // تحقق من أن التفاصيل تحتوي على 1 إلى 500 حرف (أحرف، مسافات، وعلامات ترقيم أساسية)
};

// object carry all Input fields 
// تخزين عناصر المدخلات في الكائن formInputs
var formInputs = {
    firstName: document.getElementById("firstName"),  // حقل الاسم الأول
    lastName: document.getElementById("LastName"),    // حقل الاسم الأخير
    address: document.getElementById("address"),      // حقل العنوان
    email: document.getElementById("email"),          // حقل البريد الإلكتروني
    phone: document.getElementById("phone"),          // حقل رقم الهاتف
    details: document.getElementById("details")       // حقل التفاصيل
};

// Error messages for each field
// رسائل الأخطاء لكل حقل
var errorMessages = {
    firstName: "Please enter a valid first name (at least 3 letters)",  // رسالة خطأ للاسم الأول
    lastName: "Please enter a valid last name (at least 3 letters)",    // رسالة خطأ للاسم الأخير
    email: "Please enter a valid email address (e.g., example@domain.com)",  // رسالة خطأ للبريد الإلكتروني
    address: "Please enter a valid address (at least 10 characters)",  // رسالة خطأ للعنوإن
    phone: "Please enter a valid 11-digit phone number",  // رسالة خطأ لرقم الهاتف
    details: "Please enter valid details (letters, spaces, and basic punctuation only)"  // رسالة خطأ للتفاصيل
};

// pic Form and submit button 
// التقاط النموذج وزر الإرسال
var form = document.getElementById("sellForm");

// Function to validate a field
// دالة للتحقق من صحة الحقل
function validationOfField(fieldName, value) {

    var errorElement = formInputs[fieldName].parentElement.querySelector(".error-message");  // الحصول على عنصر الرسالة الخاصة بالخطأ
    var pattern = validationPatterns[fieldName];  // الحصول على نمط التحقق من الحقل

    if (!pattern.test(value)) {  // إذا كانت القيمة لا تطابق النمط
        errorElement.innerText = errorMessages[fieldName];  // عرض رسالة الخطأ
        return false;  // إرجاع false لإظهار أن المدخل غير صحيح
    } else {
        errorElement.innerText = "";  // إذا كانت القيمة صحيحة، إخفاء رسالة الخطأ
        return true;  // إرجاع true لإظهار أن المدخل صحيح
    }
}

// pic the submited success paragraph 
// التقاط فقرة النجاح عند الإرسال
var submitedParagraph = document.querySelector(".form-submited");

// Function to check form validation
// دالة للتحقق من صحة النموذج قبل الإرسال
function check(event) {

    event.preventDefault(); // منع إرسال النموذج بشكل افتراضي

    var isValid = true;  // فرضية أن النموذج صحيح

    // متغير يحمل أسماء الحقول (المفاتيح) في مصفوفة
    var fields = Object.keys(formInputs);
    
    for (var i = 0; i < fields.length; i++) {
        // متغير يحمل كل اسم حقل
        var fieldName = fields[i];

        // التحقق من صحة الحقل وإعطاء النتيجة للمتغير isValid
        var isFieldValid = validationOfField(fieldName, formInputs[fieldName].value);
        isValid = isValid && isFieldValid;  // إذا كان أحد الحقول غير صحيح، فإن isValid سيكون false
    }

    // إذا كانت جميع الحقول صحيحة، نقوم بإرسال النموذج
    if (isValid) {

        window.scrollTo(0, 0);  // التمرير إلى أعلى الصفحة
        
        // تعيين مؤقت لعرض رسالة النجاح بعد 500 ميلي ثانية
        var setTimeForSuccess = setTimeout(function () {
            submitedParagraph.classList.add("show");  // عرض رسالة النجاح
        }, 500);

        // مسح التأثير بعد 3 ثواني
        var clearEffect = setTimeout(function () {
            submitedParagraph.style.visibility = "hidden";  // إخفاء رسالة النجاح بعد 3 ثواني
        }, 3000);

        // حفظ البيانات في التخزين المحلي
        for (var i = 0; i < fields.length; i++) {
            var fieldName = fields[i];
            localStorage.setItem(fieldName, formInputs[fieldName].value);  // حفظ قيمة الحقل في localStorage
        }
    }
}

// إضافة مستمع الحدث عند إرسال النموذج
form.addEventListener("submit", check);

*/