 Nazareth_markerData = [

       {
          lat: 32.7048249, lng: 35.296281,
          title: "<h3> إكسال </h3> ",
       },
       {
          lat: 32.6373, lng: 35.3819,
          title: "<h3> إندور أو عين دور </h3> ",
       },
       {
          lat: 32.8124706, lng: 35.408976,
          title: "<h3> البعينة / النجيدات </h3> ",
       },
       {
          lat: 31.905008, lng: 35.2075844,
          title: "<h3> الدحي </h3> ",
       },
       {
          lat: 32.7950099, lng: 35.3307099,
          title: "<h3> العزير </h3> ",
       },
       {
          lat: 32.6781, lng: 35.2437,
          title: "<h3> المْجيدلة </h3> ",
       },
       {
          lat: 32.7532968, lng: 35.3400932,
          title: "<h3> المشهد </h3> ",
       },
       {
          lat: 32.6144717, lng: 35.4004103,
          title: "<h3> الناعورة </h3> ",
       },
       {
          lat: 32.7777528, lng: 35.223991,
          title: "<h3> بئر المكسور / الحجيرات </h3> ",
       },
       {
          lat: 32.6895688, lng: 35.3494799,
          title: "<h3> دبوريّة </h3> ",
       },
       {
          lat: 32.7782787, lng: 35.3136162,
          title: "<h3> رمِّاا الهيب / رمات الهيب / عرب الهيب </h3> ",
       },
       {
          lat: 32.7238671, lng: 35.2136156,
          title: "<h3> زرزير / الزرازير </h3> ",
       },
       {
          lat: 32.6056313, lng: 35.3518156,
          title: "<h3> سولم / الزعبية </h3> ",
       },
       {
          lat: 32.7519, lng: 35.2778,
          title: "<h3> صفورية </h3> ",
       },
       {
          lat: 32.8141952, lng: 35.2225696,
          title: "<h3> الضميدة </h3> ",
       },
       {
          lat: 32.7749821, lng: 35.416832,
          title: "<h3> طرعان </h3> ",
       },
       {
          lat: 32.6957246, lng: 35.4308102,
          title: "<h3> عرب الصبيح / عرب الشبلي </h3> ",
       },
       {
          lat: 32.7204477, lng: 35.2722413,
          title: "<h3> عيلوط </h3> ",
       },
       {
          lat: 32.7199062, lng: 35.3579728,
          title: "<h3> عين ماهل </h3> ",
       },
       {
          lat: 32.7482331, lng: 35.3448722,
          title: "<h3> كفر كنا / قانا الجليل </h3> ",
       },
       {
          lat: 32.8294747, lng: 35.2597063,
          title: "<h3> كوكب أبو الهيجاء / واحدة من قرى الهيجاء </h3> ",
       },
       {
          lat: 32.696389, lng: 35.236944,
          title: "<h3> معلول </h3> ",
       },     



	//Missing in pdf
/*
       {
          lat: 32.6058672, lng: 35.3175498,
          title: "<h3> الفُولَة </h3> ",
       },
       {
          lat: 32.7292336, lng: 35.3406765,
          title: "<h3> الرينة </h3> ",
       },
       {
          lat: 32.6076746, lng: 35.3518014,
          title: "<h3> العَفُّولَة </h3> ",
       },
       {
          lat: 33.0471, lng: 35.1791,
          title: "<h3> عرب السّّمنيّة / جالين </h3> ",
       },
*/

   ];







for (let i = 0; i < Nazareth_markerData.length; i++) {
    let NazarethmarkerTitle = Nazareth_markerData[i].title;

    NazarethmarkerTitle = `<div style="max-width: 400px; padding: 0px; text-align: right;">${NazarethmarkerTitle}</div>`;
    NazarethmarkerTitle = NazarethmarkerTitle.replace(/<p>(.*?)<\/p>/g, '<p style="font-size: 16px; margin-top: -8px; margin-bottom: 5px; text-indent: 28px; direction:rtl">$1</p>');
    NazarethmarkerTitle = NazarethmarkerTitle.replace(/<b>(.*?)<\/b>/g, '<b style="font-size: 15px; font-wight: bold;">$1</b>');
  

    Nazareth_markerData[i].title = NazarethmarkerTitle;
}