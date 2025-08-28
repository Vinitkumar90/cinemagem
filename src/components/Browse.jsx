import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import useNowPopularMovie from "../hooks/useNowPopularMovie";
import useRatedMovie from "../hooks/useRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  
  useNowPlayingMovie();
  useNowPopularMovie();
  useRatedMovie();
  useUpcomingMovie();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
