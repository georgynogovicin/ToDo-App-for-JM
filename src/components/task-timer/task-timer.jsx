import React, { useState, useEffect } from 'react';

import './task-timer.css';

function TaskTimer() {
  const [start, changeStart] = useState(0);
  const [timer, changeTimer] = useState(0);
  const [timerStatus, toggleTimerStatus] = useState(false);

  function tick() {
    const newTime = Date.now() - start;
    changeTimer(newTime);
  }

  useEffect(() => {
    let timerID = null;
    if (timerStatus) {
      timerID = setInterval(() => tick(), 1);
    }
    return () => {
      clearInterval(timerID);
    };
  });

  function timerOn() {
    if (!timerStatus) {
      toggleTimerStatus(true);
      changeTimer(timer);
      changeStart(Date.now() - timer);
    }
  }

  function timerOff() {
    toggleTimerStatus(false);
  }

  return (
    <span className="description">
      <button type="button" className="icon icon-play" aria-label="play" onClick={() => timerOn()} />
      <button type="button" className="icon icon-pause" aria-label="pause" onClick={() => timerOff()} />
      <span className="timer">{`${Math.trunc((timer / 1000 / 60 / 60) % 60)}:${Math.trunc(
        (timer / 1000 / 60) % 60
      )}:${Math.trunc((timer / 1000) % 60)}`}</span>
    </span>
  );
}

export default TaskTimer;

// export default class TaskTimer extends Component {
//   state = {
//     start: 0,
//     timer: 0,
//     timerStatus: false,
//   };

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   timer() {
//     this.setState(({ start }) => {
//       const newTime = Date.now() - start;

//       return {
//         timer: newTime,
//       };
//     });
//   }

//   timerOn() {
//     const { timerStatus } = this.state;

//     if (!timerStatus) {
//       this.setState(({ timer }) => {
//         return {
//           timerStatus: true,
//           timer,
//           start: Date.now() - timer,
//         };
//       });
//       this.timerID = setInterval(() => this.timer(), 1);
//     }
//   }

//   timerOff() {
//     clearInterval(this.timerID);
//     this.setState({
//       timerStatus: false,
//     });
//   }

//   render() {
//     const { timer } = this.state;
//     return (
//       <span className="description">
//         <button type="button" className="icon icon-play" aria-label="play" onClick={() => this.timerOn()} />
//         <button type="button" className="icon icon-pause" aria-label="pause" onClick={() => this.timerOff()} />
//         <span className="timer">{`${Math.trunc((timer / 1000 / 60 / 60) % 60)}:${Math.trunc(
//           (timer / 1000 / 60) % 60
//         )}:${Math.trunc((timer / 1000) % 60)}`}</span>
//       </span>
//     );
//   }
// }
