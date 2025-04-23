import { useNavigate } from 'react-router-dom';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { object, string } from 'yup';
import { TextArea } from './TextArea';

export const ContactUs = () => {
  const numbers = [1, 2, 3, 4];
  const navigate = useNavigate();

  const useYupValidationResolver = (validationSchema) =>
    useCallback(
      async (data) => {
        try {
          const values = await validationSchema.validate(data, {
            abortEarly: false,
          });

          return {
            values,
            errors: {},
          };
        } catch (errors) {
          return {
            values: {},
            errors: errors.inner.reduce(
              (allErrors, currentError) => ({
                ...allErrors,
                [currentError.path]: {
                  type: currentError.type ?? 'validation',
                  message: currentError.message,
                },
              }),
              {}
            ),
          };
        }
      },
      [validationSchema]
    );

  const formSchema = object({
    name: string().required('Name is required').min(3, 'Chox qisadir'),
    surname: string().required('Surname is required').max(15, 'Melikmmed'),
  });

  const methods = useForm({
    mode: 'all',
    defaultValues: {
      name: 'ferrux',
      surname: 'Mubarek',
    },
    resolver: useYupValidationResolver(formSchema),
  });

  // const handleNavigate = (number) => {
  //   navigate(`/list-item/${number}`);
  // };
  const handleSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>

      <FormProvider {...methods}>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>

            <Controller
              name="name"
              control={methods.control}
              render={({ field }) => {
                return <input type="text" {...field} />;
              }}
            />
            {methods.formState.errors.name && (
              <p style={{ color: 'red' }}>!!!!!!</p>
            )}
          </div>
          <div>
            <label htmlFor="surname">Surname:</label>
            <Controller
              name="surname"
              control={methods.control}
              render={({ field }) => <input type="text" {...field} />}
            />
          </div>
          <TextArea />
          <button type="submit">Submit</button>
        </form>
      </FormProvider>

      {/* {numbers.map((number) => (
        <p onClick={() => handleNavigate(number)}>{number}</p>
      ))} */}
    </div>
  );
};
