 Qalqilya_markerData = [

       {
          lat: 32.1859621, lng: 35.1808503,
          title: "<h3> أماتين </h3> ",
       },
       {
          lat: 32.1291653, lng: 35.0649516,
          title: "<h3> سنيريا / سنيرية </h3> ",
       },
       {
          lat: 32.2227133, lng: 35.1606426,
          title: "<h3> كفر قدوم </h3> ",
       },
       {
          lat: 32.2066502, lng: 35.1238408,
          title: "<h3> باقة الحطب </h3> ",
       },
       {
          lat: 32.1770993, lng: 35.0734666,
          title: "<h3> عزون </h3> ",
       },
       {
          lat: 32.1824043, lng: 35.1080506,
          title: "<h3> كفر لاقف </h3> ",
       },
       {
          lat: 32.2140405, lng: 35.1898593,
          title: "<h3> جيت / جت </h3> ",
       },
       {
          lat: 32.1236653, lng: 35.0359906,
          title: "<h3> عزون بن عَتْمَة </h3> ",
       },
       {
          lat: 32.1644413, lng: 34.968216,
          title: "<h3> حبلة </h3> ",
       },
       {
          lat: 32.1527973, lng: 35.0627996,
          title: "<h3> كفر ثلث </h3> ",
       },
       
     

   ];







for (let i = 0; i < Qalqilya_markerData.length; i++) {
    let QalqilyamarkerTitle = Qalqilya_markerData[i].title;

    QalqilyamarkerTitle = `<div style="max-width: 400px; padding: 0px; text-align: right;">${QalqilyamarkerTitle}</div>`;
    QalqilyamarkerTitle = QalqilyamarkerTitle.replace(/<p>(.*?)<\/p>/g, '<p style="font-size: 16px; margin-top: -8px; margin-bottom: 5px; text-indent: 28px; direction:rtl">$1</p>');
    QalqilyamarkerTitle = QalqilyamarkerTitle.replace(/<b>(.*?)<\/b>/g, '<b style="font-size: 15px; font-wight: bold;">$1</b>');
  

    Qalqilya_markerData[i].title = QalqilyamarkerTitle;
}