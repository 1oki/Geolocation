# Geolocation Web Application

This is a simple web application that uses the **Geolocation API** to track and display the user's current position. The app continuously watches the user's location and displays the latitude and longitude. Additionally, it provides a link to view the current location on OpenStreetMap.

## Features

- **Track Location**: Continuously tracks the user's location for 10 seconds and displays the latitude and longitude.
- **OpenStreetMap Integration**: Provides a link to view the current location on OpenStreetMap.
- **Error Handling**: Displays appropriate messages if geolocation is not supported or an error occurs.
- **Timeout**: Automatically stops tracking the location after 10 seconds.

## Tech Stack

- **HTML**: For basic structure of the app.
- **JavaScript**: Handles the geolocation logic.
- **Geolocation API**: Retrieves the user's current location.
- **OpenStreetMap**: Displays the user's position on the map.

## How It Works

1. When the user clicks the "Get Location" button, the app checks if geolocation is supported by the browser.
2. If supported, the app starts tracking the user's location using `navigator.geolocation.watchPosition`.
3. The current coordinates (latitude and longitude) are displayed on the page.
4. A link is generated to view the user's location on OpenStreetMap.
5. Tracking stops after 10 seconds.

## Installation and Usage

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/geolocation-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd geolocation-app
    ```

3. Open the `index.html` file in your browser.

4. Click the "Get Location" button to see the app in action.

## File Structure

```bash
Geolocation-main/
│
├── src/
│   ├── index.html             # Main HTML file for the app
│   ├── main.js                # JavaScript file handling geolocation logic
│
└── README.md                  # Project documentation (you are here)
```

## Browser Support
The app uses the Geolocation API, which is supported by most modern browsers. However, older browsers or browsers with location services disabled may not support this feature.

## License
This project is open-source and available under the MIT License.
