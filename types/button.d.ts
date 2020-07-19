import { NanlanUIComponent, NanlanUIComponentSize } from './component';

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'

export declare class NlButton extends NanlanUIComponent {
    size: NanlanUIComponentSize
    type: ButtonType
    plain: boolean
    /**Determine wheter it's round button */
    round: boolean
    loading: boolean
    disabled: boolean
    icon: string
    autofocus: boolean
}