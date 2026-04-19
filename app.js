"use strict";

// DOM elements
const serverUrl = document.getElementById("serverUrl");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const downloadBtn = document.getElementById("downloadBtn");
const logBody = document.getElementById("logBody");
const statusText = document.getElementById("statusText");

// Add log row
function addLog(plate, violation) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${new Date().toLocaleString()}</td>
        <td>${plate}</td>
        <td>${violation}</td>
    `;
    logBody.appendChild(row);
}

// Start detection
startBtn.addEventListener("click", () => {
    statusText.textContent = "Running";
    addLog("WB20A1234", "Signal Jump");
});

// Stop
stopBtn.addEventListener("click", () => {
    statusText.textContent = "Stopped";
});

// Download log (simple CSV)
downloadBtn.addEventListener("click", () => {
    let csv = "Timestamp,Plate,Violation\n";

    document.querySelectorAll("#logBody tr").forEach(row => {
        const cols = row.querySelectorAll("td");
        if (cols.length === 3) {
            csv += `${cols[0].innerText},${cols[1].innerText},${cols[2].innerText}\n`;
        }
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "violations.csv";
    a.click();
});
