import { Validators } from '@angular/forms';

const errorMessages: any = {
  name: {
    required: 'Name is required.',
    minlength: {
      parameters: {minLength: 3 },
      getMessage: (parameters: any) =>
        `The name needs to have a length of ${parameters.minLength}.`,
    },
  },
  description: {
    required: 'Description is required.',
  },
};

const { getMessage, parameters } = errorMessages.name.minlength;
console.log(parameters.minLength);

console.log(getMessage(parameters));
