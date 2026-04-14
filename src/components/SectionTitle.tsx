const SectionTitle = ({ children }: { children: string }) => (
  <h2 className="font-poppins text-3xl sm:text-4xl font-bold mb-12 text-center">
    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
      {children}
    </span>
  </h2>
);

export default SectionTitle;
