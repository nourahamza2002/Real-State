// Gallery Modal
const gallery = document.getElementById("gallery");
const galleryImages = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalClose = document.getElementById("modalClose");

galleryImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImage.src = image.src;
    currentIndex = index;
  });
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


// Reviews
const reviews = [];
const reviewsContainer = document.getElementById("reviews");
const reviewInput = document.getElementById("reviewInput");
const addReviewButton = document.getElementById("addReview");

addReviewButton.addEventListener("click", () => {
  const reviewText = reviewInput.value.trim();
  if (reviewText) {
    reviews.push(reviewText);
    reviewInput.value = "";
    displayReviews();
  }
});

function displayReviews() {
  reviewsContainer.innerHTML = "";
  reviews.forEach((review) => {
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review");
    reviewElement.textContent = review;
    reviewsContainer.appendChild(reviewElement);
  });
}

// Similar Properties
const similarProperties = [
  {
    img: "../Assets/test1.webp",
    title: "Modern Apartment",
    price: "EGP 5,900,000",
    desc: "2 Beds, 2 Baths, 110 Sq. M",
  },
  {
    img: "../Assets/test2.webp",
    title: "Luxury Condo",
    price: "EGP 7,200,000",
    desc: "3 Beds, 2 Baths, 130 Sq. M",
  },
  {
    img: "../Assets/test3.webp",
    title: "Cozy Flat",
    price: "EGP 6,500,000",
    desc: "2 Beds, 2 Baths, 120 Sq. M",
  },
];

const similarPropertiesContainer = document.getElementById("similarProperties");

similarProperties.forEach((property) => {
  const propertyCard = document.createElement("div");
  propertyCard.classList.add("property-card");
  propertyCard.innerHTML = `
                <img src="${property.img}" alt="${property.title}">
                <h4>${property.title}</h4>
                <p>${property.price}</p>
                <p>${property.desc}</p>
            `;
  similarPropertiesContainer.appendChild(propertyCard);
});
const inquiryForm = document.querySelector(".inquiry-form");

inquiryForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your inquiry. We will contact you soon.");
  inquiryForm.reset();
});


///////////////////////////////////////
/**
 // Gallery Modal
const gallery = document.getElementById("gallery"); // العنصر الذي يحتوي على المعرض
const galleryImages = document.querySelectorAll(".gallery img"); // جميع الصور في المعرض
const modal = document.getElementById("modal"); // النافذة المنبثقة
const modalImage = document.getElementById("modalImage"); // الصورة داخل النافذة المنبثقة
const modalClose = document.getElementById("modalClose"); // زر إغلاق النافذة المنبثقة

// عند النقر على أي صورة في المعرض
galleryImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    modal.style.display = "flex"; // عرض النافذة المنبثقة
    modalImage.src = image.src; // تعيين الصورة في النافذة المنبثقة
    currentIndex = index; // تعيين الفهرس الحالي للصورة
  });
});

// عند النقر على زر الإغلاق
modalClose.addEventListener("click", () => {
  modal.style.display = "none"; // إخفاء النافذة المنبثقة
});

// عند النقر على النافذة المنبثقة نفسها
modal.addEventListener("click", (e) => {
  if (e.target === modal) { 
    modal.style.display = "none"; // إخفاء النافذة إذا تم النقر خارج الصورة
  }
});

// Reviews
const reviews = []; // مصفوفة لتخزين المراجعات
const reviewsContainer = document.getElementById("reviews"); // العنصر الذي يعرض المراجعات
const reviewInput = document.getElementById("reviewInput"); // حقل إدخال المراجعة
const addReviewButton = document.getElementById("addReview"); // زر إضافة المراجعة

// عند النقر على زر إضافة المراجعة
addReviewButton.addEventListener("click", () => {
  const reviewText = reviewInput.value.trim(); // الحصول على النص المدخل وإزالة الفراغات
  if (reviewText) { // إذا كانت المراجعة غير فارغة
    reviews.push(reviewText); // إضافة المراجعة إلى المصفوفة
    reviewInput.value = ""; // مسح حقل الإدخال
    displayReviews(); // إعادة عرض المراجعات
  }
});

// دالة لعرض المراجعات
function displayReviews() {
  reviewsContainer.innerHTML = ""; // مسح المحتوى الحالي للمراجعات
  reviews.forEach((review) => {
    const reviewElement = document.createElement("div"); // إنشاء عنصر جديد للمراجعة
    reviewElement.classList.add("review"); // إضافة الفئة للمراجعة
    reviewElement.textContent = review; // تعيين النص للمراجعة
    reviewsContainer.appendChild(reviewElement); // إضافة المراجعة إلى الحاوية
  });
}

// Similar Properties
const similarProperties = [
  {
    img: "../Assets/test1.webp",
    title: "Modern Apartment", // العنوان
    price: "EGP 5,900,000", // السعر
    desc: "2 Beds, 2 Baths, 110 Sq. M", // الوصف
  },
  {
    img: "../Assets/test2.webp",
    title: "Luxury Condo", // العنوان
    price: "EGP 7,200,000", // السعر
    desc: "3 Beds, 2 Baths, 130 Sq. M", // الوصف
  },
  {
    img: "../Assets/test3.webp",
    title: "Cozy Flat", // العنوان
    price: "EGP 6,500,000", // السعر
    desc: "2 Beds, 2 Baths, 120 Sq. M", // الوصف
  },
];

const similarPropertiesContainer = document.getElementById("similarProperties"); // الحاوية التي ستعرض العقارات المماثلة

// إضافة العقارات المماثلة إلى الصفحة
similarProperties.forEach((property) => {
  const propertyCard = document.createElement("div"); // إنشاء عنصر جديد للعقار
  propertyCard.classList.add("property-card"); // إضافة الفئة للعقار
  propertyCard.innerHTML = `
                <img src="${property.img}" alt="${property.title}"> 
                <h4>${property.title}</h4>
                <p>${property.price}</p>
                <p>${property.desc}</p>
            `;
  similarPropertiesContainer.appendChild(propertyCard); // إضافة العنصر إلى الحاوية
});

// Inquiry Form
const inquiryForm = document.querySelector(".inquiry-form"); // النموذج الخاص بالاستفسار

inquiryForm.addEventListener("submit", (e) => {
  e.preventDefault(); // منع إرسال النموذج بشكل افتراضي
  alert("Thank you for your inquiry. We will contact you soon."); // عرض رسالة تأكيد
  inquiryForm.reset(); // مسح الحقول في النموذج بعد الإرسال
});

 */