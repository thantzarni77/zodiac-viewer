import { createContext, useState } from "react";
import React from "react";

interface Value {
  zodiacSign: string;
  setZodiacSign: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValues: Value = {
  zodiacSign: "",
  setZodiacSign: () => {},
  loading: true,
  setLoading: () => {},
};

export const ZodiacContext = createContext(initialValues);

const ZodiacContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [zodiacSign, setZodiacSign] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(true);

  const values: Value = {
    zodiacSign,
    setZodiacSign,
    loading,
    setLoading,
  };

  return (
    <ZodiacContext.Provider value={values}>{children}</ZodiacContext.Provider>
  );
};

export default ZodiacContextProvider;
