import vidSrc from "../videos/animated-logo.mp4";

function AnimatedLogo() {
  return (
    <video src={vidSrc} autoPlay loop muted className="video">
      Your browser does not support the video tag.
    </video>
  );
}

export default AnimatedLogo;
