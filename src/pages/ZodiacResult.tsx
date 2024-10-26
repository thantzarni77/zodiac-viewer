import { useContext, useEffect } from "react";
import zodiacData from "../assets/Zodiac.json";
import { ZodiacContext } from "../context/ZodiacContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";

const ZodiacResult = () => {
  const { zodiacSign, setZodiacSign, loading, setLoading } =
    useContext(ZodiacContext);

  //handle to show result when typing from url
  const { myZodiac } = useParams<{ myZodiac?: string }>();

  const capitalized = myZodiac
    ? myZodiac.charAt(0).toUpperCase() + myZodiac.slice(1)
    : "";

  //check on first render
  useEffect(() => {
    if (capitalized) {
      setZodiacSign(capitalized);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    setLoading(true);
  }, []);

  const zodiacs = zodiacData.ZodiacSignsDetail;
  const result = zodiacs.find((zodiac) => zodiac.Name === zodiacSign);

  const navigate = useNavigate();
  if (loading) {
    return <Loading />;
  }

  if (result) {
    return (
      <div className="mx-auto mb-5 mt-16 w-[95%] rounded-2xl bg-[#232323] bg-opacity-55 text-white backdrop-blur-lg">
        <div className="flex flex-col items-center justify-center p-5">
          <Link to={"/"}>
            <button className="my-2 rounded bg-[#6c6c77] bg-opacity-35 px-5 py-2 backdrop-blur hover:bg-black hover:bg-opacity-35 hover:backdrop-blur">
              Back
            </button>
          </Link>
          <div className="my-4 flex w-full items-center justify-center gap-20 rounded-lg bg-[#3d4b5f] bg-opacity-30 p-4 backdrop-blur">
            <div>
              <img
                src={`../../src/assets/${result?.ZodiacSignImageUrl}`}
                alt={result?.Name}
                className="w-[100%]"
              />
              <h1 className="my-2 text-2xl font-bold">{result?.Name}</h1>
            </div>
            <div>
              <div className="my-2">| {result?.Dates}</div>
              <div>| {result?.MyanmarMonth}</div>
              <div className="my-2">
                | {result?.Element}{" "}
                {result?.Element === "Fire"
                  ? "🔥"
                  : result?.Element === "Water"
                    ? "🌊"
                    : result?.Element === "Air"
                      ? "💨"
                      : result?.Element === "Earth"
                        ? "🌱"
                        : null}
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center lg:flex-row lg:justify-between">
            <div>
              <img
                src={`../../src/assets/${result?.ZodiacSign2ImageUrl}`}
                alt={result?.Name}
                className="w-full rounded-md"
              />
            </div>
            <div className="mx-8 my-4 flex w-full flex-col lg:w-[60%]">
              {result?.Traits.map((trait) => {
                return (
                  <div className="relative my-1" key={trait.name}>
                    <div className="my-1">{trait.name}</div>
                    <div className="h-5 w-full rounded-2xl bg-red-100 bg-opacity-15"></div>
                    <div
                      className="percentage absolute top-8 z-20 h-5 rounded-2xl bg-[#655496]"
                      style={{ width: `${trait.percentage}%` }}
                    ></div>
                  </div>
                );
              })}
            </div>
            <div>
              <img
                src={`../../src/assets/${result?.ElementImageUrl}`}
                alt={result?.Name}
                className="my-7 h-fit w-full rounded-lg"
              />
            </div>
          </div>
          <div className="my-2">
            <div className="mb-2 text-lg">Life Purpose</div>
            <div>{result?.LifePurpose}</div>
            <hr className="my-5" />
          </div>
          <div>
            <div className="mb-2 text-lg">Loyal</div>
            <div>{result?.Loyal}</div>
            <hr className="my-5" />
          </div>
          <div className="my-2">
            <div className="mb-4 text-lg">Representative Flower</div>
            <div className="items-center lg:flex lg:w-[100%]">
              <div className="w-full">
                <img
                  src={`../../src/assets/images/representative-flower/${result?.Id}.jpg`}
                  alt="representative-flower"
                  className="mx-auto my-2 h-fit w-[80%] rounded-lg lg:w-1/3"
                />
              </div>
              <div className="lg:w-[80%]">{result?.RepresentativeFlower}</div>
            </div>
            <hr className="my-5" />
          </div>
          <div>
            <div className="mb-2 text-lg">Angry</div>
            <div>{result?.Angry}</div>
            <hr className="my-5" />
          </div>
          <div>
            <div className="mb-2 text-lg">Character</div>
            <div>{result?.Character}</div>
            <hr className="my-5" />
          </div>
          <div>
            <div className="mb-2 text-lg">Pretty Features</div>
            <div>{result?.PrettyFeatures}</div>
            <hr className="my-5" />
          </div>
        </div>
      </div>
    );
  } else {
    navigate("/");
  }
};

export default ZodiacResult;
