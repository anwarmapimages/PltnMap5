 Tiberias_markerData = [

       {
          lat: 32.682, lng: 35.6648,
          title: "<h3> الحمِّة / الحَمّة السورية / قرى المناطق المجردة من السلاح </h3> ",
       },
       {
          lat: 32.660556, lng: 35.597778,
          title: "<h3> الدلهمية </h3> ",
       },
       {
          lat: 32.7231, lng: 35.6173,
          title: "<h3> السمرا / السَمّرَة / خربة السَمّرَة/  قرى المناطق المجردة من السلاح </h3> ",
       },
       {
          lat: 32.7543, lng: 35.399,
          title: "<h3> الشجرة </h3> ",
       },
       {
          lat: 32.873658, lng: 35.548975,
          title: "<h3> الطابغة </h3> ",
       },
       {
          lat: 32.683333, lng: 35.55,
          title: "<h3> العبيدية </h3> ",
       },
       {
          lat: 32.824444, lng: 35.516667,
          title: "<h3> المجدل / قرية السيدة مريم المجدلية </h3> ",
       },
       {
          lat: 32.754722, lng: 35.542222,
          title: "<h3> المنارة / عرب المنارة </h3> ",
       },
       {
          lat: 32.6925, lng: 35.558056,
          title: "<h3> المنشية / سمخ </h3> ",
       },
       {
          lat: 32.8942, lng: 35.4175,
          title: "<h3> المنصورة </h3> ",
       },
       {
          lat: 32.7991, lng: 35.6402,
          title: "<h3> النقيب / النَقِيّبْ / عرب الرقيبات/النقيب العربية /  قرى المناطق المجردة من السلاح </h3> ",
       },
       {
          lat: 32.8338, lng: 35.4809,
          title: "<h3> خربة الوعرة السوداء / عرب المواسي والوهيب </h3> ",
       },
       {
          lat: 32.88375, lng: 35.576972,
          title: "<h3> تلحوم / السمكية / عرب السمكية </h3> ",
       },
       {
          lat: 32.6835, lng: 35.4875,
          title: "<h3> حدثة / من قرى الهيجاء </h3> ",
       },
       {
          lat: 32.8074, lng: 35.4538,
          title: "<h3> حطين </h3> ",
       },
       {
          lat: 32.7049, lng: 35.5875,
          title: "<h3> سمخ </h3> ",
       },
       {
          lat: 32.8495125, lng: 35.5291574,
          title: "<h3> غُويّر أبو شوشة / غور أبو شوشة </h3> ",
       },
       {
          lat: 32.684686, lng: 35.4633324,
          title: "<h3> مسحة </h3> ",
       },
       {
          lat: 32.7435, lng: 35.4397,
          title: "<h3> كفر سبت </h3> ",
       },
       {
          lat: 32.7785, lng: 35.5236,
          title: "<h3> ناصر الدين </h3> ",
       },
       {
          lat: 32.7196645, lng: 35.453822,
          title: "<h3> كفر كنا / كَمَّه </h3> ",
       },
       {
          lat: 32.8041, lng: 35.4232,
          title: "<h3> نمرين </h3> ",
       },
       {
          lat: 32.8423498, lng: 35.4180246,
          title: "<h3> عيلبون </h3> ",
       },
       {
          lat: 32.7761, lng: 35.4282,
          title: "<h3> لوبيا / لوبية </h3> ",
       },
       {
          lat: 32.8733026, lng: 35.4505809,
          title: "<h3> مغار/ المغار/ طبريا </h3> ",
       },
       
     

   ];







for (let i = 0; i < Tiberias_markerData.length; i++) {
    let TiberiasmarkerTitle = Tiberias_markerData[i].title;

    TiberiasmarkerTitle = `<div style="max-width: 400px; padding: 0px; text-align: right;">${TiberiasmarkerTitle}</div>`;
    TiberiasmarkerTitle = TiberiasmarkerTitle.replace(/<p>(.*?)<\/p>/g, '<p style="font-size: 16px; margin-top: -8px; margin-bottom: 5px; text-indent: 28px; direction:rtl">$1</p>');
    TiberiasmarkerTitle = TiberiasmarkerTitle.replace(/<b>(.*?)<\/b>/g, '<b style="font-size: 15px; font-wight: bold;">$1</b>');
  

    Tiberias_markerData[i].title = TiberiasmarkerTitle;
}