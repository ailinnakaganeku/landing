import YouTube from "react-youtube";

type Props = {
  videoId: string;
};

const Work = ({ videoId }: Props) => {
  const opts = {
    height: "390",
    width: "640",
  };
  return (
    <li className="relative mx-5 inline-block ">
      <YouTube videoId={videoId} />
    </li>
  );
};

export default Work;
