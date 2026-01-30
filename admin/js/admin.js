const API = "https://YOUR_BACKEND_URL";

function createBan() {
  fetch(API + "/ban", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userid: document.getElementById("userid").value,
      reason: document.getElementById("reason").value,
      staff: "Admin"
    })
  });
}
