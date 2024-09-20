 Tubas_markerData = [

       {
          lat: 32.3377523, lng: 35.415501,
          title: "<h3> العقبة </h3> ",
       },
       {
          lat: 32.3865688, lng: 35.4594254,
          title: "<h3> بردلة </h3> ",
       },
       {
          lat: 32.3393998, lng: 35.3756664,
          title: "<h3> تياسير </h3> ",
       },
       {
          lat: 32.3525348, lng: 35.3648569,
          title: "<h3> عَقّابَة / عَقّابَا </h3> ",
       },
       
     

   ];







for (let i = 0; i < Tubas_markerData.length; i++) {
    let TubasmarkerTitle = Tubas_markerData[i].title;

    TubasmarkerTitle = `<div style="max-width: 400px; padding: 0px; text-align: right;">${TubasmarkerTitle}</div>`;
    TubasmarkerTitle = TubasmarkerTitle.replace(/<p>(.*?)<\/p>/g, '<p style="font-size: 16px; margin-top: -8px; margin-bottom: 5px; text-indent: 28px; direction:rtl">$1</p>');
    TubasmarkerTitle = TubasmarkerTitle.replace(/<b>(.*?)<\/b>/g, '<b style="font-size: 15px; font-wight: bold;">$1</b>');
  

    Tubas_markerData[i].title = TubasmarkerTitle;
}