declare module "react-date-picker" {
  import { Component } from "react";

  export type ValuePiece = Date | null;
  export type Value = ValuePiece | [ValuePiece, ValuePiece];

  export interface DatePickerProps {
    value: Value;
    onChange: (value: Value) => void;
    className?: string;
  }

  export default class DatePicker extends Component<DatePickerProps> {}
}
