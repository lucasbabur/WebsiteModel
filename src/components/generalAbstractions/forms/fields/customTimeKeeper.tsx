import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import TimeKeeper from "react-timekeeper";

import { Field, useField, FieldHookConfig } from "formik";

export interface CustomTimeKeeper<T> {
  label: string;
  name: keyof T;
  type?: string;
  placeholder?: string;
  mt?: string;
  reactTimeKeeperProps?: any;
}

export function CustomTimeKeeper<T>(props: CustomTimeKeeper<T>) {
  let { name, label, mt } = props;
  const [field, meta, helpers] = useField(name.toString());

  const handleChange = (e: string) => {
    helpers.setValue(e);
  };

  return (
    <Field name={name}>
      {({ field, form }: any) => {
        console.log(field);
        return (
          <FormControl
            isInvalid={form.errors[name] && form.touched[name]}
            maxWidth="400px"
            mt={mt}
          >
            <FormLabel>{label}</FormLabel>
            <TimeKeeper
              time={field.value}
              onChange={(newTime) => handleChange(newTime.formatted24)}
              {...props.reactTimeKeeperProps}
            />
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
}
