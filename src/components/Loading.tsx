import { Triangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="mx-auto flex items-center justify-center">
      <div className="mt-[60%] lg:mt-[20%]">
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#655496"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};

export default Loading;
