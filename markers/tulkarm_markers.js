 Tulkarm_markerData = [

       {
          lat: 32.3923, lng: 35.0093,
          title: "<h3> الجلمة </h3> ",
       },
       {
          lat: 32.2330072, lng: 34.995184,
          title: "<h3> الطيرة / الصعبية / بني صعب </h3> ",
       },
       {
          lat: 32.400791, lng: 35.080569,
          title: "<h3> النزلة الغربية </h3> ",
       },
       {
          lat: 32.2615463, lng: 35.1477896,
          title: "<h3> بيت ليد / بيت ليد الشرقية </h3> ",
       },
       {
          lat: 32.3325203, lng: 35.1274626,
          title: "<h3> بلعا </h3> ",
       },
       {
          lat: 32.1932, lng: 34.8779,
          title: "<h3> تُبصُر / خربة عزون </h3> ",
       },
       {
          lat: 32.1419, lng: 34.9869,
          title: "<h3> خربة خريش / من قرى العرقيات </h3> ",
       },
       {
          lat: 32.3388069, lng: 35.0948111,
          title: "<h3> دير الغصون </h3> ",
       },
       {
          lat: 32.283441, lng: 35.147233,
          title: "<h3> رامين </h3> ",
       },
       {
          lat: 32.3851423, lng: 35.0689286,
          title: "<h3> زيتا </h3> ",
       },
       {
          lat: 32.262039, lng: 35.110622,
          title: "<h3> سفارين </h3> ",
       },
       {
          lat: 32.3353943, lng: 35.0523806,
          title: "<h3> شويكة </h3> ",
       },
       {
          lat: 32.384031, lng: 35.118676,
          title: "<h3> صيدا / صيدة </h3> ",
       },
       {
          lat: 32.3700673, lng: 35.0900476,
          title: "<h3> عتيل </h3> ",
       },
       {
          lat: 32.3707013, lng: 35.1261556,
          title: "<h3> علار </h3> ",
       },
       {
          lat: 32.3072513, lng: 35.136987,
          title: "<h3> عنبتا </h3> ",
       },
       {
          lat: 32.2769, lng: 35.0135,
          title: "<h3> فرديسيا / خربة  أم الفلوس / خربة الدسوقية </h3> ",
       },
       {
          lat: 32.2854783, lng: 35.0389906,
          title: "<h3> فرعون </h3> ",
       },
       {
          lat: 32.3603, lng: 34.9945,
          title: "<h3> قاقون </h3> ",
       },
       {
          lat: 32.4333763, lng: 35.1018096,
          title: "<h3> قفين </h3> ",
       },
       {
          lat: 32.296523, lng: 35.109910,
          title: "<h3> كفر اللبد </h3> ",
       },
       {
          lat: 32.316838, lng: 35.127024,
          title: "<h3> كفر رمان </h3> ",
       },
       {
          lat: 32.225092, lng: 35.069360,
          title: "<h3> كفر زيباد- قرى الكفريات السبع </h3> ",
       },
       {
          lat: 32.115598, lng: 34.973945,
          title: "<h3> كفر قاسم : وهي مدينة حالية كانت قرية تتبع قضاء طولكرم والان تقع في الداخل المحتل </h3> ",
       },
       {
          lat: 32.1796301, lng: 34.938268,
          title: "<h3> كفر سابا </h3> ",
       },
       {
          lat: 32.2235335, lng: 35.122361,
          title: "<h3> كفر عبوش- قرى الكفريات السبع </h3> ",
       },
       {
          lat: 32.2252555, lng: 35.0537969,
          title: "<h3> كفر جمال- قرى الكفريات السبع </h3> ",
       },
       {
          lat: 32.235061, lng: 35.098114,
          title: "<h3> كور- قرى الكفريات السبع </h3> ",
       },
       {
          lat: 32.4148303, lng: 35.0773696,
          title: "<h3> نزلة عيسى </h3> ",
       },
       {
          lat: 32.3989, lng: 34.88,
          title: "<h3> وادي الحوارث </h3> ",
       },








	//Missing places in pdf
/*
       {
          lat: 32.3286, lng: 34.8646,
          title: "<h3> أم خَالِدْ </h3> ",
       },
       {
          lat: 32.3694053, lng: 35.0481366,
          title: "<h3> إبثان/ قري زيمر </h3> ",
       },
       {
          lat: 32.2684306, lng: 35.0503112,
          title: "<h3> خربة جبارة- قرى الكفريات السبع </h3> ",
       },
       {
          lat: 32.435, lng: 34.936667,
          title: "<h3> رمل زيته / خربة قزازة </h3> ",
       },
       {
          lat: 32.2929, lng: 34.8627,
          title: "<h3> بيارة حنون </h3> ",
       },
       {
          lat: 32.2529, lng: 34.8369,
          title: "<h3> خربة الزَّبَابَدة </h3> ",
       },
       {
          lat: 32.4026, lng: 34.9453,
          title: "<h3> خربة زلفة </h3> ",
       },
       {
          lat: 32.2517471, lng: 35.0731993,
          title: "<h3> الرأس- قرى الكفريات السبع </h3> ",
       },
       {
          lat: 32.4088, lng: 34.9942,
          title: "<h3> خربة المجدل </h3> ",
       },

*/
       
     

   ];







for (let i = 0; i < Tulkarm_markerData.length; i++) {
    let TulkarmmarkerTitle = Tulkarm_markerData[i].title;

    TulkarmmarkerTitle = `<div style="max-width: 400px; padding: 0px; text-align: right;">${TulkarmmarkerTitle}</div>`;
    TulkarmmarkerTitle = TulkarmmarkerTitle.replace(/<p>(.*?)<\/p>/g, '<p style="font-size: 16px; margin-top: -8px; margin-bottom: 5px; text-indent: 28px; direction:rtl">$1</p>');
    TulkarmmarkerTitle = TulkarmmarkerTitle.replace(/<b>(.*?)<\/b>/g, '<b style="font-size: 15px; font-wight: bold;">$1</b>');
  

    Tulkarm_markerData[i].title = TulkarmmarkerTitle;
}