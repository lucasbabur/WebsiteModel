import * as React from "react";

import { ReadData, WriteData } from "./backEndSubscriptionForm";
import { useFirebase } from "../../../firebase/firebaseContext";
import { FormFieldsInterface } from "./interface";

import { useToast, Text, Link, UseToastOptions } from "@chakra-ui/react";

import {
  CustomInputField,
  CustomDateInputField,
  CustomSelectField,
  CustomRadioAppearInput,
  CustomCheckboxInput,
  CustomRadioButton,
  FormWrapper,
} from "../../../components/generalAbstractions/forms";

import { useSignal, useSignalEffect } from "@preact/signals-react";

import { validationSchema } from "./validationSchema";
import {
  sampleOptions,
  radioOptions,
  termsAgreed,
  checkboxOptionsSample,
  privacyPolicy,
} from "./optionsData";

interface SubscriptionFormProps {
  isDisabled?: boolean;
}

const toastSucessMessage: UseToastOptions = {
  title: "Your subscription was sucessfuly sent.",
  description:
    "Your subscription was sucessfuly sent. You can edit it by clicking on the subscribe button again.",
  status: "success",
  duration: 9000,
  isClosable: true,
};

const toastFailMessage: UseToastOptions = {
  title: "Your subscription was not sent.",
  description:
    "Your subscription was not sent. Please try again later or contact us.",
  status: "error",
  duration: 9000,
  isClosable: true,
};

export function SubscriptionForm(props: SubscriptionFormProps) {
  let initialValues = useSignal<FormFieldsInterface | undefined>(undefined);
  let isSubmitButtonDisabled = useSignal<boolean | undefined>(props.isDisabled);
  let { db, auth, currentUser } = useFirebase();
  let toast = useToast();

  useSignalEffect(() => {
    if (currentUser?.uid && initialValues.value === undefined) {
      ReadData(currentUser?.uid, db).then((data: any) => {
        initialValues.value = data;
      });
    }
  });

  if (initialValues.value) {
    return (
      <FormWrapper<FormFieldsInterface>
        validationSchema={validationSchema}
        initialValues={initialValues.value}
        submitButtonText="Submit"
        submitButtonProps={{
          isDisabled: isSubmitButtonDisabled.value,
          colorScheme: "orange",
        }}
        onSubmit={(data) => {
          try {
            const removeUndefinedValues = (data: any) => {
              for (const key in data) {
                if (data[key] === undefined) {
                  delete data[key];
                }
              }
              return data;
            };

            data = removeUndefinedValues(data);
            WriteData(auth, db, data);
            toast(toastSucessMessage);
            isSubmitButtonDisabled.value = true;
          } catch (error) {
            toast(toastFailMessage);
          }

          setTimeout(() => {
            isSubmitButtonDisabled.value = false;
          }, 10000);
        }}
      >
        <CustomInputField<FormFieldsInterface>
          name="completeName"
          label="Complete Name"
          placeholder="Complete Name"
        />
        <CustomDateInputField<FormFieldsInterface>
          name="birthDate"
          label="Birth Date"
          mt="4"
        />

        <CustomRadioAppearInput<FormFieldsInterface>
          options={radioOptions}
          name="yesOrNo"
          label="Yes or no?"
          mt="4"
        >
          <CustomSelectField<FormFieldsInterface>
            label="If yes, select"
            name="selectSample"
            options={sampleOptions}
            mt="4"
          />
        </CustomRadioAppearInput>

        <CustomCheckboxInput<FormFieldsInterface>
          options={checkboxOptionsSample}
          name="checkboxOptions"
          label="Checkbox options"
          mt="4"
        />
        <CustomRadioButton<FormFieldsInterface>
          options={termsAgreed}
          name="privacyPolicy"
          label="Do you agree with our privacy policy?"
          mt="4"
        />

        <Text mt="3" fontSize={14}>
          You can find our privacy policy by clicking{" "}
          <Link href={privacyPolicy} target="_blank" textColor={"blue.500"}>
            here.
          </Link>
        </Text>
      </FormWrapper>
    );
  } else return null;
}
