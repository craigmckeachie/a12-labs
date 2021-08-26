export const errorMessages: any = {
  name: {
    required: {
      getMessage: (parameters: any) => `The name is required.`,
    },
    minlength: {
      parameters: { minLength: 3 },
      getMessage: (parameters: any) =>
        `The name needs to have a length of ${parameters.minLength}.`,
    },
  },
  description: {
    required: {
      getMessage: (parameters: any) => `The description is required.`,
    },
  },
};
