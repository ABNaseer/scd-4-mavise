document.getElementById("audioUpload").addEventListener("change", function () {
    if (this.files.length > 0) {
        document.getElementById("audioStatus").innerText =
            "Audio uploaded successfully";
    }
});

document.getElementById("videoUpload").addEventListener("change", function () {
    if (this.files.length > 0) {
        document.getElementById("videoStatus").innerText =
            "Video uploaded successfully";
    }
});

document.getElementById("runBtn").addEventListener("click", function () {
    document.getElementById("finalStatus").innerText = "Processing...";
    setTimeout(function () {
        document.getElementById("finalStatus").innerText = "Completed";
    }, 2000);
});
