function HeadingTitle({subtitle, title, description}) {
  return (
    <div className="section-title text-center">
              <div className="relative heading-subtitle inline-block bg-emerald-400 bg-opacity-10 px-3 py-1 rounded-full text-white mb-3">
                <span className="ml-4 text-sm">{subtitle}</span>
              </div>
              <div className="section-title">
                <h2 className="font-semibold text-3xl max-md:text-2xl">{title}</h2>
              </div>
              <div className="section-desc pt-2 text-slate-300 max-md:text-sm lg:w-6/12 w-full mx-auto">
                {description}
              </div>
            </div>
  );
  
}

export default HeadingTitle;