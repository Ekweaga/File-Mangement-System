export const rules = {
    email: [
        {
            required: true,
            message: "Please input your email address",
        },
        {
            pattern: /^\S*$/,
            message: "Email id should not contain white spaces",
        },
        {
            pattern: 50,
            message: "Email length must not be more than 50 characters",
        },
        {
            type: "email",
            message: "Please enter email address in format “youremail@example.com”",
        },
        ({ getFieldValue }) => ({
            validator(rule, value) {
            if (!value || getFieldValue("password") !== value) {
                return Promise.resolve();
            }
            return Promise.reject(
                "Your email must not be the same as your password"
            );
            },
        }),
    ],
    password: [
        {
            pattern: /^\S*$/,
            message: "Password should not contain white spaces",
        },
        {
            pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s)./,
            message:
            "Password must include at least an uppercase letter, a lowercase, a symbol and a digit",
        },
        {
            required: true,
            message: "Please input your password",
        },
        {
            max: 50,
            message: "Password length must not be more than 50 characters",
        },
        {
            min: 8,
            message: "Password must have a minimum length of 8 characters",
        },
        ({ getFieldValue }) => ({
            validator(rule, value) {
            if (!value || getFieldValue("email") !== value) {
                return Promise.resolve();
            }
            return Promise.reject(
                "Your Password must not be the same as your email"
            );
        },
        }),
    ],
    name: [
        {
            required: true,
            message: "Please input your first name",
        },
        {
            type: "string",
            message: "invalid name format",
        },
        {
            min: 3,
            message: "Minimum 3 characters required for first name",
        },
        {
            max: 50,
            message: "First name length must not be more than 50 characters",
        },
        {
            pattern: /^[A-Za-z0-9 ]+$/,
            message: "First name cannot contain special characters",
        },
        {
            pattern: /^([^0-9]*)$/,
            message: "First name cannot contain numbers",
        },
        {
            pattern: /^\S*$/,
            message: "First name should not contain white spaces",
        },
    ],
};
  