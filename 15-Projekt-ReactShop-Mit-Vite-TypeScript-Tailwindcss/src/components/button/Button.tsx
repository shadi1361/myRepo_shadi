import { ComponentProps } from "react";

type TVariant = "primary" | "secondary" | "danger" | "warning" | "success";

type TButton = ComponentProps<"button"> & {
  variant?: TVariant;
};

function Button({ children, variant, style, ...rest }: TButton) {
  return (
    <button {...rest} style={{borderRadius:"6px" , padding:"4px 8px" , ...style, ...checkVariant(variant) }}>
      {children}
    </button>
  );
}

export default Button;

function checkVariant(variant?: TVariant) {
  if (variant === "primary") {
    return { backgroundColor: "#0e579f", color: "white" };
  } else if (variant === "secondary") {
    return { backgroundColor: "gray", color: "white" };
  } else if (variant === "danger") {
    return { backgroundColor: "red", color: "white" };
  } else if (variant === "success") {
    return { backgroundColor: "orange", color: "black" };
  } else if (variant === "warning") {
    return { backgroundColor: "yellow", color: "white" };
  }
}
