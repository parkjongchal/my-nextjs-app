import {createContext, useContext} from 'react';

export type LayoutContentItem = {
  [key: string]: boolean;
};
export type LayoutContent = {
  collapseMenus: LayoutContentItem;
  setCollapseMenu: (menus: string) => void;
};
export const LayoutContext = createContext<LayoutContent>({
  collapseMenus: {},
  setCollapseMenu: () => {},
});
export const useLayoutContext = () => useContext(LayoutContext);
