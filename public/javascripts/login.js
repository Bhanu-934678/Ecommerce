var validToken = "";

var loginModal;
document.addEventListener("DOMContentLoaded", () => {
  loginModal = new bootstrap.Modal("#loginModal");
});

var validateLoginDetails = () => {
  var userData = {};
  userData.accountId = $("#userId").val();
  userData.password = $("#accountPassword").val();
  console.log(userData);

  // POST
  var apiUrl = "/validate/userCredentials";
  axios
    .post(apiUrl, userData)
    .then((respose) => {
      console.log("respose");
      console.log(respose);
      validToken = respose.data.token;
      if (respose.data.msg == "Invalid") {
        $("#invalidMsg").text("Invalid credentials, please try again.");
      } else {
        // Show the product details
        $("#invalidMsg").text("");
        loginModal.hide();
        loadSeletedPage("pdetails");
      }
    })
    .catch((err) => {});
};
