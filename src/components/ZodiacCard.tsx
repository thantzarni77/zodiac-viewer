import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
  date: string;
  img: string;
}

const ZodiacCard = ({ name, date, img }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/zodiac/${name.toLowerCase()}`)}
      className="flex h-[140px] w-[260px] flex-col items-center gap-2 rounded-md border border-[#474747] bg-[#636161] bg-opacity-10 p-4 text-white backdrop-blur-md hover:cursor-pointer hover:bg-[#797777] hover:bg-opacity-25 hover:backdrop-blur-md"
    >
      <div>{name}</div>
      <img src={`../../src/assets/${img}`} alt={name} />
      <div>{date}</div>
    </div>
  );
};

export default ZodiacCard;
