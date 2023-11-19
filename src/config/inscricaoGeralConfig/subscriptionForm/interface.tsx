export const FormFields = {
  completeName: "",
  birthDate: "",
  yesOrNo: "",
  selectSample: "",
  privacyPolicy: "",
};

// Inference from FormFields. Basically, all the Required types need to be placed in the RequiredFields type.
type PartialFormFields = Partial<typeof FormFields>;
type RequiredFields = Required<
  Pick<
    typeof FormFields,
    "completeName" | "birthDate" | "yesOrNo" | "privacyPolicy"
  >
>;

export type FormFieldsInterface = PartialFormFields & RequiredFields;