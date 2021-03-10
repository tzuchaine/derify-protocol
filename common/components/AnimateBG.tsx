import React from "react";
import anime from "animejs";
import styles from "./AnimateBG.module.scss";

function createDots(parentEl: Element, grid: number[]) {
  var dotsFragment = document.createDocumentFragment();
  const totalNumber = grid[0] * grid[1];
  for (var i = 0; i < totalNumber; i++) {
    const dotEl = document.createElement("div");
    const rowNo = Math.floor(i / grid[0]) + 1;
    dotEl.classList.add("dot", styles.dot);
    dotEl.style.opacity = (rowNo / grid[1]).toString();

    dotsFragment.appendChild(dotEl);
  }

  parentEl.appendChild(dotsFragment);
}

function getNextDotIndex(grid: number[], minRowNo = 4, safeColOffset = 3) {
  const totalDotNumber = grid[0] * grid[1];
  let result = anime.random(0, totalDotNumber - 1);

  const rowNo = Math.floor(result / grid[0]) + 1;

  if (rowNo < minRowNo) {
    result = getNextDotIndex(grid);
  } else if (rowNo > grid[1] - safeColOffset) {
    let colNo = result % grid[0];

    if (colNo <= safeColOffset || grid[0] - colNo <= safeColOffset) {
      result = getNextDotIndex(grid);
    }
  }

  return result;
}

class AnimateBG extends React.Component {
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
    var staggerVisualizerEl = this.staggerVisualizerRef.current;
    var dotsWrapperEl = staggerVisualizerEl.querySelector("#dots-wrapper");
    var cursorEl = staggerVisualizerEl.querySelector("#cursor");

    var grid = [25, 12];
    createDots(dotsWrapperEl, grid);

    var animation: anime.AnimeTimelineInstance;
    var dotEls = staggerVisualizerEl.querySelectorAll(".dot");

    var index = 237;
    var nextIndex = 0;
    var dotWidth = 40;

    anime.set(cursorEl, {
      translateX: anime.stagger(-dotWidth, {
        grid: grid,
        from: index,
        axis: "x",
      }),
      translateY: anime.stagger(-dotWidth, {
        grid: grid,
        from: index,
        axis: "y",
      }),
      scale: 1.3,
    });

    play();

    function play() {
      if (animation) animation.pause();

      nextIndex = getNextDotIndex(grid);

      animation = anime
        .timeline({
          easing: "easeInOutQuad",
          complete: play,
        })
        .add({
          targets: cursorEl,
          keyframes: [
            { scale: 0.75, duration: 120 },
            { scale: 2.3, duration: 220 },
            { scale: 1.5, duration: 450 },
          ],
          duration: 300,
        })
        .add(
          {
            targets: dotEls,
            keyframes: [
              {
                translateX: anime.stagger("-1px", {
                  grid,
                  from: index,
                  axis: "x",
                }),
                translateY: anime.stagger("-1px", {
                  grid,
                  from: index,
                  axis: "y",
                }),
                duration: 100,
              },
              {
                translateX: anime.stagger("1px", {
                  grid,
                  from: index,
                  axis: "x",
                }),
                translateY: anime.stagger("1px", {
                  grid,
                  from: index,
                  axis: "y",
                }),
                scale: anime.stagger([1.5, 1], { grid, from: index }),
                duration: 225,
              },
              {
                translateX: 0,
                translateY: 0,
                scale: 1,
                duration: 1200,
              },
            ],
            delay: anime.stagger(100, { grid, from: index }),
          },
          30
        )
        // move cursor
        .add(
          {
            targets: cursorEl,
            //  moving along the X-axis
            translateX: {
              value: anime.stagger(-dotWidth, {
                grid: grid,
                from: nextIndex,
                axis: "x",
              }),
            },
            // moving along the Y-axis
            translateY: {
              value: anime.stagger(-dotWidth, {
                grid: grid,
                from: nextIndex,
                axis: "y",
              }),
            },
            scale: 1.5,
            easing: "cubicBezier(.075, .2, .165, 1)",
          },
          "-=1200"
        );

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
            <div className={styles["cursor"]} id="cursor"></div>
            <div id="dots-wrapper" className={styles["dots-wrapper"]}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default AnimateBG;
