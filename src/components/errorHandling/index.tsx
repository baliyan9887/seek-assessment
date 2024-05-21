import { ServerCrash } from "lucide-react";
import { ErrorHandlingProps } from "../../types";

function ErrorHandling({ errorMessage }: ErrorHandlingProps) {
  const onTryAgain = () => window.location.reload();
  return (
    <div className="h-[60vh] flex items-center justify-center flex-col gap-8">
      <ServerCrash
        className="text-black dark:text-white w-[150px]"
        size={100}
      />
      <p className="text-[50px] dark:text-white text-black font-bold capitalize">
        {errorMessage}
      </p>
      <button
        className="p-3 px-6 bg-primaryLightBg dark:bg-secondaryDarkBg rounded-lg text-white dark:text-gray-300 font-bold"
        onClick={onTryAgain}
      >
        Try Again
      </button>
    </div>
  );
}

export default ErrorHandling;
