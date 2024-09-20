 Bethlehem_markerData = [

       {
          lat: 31.6865732, lng: 35.1534337,
          title: "<h3> ارطاس / من قرى عرقوب </h3> ",
       },
       {
          lat: 31.6199901, lng: 35.2297318,
          title: "<h3> المنية </h3> ",
       },
       {
          lat: 31.724722, lng: 35.136667,
          title: "<h3> بتير / من قرى القدس سابقاً </h3> ",
       },
       {
          lat: 31.7062714, lng: 35.1243699,
          title: "<h3> حوسان / من قرى عرقوب </h3> ",
       },
       {
          lat: 31.6787185, lng: 35.241822,
          title: "<h3> خربة بيت تعمر </h3> ",
       },
       {
          lat: 31.6868034, lng: 35.2179334,
          title: "<h3> هندازة ريضعة خلايل اللوز </h3> ",
       },
       {
          lat: 31.6906112, lng: 35.1769248,
          title: "<h3> الخضر </h3> ",
       },
       {
          lat: 31.7159973, lng: 35.2046586,
          title: "<h3> بيت جالا </h3> ",
       },
       {
          lat: 31.639088, lng: 35.2463081,
          title: "<h3> تقوع </h3> ",
       },
       {
          lat: 31.6459568, lng: 35.1460458,
          title: "<h3> خربة أم سلمونه </h3> ",
       },
       {
          lat: 31.708251, lng: 35.2829522,
          title: "<h3> دار صلاح </h3> ",
       },
       {
          lat: 31.6334214, lng: 35.1692694,
          title: "<h3> مراح رباح </h3> ",
       },
       {
          lat: 31.670649, lng: 35.1877178,
          title: "<h3> وادي رحال </h3> ",
       },
       {
          lat: 31.6872783, lng: 35.3036657,
          title: "<h3> الشواورة </h3> ",
       },
       {
          lat: 31.6978356, lng: 35.22853,
          title: "<h3> بيت ساحور </h3> ",
       },
       {
          lat: 31.6744654, lng: 35.0944666,
          title: "<h3> جبعة / الجبعة / من قرى عرقوب </h3> ",
       },
       {
          lat: 31.6744424, lng: 35.2726006,
          title: "<h3> زعترة </h3> ",
       },
       {
          lat: 31.649674, lng: 35.1794873,
          title: "<h3> مراح معلا </h3> ",
       },
       {
          lat: 31.7072703, lng: 35.1392121,
          title: "<h3> وادي فوكين / من قرى عرقوب </h3> ",
       },
       {
          lat: 31.7238245, lng: 35.3276996,
          title: "<h3> العبيدية </h3> ",
       },
       {
          lat: 31.6216339, lng: 35.1724126,
          title: "<h3> بيت فجار </h3> ",
       },
       {
          lat: 31.6500234, lng: 35.1917076,
          title: "<h3> جورة الشمعة </h3> ",
       },
       {
          lat: 31.6582563, lng: 35.1724434,
          title: "<h3> خربة المعصرة </h3> ",
       },
       {
          lat: 31.6924074, lng: 35.1535395,
          title: "<h3> شُوْشَحْلَة </h3> ",
       },
       {
          lat: 31.6856063, lng: 35.1028524,
          title: "<h3> نحالين / من قرى عرقوب </h3> ",
       },
       
     

   ];







for (let i = 0; i < Bethlehem_markerData.length; i++) {
    let BethlehemmarkerTitle = Bethlehem_markerData[i].title;

    BethlehemmarkerTitle = `<div style="max-width: 400px; padding: 0px; text-align: right;">${BethlehemmarkerTitle}</div>`;
    BethlehemmarkerTitle = BethlehemmarkerTitle.replace(/<p>(.*?)<\/p>/g, '<p style="font-size: 16px; margin-top: -8px; margin-bottom: 5px; text-indent: 28px; direction:rtl">$1</p>');
    BethlehemmarkerTitle = BethlehemmarkerTitle.replace(/<b>(.*?)<\/b>/g, '<b style="font-size: 15px; font-wight: bold;">$1</b>');
  

    Bethlehem_markerData[i].title = BethlehemmarkerTitle;
}