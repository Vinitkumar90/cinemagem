import { useSelector } from "react-redux";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import useNowPopularMovie from "../hooks/useNowPopularMovie";
import useRatedMovie from "../hooks/useRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovie();
  useNowPopularMovie();
  useRatedMovie();
  useUpcomingMovie();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
