 Bisan_markerData = [

       {
          lat: 32.47, lng: 35.4713,
          title: "<h3> الأشرفية / أشرفية عبد الهادي </h3> ",
       },
       {
          lat: 32.6075, lng: 35.5031,
          title: "<h3> البيرة / بيسان </h3> ",
       },
       {
          lat: 32.4278, lng: 35.5004,
          title: "<h3> الحمرا / عرب الحمرا- بيسان </h3> ",
       },
       {
          lat: 32.544, lng: 35.5156,
          title: "<h3> الحميدية </h3> ",
       },
       {
          lat: 32.7587373, lng: 34.8577585,
          title: "<h3> الطيرة / طيرة المرج، طيرة الزعبية </h3> ",
       },
       {
          lat: 32.3968, lng: 35.5257,
          title: "<h3> الفاتور </h3> ",
       },
       {
          lat: 31.7758726, lng: 35.194624,
          title: "<h3> جبول </h3> ",
       },
       {
          lat: 32.586111, lng: 35.542222,
          title: "<h3> خربة أم صابونة </h3> ",
       },
       {
          lat: 32.6114, lng: 35.5359,
          title: "<h3> خربة الطاقة </h3> ",
       },
       {
          lat: 32.5542, lng: 35.4375,
          title: "<h3> شَطَّة </h3> ",
       },
       {
          lat: 32.645369, lng: 35.4224,
          title: "<h3> كفر مصر </h3> ",
       },
       {
          lat: 32.6343094, lng: 35.3992637,
          title: "<h3> طمرة الزعبية </h3> ",
       },
       {
          lat: 32.5952, lng: 35.5209,
          title: "<h3> كوكب الهوا </h3> ",
       },
       {
          lat: 32.565, lng: 35.3957,
          title: "<h3> قومية / جبع </h3> ",
       },
       {
          lat: 32.6034827, lng: 35.4549604,
          title: "<h3> الطيبة / المثلث / طيبة بني صعب </h3> ",
       },


   ];







for (let i = 0; i < Bisan_markerData.length; i++) {
    let BisanmarkerTitle = Bisan_markerData[i].title;

    BisanmarkerTitle = `<div style="max-width: 400px; padding: 0px; text-align: right;">${BisanmarkerTitle}</div>`;
    BisanmarkerTitle = BisanmarkerTitle.replace(/<p>(.*?)<\/p>/g, '<p style="font-size: 16px; margin-top: -8px; margin-bottom: 5px; text-indent: 28px; direction:rtl">$1</p>');
    BisanmarkerTitle = BisanmarkerTitle.replace(/<b>(.*?)<\/b>/g, '<b style="font-size: 15px; font-wight: bold;">$1</b>');
  

    Bisan_markerData[i].title = BisanmarkerTitle;
}