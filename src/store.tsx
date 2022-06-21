import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/reducer'

const store = createStore(
  reducers,
  composeWithDevTools(),
	
);

export default store;

/*
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: '', //barchart, scatterplot, etc.
  name: '',
  children: [], // what child elements/comps are needed to build chart (idk if we need this), string[]
  properties: [] //required properties for each chart, string[],
};

//make switch case based on action/chart type (action = barchart, no payload), or use switch case within the payload/reducer? (if payload = barchart)

export const chartsSlice = createSlice({
  name: 'charts',
  initialState,
  // reducers: An object containing Redux "case reducer" functions (functions intended to handle a specific action type, equivalent to a single case statement in a switch).
  // keys in the object will be used to generate string action type constants
  // equivalent of action type charts/barchart
  // under the hood: const barchart = createAction('charts/barchart')
  reducers: {
    // we are writing "mutating" reducers like we are updating state directly,
    // but under-the-hood the reducer receives a proxy state that translates all mutations into equivalent copy operations (possible through Immer)

    barchart: (state, action) => {
      console.log('Selecting barchart type, children, and properties');
      state.type = 'barchart';
      state.name = 'BarChart';
      state.children = ['Chart, Axis, Rectangle'];
      state.properties = [
        'data',
        'xKey',
        'yKey',
        'xAxisLabel',
        'yAxisLabel',
        'height',
        'width'
      ];
    },

    histogram: (state, action) => {
      console.log('Selecting histogram type, children, and properties');
      state.type = 'histogram';
      state.name = 'Histogram';
      state.children = ['Chart, Axis, Bars'];
      state.properties = [
        'data',
        'xKey',
        'xAxisLabel',
        'yAxisLabel',
        'height',
        'width',
        'thresholds',
        'barPadding'
      ];
    },

    scatterplot: (state, action) => {
      console.log('Selecting scatterplot type, children, and properties');
      state.type = 'scatterplot';
      state.name = 'ScatterPlot';
      state.children = ['Chart, Axis, Circles'];
      state.properties = [
        'data',
        'xKey',
        'yKey',
        'xAxisLabel',
        'yAxisLabel',
        'height',
        'width',
        'radius'
      ];
    },

    piechart: (state, action) => {
      console.log('Selecting piechart type, children, and properties');
      state.type = 'piechart';
      state.name = 'PieChart';
      state.children = ['Pie'];
      state.properties = [
        'data',
        'innerRadius',
        'outerRadius',
        'label',
        'pieValue'
      ];
    },

    linechart: (state, action) => {
      console.log('Selecting linechart type, children, and properties');
      state.type = 'linechart';
      state.name = 'LineChart';
      state.children = ['Chart, Axis, Line'];
      state.properties = [
        'data',
        'xKey',
        'yKey',
        'xAxisLabel',
        'yAxisLabel',
        'height',
        'width'
      ];
    }
  }
});

// Action creators are generated for each case reducer function
export const { barchart, scatterplot, histogram, piechart, linechart } =
  chartsSlice.actions;

export default chartsSlice.reducer;

*/