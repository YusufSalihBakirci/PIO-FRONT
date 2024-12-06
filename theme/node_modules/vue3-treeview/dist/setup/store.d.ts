import { INode } from "../structure/INode";
import { IConfiguration } from '../structure/IConfiguration';
import { ComputedRef, Ref } from 'vue';
import { ITreeProps } from '../structure/ITreeProps';
import { IDragContext } from '../structure/IDragContext';
export interface IState {
    id: string;
    nodes: ComputedRef<{
        [id: string]: INode;
    }>;
    config: ComputedRef<IConfiguration>;
    dragged: Ref<IDragContext>;
    focusable: Ref<string>;
    focusFunc: Map<string, Function>;
}
export declare const states: Map<string, IState>;
export declare function createState(props: ITreeProps): string;
