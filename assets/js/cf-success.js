console.log("cf_success.js loaded");

function turnstileSuccess(token) {
    console.log("Turnstile verification successful!", token);
    document.getElementById("submit-btn").disabled = false;
}
