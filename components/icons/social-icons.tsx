import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

export function TwitterXIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="currentColor"
      {...props}
    >
      <path
        d="M11.025 0H13.172L8.482 5.374L14 12.688H9.68L6.294 8.253L2.424 12.688H0.275L5.291 6.938L0 0.000999987H4.43L7.486 4.054L11.025 0ZM10.27 11.4H11.46L3.78 1.221H2.504L10.27 11.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.3337 6.66699C16.0951 6.66699 18.3337 8.90557 18.3337 11.667V17.5003H15.0003V11.667C15.0003 10.7465 14.2541 10.0003 13.3337 10.0003C12.4132 10.0003 11.667 10.7465 11.667 11.667V17.5003H8.33366V11.667C8.33366 8.90557 10.5722 6.66699 13.3337 6.66699M1.66699 7.50033H5.00033V17.5003H1.66699L13.3337 6.66699"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.66699 3.33366C1.66699 4.25352 2.4138 5.00033 3.33366 5.00033C4.25352 5.00033 5.00033 4.25352 5.00033 3.33366C5.00033 2.4138 4.25352 1.66699 3.33366 1.66699C2.4138 1.66699 1.66699 2.4138 1.66699 3.33366H1.66699"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.5005 18.3337V15.0003C12.6165 13.9564 12.3171 12.9088 11.6672 12.0837C14.1672 12.0837 16.6672 10.417 16.6672 7.50033C16.7339 6.45866 16.4422 5.43366 15.8339 4.58366C16.0672 3.62533 16.0672 2.62533 15.8339 1.66699C15.8339 1.66699 15.0005 1.66699 13.3339 2.91699C11.1339 2.50033 8.8672 2.50033 6.6672 2.91699C5.00053 1.66699 4.1672 1.66699 4.1672 1.66699C3.9172 2.62533 3.9172 3.62533 4.1672 4.58366C3.56024 5.43014 3.26572 6.46096 3.33387 7.50033C3.33387 10.417 5.83387 12.0837 8.33387 12.0837C8.00887 12.492 7.7672 12.9587 7.62553 13.4587C7.48387 13.9587 7.4422 14.4837 7.50053 15.0003V18.3337"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.50033 15.0002C3.74199 16.6668 3.33366 13.3335 1.66699 13.3335"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
