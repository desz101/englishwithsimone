
// Function to update the background based on the current hour
function updateBackground() {
    // Get the current hour (0 = 12 AM, 1 = 1 AM, ..., 23 = 11 PM)
    const currentHour = new Date().getHours();
    console.log(currentHour)

    // Set the background image based on the current hour
    const backgroundFilename = `../../images/bg-${currentHour}.png`;
    const headerElement = document.getElementById('bg');

    // Update the background image of the body
    headerElement.style.background = `url('${backgroundFilename}') center center / cover no-repeat`;
}

// Call the functions on page load
updateBackground();