type LabelFormProps = {
  htmlFor: string;
  children: React.ReactNode;
};

export const LabelForm = ({ htmlFor, children }: LabelFormProps) => {
  return (
    <label className="text-4xl text-white font-semibold" htmlFor={htmlFor}>
      {children}
    </label>
  );
};
