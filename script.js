$(document).ready(function() {
    $("#calculate").click(function() {
        let bpm = $("#bpm").val();
        let noteType = $("#noteType").val();
        
        if (bpm > 0) {
            // Calculate the time for a quarter note in milliseconds
            let quarterNoteTime = 60000 / bpm; 

            // Delay Time based on selected note type (whole, half, quarter, 8th, 16th)
            let delayTime = quarterNoteTime * noteType;

            // Reverb Pre-Delay is typically set as half of the quarter note time
            let reverbPreDelay = quarterNoteTime / 2;

            // Reverb Decay Time is generally calculated as the time for one bar (4 beats)
            let reverbDecay = quarterNoteTime * 4 / 1000; // in seconds

            // Display results
            $("#delayTime").text(delayTime.toFixed(2) + " ms");
            $("#reverbPreDelay").text(reverbPreDelay.toFixed(2) + " ms");
            $("#reverbDecay").text(reverbDecay.toFixed(2) + " s");
        } else {
            showErrorMessage('An unexpected error occurred.');
        }
    });
});

function showErrorMessage(message) {
    document.getElementById('errorText').innerText = message;
    document.getElementById('errorMessage').style.display = 'block';
}

function dismissErrorMessage() {
    document.getElementById('errorMessage').style.display = 'none';
}

