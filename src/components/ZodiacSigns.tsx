import zodiacData from "../assets/Zodiac.json";
import ZodiacCard from "./ZodiacCard";

const ZodiacSigns = () => {
  const zodiacs = zodiacData.ZodiacSignsDetail;
  return (
    <div className="mx-8 my-2 flex flex-wrap items-center justify-center gap-3 rounded-xl bg-[#18181b] bg-opacity-50 p-6 backdrop-blur">
      {zodiacs.map((single) => {
        return (
          <ZodiacCard
            key={single.Id}
            name={single.Name}
            date={single.Dates}
            img={single.ZodiacSignImageUrl}
          />
        );
      })}
    </div>
  );
};

export default ZodiacSigns;
