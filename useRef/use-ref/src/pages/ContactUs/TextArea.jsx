import { Controller, useFormContext } from 'react-hook-form';

export const TextArea = () => {
  const { control, formState } = useFormContext();
  console.log(formState);
  return (
    <div>
      <h1>Text Area</h1>
      <Controller
        name={'textarea'}
        control={control}
        render={({ field }) => {
          return (
            <textarea
              rows="4"
              cols="50"
              placeholder="Type your message here..."
              {...field}
            ></textarea>
          );
        }}
      />
    </div>
  );
};
