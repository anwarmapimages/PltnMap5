 Yaffa_markerData = [

       {
          lat: 32.1429, lng: 34.8671,
          title: "<h3> أبو كشك/ عرب أبو كشك </h3> ",
       },
       {
          lat: 32.0908, lng: 34.7937,
          title: "<h3> الجماسين الغربي </h3> ",
       },
       {
          lat: 32.0864, lng: 34.7825,
          title: "<h3> المسعودية / صميل </h3> ",
       },
       {
          lat: 32.0032, lng: 34.8289,
          title: "<h3> بيت دجن / يافا / داجون </h3> ",
       },
       {
          lat: 32.16, lng: 34.8124,
          title: "<h3> إجليل الشمالية </h3> ",
       },
       {
          lat: 32.188, lng: 34.8065,
          title: "<h3> الحرم / سيدنا علي </h3> ",
       },
       {
          lat: 32.0619532, lng: 34.7703438,
          title: "<h3> المنشية / حي من يافا ولا يعتبر قرية </h3> ",
       },
       {
          lat: 32.04444444, lng: 34.92138889,
          title: "<h3> رنتية </h3> ",
       },
       {
          lat: 32.0245, lng: 34.8683,
          title: "<h3> كفر عانة </h3> ",
       },
       {
          lat: 32.1583, lng: 34.8113,
          title: "<h3> إجليل القبلية / جليل القبلية </h3> ",
       },
       {
          lat: 32.0366, lng: 34.822,
          title: "<h3> الخيريّة </h3> ",
       },
       {
          lat: 32.0314, lng: 34.8898,
          title: "<h3> العَبَّاسِيَّة / اليهودية </h3> ",
       },
       {
          lat: 32.0407852, lng: 34.7738738,
          title: "<h3> حي أبو كبير </h3> ",
       },
       {
          lat: 32.0289, lng: 34.8424,
          title: "<h3> ساقية / ساكية </h3> ",
       },
       {
          lat: 32.0908579, lng: 34.9222052,
          title: "<h3> ملبس </h3> ",
       },
       {
          lat: 32.0978, lng: 34.8308,
          title: "<h3> الجماسين الشرقي </h3> ",
       },
       {
          lat: 31.9933, lng: 34.8497,
          title: "<h3> السافرية </h3> ",
       },
       {
          lat: 32.1573, lng: 34.9207,
          title: "<h3> بيار عدس </h3> ",
       },
       {
          lat: 31.9436735, lng: 34.866986,
          title: "<h3> دهمش </h3> ",
       },
       {
          lat: 32.0489, lng: 34.8049,
          title: "<h3> سَلَمَة </h3> ",
       },
       {
          lat: 32.0263, lng: 34.8032,
          title: "<h3> يازور </h3> ",
       },
       
     

   ];







for (let i = 0; i < Yaffa_markerData.length; i++) {
    let YaffamarkerTitle = Yaffa_markerData[i].title;

    YaffamarkerTitle = `<div style="max-width: 400px; padding: 0px; text-align: right;">${YaffamarkerTitle}</div>`;
    YaffamarkerTitle = YaffamarkerTitle.replace(/<p>(.*?)<\/p>/g, '<p style="font-size: 16px; margin-top: -8px; margin-bottom: 5px; text-indent: 28px; direction:rtl">$1</p>');
    YaffamarkerTitle = YaffamarkerTitle.replace(/<b>(.*?)<\/b>/g, '<b style="font-size: 15px; font-wight: bold;">$1</b>');
  

    Yaffa_markerData[i].title = YaffamarkerTitle;
}