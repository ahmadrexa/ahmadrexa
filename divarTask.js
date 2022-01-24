let divar= [
    {
        image:"gro://s101.divarcdn.com/static/thumbnails/1643006555/QYrr_a9_.webp",
        title:"جنت آباد.۸۵متری.۲خ. گزینه",
        price:"۲٬۸۵۰٬۰۰۰٬۰۰۰ تومان",
        category:"خونه",
        when:"دقایقی پیش",
        where:"شاهین",
    },
    {
        image:"https://s100.divarcdn.com/static/thumbnails/1643006545/QYujBZg3.jpg",
        title:"لب تاپ نوت بوک ۲۰۲۱ از اروپا نونو",
        price:"۱۱٬۰۰۰٬۰۰۰ تومان",
        category:"رایانه",
        when:"یک ربع پیش",
        where:"آرژانتین",
    },
    {
        image:"https://s100.divarcdn.com/static/thumbnails/1643005337/QYuPhuDh.jpg",
        title:"بز پاکستانی",
        price:"توافقی",
        category:"حیوانات مزرعه",
        when:"نیم ساعت",
        where:"شهریار ",
    },
    {
        image:"https://s100.divarcdn.com/static/thumbnails/1643005228/wXdxwne4.jpg",
        title:"آموزش کاشت ناخن و کاشت مژه لیفت ولمینت مژه وابرو",
        price:"",
        category:"آرایشگری و زیبایی",
        when:"یک ساعت پیش",
        where:"تهرانپارس ",
    },
    {
        image:"https://s100.divarcdn.com/static/thumbnails/1643005070/QYs34x6E.jpg",
        title:"اباژور های طرح برنز",
        price:"۱٬۱۰۰٬۰۰۰ تومان",
        category:"چراغ خواب و آباژور",
        when:"نیم ساعت پیش",
        where:"ظفر ",
    },
    {
        image:"https://s100.divarcdn.com/static/thumbnails/1643004895/QYtfP4zw.jpg",
        title:"قالیچه فرش قدیم ",
        price:"توافقی",
        category:"فرش",
        when:"یک روز پیش",
        where:"بهارستان ",
    },
    {
        image:"https://s100.divarcdn.com/static/thumbnails/1643004788/QYtPuHAJ.jpg",
        title:"هودی دورس دو نخ",
        price:"۹۹٬۰۰۰ تومان",
        category:"لباس",
        when:"یک روز پیش",
        where:"انقلاب ",
    },

]
function renderList(){
    let n = "";
    for(let i=0; i < divar.length; i++){
        console.log(divar[i]);
        n += "<div><img src=" + divar[i].image + "/> <span><li><h4>" + divar[i].title + "</h4></li><li>" + divar[i].price +"</li><li><span>" + divar[i].when +"</span> در <span>" + divar[i].where + "</span></li></div>"
    }
    document.querySelector("#divar-list ul").innerHTML = n;
}
renderList()