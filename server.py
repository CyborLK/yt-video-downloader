from flask import Flask, request, jsonify
import yt_dlp
import os

app = Flask(__name__)

@app.route('/download', methods=['POST'])
def download_video():
    video_url = request.json['url']
    
    try:
        ydl_opts = {
            'outtmpl': 'downloads/video.mp4',  # Save file as video.mp4 in downloads folder
            'format': 'best'  # Download the best video quality available
        }
        
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([video_url])
        
        return jsonify({"message": "Download complete"}), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    if not os.path.exists("downloads"):
        os.makedirs("downloads")
    app.run(debug=True)
