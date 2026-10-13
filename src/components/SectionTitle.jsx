function SectionTitle({ eyebrow, title }) {
  return (
    <div className="section-title reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default SectionTitle;
