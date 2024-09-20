 Beersheba_markerData = [

       {
          lat: 31.0961, lng: 34.6512,
          title: "<h3> الخلصة </h3> ",
       },
       {
          lat: 31.1140509, lng: 34.5712118,
          title: "<h3> ترابين/ الترابين/ نجمات الصانع </h3> ",
       },
       {
          lat: 31.3963055, lng: 34.7504703,
          title: "<h3> رهط / مدينة حالية / من القرى السبعة التي أقامها الاحتلال في النقب لاستيعاب مهجري النقب </h3> ",
       },
       {
          lat: 31.1576284, lng: 34.9767748,
          title: "<h3> عرعرة النقب :  من القرى السبعة التي أقامها الاحتلال في النقب لاستيعاب مهجري النقب </h3> ",
       },
       {
          lat: 31.326388888889, lng: 34.858333333333,
          title: "<h3> لقية / اللقية / من القرى السبعة التي أقامها الاحتلال في النقب لاستيعاب مهجري النقب </h3> ",
       },
       {
          lat: 29.5336, lng: 34.9395,
          title: "<h3> أُم الرَشْرَاشْ/المُرَشَّش </h3> ",
       },
       {
          lat: 31.303, lng: 34.5206,
          title: "<h3> العمارة </h3> ",
       },
       {
          lat: 31.244835, lng: 34.840858,
          title: "<h3> تل أبو محفوظ / تل السبع / تل بئر السبع : من القرى السبعة التي أقامها الاحتلال في النقب لاستيعاب مهجري النقب </h3> ",
       },
       {
          lat: 31.2068339, lng: 34.9028834,
          title: "<h3> الزرنوق /  أبو قويدر </h3> ",
       },
       {
          lat: 31.2738663, lng: 35.1258161,
          title: "<h3> تل عراد: قرية  بدوية </h3> ",
       },
       {
          lat: 31.2016993, lng: 34.8566002,
          title: "<h3> شقيب السلام  : من القرى السبعة التي أقامها الاحتلال في النقب لاستيعاب مهجري النقب </h3> ",
       },
       {
          lat: 31.1426068, lng: 34.9485335,
          title: "<h3> قرية ابو تلول </h3> ",
       },
       {
          lat: 31.4987, lng: 34.6863,
          title: "<h3> الجمامة </h3> ",
       },
       {
          lat: 31.2955736, lng: 34.975516,
          title: "<h3> حورا : من القرى السبعة التي أقامها الاحتلال في النقب لاستيعاب مهجري النقب </h3> ",
       },
       {
          lat: 31.2463522, lng: 35.1030346,
          title: "<h3> عراد / مدينة حالية </h3> ",
       },
       {
          lat: 31.2396258, lng: 35.0493249,
          title: "<h3> كسيفة: من القرى السبعة التي أقامها الاحتلال في النقب لاستيعاب مهجري النقب </h3> ",
       },
       
     

   ];







for (let i = 0; i < Beersheba_markerData.length; i++) {
    let BeershebamarkerTitle = Beersheba_markerData[i].title;

    BeershebamarkerTitle = `<div style="max-width: 400px; padding: 0px; text-align: right;">${BeershebamarkerTitle}</div>`;
    BeershebamarkerTitle = BeershebamarkerTitle.replace(/<p>(.*?)<\/p>/g, '<p style="font-size: 16px; margin-top: -8px; margin-bottom: 5px; text-indent: 28px; direction:rtl">$1</p>');
    BeershebamarkerTitle = BeershebamarkerTitle.replace(/<b>(.*?)<\/b>/g, '<b style="font-size: 15px; font-wight: bold;">$1</b>');
  

    Beersheba_markerData[i].title = BeershebamarkerTitle;
}