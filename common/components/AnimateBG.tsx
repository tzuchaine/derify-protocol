import React from "react";
import anime from "animejs";
import styles from "./AnimateBG.module.scss";

class AnimateBG extends React.Component {
  domRef: React.RefObject<HTMLDivElement>;

  constructor(props) {
    super(props);
    this.domRef = React.createRef<HTMLDivElement>();
  }

  componentDidMount() {
    this.initAnimate();
  }

  initAnimate() {
    function fitElementToParent(el, padding) {
      var timeout = null;
      function resize() {
        if (timeout) clearTimeout(timeout);
        anime.set(el, { scale: 1 });
        var pad = padding || 0;
        var parentEl = el.parentNode;
        var elOffsetWidth = el.offsetWidth - pad;
        var parentOffsetWidth = parentEl.offsetWidth;
        var ratio = parentOffsetWidth / elOffsetWidth;
        timeout = setTimeout(() => anime.set(el, { scale: ratio  }), 100);
      }
      resize();
      window.addEventListener("resize", resize);
    }

    (function advancedStaggeringAnimation() {
      var staggerVisualizerEl = document.querySelector(".stagger-visualizer");
      var dotsWrapperEl = staggerVisualizerEl.querySelector(".dots-wrapper");
      var dotsFragment = document.createDocumentFragment();
      var grid = [25, 15];
      // var cell = 60;
      var numberOfElements = grid[0] * grid[1];
      var animation;
      var paused = true;

      fitElementToParent(staggerVisualizerEl, 0);

      for (var i = 0; i < numberOfElements; i++) {
        var dotEl = document.createElement("div");
        dotEl.classList.add("dot");
        dotEl.classList.add(styles.dot);
        dotsFragment.appendChild(dotEl);
      }

      dotsWrapperEl.appendChild(dotsFragment);

      var index = anime.random(0, numberOfElements - 1);
      var nextIndex = 0;

      // anime.set(".stagger-visualizer .cursor", {
      //   translateX: anime.stagger(-cell, {
      //     grid: grid,
      //     from: index,
      //     axis: "x",
      //   }),
      //   translateY: anime.stagger(-cell, {
      //     grid: grid,
      //     from: index,
      //     axis: "y",
      //   }),
      //   translateZ: 0,
      //   scale: 1.5,
      // });

      function play() {
        paused = false;
        if (animation) animation.pause();

        nextIndex = anime.random(0, numberOfElements - 1);

        animation = anime
          .timeline({
            easing: "easeInOutQuad",
            complete: play,
          })
          // .add({
          //   targets: ".stagger-visualizer .cursor",
          //   keyframes: [
          //     { scale: 0.75, duration: 120 },
          //     { scale: 2.5, duration: 220 },
          //     { scale: 1.5, duration: 450 },
          //   ],
          //   duration: 300,
          // })

          .add(
            {
              targets: ".stagger-visualizer .dot",
              keyframes: [
                {
                  translateX: anime.stagger("-1px", {
                    grid: grid,
                    from: index,
                    axis: "x",
                  }),
                  translateY: anime.stagger("-1px", {
                    grid: grid,
                    from: index,
                    axis: "y",
                  }),
                  duration: 100,
                },
                {
                  translateX: anime.stagger("1px", {
                    grid: grid,
                    from: index,
                    axis: "x",
                  }),
                  translateY: anime.stagger("1px", {
                    grid: grid,
                    from: index,
                    axis: "y",
                  }),
                  scale: anime.stagger([1.5, 1], { grid: grid, from: index }),
                  duration: 225,
                },
                {
                  translateX: 0,
                  translateY: 0,
                  scale: 1,
                  duration: 1200,
                },
              ],
              delay: anime.stagger(100, { grid: grid, from: index }),
            },
            30
          )
          // move cursor
          // .add(
          //   {
          //     targets: ".stagger-visualizer .cursor",
          //     //  moving along the X-axis
          //     translateX: {
          //       value: anime.stagger(-cell, {
          //         grid: grid,
          //         from: nextIndex,
          //         axis: "x",
          //       }),
          //     },
          //     // moving along the Y-axis
          //     translateY: {
          //       value: anime.stagger(-cell, {
          //         grid: grid,
          //         from: nextIndex,
          //         axis: "y",
          //       }),
          //     },
          //     scale: 1.5,
          //     easing: "cubicBezier(.075, .2, .165, 1)",
          //   },
          //   "-=1200"
          // );

        index = nextIndex;
      }

      play();
    })();
  }

  render() {
    return (
      <div className={styles.root} ref={this.domRef}>
        <div className={`${styles["animation-wrapper"]} animation-wrapper`}>
          <div className={`${styles["stagger-visualizer"]} stagger-visualizer`}>
            <div
              className={`${styles["cursor"]} ${styles["color-red"]} cursor  color-red`}
            ></div>
            <div className={`${styles["dots-wrapper"]} dots-wrapper`}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default AnimateBG;
