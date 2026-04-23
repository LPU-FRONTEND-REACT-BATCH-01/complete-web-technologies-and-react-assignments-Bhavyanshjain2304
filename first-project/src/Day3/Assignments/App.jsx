import React, { useState } from "react";

const ImageSlider = () => {
  const images = [
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1016/600/300",
    "https://picsum.photos/id/1018/600/300",
    "https://picsum.photos/id/1020/600/300",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextImage = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div style={styles.container}>
      <button style={styles.leftBtn} onClick={prevImage}>
        {"<"}
      </button>

      <img
        src={images[currentIndex]}
        alt="slider"
        style={styles.image}
      />

      <button style={styles.rightBtn} onClick={nextImage}>
        {">"}
      </button>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    width: "600px",
    margin: "50px auto",
  },
  image: {
    width: "100%",
    height: "300px",
    borderRadius: "10px",
    objectFit: "cover",
  },
  leftBtn: {
    position: "absolute",
    top: "50%",
    left: "10px",
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.5)",
    color: "white",
    border: "none",
    padding: "10px 15px",
    fontSize: "20px",
    cursor: "pointer",
    borderRadius: "50%",
  },
  rightBtn: {
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.5)",
    color: "white",
    border: "none",
    padding: "10px 15px",
    fontSize: "20px",
    cursor: "pointer",
    borderRadius: "50%",
  },
};

export default ImageSlider;