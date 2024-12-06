import { IIcon } from './IIcon';
export declare enum checkMode {
    auto = 0,
    manual = 1
}
export interface IConfiguration {
    roots: string[];
    leaves?: string[];
    padding?: number;
    editable?: boolean;
    editing?: string;
    editableClass?: string;
    checkboxes?: boolean;
    checkMode?: checkMode;
    dragAndDrop?: boolean;
    keyboardNavigation?: boolean;
    disabled?: boolean;
    disabledClass?: string;
    openedIcon?: IIcon;
    closedIcon?: IIcon;
    focusClass?: string;
    checkedClass?: string;
    indeterminateClass?: string;
}
