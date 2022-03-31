import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
  errors?: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<LoginForm>({
    defaultValues: {},
    mode: "onChange",
  });

  const onValid = (data: LoginForm) => {
    reset();
  };

  const onInvalid = (errors: FieldErrors) => {};

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "Username is required",
          minLength: {
            message: "The username should be longer than five characters.",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />

      <input
        {...register("email", {
          required: "Email is required",
          validate: {
            notKakao: (value) =>
              !value.includes("@kakao.com") || "Kakao login not allowed",
          },
        })}
        type="email"
        placeholder="Email"
        className={`${Boolean(errors.email?.message) ? "border-red-500" : ""}`}
      />
      {errors.email?.message}

      <input
        {...register("password", {
          required: "Password is required",
        })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
      {errors.errors?.message}
    </form>
  );
}
