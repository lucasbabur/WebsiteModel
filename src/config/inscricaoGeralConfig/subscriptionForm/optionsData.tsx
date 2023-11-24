import {
  CustomCheckboxOptionsProps,
  CustomRadioButtonOptionsObject,
  Option,
} from "../../../components/generalAbstractions/forms";

export const sampleOptions = [
  { value: "Sample 4", label: "Sample 4" },
  { value: "Sample 3", label: "Sample 3" },
  { value: "Sample 2", label: "Sample 2" },
  { value: "Sample 1", label: "Sample 1" },
];

export const radioOptions: Option[] = [
  { option: "Yes", shallAppearComponents: true },
  { option: "No", shallAppearComponents: false },
];

export const termsAgreed: CustomRadioButtonOptionsObject[] = [
  { value: "Agree", label: "Agree" },
  { value: "Don't Agree", label: "Don't Agree" },
];

export const checkboxOptionsSample: CustomCheckboxOptionsProps[] = [
  { value: "Option 1", label: "Option 1" },
  { value: "Option 2", label: "Option 2" },
  { value: "Option 3", label: "Option 3" },
  { value: "Option 4", label: "Option 4" },
];

export const privacyPolicy = "/";
