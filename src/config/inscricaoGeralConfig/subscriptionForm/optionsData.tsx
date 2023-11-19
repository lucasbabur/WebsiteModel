import { Option } from "../../../components/generalAbstractions/forms/fields/customRadioAppearInput";

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

export const termsAgreed: Option[] = [
  { option: "Agree", shallAppearComponents: true },
  { option: "Don't Agree", shallAppearComponents: false },
];

export const privacyPolicy = "/";
