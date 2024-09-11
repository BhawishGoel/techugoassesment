import {createSlice} from '@reduxjs/toolkit';

const modulesSlice = createSlice({
  name: 'modules',
  initialState: [
    {
      module_name: '',
      points: '',
      time: '',
      categories: [
        {
          category_name: '',
          name: '',
          phone: '',
          email: '',
          password: '',
          sections: [
            {
              section_name: '',
              name: '',
              phone: '',
              email: '',
              password: '',
            },
          ],
        },
      ],
    },
  ],
  reducers: {
    setModules(state, action) {
      return action.payload;
    },
    addModule(state) {
      console.log('--------Called AddModule Slice----', state);
      state.push({
        module_name: '',
        points: '',
        time: '',
        categories: [
          {
            category_name: '',
            name: '',
            phone: '',
            email: '',
            password: '',
            sections: [
              {
                section_name: '',
                name: '',
                phone: '',
                email: '',
                password: '',
              },
            ],
          },
        ],
      });
    },
    addCategory(state, action) {
      const {moduleIndex} = action.payload;
      if (state[moduleIndex]) {
        state[moduleIndex].categories.push({
          category_name: '',
          name: '',
          phone: '',
          email: '',
          password: '',
          sections: [
            {
              section_name: '',
              name: '',
              phone: '',
              email: '',
              password: '',
            },
          ],
        });
      }
    },
    addSection(state, action) {
      const {moduleIndex, categoryIndex} = action.payload;
      if (state[moduleIndex] && state[moduleIndex].categories[categoryIndex]) {
        state[moduleIndex].categories[categoryIndex].sections.push({
          section_name: '',
          name: '',
          phone: '',
          email: '',
          password: '',
        });
      }
    },
    updateModule(state, action) {
      const {index, value, key} = action.payload;
      if (state[index]) {
        state[index][key] = value;
      }
    },
    updateCategory(state, action) {
      const {moduleIndex, categoryIndex, value, key} = action.payload;
      if (state[moduleIndex] && state[moduleIndex].categories[categoryIndex]) {
        state[moduleIndex].categories[categoryIndex][key] = value;
      }
    },
    updateSection(state, action) {
      const {moduleIndex, categoryIndex, sectionIndex, value, key} =
        action.payload;
      if (
        state[moduleIndex] &&
        state[moduleIndex].categories[categoryIndex] &&
        state[moduleIndex].categories[categoryIndex].sections[sectionIndex]
      ) {
        state[moduleIndex].categories[categoryIndex].sections[sectionIndex][key] = value;
      }
    },
  },
});

export const {
  setModules,
  addModule,
  addCategory,
  addSection,
  updateModule,
  updateCategory,
  updateSection,
} = modulesSlice.actions;

export default modulesSlice.reducer;
