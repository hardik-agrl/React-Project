import React from 'react'

function Login() {
  return (
      
      <div class="modal fade" id="myCenterModalLabel1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">OTP Verification</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="otp-screen">
                        <h4 id="lbMsg"></h4>
                        <input type="text" class="inputs form-control" autocomplete="off" id="number" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" required/>
                        <input type="text" class=" inputs form-control" autocomplete="off" id="number" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" required/>
                        <input type="text" class="inputs form-control" autocomplete="off" id="number" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" required/>
                        <input type="text" class="inputs form-control" autocomplete="off" id="number" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" required/>
                        <input type="text" class="inputs form-control" autocomplete="off" id="number" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" required/>
                        <input type="text" class="inputs form-control" autocomplete="off" id="number" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" required/>
                        <br />
                        <a href="javascript:void(0);" id="btn_submit" class="btn btn-md btn-primary" style="margin-top:33px;">Verify</a>
                        <p class="mb-0" style="margin-top:15px;">Not recieved OTP?  <span> <a href="javascript:void(0);" class="btn_otpRequestResend page-scroll "> Resend Now</a></span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Login