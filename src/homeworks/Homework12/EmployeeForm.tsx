import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { EmployeeFormValues } from "./types";
import {
  FormContainer,
  FormTitle,
  FieldWrapper,
  StyledInput,
  StyledCheckbox,
  SubmitButton,
  ErrorText,
} from "./styles";

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(5, "Минимум 5 символов")
    .max(50, "Максимум 50 символов")
    .required("Обязательное поле"),
  age: Yup.number()
    .nullable()
    .typeError("Значение должно быть числом")
    .min(18, "Минимум 18 лет")
    .max(80, "Максимум 80 лет")
    .required("Обязательное поле"),
  jobTitle: Yup.string().max(30, "Максимум 30 символов"),
  usageRules: Yup.boolean()
    .oneOf([true], "Необходимо согласиться с правилами использования")
    .required("Необходимо согласиться с правилами использования"),
});

const initialValues: EmployeeFormValues = {
  fullName: "",
  age: null,
  jobTitle: "",
  usageRules: false,
};

const EmployeeForm: React.FC = () => {
  const formik = useFormik<EmployeeFormValues>({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Форма отправлена:", values);
    },
  });

  return (
    <FormContainer>
      <FormTitle>Employee Form</FormTitle>
      <form onSubmit={formik.handleSubmit}>
        <FieldWrapper>
          <label htmlFor="fullName">Full Name</label>
          <StyledInput
            id="fullName"
            name="fullName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <ErrorText>{formik.errors.fullName}</ErrorText>
          )}
        </FieldWrapper>

        <FieldWrapper>
          <label htmlFor="age">Age</label>
          <StyledInput
            id="age"
            name="age"
            type="number"
            onChange={(e) => {
              const numericValue = isNaN(e.target.valueAsNumber)
                ? null
                : e.target.valueAsNumber;
              formik.setFieldValue("age", numericValue);
            }}
            onBlur={formik.handleBlur}
            value={formik.values.age ?? ""}
          />
          {formik.touched.age && formik.errors.age && (
            <ErrorText>{formik.errors.age}</ErrorText>
          )}
        </FieldWrapper>

        <FieldWrapper>
          <label htmlFor="jobTitle">Job Title (optional)</label>
          <StyledInput
            id="jobTitle"
            name="jobTitle"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.jobTitle}
          />
          {formik.touched.jobTitle && formik.errors.jobTitle && (
            <ErrorText>{formik.errors.jobTitle}</ErrorText>
          )}
        </FieldWrapper>

        <FieldWrapper>
          <label>
            <StyledCheckbox
              id="usageRules"
              name="usageRules"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.usageRules}
            />
            Я соглашаюсь с правилами использования
          </label>
          {formik.touched.usageRules && formik.errors.usageRules && (
            <ErrorText>{formik.errors.usageRules}</ErrorText>
          )}
        </FieldWrapper>

        <SubmitButton type="submit">Create</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default EmployeeForm;
