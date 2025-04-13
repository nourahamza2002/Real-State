document.getElementById('rentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var formData = new FormData(this);

    // Create a new data object
    var newRentData = {
        rentimage: URL.createObjectURL(formData.get('rentImage')), // For demo: creating a temporary URL for the image
        rent: formData.get('tenantName'),
        address: formData.get('propertyAddress'),
        description: formData.get('description')
    };

    // Fetch the current data from the rentdata.json file
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../Js/rentdata.json', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var existingData = JSON.parse(xhr.responseText);
            existingData.push(newRentData); // Add new data to the existing array

            window.location.href = '../HTML/rent.html';

            
            var saveXhr = new XMLHttpRequest();
            saveXhr.open('POST', '../Js/rentdata.json', true);
            saveXhr.setRequestHeader('Content-Type', 'application/json');
            saveXhr.onreadystatechange = function() {
                if (saveXhr.readyState === 4 && saveXhr.status === 200) {
                    console.log('Data added successfully');
                }
            };
            saveXhr.send(JSON.stringify(existingData)); // Send the updated array as JSON
        }
    };
    xhr.send();
});


//////////////////////////////////////////////////////////////
/**
 document.getElementById('rentForm').addEventListener('submit', function(event) { 
    // استدعاء الحدث 'submit' على النموذج rentForm 
    // عند إرسال النموذج، يتم استدعاء الدالة التالية.

    event.preventDefault(); 
    // منع الإجراء الافتراضي لإرسال النموذج (منع تحديث الصفحة).

    var formData = new FormData(this); 
    // إنشاء كائن FormData لجمع بيانات النموذج.

    // إنشاء كائن جديد لتخزين البيانات المُدخلة.
    var newRentData = {
        rentimage: URL.createObjectURL(formData.get('rentImage')), 
        // الحصول على صورة الإيجار وتحويلها إلى رابط مؤقت لعرضها.

        rent: formData.get('tenantName'), 
        // الحصول على اسم المستأجر من بيانات النموذج.

        address: formData.get('propertyAddress'), 
        // الحصول على عنوان العقار من بيانات النموذج.

        description: formData.get('description') 
        // الحصول على وصف العقار من بيانات النموذج.
    };

    // إنشاء طلب جديد للحصول على البيانات الحالية من ملف rentdata.json.
    var xhr = new XMLHttpRequest(); 
    xhr.open('GET', '../Js/rentdata.json', true); 
    // فتح الطلب مع تحديد الطريقة (GET) والمسار (rentdata.json).

    xhr.onreadystatechange = function() { 
        // تعيين وظيفة تُنفذ عند تغير حالة الطلب.
        if (xhr.readyState === 4 && xhr.status === 200) { 
            // التحقق من أن الطلب اكتمل بنجاح.
            var existingData = JSON.parse(xhr.responseText); 
            // تحويل نص البيانات الحالية إلى كائن JSON.

            existingData.push(newRentData); 
            // إضافة البيانات الجديدة إلى البيانات الحالية.

            window.location.href = '../HTML/rent.html'; 
            // توجيه المستخدم إلى صفحة rent.html بعد تحديث البيانات.

            // إنشاء طلب جديد لحفظ البيانات المُحدثة في rentdata.json.
            var saveXhr = new XMLHttpRequest(); 
            saveXhr.open('POST', '../Js/rentdata.json', true); 
            // فتح الطلب بطريقة POST لتحديث الملف.

            saveXhr.setRequestHeader('Content-Type', 'application/json'); 
            // تحديد نوع المحتوى المرسل كـ JSON.

            saveXhr.onreadystatechange = function() { 
                // تعيين وظيفة تُنفذ عند تغير حالة الطلب.
                if (saveXhr.readyState === 4 && saveXhr.status === 200) { 
                    // التحقق من أن عملية الحفظ تمت بنجاح.
                    console.log('Data added successfully'); 
                    // طباعة رسالة نجاح في وحدة التحكم.
                }
            };
            saveXhr.send(JSON.stringify(existingData)); 
            // إرسال البيانات المحدثة إلى الخادم على شكل JSON.
        }
    };
    xhr.send(); 
    // إرسال الطلب للحصول على البيانات الحالية.
}); 

 */