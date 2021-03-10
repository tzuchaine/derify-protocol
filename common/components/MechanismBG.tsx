import React from "react";
import anime from "animejs";
import styles from "./MechanismBG.module.scss";

function createDots(parentEl: Element, grid: number[]) {
  let dotsFragment = document.createDocumentFragment();
  const totalNumber = grid[0] * grid[1];

  const primaryDots = [
    getNextDotIndex(grid),
    getNextDotIndex(grid),
    getNextDotIndex(grid),
    getNextDotIndex(grid),
    getNextDotIndex(grid),
    getNextDotIndex(grid),
    getNextDotIndex(grid),
    getNextDotIndex(grid),
  ];
  const secondaryDots = [
    getNextDotIndex(grid),
    getNextDotIndex(grid),
    getNextDotIndex(grid),
    getNextDotIndex(grid),
  ];

  for (let i = 0; i < totalNumber; i++) {
    const dotEl = document.createElement("div");
    dotEl.classList.add("dot", styles.dot);
    if (primaryDots.includes(i)) {
      dotEl.style.background = "#E7486A";
    } else if (secondaryDots.includes(i)) {
      dotEl.style.background = "#FAE247";
    }
    const opacity = Math.random();
    dotEl.style.opacity =
      opacity <= 0.2 ? (opacity + 0.2).toFixed(1) : opacity.toFixed(1);

    dotsFragment.appendChild(dotEl);
  }

  parentEl.appendChild(dotsFragment);
}

function getNextDotIndex(grid: number[]) {
  const totalDotNumber = grid[0] * grid[1];
  let result = anime.random(0, totalDotNumber - 1);

  return result;
}

class MechanismBG extends React.Component {
  staggerVisualizerRef: React.RefObject<HTMLDivElement>;

  constructor(props) {
    super(props);
    this.staggerVisualizerRef = React.createRef<HTMLDivElement>();
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    const staggerVisualizerEl = this.staggerVisualizerRef.current;
    const parentEl = staggerVisualizerEl.parentNode as HTMLDivElement;
    const elOffsetWidth = staggerVisualizerEl.offsetWidth;
    const parentOffsetWidth = parentEl.offsetWidth;
    const ratio = parentOffsetWidth / elOffsetWidth;
    if (ratio > 1) return;
    anime.set(staggerVisualizerEl, { scale: ratio });
  }

  componentDidMount() {
    this.initAnimate();
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  initAnimate() {
    let staggerVisualizerEl = this.staggerVisualizerRef.current;
    let dotsWrapperEl = staggerVisualizerEl.querySelector("#dots-wrapper");

    let grid = [10, 6];
    createDots(dotsWrapperEl, grid);

    let animation: anime.AnimeTimelineInstance;
    let dotEls = staggerVisualizerEl.querySelectorAll(".dot");

    let index = 237;
    let nextIndex = 0;

    play();

    function play() {
      if (animation) animation.pause();

      nextIndex = getNextDotIndex(grid);

      index = nextIndex;
    }
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles["animation-wrapper"]}>
          <div
            className={styles["stagger-visualizer"]}
            ref={this.staggerVisualizerRef}
          >
            <div id="dots-wrapper" className={styles["dots-wrapper"]}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default MechanismBG;
