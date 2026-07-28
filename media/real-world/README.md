# Real-Robot Experiment Assets

This directory contains the physical-robot evaluation figures used by the
`Real-Robot Experiments` section of the project page.

## Platforms

- `franka/hai-vs-cosmos-predict-2-5-pi05.png`: Franka comparison covering
  whiteboard wiping and bread-transfer recovery.
- `agilex/hai-vs-cosmos-predict-2-5-pi05.png`: AgileX dual-arm comparison
  covering coffee-bean pouring with a transparent cup and opening a black pen.

## Figure Encoding

- Purple row outline: pi0.5 fine-tuned on HAI rollout videos.
- Blue row outline: pi0.5 fine-tuned on Cosmos Predict 2.5 rollout videos.
- Green local box: successful or corrective task state.
- Red local box: baseline failure state.
