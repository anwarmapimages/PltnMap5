 Salfit_markerData = [

       {
          lat: 32.1029157, lng: 35.2595685,
          title: "<h3> اسكاكا </h3> ",
       },
       {
          lat: 32.0726108, lng: 35.0778064,
          title: "<h3> ابروقين </h3> ",
       },
       {
          lat: 32.113415, lng: 35.1787355,
          title: "<h3> حارس </h3> ",
       },
       {
          lat: 32.1307567, lng: 35.1751555,
          title: "<h3> دير اسْتْيَا </h3> ",
       },
       {
          lat: 32.103335, lng: 35.091838,
          title: "<h3> سرطة / صرطة </h3> ",
       },
       {
          lat: 32.076715, lng: 35.1629509,
          title: "<h3> فرخة </h3> ",
       },
       {
          lat: 32.1284997, lng: 35.1343975,
          title: "<h3> قراوى بني حسان / قراوة بني حسان / أو بني حسن </h3> ",
       },
       {
          lat: 32.1241712, lng: 35.1886697,
          title: "<h3> قِيرَة / كيرا </h3> ",
       },
       {
          lat: 32.0671117, lng: 35.1044707,
          title: "<h3> كفر الديك </h3> ",
       },
       {
          lat: 32.1168847, lng: 35.1919835,
          title: "<h3> كفل حارس </h3> ",
       },
       {
          lat: 32.114234, lng: 35.204606,
          title: "<h3> مردة / مردا </h3> ",
       },
       {
          lat: 32.0851597, lng: 35.2917805,
          title: "<h3> الساوية </h3> ",
       },
       {
          lat: 32.0710239, lng: 35.2426884,
          title: "<h3> اللبن الشرقية </h3> ",
       },
       
     

   ];







for (let i = 0; i < Salfit_markerData.length; i++) {
    let SalfitmarkerTitle = Salfit_markerData[i].title;

    SalfitmarkerTitle = `<div style="max-width: 400px; padding: 0px; text-align: right;">${SalfitmarkerTitle}</div>`;
    SalfitmarkerTitle = SalfitmarkerTitle.replace(/<p>(.*?)<\/p>/g, '<p style="font-size: 16px; margin-top: -8px; margin-bottom: 5px; text-indent: 28px; direction:rtl">$1</p>');
    SalfitmarkerTitle = SalfitmarkerTitle.replace(/<b>(.*?)<\/b>/g, '<b style="font-size: 15px; font-wight: bold;">$1</b>');
  

    Salfit_markerData[i].title = SalfitmarkerTitle;
}