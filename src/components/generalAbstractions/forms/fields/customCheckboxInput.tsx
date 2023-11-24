import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Stack,
  CheckboxGroup,
  Checkbox,
} from "@chakra-ui/react";

import { Field } from "formik";

export interface CustomCheckboxInputProps<T> {
  label: string;
  name: keyof T;
  type?: string;
  placeholder?: string;
  mt?: string;
  options: CustomCheckboxOptionsProps[];
}

export interface CustomCheckboxOptionsProps {
  value: string | number;
  label: string;
}

export function CustomCheckboxInput<T>(props: CustomCheckboxInputProps<T>) {
  let { name, label, mt, options } = props;

  return (
    <Field name={name}>
      {({ field, form }: any) => {
        return (
          <FormControl
            isInvalid={form.errors[name] && form.touched[name]}
            maxWidth="400px"
            mt={mt}
          >
            <FormLabel>{label}</FormLabel>
            <CheckboxGroup {...field}>
              <Stack direction="column">
                {options.map((option, index) => {
                  return (
                    <Checkbox
                      key={index + option.value.toString()}
                      {...field}
                      value={option.value}
                    >
                      {option.label}
                    </Checkbox>
                  );
                })}
              </Stack>
            </CheckboxGroup>
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
}
