
interface AsideProps {
  onClick: (language: string) => void
  language: string
  activeLanguage: string
}


const Aside = ({
  ...props
}: AsideProps
  
) => {
  const languages = ['Español', 'English', 'Deutsch', 'Italiano', 'Français'] 


  return (
    <aside
    >
      <h2>Book languages</h2>
      <div className={`
        language-btn
      `}
      >
        {languages.map((lang, index) => (
          <button
            key={index}
            onClick={() => props.onClick(lang)}
            style={{
              backgroundColor: lang === props.activeLanguage ? 'black' : '',
              
            }}
          >
            {lang}
          </button>
        ))}
      </div>
    </aside>
  )
}

export default Aside
