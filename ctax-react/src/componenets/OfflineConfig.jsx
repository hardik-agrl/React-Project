import React from "react"

export default function OfflineConfig(){
    return(
        
        <div className="row card-box">
    <div className="col-sm-12">
        <form className="form-horizontal">
            <h4 className="mb-3 header-title">Nav Configuration</h4>
            <div className="form-group row mb-3">
                <label htmlFor="txt_client_id" className="col-3 col-form-label">Config Type</label>
                <div className="col-9">
                    <input type="radio" className="type_config" onClick="BindData()" id="rb_type_navision" checked name="type_config" value="Navision" />
                    <label htmlFor="rb_type_navision">Navision</label>
                    <input type="radio" className="type_config" onClick="BindData()" id="rb_type_oracle" name="type_config" value="Oracle" />
                    <label htmlFor="rb_type_oracle">Oracle</label>
                    <input type="radio" className="type_config" onClick="BindData()" id="rb_type_tally" name="type_config" value="Tally" />
                    <label htmlFor="rb_type_tally">Tally</label>
                </div>
            </div>
            <div className="form-group row mb-3">
                <label htmlFor="txt_client_id" className="col-3 col-form-label">Company Name</label>
                <div className="col-9">
                    <input type="text" autocomplete="off" className="form-control" style="background-color:#eee"
                    //  disabled value="@Session["company_name"].ToString()" 
                     id="txt_company_name" placeholder="Company Name"/>
                </div>
            </div>
            <div className="form-group row mb-3">
                <label htmlFor="txt_client_id" className="col-3 col-form-label">Licence Key</label>
                <div className="col-9">
                    <input type="text" autocomplete="off" className="form-control" style="background-color:#eee"
                    //  disabled value="@Session["license_key"].ToString()" 
                    id="txt_licence_key" placeholder="Licence Key"/>
                    <div className="row">
                        <div className="col-sm-10 text-right">
                            <label>Status:<span className="badge badge-secondary" id="lb_validate_status">Invalid</span></label>
                        </div>
                        <div className="col-sm-2 text-right">
                            <input type="button" className="btn btn-sm btn-danger mt-1" id="btn_validateLicence" name="name" value="Validate" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-group row mb-3">
                <label htmlFor="txt_client_id" className="col-3 col-form-label">User ID</label>
                <div className="col-9">
                    <input type="text" autocomplete="off" className="form-control" id="txt_user_id" placeholder="User ID"/>

                </div>
            </div>
            <div className="form-group row mb-3">
                <label htmlFor="txt_client_id" className="col-3 col-form-label">Password</label>
                <div className="col-9">
                    <input type="text" autocomplete="off" className="form-control" id="txt_password" placeholder="Password"/>
                </div>
            </div>
            <div className="form-group row mb-3">
                <label htmlFor="txt_trail_balance_api" className="col-3 col-form-label">Trial Balance Api</label>
                <div className="col-9">
                    <input type="text" autocomplete="off" className="form-control" id="txt_trail_balance_api" placeholder="Full URL"/>
                </div>
            </div>
            <div><input type="button" className="btn btn-primary" id="btn_nav_save" name="name" value="Save" /></div>
            <input type="hidden" id="hd_nav_config" name="name" value="0" />
        </form>
    </div>
</div>


    )
}


/*
<script>
    $(document).ready(function () {
        BindData();
        $("#btn_nav_save").on("click", function () {
            if ($("#txt_company_name").val() == "" || $("#txt_company_name").val() == null)
            {
                alert("Please Entry Company Name");
                return false;
            }
            if ($("#txt_licence_key").val() == "" || $("#txt_licence_key").val() == null) {
                alert("Please Entry Company Name");
                return false;
            }

            $.ajax({
                //  url: "/home/InsertNavConfig",
                url: "/home/InsertOfflineConfig",
                type: "post",
                data: JSON.stringify({
                    "id": $("#hd_nav_config").val(),
                    "config_type": $('input[name="type_config"]:checked').val(),
                    "company_name": $("#txt_company_name").val(), "licence_key": $("#txt_licence_key").val(), "user_id": $("#txt_user_id").val(), "password": $("#txt_password").val()
                    , "trail_balance_api": $("#txt_trail_balance_api").val()    }),
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function (res) {
                    if (res.split(',').length > 0) {
                        alert(res.split(',')[1]);
                        BindData();
                    } else {
                        alert(res);
                    }                 
                },
                error: function (res) {

                }
            })

        });  

        $("#btn_validateLicence").on("click", function () {   
            $.ajax({
                url: "/Home/InsertCtaxOfflineConfingValidate",
                type: "post",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({ "id": $("#hd_nav_config").val(), "licence_key": $("#txt_licence_key").val() }),
                dataType: "json",
                success: function (res) {
                    if (res.split(",").length == 0) {
                        alert(res);
                    } else {
                        if (res.split(",")[0] == "success") {
                            alert(res.split(",")[1]);
                        }
                        else {
                            alert(res.split(",")[1]);
                        }
                    }
                    BindData();
                }
            })

        });

    });

    function BindData() {
        if ($('input[name="type_config"]:checked').val() == "Tally") {
            $("#txt_user_id").val("").prop("disabled", true).css("background-color", "#eee");
            $("#txt_password").val("").prop("disabled", true).css("background-color", "#eee");
            $("#txt_trail_balance_api").val("").prop("disabled", true).css("background-color", "#eee");
        }
        else {
            $("#txt_user_id").val("").prop("disabled", false).css("background-color", "#fff");
            $("#txt_password").val("").prop("disabled", false).css("background-color", "#fff");
            $("#txt_trail_balance_api").val("").prop("disabled", false).css("background-color", "#fff");
        }

        //"$('input[name="type_config"]:checked').val() "
        $.ajax({
            url: "/home/GetOfflineConfingMasterData",
            type: "get",
            data: { "config_type": $('input[name="type_config"]:checked').val(), "license_key": $("#txt_licence_key").val() },
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (Data) {

                if (JSON.parse(Data).length > 0) {


                    $.each(JSON.parse(Data), function (i, itm) {
                        $("#hd_nav_config").val(itm.CONFIG_ID);
                       // $("#txt_company_name").val(itm.COMPANY_NAME);
                       // $("#txt_licence_key").val(itm.LICENCE_KEY);
                        $("#txt_user_id").val(itm.USER_ID);
                        $("#txt_password").val(itm.PASSWORD);
                        $("#txt_trail_balance_api").val(itm.TRAIL_BALANCE_API);
                        if (itm.LICENCE_VALIDATION_STATUS == "License Validated") {
                            $("#lb_validate_status").addclassName("badge-success")
                        }else  {
                            $("#lb_validate_status").removeclassName("badge-success")
                        }
                        $("#lb_validate_status").text(itm.LICENCE_VALIDATION_STATUS);
                   

                        //CONFIG_TYPE
                    })
                } else {
                    $("#hd_nav_config").val(0);
                    //$("#txt_company_name").val("");
                    //$("#txt_licence_key").val("");
                    $("#txt_user_id").val("");
                    $("#txt_password").val("");
                    $("#txt_trail_balance_api").val("");
                    $("#lb_validate_status").removeclassName("badge-success")
                    //$("#lb_validate_status").addclassName("badge-secondary")
                    $("#lb_validate_status").text("");

                }

            },
            error: function (responceText) {

            }
        })
    }
</script> 

*/
