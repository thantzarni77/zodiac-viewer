import { useContext, useEffect, useState } from "react";
import wallpaper from "../assets/wallpaper.jpg";
import getHoroscope from "../assets/zodiac";
import { useNavigate } from "react-router-dom";
import { ZodiacContext } from "../context/ZodiacContext";
import ZodiacSigns from "../components/ZodiacSigns";
import Loading from "../components/Loading";

const HomePage = () => {
  const navigate = useNavigate();

  const { setZodiacSign, loading, setLoading } = useContext(ZodiacContext);

  const [date, setDate] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    setLoading(true);
  }, []);

  const submitHanlder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sign = getHoroscope(date);
    setZodiacSign(sign);
    navigate(`/zodiac/${sign.toLowerCase()}`);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mt-4 flex flex-col items-center text-white">
      <div className="">
        <img
          src={wallpaper}
          alt="BG_ZODIAC_WALLPAPER"
          className="mx-auto my-10 rounded-2xl p-2 drop-shadow-xl"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold">Search Your Zodiac Sign</h1>
        <form
          className="my-2 flex justify-center gap-5"
          onSubmit={submitHanlder}
        >
          <input
            type="date"
            className="rounded bg-[#575757] bg-opacity-60 p-2 text-white backdrop-blur-sm hover:cursor-pointer focus:outline-none"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button
            type="submit"
            className="rounded bg-slate-800 bg-opacity-80 px-3 backdrop-blur hover:bg-[#344353] hover:bg-opacity-80 hover:backdrop-blur"
          >
            Search
          </button>
        </form>
      </div>
      <div className="my-4 text-xl font-bold">Zodiac Signs</div>
      <ZodiacSigns />
    </div>
  );
};

export default HomePage;
