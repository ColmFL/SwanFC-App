$('#Add').on('click',function(event){
  
  event.preventDefault();
  
  var _List = $.parseJSON($('#AllData').val());
  
  
  var _newObj =  {
    'First': $('[name="First"]').val(),
    'Middle': $('[name="Middle"]').val(),
    'Last': $('[name="Last"]').val(),    
  };
  
  
  _List.push(_newObj);
  

  
  $('#AllData').val(JSON.stringify(_List));
  
    console.log(_List);