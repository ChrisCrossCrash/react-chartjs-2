# react-chartjs-3

> [!CAUTION]
> The code in this repository does not work. It is a fork of [reactchartjs/react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2) that I made in an attempt to update the library for React 19, but so far I've been unsuccessful. Please feel free to fork this repository if you'd like to give it a shot yourself.

React components for <a href="https://www.chartjs.org">Chart.js</a>, the most popular charting library.

## Quickstart

Install this library with peer dependencies:

> [!NOTE]
> I haven't published this library to npm yet, so the installation command below will not work.

```
npm i react-chartjs-3 chart.js
```

We recommend using `chart.js@^4.0.0`.

Then, import and use individual components:

```jsx
import { Doughnut } from 'react-chartjs-3';

<Doughnut data={...} />
```

## License

This repository is a fork of [reactchartjs/react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2), which is licensed under the [MIT License](LICENSE) and copyrighted by Jeremy Ayerst in 2017.

This fork continues to use the MIT License. Modifications to this repository were made starting with [this commit](https://github.com/ChrisCrossCrash/react-chartjs-2/commit/a136a537dc026ae9238e0d24fd1d649501651443) in 2024 by Christopher Kumm.
