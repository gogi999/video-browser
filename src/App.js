import React, { useEffect, useState } from 'react';
import Searchbar from "./components/SearchBar";
import youtube from "./apis/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const App = () => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit('ReactJS');
  }, []);

  const onTermSubmit = async (term) => {
    setIsLoading(true);
    const response = await youtube.get('/search', {
      params: {
        q: term,
        key: 'AIzaSyBgObUQ9slSdybe_5zXyJuYjqYyAwMHzsY',
        maxResults: '5',
        part: 'snippet',
        type: 'video'
      }
    });

    setResult(response.data.items);
    setSelectedVideo(response.data.items[0]);
    setIsLoading(false);
  }

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  }

  return (
    <div className="ui container">
      <Searchbar searchTerm={onTermSubmit} />

      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            {isLoading ? (
              <h1>Loading...</h1>
            ) : (
                <VideoList videos={result} onVideoSelect={onVideoSelect} />
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
