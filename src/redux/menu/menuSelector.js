import { createSelector } from 'reselect';

const selectMenu = state => state.menu;

export const selectMenuCategories = createSelector(
    [selectMenu],
    menu => menu.sections
);