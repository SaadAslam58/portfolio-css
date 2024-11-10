"use client";
import {useState} from 'react'
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  text: string;
}

const ProjectCard = ({ image, title, text }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }
  return (
    <div
      onClick={handleFlip}
      className="project"
    >
      <motion.div
        className="flip-card-inner motion"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="card-1 group flip-card-front"
        >
          <div className="self-1 group-hover:opacity-40"/>
          <div className="open-p group-hover:flex">
            Learn more &gt;
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="motion2 group flip-card-back"
        >
          <div className="self-2"/>
          <div className="card-content">
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
