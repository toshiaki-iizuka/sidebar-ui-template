import Navbar from "@/components/layouts/Navbar";

interface ContentProps {
  title: string;
  children: React.ReactNode;
}

const Content = ({ title, children }: ContentProps) => {
  return (
    <div>
      <Navbar title={title} />
      <div className="container pt-8 pb-8 px-4 sm:px-8">{children}</div>
    </div>
  );
};

export default Content;
