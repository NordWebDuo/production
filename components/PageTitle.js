const TitleDesc = ({ Title, PageDescription }) => (

<div className="text-center">
  
                    <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4">{Title}</h1>
                    <p className="text-slate-400 w-full md:w-2/3 mx-auto">{PageDescription}</p>
              
    
    </div>
)

export default TitleDesc;