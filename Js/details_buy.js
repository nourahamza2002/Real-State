// Image gallery previous & next buttons
var images = ["../Assets/buying img/2.jpeg", "../Assets/buying img/3.jpeg", "../Assets/buying img/4.jpeg", "../Assets/buying img/5.jpeg",
    "../Assets/buying img/6.jpeg", "../Assets/buying img/7.jpeg", "../Assets/buying img/8.jpeg", "../Assets/buying img/9.jpeg",
    "../Assets/buying img/10.jpeg", "../Assets/buying img/11.jpeg", "../Assets/buying img/12.jpeg"];
var currentImageIndex = 0;

var propertyImage = document.getElementById("propertyImage");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    propertyImage.src = images[currentImageIndex];
});

nextBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    propertyImage.src = images[currentImageIndex];
});


//clicking in the gallery opens the image in a modal
var galleryImages = document.querySelectorAll(".gallery img");
var modal = document.getElementById("modal");
var modalImage = document.getElementById("modalImage");
var modalClose = document.getElementById("modalClose");

galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImage.src = img.src;
    });
});

modalClose.addEventListener("click", () => {
    modal.style.display = "none";
});

// Save button 
var saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", () => {
    var propertyDetails = {
        title: "Luxury Duplex for sale in London",
        price: "$18,348,300",
        location: "London, United Kingdom",
    };
    // console.log(JSON.stringify(propertyDetails));
    localStorage.setItem("savedProperty", JSON.stringify(propertyDetails));
    alert("Apartment saved successfully!");
});

//default email client
var emailButton = document.getElementById("emailButton");

emailButton.addEventListener("click", () => {
    var recipient = "example@example.com";
    var subject = encodeURIComponent("Inquiry about Luxury Apartment");
    var body = encodeURIComponent(
        "Hello,\n\nI am interested in the Luxury Duplex apartment. Please provide me with more information.\n\nThank you!"
    );
    // location.href: Changes the current browser location.
    // mailto:: A URL scheme used to open the user's default email client with prefilled details.
    location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});


// open WhatsApp
var whatsappButton = document.getElementById("whatsappButton");

whatsappButton.addEventListener("click", () => {
    var phoneNumber = "1234567890";
    var message = encodeURIComponent(
        "Hello, I am interested in the Luxury Duplex apartment. Can you provide me with more details?"
    );

    open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
});


//Review Functionality
var reviewsContainer = document.getElementById("reviews");
var reviewInput = document.getElementById("reviewInput");
var addReviewButton = document.getElementById("addReview");

addReviewButton.addEventListener("click", () => {
    var reviewText = reviewInput.value.trim();

    if (reviewText === "") {
        alert("Please write a review before submitting!");
        return;
    }

    // Create a new review element
    var reviewElement = document.createElement("div");
    reviewElement.className = "review";
    reviewElement.textContent = reviewText;

    // Append to the reviews container
    reviewsContainer.appendChild(reviewElement);

    // Clear the input field
    reviewInput.value = "";
});



//////////////////////////////////////////
/**
 // Image gallery previous & next buttons
var images = [
    "../Assets/buying img/2.jpeg", "../Assets/buying img/3.jpeg", "../Assets/buying img/4.jpeg", "../Assets/buying img/5.jpeg",
    "../Assets/buying img/6.jpeg", "../Assets/buying img/7.jpeg", "../Assets/buying img/8.jpeg", "../Assets/buying img/9.jpeg",
    "../Assets/buying img/10.jpeg", "../Assets/buying img/11.jpeg", "../Assets/buying img/12.jpeg"
];
var currentImageIndex = 0; // المتغير الذي يحتفظ بمؤشر الصورة الحالية

var propertyImage = document.getElementById("propertyImage"); // العنصر الذي يعرض الصورة الحالية
var prevBtn = document.getElementById("prevBtn"); // زر الرجوع للصورة السابقة
var nextBtn = document.getElementById("nextBtn"); // زر الانتقال للصورة التالية

// عند النقر على زر السابق
prevBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1; 
    // إذا كانت الصورة الحالية هي الأولى، نعرض آخر صورة، وإلا ننتقل إلى الصورة السابقة
    propertyImage.src = images[currentImageIndex]; // تغيير مصدر الصورة إلى الصورة الجديدة
});

// عند النقر على زر التالي
nextBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1; 
    // إذا كانت الصورة الحالية هي الأخيرة، نعرض أول صورة، وإلا ننتقل إلى الصورة التالية
    propertyImage.src = images[currentImageIndex]; // تغيير مصدر الصورة إلى الصورة الجديدة
});


// عند النقر على صورة في المعرض، يتم عرض الصورة في نافذة منبثقة (Modal)
var galleryImages = document.querySelectorAll(".gallery img"); // جميع الصور في المعرض
var modal = document.getElementById("modal"); // العنصر الذي يمثل النافذة المنبثقة
var modalImage = document.getElementById("modalImage"); // الصورة التي ستعرض داخل النافذة المنبثقة
var modalClose = document.getElementById("modalClose"); // زر إغلاق النافذة المنبثقة

galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
        modal.style.display = "flex"; // عرض النافذة المنبثقة
        modalImage.src = img.src; // تعيين الصورة في النافذة المنبثقة
    });
});

// عند النقر على زر الإغلاق في النافذة المنبثقة
modalClose.addEventListener("click", () => {
    modal.style.display = "none"; // إخفاء النافذة المنبثقة
});

// Save button functionality
var saveBtn = document.getElementById("saveBtn"); // زر الحفظ

saveBtn.addEventListener("click", () => {
    var propertyDetails = {
        title: "Luxury Duplex for sale in London", // العنوان
        price: "$18,348,300", // السعر
        location: "London, United Kingdom", // الموقع
    };
    // حفظ تفاصيل العقار في localStorage
    localStorage.setItem("savedProperty", JSON.stringify(propertyDetails));
    alert("Apartment saved successfully!"); // إظهار رسالة تأكيد
});

// Default email client functionality
var emailButton = document.getElementById("emailButton"); // زر إرسال البريد الإلكتروني

emailButton.addEventListener("click", () => {
    var recipient = "example@example.com"; // البريد الإلكتروني للمستلم
    var subject = encodeURIComponent("Inquiry about Luxury Apartment"); // الموضوع
    var body = encodeURIComponent(
        "Hello,\n\nI am interested in the Luxury Duplex apartment. Please provide me with more information.\n\nThank you!"
    ); // نص الرسالة

    // فتح العميل الافتراضي للبريد الإلكتروني مع تفاصيل مملوءة مسبقًا
    location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});

// Open WhatsApp functionality
var whatsappButton = document.getElementById("whatsappButton"); // زر فتح WhatsApp

whatsappButton.addEventListener("click", () => {
    var phoneNumber = "1234567890"; // رقم الهاتف
    var message = encodeURIComponent(
        "Hello, I am interested in the Luxury Duplex apartment. Can you provide me with more details?"
    ); // نص الرسالة

    open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank"); // فتح WhatsApp مع النص المملوء مسبقًا
});

// Review functionality
var reviewsContainer = document.getElementById("reviews"); // العنصر الذي يحتوي على المراجعات
var reviewInput = document.getElementById("reviewInput"); // حقل إدخال المراجعة
var addReviewButton = document.getElementById("addReview"); // زر إضافة المراجعة

addReviewButton.addEventListener("click", () => {
    var reviewText = reviewInput.value.trim(); // الحصول على نص المراجعة بعد إزالة الفراغات

    if (reviewText === "") { 
        alert("Please write a review before submitting!"); // عرض رسالة تحذير إذا كانت المراجعة فارغة
        return;
    }

    // إنشاء عنصر جديد لعرض المراجعة
    var reviewElement = document.createElement("div");
    reviewElement.className = "review"; // إضافة فئة للمراجعة
    reviewElement.textContent = reviewText; // تعيين النص للمراجعة

    // إضافة المراجعة إلى الحاوية
    reviewsContainer.appendChild(reviewElement);

    // مسح حقل الإدخال بعد إضافة المراجعة
    reviewInput.value = "";
});

 */