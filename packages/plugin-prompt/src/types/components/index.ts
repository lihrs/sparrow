import {
  ForwardRefExoticComponent,
  ReactElement,
  ReactFragment,
  ReactNode,
  SVGProps,
} from 'react';
import { NodeDataType } from '../flow/index';

export interface InputComponentType {
  value: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  password: boolean;
  disableCopyPaste?: boolean;
  editNode?: boolean;
}
export interface ToggleComponentType {
  enabled: boolean;
  setEnabled: (state: boolean) => void;
  disabled: boolean;
}
export interface DropDownComponentType {
  value: string;
  options: string[];
  onSelect: (value: string) => void;
  editNode?: boolean;
}
export interface ParameterComponentType {
  data: NodeDataType;
  title: string;
  id: string;
  color: string;
  left: boolean;
  type: string;
  required?: boolean;
  name?: string;
  tooltipTitle: string;
}
export interface InputListComponentType {
  value: string[];
  onChange: (value: string[]) => void;
  disabled: boolean;
}

export interface TextAreaComponentType {
  disabled: boolean;
  onChange: (value: string[] | string) => void;
  value: string;
  editNode?: boolean;
}

export interface FileComponentType {
  disabled: boolean;
  onChange: (value: string[] | string) => void;
  value: string;
  suffixes: string[];
  fileTypes: string[];
  onFileChange: (value: string) => void;
  editNode?: boolean;
}

export interface DisclosureComponentType {
  children: ReactNode;
  openDisc: boolean;
  button: {
    title: string;
    Icon: ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
    buttons?: Array<{
      Icon: ReactElement;
      title: string;
      onClick: (event?: React.MouseEvent) => void;
    }>;
  };
}
export interface FloatComponentType {
  value: string;
  disabled?: boolean;
  disableCopyPaste?: boolean;
  onChange: (value: string) => void;
  editNode?: boolean;
}

export interface TooltipComponentType {
  children: ReactElement;
  title: string | ReactElement;
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
}
