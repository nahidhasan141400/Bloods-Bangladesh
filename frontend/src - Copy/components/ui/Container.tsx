import { ReactNode } from "react";

interface IContainer {
  className?: string;
  children: ReactNode;
}
const Container = ({ className, children }: IContainer) => {
  return (
    <section className={`${className} max-w-[1280px] mx-auto px-2 py-1`}>
      {children}
    </section>
  );
};

export default Container;
