import { Suspense } from "react";
import Lottie from "react-lottie";
import Loading from "../../containers/loading/Loading";

const DisplayLottie = ({ animationData }) => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData
  }

  return (
    <Suspense fallback={<Loading />}>
      <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
    </Suspense>
  )
}

export default DisplayLottie