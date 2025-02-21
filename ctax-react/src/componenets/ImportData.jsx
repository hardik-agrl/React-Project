import React from 'react'

export default function ImportData(){
    return(
        
<div className="row card-box">
    <div className="col-sm-4">
        <div className="form-group">
            <label>From Date</label>
            <input type="text" className="form-control" autocomplete="off" placeholder="Form Date" id="txt_from_date" name="name" value="" />
        </div>
    </div>
    <div className="col-sm-4">
        <div className="form-group">
            <label>To Date</label>
            <input type="text" className="form-control" autocomplete="off" placeholder="To Date" id="txt_to_date" name="name" value="" />
        </div>
    </div>
    <div className="col-sm-2">

        <button className="btn btn-danger mt-3" onclick="ImportData();" id="btn_import_data">Submit</button>
    </div>
    <div className="col-sm-2">

        <button className="btn btn-danger mt-3" onclick="ImportDataToCtax();" id="btn_import_toctax_data">Import To Ctax</button>
    </div>

    <div className="col-sm-12">
        <table className="table" id="tbl_data_summary">
            <thead>
                <tr>
                    <th>GL No</th>
                    <th>GL Name</th>
                    <th>Amount</th>
                    <th>Debit Amount</th>
                    <th>Credit Amount</th>
                    <th>Account Type</th>
                    <th>Account Category</th>
                </tr>
            </thead>
            <tbody>
            </tbody>

        </table>

    </div>
</div>

    )
}





{/* <script>
    $(document).ready(function () {
        
        $("#txt_from_date").flatpickr({
            allowInput: true, dateFormat: "Y-m-d", defaultDate: "today",
            onChange: function (selectedDates, dateStr, instance) {
                $("#txt_endate").flatpickr({ allowInput: true, dateFormat: "d-M-Y", minDate: dateStr });

            }
        });

        
        $("#txt_to_date").flatpickr({ allowInput: true, dateFormat: "Y-m-d", defaultDate: "today" });
    });

    function ImportData() {
        $("#btn_import_data").text("Loading..");
        $("#tbl_data_summary tbody").empty();
        $.ajax({
            url: "/home/GetCtax_ImportData",
            type: "get", 
            data: { "from_date": $("#txt_from_date").val(), "to_date": $("#txt_to_date").val() },
            success: function (myData) {
                $("#btn_import_data").text("Submit");
                var Data = JSON.parse(myData);//.value;
                if (Data.length >0) {
                    $.each(Data, function (i, itm) {
                        //  $("#tbl_data_summary tbody").append("<tr><td>" + itm.No + "</td><td>" + itm.Description + "</td></tr>");
                        $("#tbl_data_summary tbody").append("<tr><td>" + itm.G_L_Account_No + "</td><td>" + itm.G_L_Account_Name + "</td><td>" + itm.Amount + "</td><td>" + itm.Debit_Amount + "</td><td>" + itm.Credit_Amount + "</td><td>" + itm.Income_Balance + "</td> <td>" + itm.Account_Category + "</td></tr>");
                    });
                }
            },
            error: function ( res) {
                $("#btn_import_data").text("Submit");
            }
        })
    }

    function ImportDataToCtax() {
        $("#btn_import_toctax_data").text("Loading..");
       
        $.ajax({
            url: "/home/BCImportDataToCTax",
            type: "get",
            data: { "from_date": $("#txt_from_date").val(), "to_date": $("#txt_to_date").val() },
            success: function (myData) {
                $("#btn_import_toctax_data").text("Import To Ctax");
                alert(myData);
            },
            error: function (res) {
                $("#btn_import_toctax_data").text("Import To Ctax");
            }
        })
    }
</script> */}