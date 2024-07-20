const Section = ({ title, children }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
// function Section({}) {
//   return (
//     <section>
//       <h1>title</h1>
//     </section>
//   );
// }
