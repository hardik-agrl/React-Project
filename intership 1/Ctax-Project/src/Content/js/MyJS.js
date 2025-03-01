$(document).ajaxStart(function () {
    $("#wait").css("display", "block");
});

$(document).ajaxComplete(function () {
    $("#wait").css("display", "none");
});

function GetFormattedDate(dt) {
    var days = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    dt = new Date(dt.split('T')[0]);
    var day = dt.getDate();
    if (day < 10) day = days[dt.getDate() - 1];
    return day + '-' + months[dt.getMonth()] + '-' + dt.getFullYear();
}


function GetDate(jsonDate) {
    var days = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
    var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    var regex = /-?\d+/;
    var matches = regex.exec(jsonDate);
    var dt = new Date(parseInt(matches[0]));
    var day = dt.getDate();
    if (day < 10) day = '0' + day;
    var month = dt.getMonth() + 1;
    if (month < 10) month = '0' + month;
    return dt.getFullYear() + '-' + month + '-' + day;
}


//Convert Form Field and Values to JSON Object

function getFormDataToJSON(form) {
    return $(form)
        .serializeArray()
        .reduce(function (json, { name, value }) {
            json[name] = value;
            return json;
        }, {});
}

//Convert JSON to Form Data
function getFormDataFromJSON(jsondata) {
    var formData = new FormData();
    $.each(jsondata, function (k, v) {
        formData.append(k, v);
    });
    return formData;
}

//Convert Form Field and Values to Form Data
function getFormdata(form) {  
    
    var data = $(form).serializeArray();
    
    var formData = new FormData();
    $.each(data, function (i, field) {
        formData.append(field.name, field.value);
        //alert("Field Name: " + field.name + " | Field Value: " + field.value)        
    });
   
    return formData;
}