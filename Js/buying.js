// bring data from jsonfill

// hold the section which we add element to it
var gridSection = document.querySelector(".homes");

// load data when page loaded
window.addEventListener("load",getData);

var arrayOfdataHouses = [];

function getData() {

    // create XMLHttpRequest
    var xhttp = new XMLHttpRequest();

    // to make specfications
    xhttp.open("GET","../Js/homes_data.json",true);

    // send the request
    xhttp.send();

    // function called when readystate changed
    xhttp.onreadystatechange = function () {
    
    if(xhttp.readyState==4 && xhttp.status==200) 
    {

        // convert returened data to object so i can handle it 
        var dataOfHousesConverted = JSON.parse(xhttp.responseText);

        for(var i = 0; i < dataOfHousesConverted.length; i++) {

            // append data to array so we can use it later
            arrayOfdataHouses.push(dataOfHousesConverted[i]);

            // getting url from data
            var homeUrl = dataOfHousesConverted[i].home_img;

            // getting home price
            var homePrice = dataOfHousesConverted[i].price;
            // console.log(typeof homePrice)

            // getting home address
            var homeAddress = dataOfHousesConverted[i].address;      
            var currancy = "EGP"

            // call render the page function to create my home and returend it
            var home = renderThePage(homeUrl,homeAddress,homePrice,currancy)

            // append data to our page
            gridSection.innerHTML += home;
        }

    }
}
};

// start hot deal timer 

// pic the element who display the time 
var timer = document.querySelector(".limit-time");

// ending data
var endDate = new Date(2025,0,10);

var carringTheTime = setInterval(function () {

    // time now
    var timeNow = new Date().getTime();

    //difference between two times
    var distance = endDate - timeNow;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    // take the remaining time from dividing the millseconds on day and divied by 1000*60*60 to have the hours
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerText = days + " Days: " + hours + " hours: " + minutes + " minutes: " + seconds + " sec";

    // clear the offer after the timer finsh
    if (distance < 0) {
        
        clearInterval(x);
        timer.innerText = "EXPIRED";
      }

},1000);

// end hot deal timer 


// start ads

// pic ad image to change the src 
var adImag = document.querySelector(".ads img");

// arr of ads
var adArray = [
    "../Assets/ad2.svg",
    "../Assets/ad3.png",
    "../Assets/ad4.jpg",
    "../Assets/ad5.jpg",
    "../Assets/ad6.jpg",
    "../Assets/ad7.jpg"
];

// start changing the add every 5 second
var changingAd = setInterval(function () {

    // choose index of ad
    var indexOfAd = Math.floor(Math.random() * adArray.length);

    adImag.setAttribute("src",adArray[indexOfAd]);

},2000);

// end ads 

function changeToOneGrid() {

    // change the style
    gridSection.style.gridTemplateColumns = "repeat(auto-fill, minmax(572px, 1fr))"
    
}

// start change the currancy 

// pic the usd button to perform the event
var usdElem = document.querySelector(".usd");

usdElem.addEventListener("click",changeTheCurrancy);

// EGP Converting rate 
var egpConvertingRate;

function changeTheCurrancy() {

    // first request the EGP rate from the api
    var myRequest = "https://v6.exchangerate-api.com/v6/7e0eebae68deeeacd0272463/latest/USD";

    var xhttpCurrancy = new XMLHttpRequest();
    xhttpCurrancy.open("GET",myRequest,true);
    xhttpCurrancy.send()

    xhttpCurrancy.onreadystatechange = function () {

        if(xhttpCurrancy.readyState==4 && xhttpCurrancy.status==200) {

            var dataOfCurrancysConveted = JSON.parse(xhttpCurrancy.responseText);

            egpConvertingRate = dataOfCurrancysConveted.conversion_rates.EGP

            console.log(egpConvertingRate);
            changing(egpConvertingRate);
        }
    }

}

function changing(egpConvertingRate) {

    // select options to change the text
    var optionMore = document.getElementById("more");
    var optionLess = document.getElementById("less");

    // change the text 
    optionMore.innerText = "more than 10000 usd";
    optionLess.innerText = "less than 10000 usd";
    
    // clear the grid to ready for new data
    gridSection.innerHTML = "";

    for(var i = 0; i < arrayOfdataHouses.length; i++) {

        // data sended to the function
        newPriceWithUSD = Math.floor(arrayOfdataHouses[i].price / egpConvertingRate);
        var homeimageSrc = arrayOfdataHouses[i].home_img;
        var homeAddress = arrayOfdataHouses[i].address;
        var currancy = "USD"; 

        // call render the page function to create my home and returend it
        var home = renderThePage(homeimageSrc,homeAddress,newPriceWithUSD,currancy);

        // append data to our page
        gridSection.innerHTML += home;

    }

}
// end changing currancy


// start the filtering
// pic the more and less option to use it's text in if
var moreText = document.getElementById("more");
var lessText = document.getElementById("less");


// pic the dropdown to make the dicision
var dropDownEelm = document.getElementById("price");


// add action
dropDownEelm.addEventListener("change",filtering);

function filtering() {
    
    var SelectOption = dropDownEelm.value;

    // change if user select more
    if (SelectOption === "more-1") {
        filterMore();
    }
    // change if user select less
    else if (SelectOption === "less-1") {
        filterLess();
    }


};

function filterMore() {

    // clear the section to add the new filtered data
    gridSection.innerHTML = "";

    if (moreText.innerText  === "More than 1 million EGP") {

        // loop to add the new filtered data
        for (var i = 0; i < arrayOfdataHouses.length; i++) {

            if (arrayOfdataHouses[i].price >= 1000000) {

                // data sended to the function
                var homeUrl = arrayOfdataHouses[i].home_img;
                var homeAddress = arrayOfdataHouses[i].address;
                var homePrice = arrayOfdataHouses[i].price;
                var currancy = "EGP"
                // create the box to add it to the page

                // call render the page function to create my home and returend it
                var home = renderThePage(homeUrl,homeAddress,homePrice,currancy)

                // append data to our page
                gridSection.innerHTML += home;

            }

        }

    }

    // if condtion if the lable was usd so we can apply filter usd
    else if (moreText.innerText  === "more than 10000 usd") {
        
        console.log("inside the if of usd")
        // loop over the array to append the new filterd data but in usd currancy
        for (var i = 0; i < arrayOfdataHouses.length; i++) {
            
            if (Math.floor(arrayOfdataHouses[i].price / egpConvertingRate) >= 10000) {
                console.log("inside the if of usd after filter")
                // varible carry the price in usd
                var homePriceUSD = Math.floor(arrayOfdataHouses[i].price / egpConvertingRate);

                // data sended to the function
                var homeUrl = arrayOfdataHouses[i].home_img;
                var homeAddress = arrayOfdataHouses[i].address;
                var currancy = "USD"
                // create the box to add it to the page

                // call render the page function to create my home and returend it
                var home = renderThePage(homeUrl,homeAddress,homePriceUSD,currancy)

                // append data to our page
                gridSection.innerHTML += home;

            }

        }
    }

}

function filterLess() {

    // clear the section to add the new filtered data
    gridSection.innerHTML = "";

    if (moreText.innerText  === "More than 1 million EGP") {

        // loop to add the new filtered data
        for (var i = 0; i < arrayOfdataHouses.length; i++) {

            if (arrayOfdataHouses[i].price <= 1000000) {

                // data sended to the function
                var homeUrl = arrayOfdataHouses[i].home_img;
                var homeAddress = arrayOfdataHouses[i].address;
                var homePrice = arrayOfdataHouses[i].price;
                var currancy = "EGP"

                // call render the page function to create my home and returend it
                var home = renderThePage(homeUrl,homeAddress,homePrice,currancy)

                // append data to our page
                gridSection.innerHTML += home;

            }

        }

    }

    // if condtion if the lable was usd so we can apply filter usd
    else if (moreText.innerText  === "more than 10000 usd") {
        
        console.log("inside the if of usd")
        // loop over the array to append the new filterd data but in usd currancy
        for (var i = 0; i < arrayOfdataHouses.length; i++) {
            
            if (Math.floor(arrayOfdataHouses[i].price / egpConvertingRate) <= 10000) {
                console.log("inside the if of usd after filter")
                // varible carry the price in usd
                var homePriceUSD = Math.floor(arrayOfdataHouses[i].price / egpConvertingRate);

                // data sended to the function
                var homeUrl = arrayOfdataHouses[i].home_img;
                var homeAddress = arrayOfdataHouses[i].address;
                var currancy = "USD"
                // create the box to add it to the page

                // call render the page function to create my home and returend it
                var home = renderThePage(homeUrl,homeAddress,homePriceUSD,currancy)

                // append data to our page
                gridSection.innerHTML += home;

            }

        }
    }
};

// end the filtering

// this function render the page based on currancy
function renderThePage(imageSrc,homeAddress,HomePrice,currancy) {
        if (currancy === "USD") {

            var home = `
            <div class="home">
                <img src="${imageSrc}" alt="">
                <p><i class="fa-solid fa-location-dot"></i>${homeAddress}</p>
                <div class="details-price">
                    <span class="price">${HomePrice} <span>USD</span></span>
                    <a href="../HTML/viewdetails_buying.html" class="">View More</a>
                </div>
            </div>
            `;

            return home;
        }
        else {

            var home = `
            <div class="home">
                <img src="${imageSrc}" alt="">
                <p><i class="fa-solid fa-location-dot"></i>${homeAddress}</p>
                <div class="details-price">
                    <span class="price">${HomePrice} <span>EGP</span></span>
                    <a href="../HTML/viewdetails_buying.html" class="">View More</a>
                </div>
            </div>
            `;

            return home;
        }
}

////////////////////////////////////////////////////////////////////////////////////////////

/*
// تحديد القسم الذي سيتم إضافة العناصر الجديدة إليه
var gridSection = document.querySelector(".homes");

// تحميل البيانات عند تحميل الصفحة
window.addEventListener("load", getData);

// مصفوفة لتخزين بيانات المنازل
var arrayOfdataHouses = [];

function getData() {
    // إنشاء كائن XMLHttpRequest لطلب البيانات
    var xhttp = new XMLHttpRequest();

    // إعداد الطلب لجلب البيانات من ملف JSON
    xhttp.open("GET", "../Js/homes_data.json", true);

    // إرسال الطلب
    xhttp.send();

    // معالجة التغيرات في حالة الطلب
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {

            // تحويل البيانات المستلمة من JSON إلى كائنات JavaScript
            var dataOfHousesConverted = JSON.parse(xhttp.responseText);

            // تكرار البيانات المرسلة وإضافتها للصفحة
            for (var i = 0; i < dataOfHousesConverted.length; i++) {

                // تخزين البيانات في المصفوفة للاستخدام لاحقًا
                arrayOfdataHouses.push(dataOfHousesConverted[i]);

                // استخراج البيانات اللازمة (الصورة، السعر، العنوان)
                var homeUrl = dataOfHousesConverted[i].home_img;
                var homePrice = dataOfHousesConverted[i].price;
                var homeAddress = dataOfHousesConverted[i].address;      
                var currancy = "EGP";

                // استدعاء دالة لإنشاء كود HTML وإرجاع العنصر
                var home = renderThePage(homeUrl, homeAddress, homePrice, currancy);

                // إضافة العنصر إلى الصفحة
                gridSection.innerHTML += home;
            }
        }
    };
};

// بدء عداد الصفقة الساخنة
var timer = document.querySelector(".limit-time"); // عنصر عرض الوقت
var endDate = new Date(2025, 0, 10); // تحديد تاريخ انتهاء العرض

// تحديث العداد كل ثانية
var carringTheTime = setInterval(function () {
    var timeNow = new Date().getTime(); // الوقت الحالي
    var distance = endDate - timeNow; // الفرق بين الوقت الحالي وتاريخ الانتهاء

    // حساب الأيام والساعات والدقائق والثواني
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // تحديث النص الخاص بالعداد
    timer.innerText = days + " Days: " + hours + " hours: " + minutes + " minutes: " + seconds + " sec";

    // إيقاف العداد عند انتهاء الوقت
    if (distance < 0) {
        clearInterval(carringTheTime);
        timer.innerText = "EXPIRED";
    }
}, 1000);

// تغيير الإعلانات بشكل دوري
var adImag = document.querySelector(".ads img"); // عنصر الصورة للإعلان
var adArray = [
    "../Assets/ad2.svg",
    "../Assets/ad3.png",
    "../Assets/ad4.jpg",
    "../Assets/ad5.jpg",
    "../Assets/ad6.jpg",
    "../Assets/ad7.jpg"
];

// تغيير الإعلان كل ثانيتين
var changingAd = setInterval(function () {
    var indexOfAd = Math.floor(Math.random() * adArray.length); // اختيار عشوائي لإعلان
    adImag.setAttribute("src", adArray[indexOfAd]); // تحديث مصدر الصورة
}, 2000);

// تغيير طريقة عرض الشبكة إلى عمود واحد
function changeToOneGrid() {
    gridSection.style.gridTemplateColumns = "repeat(auto-fill, minmax(572px, 1fr))";
}

// بدء تغيير العملة
var usdElem = document.querySelector(".usd"); // زر تغيير العملة إلى USD
usdElem.addEventListener("click", changeTheCurrancy);

var egpConvertingRate; // تخزين معدل التحويل

function changeTheCurrancy() {
    // طلب بيانات معدل التحويل من API
    var myRequest = "https://v6.exchangerate-api.com/v6/7e0eebae68deeeacd0272463/latest/USD";
    var xhttpCurrancy = new XMLHttpRequest();
    xhttpCurrancy.open("GET", myRequest, true);
    xhttpCurrancy.send();

    xhttpCurrancy.onreadystatechange = function () {
        if (xhttpCurrancy.readyState == 4 && xhttpCurrancy.status == 200) {
            var dataOfCurrancysConveted = JSON.parse(xhttpCurrancy.responseText);
            egpConvertingRate = dataOfCurrancysConveted.conversion_rates.EGP; // معدل التحويل
            changing(egpConvertingRate); // استدعاء دالة لتغيير العملة
        }
    };
}

function changing(egpConvertingRate) {
    // تغيير النصوص المرتبطة بالخيارات
    var optionMore = document.getElementById("more");
    var optionLess = document.getElementById("less");
    optionMore.innerText = "more than 10000 usd";
    optionLess.innerText = "less than 10000 usd";

    // تفريغ الشبكة قبل تحديث البيانات
    gridSection.innerHTML = "";

    for (var i = 0; i < arrayOfdataHouses.length; i++) {
        // تحويل الأسعار إلى USD وإنشاء الكود الجديد
        newPriceWithUSD = Math.floor(arrayOfdataHouses[i].price / egpConvertingRate);
        var homeimageSrc = arrayOfdataHouses[i].home_img;
        var homeAddress = arrayOfdataHouses[i].address;
        var currancy = "USD";

        var home = renderThePage(homeimageSrc, homeAddress, newPriceWithUSD, currancy);
        gridSection.innerHTML += home; // إضافة العنصر للصفحة
    }
}

// البدء في التصفية
var moreText = document.getElementById("more");
var lessText = document.getElementById("less");
var dropDownEelm = document.getElementById("price"); // قائمة الخيارات للتصفية

dropDownEelm.addEventListener("change", filtering);

function filtering() {
    var SelectOption = dropDownEelm.value;
    if (SelectOption === "more-1") {
        filterMore();
    } else if (SelectOption === "less-1") {
        filterLess();
    }
};

function filterMore() {
    gridSection.innerHTML = ""; // تفريغ البيانات الحالية

    if (moreText.innerText === "More than 1 million EGP") {
        for (var i = 0; i < arrayOfdataHouses.length; i++) {
            if (arrayOfdataHouses[i].price >= 1000000) {
                var homeUrl = arrayOfdataHouses[i].home_img;
                var homeAddress = arrayOfdataHouses[i].address;
                var homePrice = arrayOfdataHouses[i].price;
                var currancy = "EGP";

                var home = renderThePage(homeUrl, homeAddress, homePrice, currancy);
                gridSection.innerHTML += home;
            }
        }
    } else if (moreText.innerText === "more than 10000 usd") {
        for (var i = 0; i < arrayOfdataHouses.length; i++) {
            if (Math.floor(arrayOfdataHouses[i].price / egpConvertingRate) >= 10000) {
                var homePriceUSD = Math.floor(arrayOfdataHouses[i].price / egpConvertingRate);
                var homeUrl = arrayOfdataHouses[i].home_img;
                var homeAddress = arrayOfdataHouses[i].address;
                var currancy = "USD";

                var home = renderThePage(homeUrl, homeAddress, homePriceUSD, currancy);
                gridSection.innerHTML += home;
            }
        }
    }
}

function filterLess() {
    gridSection.innerHTML = ""; // تفريغ البيانات الحالية

    if (moreText.innerText === "More than 1 million EGP") {
        for (var i = 0; i < arrayOfdataHouses.length; i++) {
            if (arrayOfdataHouses[i].price <= 1000000) {
                var homeUrl = arrayOfdataHouses[i].home_img;
                var homeAddress = arrayOfdataHouses[i].address;
                var homePrice = arrayOfdataHouses[i].price;
                var currancy = "EGP";

                var home = renderThePage(homeUrl, homeAddress, homePrice, currancy);
                gridSection.innerHTML += home;
            }
        }
    } else if (moreText.innerText === "more than 10000 usd") {
        for (var i = 0; i < arrayOfdataHouses.length; i++) {
            if (Math.floor(arrayOfdataHouses[i].price / egpConvertingRate) <= 10000) {
                var homePriceUSD = Math.floor(arrayOfdataHouses[i].price / egpConvertingRate);
                var homeUrl = arrayOfdataHouses[i].home_img;
                var homeAddress = arrayOfdataHouses[i].address;
                var currancy = "USD";

                var home = renderThePage(homeUrl, homeAddress, homePriceUSD, currancy);
                gridSection.innerHTML += home;
            }
        }
    }
};

// دالة لإنشاء كود HTML بناءً على العملة
function renderThePage(imageSrc, homeAddress, HomePrice, currancy) {
    if (currancy === "USD") {
        var home = `
        <div class="home">
            <img src="${imageSrc}" alt="">
            <p><i class="fa-solid fa-location-dot"></i>${homeAddress}</p>
            <div class="details-price">
                <span class="price">${HomePrice} <span>USD</span></span>
                <a href="../HTML/viewdetails_buying.html" class="">View More</a>
            </div>
        </div>
        `;

        return home;
    } else {
        var home = `
        <div class="home">
            <img src="${imageSrc}" alt="">
            <p><i class="fa-solid fa-location-dot"></i>${homeAddress}</p>
            <div class="details-price">
                <span class="price">${HomePrice} <span>EGP</span></span>
                <a href="../HTML/viewdetails_buying.html

*/