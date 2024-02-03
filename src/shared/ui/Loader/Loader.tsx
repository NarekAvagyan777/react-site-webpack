import { classNames } from "shared/lib/classNames";

interface LoaderProps {
    className?: string;
}

export default function Loader({ className }: LoaderProps) {
  return (
    <div className={classNames("lds-ellipsis", {}, [className])}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
  )
}
