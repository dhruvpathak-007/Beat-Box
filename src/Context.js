import { createContext, useState } from "react";

export const MusicContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [likedMusic, setLikedMusic] = useState([]);
  const [pinnedMusic, setPinnedMusic] = useState([]);
  const [resultOffset, setResultOffset] = useState(0);
  const [currentPlayingUrl, setCurrentPlayingUrl] = useState(null);
  return (
    <MusicContext.Provider
      value={{
        isLoading,
        setIsLoading,
        likedMusic,
        setLikedMusic,
        resultOffset,
        setResultOffset,
        pinnedMusic,
        setPinnedMusic,
        currentPlayingUrl,
        setCurrentPlayingUrl,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
