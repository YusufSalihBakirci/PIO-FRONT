import { Ref } from 'vue';
import { INode } from '../../structure/INode';
import IUseCheck from '../../structure/IUseCheck';
export default function auto(node: Ref<INode>, nodes: Ref<{
    [id: string]: INode;
}>): IUseCheck;
