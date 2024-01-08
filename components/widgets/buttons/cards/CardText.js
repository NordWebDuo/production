function CardText({number, title, description}) {
  return (
    <div className="text-balanced value-item bg-slate-800 hover:bg-slate-700 transition-colors group border border-white/5 p-10 rounded-3xl">
      <div className="value-icon text-emerald-400 text-2xl mb-2">{number}</div>
      <h3 className="value-title text-xl font-medium mb-2">
        {title}
      </h3>
      <p className="value-desc text-slate-400">
        {description}
      </p>
    </div>
  );
}

export default CardText;
