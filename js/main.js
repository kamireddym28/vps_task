function redirect() {
  var auth = {'username':'testuser@vpsi.io', 'password':'testUser1*'};
  $.ajax({
      type: "POST",
      url: 'http://demo-staging.virtualpowersystems.com:9001/v3/sessions',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify(auth),
      success: function (result) {
        getDevices(result.token);
      }
  });
};

function getDevices(token) {
  $.ajax({
      type: "GET",
      url: 'http://demo-staging.virtualpowersystems.com:9001/v3/devices',
      headers : {
        'token':token,
        'Content-Type': 'application/json'
      },
      success: function (response) {
        $.each(response, function(idx, val){
          $('#device-names #list').append('<li>'+val.name+'</li>')
        })
      }
  });
};
