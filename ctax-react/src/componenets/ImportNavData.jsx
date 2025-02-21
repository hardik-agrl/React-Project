import React from 'react'

export default function ImportNavData(){
    return(
        <>
        
<br />
<div className="row">
    <div className="col-sm-12">
        <div className="row">
            <div className="col-sm-2">

            </div>
            <div className="col-sm-2">
                <input type="button" id="btn_navImport" className="btn btn-primary" name="name" value="Import" />
            </div>
        </div>
    </div>

    <div className="col-sm-12 card-box">
        <div className="table-responsive">
            <table id="tbl_nav_Import" className="table table-striped">
                <thead>
                    <tr>
                        <th> No</th>
                        <th> Name</th>
                        <th>Balance</th>
                       
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
</div>
    </>
    )
}


// <script>
//     $(document).ready(function () {

    //         $("#btn_navImport").on("click", function () {
        //             $("#btn_navImport").val("Loading..");
        
        //             $("#tbl_nav_Import tbody").empty();
//             $.ajax({
//                 url: "/Home/GetNavImportTrailBalaince",
//                 type: "get",
//                 success: function (Data) {
//                     $("#btn_navImport").val("Import");
//                     $("#tbl_nav_Import tbody").empty();
//                    // var MyData = JSON.parse(Data);
//                     $.each(Data, function (i,itm) {
//                         var html = "";
//                         html += "<tr>";
//                         html += "<td>" + itm.No + "</td>";
//                         html += "<td>" + itm.Name + "</td>";
//                         html += "<td>" + itm.Balance + "</td>";
//                         html += "</tr>";
//                         $("#tbl_nav_Import tbody").append(html);
//                     });    

//                 },
//                 error: function (ResponceText) {
//                     $("#btn_navImport").val("Import");
//                     $("#tbl_nav_Import tbody").empty();
//                 }
            
//                }); 
//       }); 
//     }); 
// </script>
