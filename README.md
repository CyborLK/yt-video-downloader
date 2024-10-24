# YouTube Video Downloader

### A simple web application to download YouTube videos by entering a video URL.

---

## Features

- Simple and intuitive interface for downloading YouTube videos.
- Fetches the highest available resolution for the video.
- Built with:
  - **Flask**: For the backend server.
  - **pytube**: To download videos from YouTube.
  - **HTML/CSS/JavaScript**: For the frontend interface.
  
## Prerequisites

To run this project locally, you'll need to have the following installed:

- Python 3.x
- Flask (Install with: `pip install Flask`)
- pytube (Install with: `pip install pytube`)

---

## Project Structure

```bash
youtube-downloader/
│
├── index.html        # Frontend HTML file
├── app.js            # Frontend JavaScript file
├── server.py         # Backend Python server using Flask and pytube
├── styles.css        # CSS file for styling the webpage
└── README.md         # Project description and instructions
