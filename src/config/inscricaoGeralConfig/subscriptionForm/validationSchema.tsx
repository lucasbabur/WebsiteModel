import * as Yup from "yup";
import * as R from "ramda";
import { FormFieldsInterface } from "./interface";

const mandatoryInformation = "Mandatory information";

export const validationSchema: Yup.Schema<FormFieldsInterface> = Yup.object({
  completeName: Yup.string().required(mandatoryInformation),
  birthDate: Yup.string()
    .required(mandatoryInformation)
    .test("isValidDate", "Invalid Date", (value) => {
      interface dateObj {
        day: number;
        month: number;
        year: number;
      }

      if (!value) return false;

      const createObj = (value: any) => {
        const [day, month, year] = value.split("/").map(Number);
        return { day, month, year };
      };

      const dateObj = createObj(value);

      const areNumbersValid = R.pipe(R.values, R.none(R.equals(NaN)));
      const isValidDay = (day: number) => day >= 1 && day <= 31;
      const isValidMonth = (month: number) => month >= 1 && month <= 12;
      const isYearValid = (year: number) =>
        year >= 1930 && year <= new Date().getFullYear();
      const didOverflowOccur = ({ day, month, year }: dateObj) =>
        new Date(year, month - 1, day).getMonth() + 1 === month;

      const isValidDate = R.allPass([
        areNumbersValid,
        R.pipe(R.prop("day"), isValidDay),
        R.pipe(R.prop("month"), isValidMonth),
        R.pipe(R.prop("year"), isYearValid),
        didOverflowOccur,
      ]);

      return isValidDate(dateObj);
    }),
  yesOrNo: Yup.string().required(mandatoryInformation),
  selectSample: Yup.string().when("yesOrNo", {
    is: (val: any) => val === "Yes",
    then: () => Yup.string().required(mandatoryInformation),
    otherwise: () => Yup.string().notRequired(),
  }),
  privacyPolicy: Yup.string()
    .required("You must agree to our privacy policy to participate.")
    .test(
      "ConcordaComOsTermos?",
      "You must agree to our privacy policy to participate.",
      (value) => {
        return value === "Agree";
      },
    ),
});
