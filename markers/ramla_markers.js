 Ramla_markerData = [

       {
          lat: 31.9027054, lng: 35.0154984,
          title: "<h3> البرج </h3> ",
       },
       {
          lat: 32.017, lng: 34.9425,
          title: "<h3> الطيرة / طيرة دندن </h3> ",
       },
       {
          lat: 31.8247652, lng: 35.1059399,
          title: "<h3> اللطرون / بين رام الله والرملة </h3> ",
       },
       {
          lat: 31.8378, lng: 34.8555,
          title: "<h3> المنصورة / الرملة </h3> ",
       },
       {
          lat: 31.9104, lng: 34.9875,
          title: "<h3> برفيليا / برفيلية / بريفيلية </h3> ",
       },
       {
          lat: 31.986, lng: 34.9564,
          title: "<h3> بيت نبالا </h3> ",
       },
       {
          lat: 31.926, lng: 34.941,
          title: "<h3> جمزو </h3> ",
       },
       {
          lat: 31.9378, lng: 34.9696,
          title: "<h3> خربة زكريا / الرملة </h3> ",
       },
       {
          lat: 31.9489, lng: 34.9558,
          title: "<h3> دير أبو سلامة </h3> ",
       },
       {
          lat: 31.8793, lng: 34.7881,
          title: "<h3> زرنوقة </h3> ",
       },
       {
          lat: 31.8420645, lng: 35.0489039,
          title: "<h3> يالو / قرى اللطرون / بين رام الله والرملة </h3> ",
       },
       {
          lat: 31.857, lng: 34.9156,
          title: "<h3> أبو شوشة / الرملة </h3> ",
       },
       {
          lat: 31.8666, lng: 34.953,
          title: "<h3> القباب </h3> ",
       },
       {
          lat: 31.9293, lng: 34.7334,
          title: "<h3> النبي روبين / الرملة </h3> ",
       },
       {
          lat: 31.9142, lng: 34.9611,
          title: "<h3> خروبة / الرملة </h3> ",
       },
       {
          lat: 31.8272, lng: 35.0181,
          title: "<h3> دير أيوب </h3> ",
       },
       {
          lat: 31.9173, lng: 35.0196,
          title: "<h3> شلتا </h3> ",
       },
       {
          lat: 31.8592, lng: 34.8208,
          title: "<h3> عاقر </h3> ",
       },
       {
          lat: 31.8661572, lng: 34.7493968,
          title: "<h3> يبنا / يبنة </h3> ",
       },
       {
          lat: 31.895, lng: 34.7727,
          title: "<h3> القبيبة / قبيبة  ابن شاهين </h3> ",
       },
       {
          lat: 32.0487, lng: 34.949,
          title: "<h3> المزيرعة </h3> ",
       },
       {
          lat: 31.8713, lng: 34.872,
          title: "<h3> النعاني </h3> ",
       },
       {
          lat: 31.8132, lng: 34.9531,
          title: "<h3> بيت جيز </h3> ",
       },
       {
          lat: 31.8879, lng: 35.0198,
          title: "<h3> بير ماعين / بئر ماعين / إماعين/ معين </h3> ",
       },
       {
          lat: 31.946222, lng: 34.933986,
          title: "<h3> خربة الضهيرية / الظاهرية </h3> ",
       },
       {
          lat: 31.9925, lng: 34.9388,
          title: "<h3> دير طريف </h3> ",
       },
       {
          lat: 31.8692, lng: 34.9863,
          title: "<h3> سلبيت / سالبيت / سيلبيت </h3> ",
       },
       {
          lat: 33.4580539, lng: 35.2761015,
          title: "<h3> صرفند الخراب </h3> ",
       },
       {
          lat: 38.95682, lng: 35.174414,
          title: "<h3> البرية </h3> ",
       },
       {
          lat: 31.9330187, lng: 34.9243316,
          title: "<h3> دانيال </h3> ",
       },
       {
          lat: 31.8281, lng: 34.9323,
          title: "<h3> دير محيسن / الرملة </h3> ",
       },
       {
          lat: 31.9742893, lng: 35.0330484,
          title: "<h3> شبتين الرملة/ تتبع قضاء رام الله اليوم </h3> ",
       },
       {
          lat: 31.9581, lng: 34.8494,
          title: "<h3> صرفند العمار </h3> ",
       },
       {
          lat: 31.84, lng: 34.9906,
          title: "<h3> عمواس / قرى اللطرون / بين رام الله والرملة </h3> ",
       },
       {
          lat: 32.5713053, lng: 35.7544241,
          title: "<h3> وادي حنين </h3> ",
       },
       
     

   ];







for (let i = 0; i < Ramla_markerData.length; i++) {
    let RamlamarkerTitle = Ramla_markerData[i].title;

    RamlamarkerTitle = `<div style="max-width: 400px; padding: 0px; text-align: right;">${RamlamarkerTitle}</div>`;
    RamlamarkerTitle = RamlamarkerTitle.replace(/<p>(.*?)<\/p>/g, '<p style="font-size: 16px; margin-top: -8px; margin-bottom: 5px; text-indent: 28px; direction:rtl">$1</p>');
    RamlamarkerTitle = RamlamarkerTitle.replace(/<b>(.*?)<\/b>/g, '<b style="font-size: 15px; font-wight: bold;">$1</b>');
  

    Ramla_markerData[i].title = RamlamarkerTitle;
}