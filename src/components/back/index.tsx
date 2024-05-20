import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Back() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button
      className=" flex items-center justify-center bg-secondaryLightBg dark:bg-secondaryDarkBg text-black dark:text-white  p-3 px-8 rounded-lg max-w-[150px]"
      onClick={handleGoBack}
    >
      <MoveLeft />
      <p className="ml-3">Back</p>
    </button>
  );
}

export default Back;
