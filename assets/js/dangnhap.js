$(document).ready(function () {
    function kiemTraDN() {
      var kt = /(^[A-Z]{1})([a-z]+)(\w|\.|_[A-Z]{1}([a-z]+))*$/;
      if ($("#txtTenDN").val() == "") {
        $("#tbDN").html("*Bắt buộc nhập !!");
        return false;
      }
      if (!kt.test($("#txtTenDN").val())) {
        $("#tbDN").html("*");
        return false;
      }
      $("#tbDN").html("*");
      return true;
    }
    $("#txtTenDN").blur(kiemTraDN);


    function kiemTraMK() {
      var kt = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      if ($("#txtPW").val() == "") {
        $("#tbPW").html("*Bắt buộc nhập !!");
        return false;
      }
      if (!kt.test($("#txtPW").val())) {
        $("#tbPW").html("*");
        return false;
      }
      $("#tbPW").html("*");
      return true;
    }
    $("#txtPW").blur(kiemTraMK);

 
          $("#btn-login").click(function() {
            if(!kiemTraDN() || !kiemTraMK()) {
              alert("Sai tên đăng nhập hoặc mật khẩu vui lòng nhập lại !!");
              return false;
            }
            else {
              alert("Đăng nhập thành công");
              return true;
            }
          })
          
  });