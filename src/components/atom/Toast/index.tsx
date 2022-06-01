interface Props {
  msg: string;
  state: boolean;
  type: string;
}

const Toast = ({ msg, state, type }: Props) => {
  return (
    <div
      className={`${state ? "" : "d-none "}alert mt-3 alert-${type}`}
      role="alert"
    >
      {msg}
    </div>
  );
};

export default Toast;
