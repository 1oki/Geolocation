const displayArea = document.querySelector("#locationDisplay");
const getLocationBtn = document.querySelector("#getlocation");

getLocationBtn.addEventListener("click", () => {
    // console.log('123')
    if(navigator.geolocation) {
        // navigator.geolocation.getCurrentPosition(displayGeoData, dispalyError);
        const watchID = navigator.geolocation.watchPosition(displayGeoData, dispalyError)
        
        setTimeout(() => {
            navigator.geolocation.clearWatch(watchID);
        },10000)
    } else {
        displayArea.innerHTML = "Geolocation is not supported by your browser.";
    }
});

const displayGeoData = (position) => {
    console.log(position);
    const { latitude, longitude} = position.coords;
    displayArea.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
    displayArea.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
};

const dispalyError = (err) => {
    console.log(err);
    displayArea.textContent = "Error: " + err.message;
};