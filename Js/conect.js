var dataContainer;
if(localStorage.getItem('ourProduct')!=null)
{
  dataContainer=JSON.parse(localStorage.getItem('ourProduct'))
  displatProduct();
}
else{
  dataContainer=[]; 

}
//data by id from html page
var nameDataInput=document.getElementById('dataname');
var emailDataInput=document.getElementById('dataemaill');
var numpeDataInput=document.getElementById('datanumper');
var adresDataInput=document.getElementById('dataadress');
var textDataInput=document.getElementById('datatextZone');

//function to collect data 
function collectData() {
  
    var data={
        name:nameDataInput.value,
        email:emailDataInput.value,
        numper:numpeDataInput.value,
        adress:adresDataInput.value,
        text:textDataInput.value
    }
    
    clear()
    dataContainer.push(data);
    localStorage.setItem('ourProduct',JSON.stringify(dataContainer));
    console.log(dataContainer);
}
/////////function to cleat input after enter data
function clear() {{
    nameDataInput.value="";
    emailDataInput.value="";
    numpeDataInput.value="";
    adresDataInput.value="";
    textDataInput.value="";
    
}};

  
  /////////////
  document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Select input fields
  var name = document.getElementById("dataname");
  var email = document.getElementById("dataemaill");
  var phone = document.getElementById("datanumper");
  var subject = document.getElementById("name='dataadress");
  var message = document.getElementById("datatextZone");

  // Regular expressions
  var nameRegex = /^[a-zA-Z\u0621-\u064A\s]{3,50}$/; // Arabic/English letters, 3-50 chars
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valid email format
  var phoneRegex = /\+201|01|00201)[0-2,5]{1}[0-9]{8}/; // egyptain number only
  var nonEmptyRegex = /^.+$/; // At least one character

  // Validation
  if (!nameRegex.test(dataname.value)) {
    alert("Please Write Correct Name)");
    return;
  }

  if (!emailRegex.test(dataemaill.value)) {
    alert("Please write correct email");
    return;
  }

  if (!phoneRegex.test(datanumper.value)) {
    alert("please write egyption number");
    return;
  }

  if (!nonEmptyRegex.test(dataadress.value)) {
    alert("Yoyr Adree");
    return;
  }

  if (!nonEmptyRegex.test(datatextZone.value)) {
    alert("Please write your message");
    return;
  }

  
  alert("Done");
  event.target.submit(); 
});



///////////////////////////////////////////
/**
 var dataContainer;
if(localStorage.getItem('ourProduct') != null) {
    dataContainer = JSON.parse(localStorage.getItem('ourProduct')); 
    // إذا كانت البيانات موجودة في localStorage، نقوم بتحميلها في dataContainer.
    displatProduct(); 
    // هذه الدالة غير معرفة في الكود المقدم، من المفترض أنها تقوم بعرض المنتجات.
} else {
    dataContainer = []; 
    // إذا لم تكن هناك بيانات، نقوم بإنشاء مصفوفة فارغة.
}

// جلب البيانات من الصفحة باستخدام المعرفات
var nameDataInput = document.getElementById('dataname'); 
var emailDataInput = document.getElementById('dataemaill'); 
var numpeDataInput = document.getElementById('datanumper'); 
var adresDataInput = document.getElementById('dataadress'); 
var textDataInput = document.getElementById('datatextZone');

// دالة لجمع البيانات من الحقول
function collectData() {
    var data = {
        name: nameDataInput.value, 
        // جمع اسم المستخدم من حقل الإدخال.
        email: emailDataInput.value, 
        // جمع البريد الإلكتروني من حقل الإدخال.
        numper: numpeDataInput.value, 
        // جمع رقم الهاتف من حقل الإدخال.
        adress: adresDataInput.value, 
        // جمع العنوان من حقل الإدخال.
        text: textDataInput.value 
        // جمع النص من حقل الإدخال.
    }

    clear(); 
    // مسح الحقول بعد جمع البيانات.
    dataContainer.push(data); 
    // إضافة البيانات الجديدة إلى المصفوفة.
    localStorage.setItem('ourProduct', JSON.stringify(dataContainer)); 
    // تخزين المصفوفة في localStorage.
    console.log(dataContainer); 
    // طباعة البيانات في وحدة التحكم.
}

// دالة لمسح الحقول بعد جمع البيانات
function clear() {
    nameDataInput.value = ""; 
    // مسح حقل الاسم.
    emailDataInput.value = ""; 
    // مسح حقل البريد الإلكتروني.
    numpeDataInput.value = ""; 
    // مسح حقل رقم الهاتف.
    adresDataInput.value = ""; 
    // مسح حقل العنوان.
    textDataInput.value = ""; 
    // مسح حقل النص.
}

// التحقق من البيانات عند إرسال النموذج
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    // منع الإجراء الافتراضي لإرسال النموذج.

    // جلب الحقول للتأكد من صحتها
    var name = document.getElementById("dataname"); 
    var email = document.getElementById("dataemaill"); 
    var phone = document.getElementById("datanumper"); 
    var subject = document.getElementById("dataadress"); 
    var message = document.getElementById("datatextZone");

    // تعبيرات منتظمة للتحقق من صحة المدخلات
    var nameRegex = /^[a-zA-Z\u0621-\u064A\s]{3,50}$/; // التحقق من الاسم (حروف إنجليزية وعربية، من 3 إلى 50 حرفًا).
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // التحقق من صيغة البريد الإلكتروني.
    var phoneRegex = /\+201|01|00201)[0-2,5]{1}[0-9]{8}/; // التحقق من رقم الهاتف المصري فقط.
    var nonEmptyRegex = /^.+$/; // التحقق من أن المدخل ليس فارغًا.

    // التحقق من صحة البيانات المدخلة
    if (!nameRegex.test(name.value)) {
        alert("Please Write Correct Name"); 
        return; 
        // إذا كان الاسم غير صحيح، يتم عرض رسالة تحذيرية.
    }

    if (!emailRegex.test(email.value)) {
        alert("Please write correct email"); 
        return; 
        // إذا كان البريد الإلكتروني غير صحيح، يتم عرض رسالة تحذيرية.
    }

    if (!phoneRegex.test(phone.value)) {
        alert("please write egyptian number"); 
        return; 
        // إذا كان رقم الهاتف غير صحيح، يتم عرض رسالة تحذيرية.
    }

    if (!nonEmptyRegex.test(subject.value)) {
        alert("Your Address"); 
        return; 
        // إذا كان العنوان فارغًا، يتم عرض رسالة تحذيرية.
    }

    if (!nonEmptyRegex.test(message.value)) {
        alert("Please write your message"); 
        return; 
        // إذا كان النص فارغًا، يتم عرض رسالة تحذيرية.
    }

    alert("Done"); 
    // إذا كانت جميع المدخلات صحيحة، يتم عرض رسالة "تم".
    event.target.submit(); 
    // إرسال النموذج.
});

 */