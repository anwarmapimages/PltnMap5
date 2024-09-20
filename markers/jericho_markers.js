 Jericho_markerData = [

       {
          lat: 32.1413615, lng: 35.452783,
          title: "<h3> الجفتلك </h3> ",
       },
       {
          lat: 31.9480633, lng: 35.4536544,
          title: "<h3> العوجا </h3> ",
       },
       {
          lat: 31.8176326, lng: 35.5066813,
          title: "<h3> عين حَجْلَة/ دِير حَجْلَة/ قرى فلسطينية في مواجهة الاستيطان </h3> ",
       },
       
     

   ];







for (let i = 0; i < Jericho_markerData.length; i++) {
    let JerichomarkerTitle = Jericho_markerData[i].title;

    JerichomarkerTitle = `<div style="max-width: 400px; padding: 0px; text-align: right;">${JerichomarkerTitle}</div>`;
    JerichomarkerTitle = JerichomarkerTitle.replace(/<p>(.*?)<\/p>/g, '<p style="font-size: 16px; margin-top: -8px; margin-bottom: 5px; text-indent: 28px; direction:rtl">$1</p>');
    JerichomarkerTitle = JerichomarkerTitle.replace(/<b>(.*?)<\/b>/g, '<b style="font-size: 15px; font-wight: bold;">$1</b>');
  

    Jericho_markerData[i].title = JerichomarkerTitle;
}